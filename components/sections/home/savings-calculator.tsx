"use client";

import { useId, useState } from "react";

import { BrandArc } from "@/components/brand/brand-arc";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { calculator, home } from "@/content/home";
import { estimateSavings } from "@/lib/calculator/estimate";
import { revealOnScroll, useBrandMotion } from "@/lib/gsap/use-brand-motion";

/**
 * Calculadora de potencial de optimizacion.
 *
 * Cinco datos del hotel: habitaciones, gasto, plantas, salones y areas de
 * servicio, y extensiones de personal. La formula vive en
 * `lib/calculator/estimate.ts` y sus coeficientes en `content/home.ts`; ahi esta
 * explicado por que cada dato mueve el resultado.
 *
 * Accesibilidad de los deslizadores: `<input type="range">` nativo con label
 * visible y `aria-valuetext` en unidades humanas ("60 habitaciones", "1.500 euros
 * al mes"). Un range sin `aria-valuetext` anuncia solo el numero pelado.
 */

const eur = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export function SavingsCalculator() {
  const c = home.calculator;
  const [rooms, setRooms] = useState<number>(calculator.rooms.default);
  const [spend, setSpend] = useState<number>(calculator.spend.default);
  const [floors, setFloors] = useState<number>(calculator.floors.default);
  const [areas, setAreas] = useState<number>(calculator.areas.default);
  const [extensions, setExtensions] = useState<number>(
    calculator.extensions.default,
  );

  const { benchmark, minMonthly, maxMonthly } = estimateSavings({
    rooms,
    spend,
    floors,
    areas,
    extensions,
  });

  const scope = useBrandMotion<HTMLDivElement>(({ gsap, scope, reduced }) => {
    if (reduced) return;
    revealOnScroll(gsap, scope, "[data-reveal]", { stagger: 0.1, start: "top 80%" });
  });

  return (
    <section
      id="calculadora"
      data-tone="dark"
      // `overflow-clip` y no `overflow-hidden`: los dos recortan el arco
      // decorativo, pero `hidden` convierte la seccion en contenedor de scroll,
      // y un `sticky` dentro de ella se pega a ESE contenedor, no a la
      // pantalla. Por eso el resultado no acompañaba al hacer scroll.
      className="relative isolate overflow-clip bg-abyss py-section text-fg-inverse"
    >
      <div
        aria-hidden="true"
        className="bg-radial-wash absolute inset-0 -z-10 opacity-80"
      />
      <BrandArc
        placement="edge"
        tone="white"
        opacity={0.5}
        className="inset-y-0 right-0 -z-10 h-full w-[clamp(70px,12vw,180px)]"
      />

      <Container>
      <div ref={scope}>
        <div data-reveal className="mx-auto max-w-[52rem] text-center">
          <h2 className="text-display-2 text-balance">{c.title}</h2>
          <p className="measure-lead mx-auto mt-7 text-lead text-fg-inverse-muted">
            {c.lead}
          </p>
          <p className="mt-6 text-display-3 text-cyan">{c.highlight}</p>
        </div>

        <div data-reveal className="mt-16 grid gap-px overflow-clip rounded-xl bg-white/12 lg:grid-cols-2">
          {/* Controles */}
          <div className="min-w-0 bg-abyss/80 p-6 sm:p-8 lg:p-12">
            <div className="flex flex-col gap-7 lg:gap-8">
              <Slider
                label={c.roomsLabel}
                display={String(rooms)}
                range={calculator.rooms}
                value={rooms}
                onChange={setRooms}
                valueText={`${rooms} habitaciones`}
                ticks={c.roomsTicks}
              />
              <Slider
                label={c.spendLabel}
                hint={c.spendHint}
                display={eur.format(spend)}
                range={calculator.spend}
                value={spend}
                onChange={setSpend}
                valueText={`${spend} euros al mes`}
                ticks={c.spendTicks}
              />
              <Slider
                label={c.floorsLabel}
                display={String(floors)}
                range={calculator.floors}
                value={floors}
                onChange={setFloors}
                valueText={`${floors} plantas`}
                ticks={c.floorsTicks}
              />
              <Slider
                label={c.areasLabel}
                hint={c.areasHint}
                display={String(areas)}
                range={calculator.areas}
                value={areas}
                onChange={setAreas}
                valueText={`${areas} salones y áreas de servicio`}
                ticks={c.areasTicks}
              />
              <Slider
                label={c.extensionsLabel}
                hint={c.extensionsHint}
                display={String(extensions)}
                range={calculator.extensions}
                value={extensions}
                onChange={setExtensions}
                valueText={`${extensions} extensiones`}
                ticks={c.extensionsTicks}
              />
            </div>

            <p className="mt-10 measure-body text-body-sm text-fg-inverse-muted">
              {c.sliderHint}
            </p>

            {/* Resultado pegado abajo, solo en movil.
                -----------------------------------------------------------
                En movil las columnas se apilan y el resultado queda DEBAJO de
                los cinco deslizadores: se movia uno y la cifra estaba una
                pantalla mas abajo. `sticky bottom` la mantiene a la vista
                mientras se recorren los controles y, al llegar al final, se
                queda en su sitio justo encima de la tarjeta completa.
                El `bottom` deja libre la barra fija de contacto (72px mas la
                zona segura del iPhone). `aria-hidden`: la tarjeta de abajo ya
                anuncia el resultado; dos regiones vivas lo leerian dos veces. */}
            <div
              aria-hidden="true"
              // Por debajo de 360px no caben etiqueta y cifra en una linea (a 320
              // quedan 232px y piden ~267): envuelve, centrado, en dos.
              className="sticky bottom-[calc(5rem+env(safe-area-inset-bottom))] z-10 mt-8 flex flex-wrap items-center justify-between gap-x-3 gap-y-0.5 rounded-full border border-cyan/40 bg-navy/95 px-5 py-2.5 shadow-lg backdrop-blur-md max-[359px]:justify-center max-[359px]:rounded-2xl lg:hidden"
            >
              <span className="font-mono text-[0.75rem] tracking-[0.08em] whitespace-nowrap text-fg-inverse-muted uppercase">
                {c.mobileBarLabel}
              </span>
              <span className="font-mono text-body font-semibold whitespace-nowrap text-cyan" data-tabular>
                {eur.format(minMonthly)} - {eur.format(maxMonthly)}
              </span>
            </div>
          </div>

          {/* Resultado */}
          {/* Con cinco deslizadores la columna de controles es mucho mas alta
              que el resultado. `sticky` mantiene la cifra a la vista mientras
              se mueven los de abajo: si no, el usuario ajusta a ciegas. */}
          <div className="min-w-0 bg-navy p-6 sm:p-8 lg:p-12">
            {/* La tarjeta entera es la que se pega, aviso incluido: si el
                aviso se quedara fuera, al bajar la tarjeta se le montaria
                encima. El `top` libra la cabecera flotante, que se separa
                1rem del borde y mide 72px. */}
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)]">
              <p className="font-mono text-eyebrow tracking-[0.2em] text-cyan uppercase">
                {c.resultLabel}
              </p>

              <p
                className="mt-7 text-metric text-white"
                data-tabular
                aria-live="polite"
              >
                {eur.format(minMonthly)}
                <span className="text-cyan"> - </span>
                {eur.format(maxMonthly)}
              </p>
              <p className="mt-1 font-mono text-data text-fg-inverse-muted">
                {c.perMonth}
              </p>

              <p className="mt-8 text-display-3 text-cyan" data-tabular>
                {eur.format(minMonthly * 12)} - {eur.format(maxMonthly * 12)}
                <span className="ml-2 font-mono text-data text-fg-inverse-muted">
                  {c.perYear}
                </span>
              </p>

              {/* La referencia se enseña: es lo que hace creible la cifra de
                  arriba. Sin ella, el resultado parece un porcentaje sacado de
                  la manga. */}
              <p className="mt-8 border-t border-white/12 pt-6 text-body-sm text-fg-inverse-muted">
                {c.benchmarkLabel}:{" "}
                <span className="font-mono text-white" data-tabular>
                  {eur.format(benchmark)}
                </span>{" "}
                {c.perMonth}
              </p>

              <div className="mt-8 border-t border-white/12 pt-6">
                <p className="measure-body text-body-sm text-fg-inverse-muted">
                  {c.disclaimer}
                </p>
                <p className="mt-2 measure-body text-[13px] text-fg-inverse-muted/80">
                  {c.disclaimerDetail}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA de la calculadora */}
        <div data-reveal className="mt-14 flex flex-col items-center gap-6 text-center">
          <p className="max-w-[30ch] text-display-3 text-white text-balance">
            {c.ctaTitle}
          </p>
          <p className="measure-lead text-body text-fg-inverse-muted">
            {c.ctaLead}
          </p>
          <Button
            href={`${c.cta.href}&habitaciones=${rooms}&gasto=${spend}&plantas=${floors}&areas=${areas}&extensiones=${extensions}`}
            variant="cyan"
            size="lg"
            iconRight={<Icon name="arrow-right" size={18} />}
          >
            {c.cta.label}
          </Button>
        </div>
      </div>
      </Container>
    </section>
  );
}

/**
 * Un deslizador con su etiqueta, su valor y sus marcas.
 *
 * `<input type="range">` nativo con label visible y `aria-valuetext` en unidades
 * humanas: un range sin `aria-valuetext` anuncia solo el numero pelado.
 */
function Slider({
  label,
  hint,
  display,
  range,
  value,
  onChange,
  valueText,
  ticks,
}: {
  label: string;
  hint?: string;
  display: string;
  range: { min: number; max: number; step: number };
  value: number;
  onChange: (v: number) => void;
  valueText: string;
  ticks: readonly string[];
}) {
  const id = useId();
  return (
    <div>
      {/* `flex-wrap`: en movil "Gasto mensual actual en telecomunicaciones"
          ocupa todo el ancho —"telecomunicaciones" no se puede partir— y sin
          envolver la cifra se salia de la columna. Asi baja a su propia linea. */}
      <label
        htmlFor={id}
        className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
      >
        <span className="text-card-title text-white">{label}</span>
        <span
          className="font-mono text-display-3 whitespace-nowrap text-cyan"
          data-tabular
        >
          {display}
        </span>
      </label>
      {hint ? (
        <p className="mt-1 font-mono text-data text-fg-inverse-muted">{hint}</p>
      ) : null}
      <input
        id={id}
        type="range"
        min={range.min}
        max={range.max}
        step={range.step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-valuetext={valueText}
        // `h-11`: el range nativo mide 16px de alto y en movil esa era toda la
        // superficie que respondia al dedo. Con 44px el pulgar del control se
        // sigue pintando igual, centrado, pero se agarra desde mas lejos.
        className="mt-1 h-11 w-full cursor-pointer accent-cyan"
      />
      <div className="flex justify-between font-mono text-[0.75rem] text-fg-inverse-muted">
        {ticks.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
}
