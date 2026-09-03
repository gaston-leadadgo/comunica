"use client";

import { SIZES, SmartImage } from "@/components/media/smart-image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import type { ImageKey } from "@/content/images";
import type { Cta } from "@/content/schema";
import { useBrandMotion } from "@/lib/gsap/use-brand-motion";

/**
 * Extension Dinamica, en una sola vista.
 *
 * Rehecha por peticion de cliente: antes media 1,43 viewports, asi que al llegar
 * al flujo QR ya se habia perdido de vista el titulo. Cambios y por que:
 *
 * - Fuera la columna fija y el scrub de las tarjetas. Una galeria de pin partido
 *   necesita recorrido de scroll para tener sentido; si la seccion tiene que
 *   caber en una pantalla, no hay recorrido que gastar. Mantener el sticky
 *   habria sido decorar un patron que ya no aplica.
 * - Los tres pasos pasan de columna apilada a tira horizontal de tres celdas.
 *   Es la misma secuencia, contada en el eje que sobra en escritorio.
 * - La foto pasa de 4:3 a 16:9. A 4:3 la imagen sola se llevaba 480px de los
 *   756 disponibles.
 * - Los parrafos van a 14px (`text-body-sm`, que ahora existe de verdad) y el
 *   cierre a 13px.
 *
 * Solo queda un movimiento: la tira de pasos entra una vez con stagger. Sin
 * scrub, porque la seccion completa cabe en pantalla y un scrub dejaria los
 * pasos a medio opacar sin nada de scroll que los complete.
 *
 * ---------------------------------------------------------------------------
 * Por que recibe el contenido por props y no lo lee de `content/home`
 *
 * La seccion aparece en la home y en Soluciones, y el cliente escribio DOS
 * textos distintos: en la home el bloque hace de enganche y va con etiquetas
 * sueltas (`benefits`); en Soluciones el lector ya sabe que vende Comunica y el
 * copy desarrolla cada razon (`features`, titular + explicacion). Antes las dos
 * paginas pintaban literalmente lo mismo, que es justo lo que se pidio corregir.
 *
 * Los dos formatos conviven en el mismo componente porque el resto del bloque
 * —foto, flujo QR, acciones, CTA— es identico. Se pinta uno u otro segun cual
 * traiga el contenido; si algun dia llegan los dos, mandan las `features`, que
 * son las que dicen mas.
 */

type ExtensionFeature = {
  readonly title: string;
  readonly description: string;
};

export type ExtensionContent = {
  /** Opcional: en Soluciones el titulo ya es el nombre del producto. */
  readonly eyebrow?: string;
  readonly title: string;
  readonly subtitle: string;
  readonly body: readonly string[];
  /** Etiquetas sueltas (home). */
  readonly benefits?: readonly string[];
  /** Razones desarrolladas (Soluciones). Tienen prioridad sobre `benefits`. */
  readonly features?: readonly ExtensionFeature[];
  readonly closing: string;
  readonly cta: Cta;
  readonly mockup: {
    readonly room: string;
    readonly guestStatus: string;
    readonly qrLabel: string;
    readonly qrAction: string;
    readonly phoneLabel: string;
    readonly extActive: string;
    readonly actions: readonly string[];
  };
};

export function ExtensionBlock({
  content,
  image,
}: {
  content: ExtensionContent;
  image: ImageKey;
}) {
  const m = content.mockup;

  const steps = [
    { key: "habitacion", label: m.room, detail: m.guestStatus, icon: "hotel" as const },
    { key: "qr", label: m.qrLabel, detail: m.qrAction, icon: "smartphone" as const },
    { key: "movil", label: m.phoneLabel, detail: m.extActive, icon: "phone-call" as const },
  ];

  const scope = useBrandMotion<HTMLDivElement>(({ gsap, scope, reduced }) => {
    if (reduced) return;

    const cards = gsap.utils.toArray<HTMLElement>("[data-step]", scope);
    gsap.from(cards, {
      opacity: 0,
      y: 14,
      duration: 0.4,
      ease: "power2.out",
      immediateRender: true,
      stagger: 0.08,
      scrollTrigger: { trigger: scope, start: "top 82%", once: true },
    });
  });

  return (
    <section
      data-tone="light"
      className="overflow-hidden bg-paper py-section-sm"
    >
      <Container width="wide">
        <div className="grid items-center gap-x-16 gap-y-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Columna de texto */}
          <div className="min-w-0">
            {content.eyebrow ? (
              <p className="font-mono text-eyebrow tracking-[0.2em] text-cyan-ink-strong uppercase">
                {content.eyebrow}
              </p>
            ) : null}
            <h2 className={content.eyebrow ? "mt-6 text-display-2" : "text-display-2"}>
              {content.title}
            </h2>
            <p className="mt-2 max-w-[24ch] text-display-3 text-navy text-balance">
              {content.subtitle}
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {content.body.map((p) => (
                <p key={p} className="measure-body text-body-sm text-fg-muted">
                  {p}
                </p>
              ))}
            </div>

            {/* Las razones desarrolladas. El titular de cada una va en negrita y
                en la MISMA linea que su explicacion: son frases del copy, no
                rotulos, y separarlas en dos renglones convertiria tres razones
                en seis lineas sueltas. Se deja en caja baja a proposito aunque
                el cliente las escribiera en mayusculas: en el sitio las
                versalitas son solo para los eyebrows de 11px, y tres frases
                enteras en caja alta a tamano de cuerpo se leen a gritos. */}
            {content.features ? (
              <ul className="mt-6 flex flex-col gap-4">
                {content.features.map((f) => (
                  <li
                    key={f.title}
                    className="measure-body border-l-2 border-cyan pl-5 text-body-sm text-fg-muted"
                  >
                    <strong className="font-semibold text-navy">{f.title}</strong>{" "}
                    {f.description}
                  </li>
                ))}
              </ul>
            ) : content.benefits ? (
              <ul className="mt-6 flex flex-wrap gap-2">
                {content.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 font-mono text-[0.75rem] text-navy"
                  >
                    <Icon name="check" size={13} className="text-positive" />
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}

            <p className="measure-body mt-6 text-small text-fg-muted">
              {content.closing}
            </p>

            <div className="mt-7">
              <Button
                href={content.cta.href}
                variant="navy"
                iconRight={<Icon name="arrow-right" size={17} />}
              >
                {content.cta.label}
              </Button>
            </div>
          </div>

          {/* Columna visual: foto, secuencia y acciones */}
          <div ref={scope} className="flex min-w-0 flex-col gap-4">
            {/* El QR viene IMPRESO dentro de la fotografia, en la tarjeta de la
                mesilla. Decision de cliente, y cambia el planteamiento anterior:
                antes se componia por CSS encima de una tarjeta en blanco (patron
                Tier B). Se retira ese montaje porque el cliente quiere ver el
                codigo como parte de la escena y no como una pegatina flotando
                sobre la foto.
                Contrapartida a vigilar al generar la imagen: un modelo de
                difusion no produce un QR escaneable, solo un patron que lo
                parece. Sirve como fotografia de producto, no como codigo real;
                si en algun momento hace falta que sea escaneable, hay que volver
                al vector compuesto (`QrMotif` sigue en el repo).
                La foto llega por props: cada pagina lleva la suya para que la
                seccion no se lea dos veces igual. */}
            <div className="d-crop-r relative">
              <SmartImage
                image={image}
                sizes={SIZES.heroSplit}
                decorative
                wrapperClassName="h-full"
              />
            </div>

            {/* Los tres pasos, en tira horizontal */}
            <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-line sm:grid-cols-3">
              {steps.map((s, i) => (
                <li
                  key={s.key}
                  data-step
                  className="flex min-w-0 items-center gap-3 bg-paper-warm p-4"
                >
                  <span
                    className="font-mono text-card-title text-cyan-ink-strong"
                    data-tabular
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="grid size-9 shrink-0 place-items-center rounded-md bg-navy/[0.06] text-navy">
                    <Icon name={s.icon} size={17} />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-body-sm font-semibold">
                      {s.label}
                    </span>
                    <span className="block truncate font-mono text-[0.6875rem] text-fg-muted">
                      {s.detail}
                    </span>
                  </span>
                </li>
              ))}
            </ol>

            {/* Lo que el huesped puede hacer desde su movil */}
            <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-line sm:grid-cols-2">
              {m.actions.map((a) => (
                <li
                  key={a}
                  className="flex min-w-0 items-center gap-2.5 bg-paper p-4"
                >
                  <Icon
                    name="check-circle"
                    size={15}
                    className="shrink-0 text-positive"
                  />
                  <span className="text-body-sm">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
