import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

/**
 * Reglas de contraste que gobiernan las variantes (ratios calculados, no
 * estimados):
 * - Texto blanco sobre el cyan de marca da 2,97:1 y FALLA. Por eso la variante
 *   `cyan` lleva texto en tinta (#1D1D1B, 5,68:1), nunca blanco.
 * - El degradado oficial se usa invertido (`bg-brand-gradient-flip`) cuando hay
 *   texto blanco encima, para que el texto caiga sobre el extremo navy.
 * - `navy` sobre blanco da 13,46:1 y es la variante primaria por defecto.
 */

type ButtonVariant = "navy" | "cyan" | "white" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

/**
 * Por que el boton NO lleva `whitespace-nowrap` ni altura fija.
 *
 * Las dos cosas juntas eran el origen de los botones roros en movil, y se
 * repetian en todas las paginas porque estaban aqui, en la base:
 *
 * - Con `whitespace-nowrap`, una etiqueta larga en español —"Solicita una
 *   revision de tu factura" son 36 caracteres— produce un ancho intrinseco
 *   mayor que la pantalla. Si el contenedor no le deja encoger, el boton
 *   SOBRESALE del viewport; si le deja, la variante `navy` lleva
 *   `overflow-hidden` para su degradado y entonces RECORTA la etiqueta. Las dos
 *   salidas son un defecto, y se han visto las dos.
 * - Con altura fija (`h-11`), en el momento en que la etiqueta ocupa dos lineas
 *   el texto se desborda de la caja por abajo.
 *
 * La solucion es `min-h-*` mas un relleno vertical deliberadamente CORTO: en una
 * sola linea manda el `min-h` y el boton mide exactamente lo que media antes
 * —44px en `md`, comprobado—, asi que ningun diseño existente se mueve. En dos
 * lineas, la caja crece en lugar de recortar.
 *
 * `max-w-full` es el cinturon de seguridad: aunque un contenedor se descuide,
 * el boton no puede ser mas ancho que el sitio que tiene.
 */
const BASE =
  "group/btn relative inline-flex max-w-full select-none items-center justify-center gap-2 " +
  "font-sans font-semibold text-center rounded-full " +
  "transition-[color,background-color,border-color,transform] duration-200 " +
  "disabled:pointer-events-none disabled:opacity-50 " +
  "active:translate-y-px";

const VARIANT: Record<ButtonVariant, string> = {
  // Wipe diagonal a 100 grados, el angulo de la marca: navy -> cyan al pasar.
  // El pseudo va a `z-0`, no a `-z-10`: un descendiente con z-index negativo se
  // pinta DETRAS del fondo de su propio padre, asi que el degradado no se veia
  // nunca. A `z-0` queda sobre el `bg-navy` y bajo el contenido, que va a `z-10`.
  navy:
    "text-white bg-navy overflow-hidden " +
    "before:absolute before:inset-0 before:z-0 before:bg-brand-gradient " +
    "before:origin-left before:scale-x-0 before:transition-transform " +
    "before:duration-[240ms] before:ease-out-expo " +
    "hover:before:scale-x-100 " +
    // Sobre fondo oscuro el boton se invierte (blanco con texto tinta) y el
    // wipe va a cyan plano: tinta sobre cyan son 5,68:1. Con el degradado, el
    // texto acabaria sobre el extremo navy a 1,25:1.
    "[[data-tone=dark]_&]:bg-white [[data-tone=dark]_&]:text-ink " +
    "[[data-tone=dark]_&]:before:bg-cyan",
  // Texto en tinta, nunca blanco: blanco sobre el cyan de marca da 2,97:1.
  // El hover oscurece a cyan-ink, que si soporta blanco (5,00:1). cyan-strong
  // se queda en 3,91:1 y solo valdria para texto grande.
  cyan: "bg-cyan text-ink hover:bg-cyan-ink hover:text-white",
  white: "bg-white text-ink hover:bg-paper-warm-2",
  outline:
    "border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-white " +
    "[[data-tone=dark]_&]:border-white/30 [[data-tone=dark]_&]:text-white " +
    "[[data-tone=dark]_&]:hover:bg-white [[data-tone=dark]_&]:hover:text-ink",
  ghost:
    "text-cyan-ink hover:bg-navy/[0.06] " +
    "[[data-tone=dark]_&]:text-cyan-soft [[data-tone=dark]_&]:hover:bg-white/10",
};

/**
 * Alturas MINIMAS, no fijas, con el relleno vertical deliberadamente por debajo
 * de lo que necesita el contenido para que en el caso normal gobierne el `min-h`
 * y las medidas sean identicas a las de siempre: 36 / 44 / 52px.
 *
 * El margen que se deja no es caprichoso. Cuando la etiqueta trae un icono
 * dentro —"Solicita una revision de tu factura" lo lleva— la caja de linea sube
 * de 25,6 a 28px, y la variante `outline` suma 2px de borde. Con `py-3` en `lg`
 * eso daba 54px: el boton del hero quedaba 2px mas alto que el de al lado, y
 * antes, con la altura FIJA de 52, ese mismo contenido se desbordaba de su caja.
 * Con `py-2.5` el peor caso son 48px y el `min-h` sigue mandando, asi que los
 * dos botones de una fila miden lo mismo lleven icono o no.
 */
const SIZE: Record<ButtonSize, string> = {
  sm: "min-h-9 px-4 py-1.5 text-small",
  md: "min-h-11 px-5 py-2 text-body",
  lg: "min-h-13 px-7 py-2.5 text-body",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  iconRight?: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof CommonProps | "href"> & {
    href: string;
  };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = "navy",
    size = "md",
    className,
    children,
    iconRight,
    ...rest
  } = props;

  const classes = cn(BASE, VARIANT[variant], SIZE[size], className);

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {iconRight ? (
        <span
          aria-hidden="true"
          className="relative z-10 transition-transform duration-200 group-hover/btn:translate-x-0.5"
        >
          {iconRight}
        </span>
      ) : null}
    </>
  );

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {inner}
      </Link>
    );
  }

  const buttonRest = rest as Omit<ButtonAsButton, keyof CommonProps>;
  return (
    <button type="button" className={classes} {...buttonRest}>
      {inner}
    </button>
  );
}
