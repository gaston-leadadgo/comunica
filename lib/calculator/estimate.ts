import { calculator } from "@/content/home";

/**
 * Estimacion del potencial de optimizacion de la calculadora de la home.
 *
 * La version anterior era una regla de tres: 18 %-35 % del gasto declarado. El
 * numero de habitaciones se pedia pero no intervenia en el calculo, asi que mover
 * ese deslizador no cambiaba nada, y un hotel de 20 habitaciones que gasta 4.000 €
 * recibia el mismo porcentaje que uno de 300 que gasta lo mismo.
 *
 * Ahora el calculo tiene tres pasos:
 *
 * 1. COSTE DE REFERENCIA. Con habitaciones, plantas, salones y extensiones se
 *    estima cuanto deberia costar al mes un hotel de ese tamaño bien resuelto
 *    (ver los coeficientes en `content/home.ts`).
 *
 * 2. POSICION EN LA HORQUILLA. Dos señales deciden si el hotel cae en la parte
 *    baja o alta del 18 %-35 %, a partes iguales:
 *    - Complejidad: muchas plantas, salones y extensiones son justo donde se
 *      acumulan proveedores, lineas y contratos que nadie revisa.
 *    - Intensidad del gasto: cuanto se aleja lo que paga de la referencia.
 *
 * 3. TOPE DE SENTIDO COMUN. Nunca se propone bajar del 85 % de la referencia:
 *    si alguien ya paga poco, la calculadora no le promete un ahorro que haria
 *    imposible darle servicio. En ese caso cae a un suelo modesto (6 %-12 %),
 *    porque algo de tarifa casi siempre se puede ajustar.
 *
 * Es una estimacion orientativa y la interfaz lo dice: la cifra real sale de
 * revisar los contratos.
 */

export type EstimateInput = {
  rooms: number;
  spend: number;
  floors: number;
  areas: number;
  extensions: number;
};

export type Estimate = {
  /** Coste mensual de referencia para un hotel de ese tamaño. */
  benchmark: number;
  minMonthly: number;
  maxMonthly: number;
};

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

/** Posicion de `value` dentro de un rango de deslizador, de 0 a 1. */
const norm = (value: number, range: { min: number; max: number }) =>
  clamp01((value - range.min) / (range.max - range.min));

export function estimateSavings(input: EstimateInput): Estimate {
  const c = calculator;
  const b = c.benchmark;

  const benchmark =
    b.base +
    b.perRoom * input.rooms +
    b.perFloor * input.floors +
    b.perArea * input.areas +
    b.perExtension * input.extensions;

  const complexity = clamp01(
    0.35 * norm(input.floors, c.floors) +
      0.35 * norm(input.areas, c.areas) +
      0.3 * norm(input.extensions, c.extensions),
  );

  // 0,8 = paga un 20 % menos que la referencia (sin margen); 2,0 = paga el
  // doble (todo el margen). Entre medias, lineal.
  const intensity = clamp01((input.spend / benchmark - 0.8) / 1.2);

  const position = 0.5 * complexity + 0.5 * intensity;

  // La horquilla se parte en dos mitades que se desplazan juntas: un hotel
  // simple y austero queda en 18 %-26 %; uno complejo y caro, en 26 %-35 %.
  const mid = (c.minRatio + c.maxRatio) / 2;
  const rateMin = c.minRatio + (mid - c.minRatio) * position;
  const rateMax = mid + (c.maxRatio - mid) * position;

  const headroom = Math.max(0, input.spend - c.benchmarkFloor * benchmark);
  const cappedRatio = input.spend > 0 ? headroom / input.spend : 0;

  const minRatio = Math.max(c.floorMinRatio, Math.min(rateMin, cappedRatio));
  const maxRatio = Math.max(
    c.floorMaxRatio,
    Math.min(rateMax, cappedRatio),
    minRatio,
  );

  return {
    benchmark: Math.round(benchmark),
    minMonthly: Math.round(input.spend * minRatio),
    maxMonthly: Math.round(input.spend * maxRatio),
  };
}
