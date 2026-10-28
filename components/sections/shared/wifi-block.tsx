"use client";

import { SmartImage, SIZES } from "@/components/media/smart-image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import type { ImageKey } from "@/content/images";
import type { Cta } from "@/content/schema";
import { revealOnScroll, useBrandMotion } from "@/lib/gsap/use-brand-motion";
import { cn } from "@/lib/utils/cn";

/**
 * WiFi hotelero. Aparece en la home y en Soluciones, con dos textos de cliente
 * distintos, igual que Extension Dinamica: por eso recibe el contenido por props.
 *
 * - En la home presenta la idea y manda a Soluciones: etiquetas sueltas
 *   (`pills`).
 * - En Soluciones la desarrolla: cuatro razones con su explicacion
 *   (`features`) y el proceso en tres pasos (`steps`).
 *
 * La foto va a la IZQUIERDA, al reves que en Extension Dinamica, que la lleva a
 * la derecha y va justo antes. Dos bloques de producto seguidos con la misma
 * composicion se leen como uno solo partido en dos.
 *
 * `tone`: en la home el bloque va en navy porque cae entre Extension Dinamica y
 * los diferenciales, que son claros los dos; en claro habrian sido tres
 * secciones claras seguidas sin un corte. En Soluciones va en claro porque el
 * siguiente bloque, iAndrea, ya es oscuro.
 */

type WifiFeature = { readonly title: string; readonly description: string };
type WifiStep = {
  readonly number: string;
  readonly title: string;
  readonly description: string;
};

export type WifiContent = {
  readonly eyebrow: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly body: readonly string[];
  /** Parrafo de `body` que va destacado: la tesis del bloque. */
  readonly highlightIndex?: number;
  readonly pills?: readonly string[];
  readonly features?: readonly WifiFeature[];
  readonly steps?: readonly WifiStep[];
  readonly closing: string;
  readonly cta: Cta;
};

export function WifiBlock({
  content,
  image,
  tone = "light",
}: {
  content: WifiContent;
  image: ImageKey;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  const scope = useBrandMotion<HTMLDivElement>(({ gsap, scope, reduced }) => {
    if (reduced) return;
    revealOnScroll(gsap, scope, "[data-reveal]", { stagger: 0.08, start: "top 80%" });
  });

  return (
    <section
      id="wifi"
      data-tone={dark ? "dark" : "light"}
      className={cn(
        "relative isolate overflow-hidden py-section",
        dark ? "bg-navy text-fg-inverse" : "bg-paper-warm",
      )}
    >
      <Container width="wide">
        <div ref={scope}>
          <div className="grid items-center gap-x-16 gap-y-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Texto: va primero en el DOM para que en movil se lea antes de
                la foto; en escritorio pasa a la derecha con `order`. */}
            <div data-reveal className="min-w-0 lg:order-2">
              <p
                className={cn(
                  "font-mono text-eyebrow tracking-[0.2em] uppercase",
                  dark ? "text-cyan" : "text-cyan-ink-strong",
                )}
              >
                {content.eyebrow}
              </p>
              <h2 className={cn("mt-6 text-display-2 text-balance", dark && "text-white")}>
                {content.title}
              </h2>
              {content.subtitle ? (
                <p
                  className={cn(
                    "mt-2 text-display-3 text-balance",
                    dark ? "text-cyan-soft" : "text-navy",
                  )}
                >
                  {content.subtitle}
                </p>
              ) : null}

              <div className="mt-7 flex flex-col gap-3">
                {content.body.map((p, i) =>
                  i === content.highlightIndex ? (
                    <p
                      key={p}
                      className={cn(
                        "measure-body border-l-2 border-cyan pl-5 text-display-3",
                        dark ? "text-white" : "text-navy",
                      )}
                    >
                      {p}
                    </p>
                  ) : (
                    <p
                      key={p}
                      className={cn(
                        "measure-body text-body-sm",
                        dark ? "text-fg-inverse-muted" : "text-fg-muted",
                      )}
                    >
                      {p}
                    </p>
                  ),
                )}
              </div>

              {content.pills ? (
                <ul className="mt-7 flex flex-wrap gap-2">
                  {content.pills.map((pill) => (
                    <li
                      key={pill}
                      className={cn(
                        "flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[0.75rem]",
                        dark ? "border-white/15 text-white" : "border-line text-navy",
                      )}
                    >
                      <Icon name="check" size={13} className={dark ? "text-cyan" : "text-positive"} />
                      {pill}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div data-reveal className="min-w-0 lg:order-1">
              <SmartImage
                image={image}
                sizes={SIZES.heroSplit}
                decorative
                wrapperClassName="d-crop-l"
              />
            </div>
          </div>

          {/* Las cuatro razones, en Soluciones. 2 x 2: son cuatro y pesan lo
              mismo, no hay una que mande sobre las demas. */}
          {content.features ? (
            <ul
              data-reveal
              className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-line sm:mt-14 sm:grid-cols-2"
            >
              {content.features.map((f) => (
                <li key={f.title} className="min-w-0 bg-paper p-5 sm:p-7">
                  <h3 className="flex items-start gap-2.5 text-card-title text-navy">
                    <Icon name="check" size={16} className="mt-1 shrink-0 text-positive" />
                    {f.title}
                  </h3>
                  <p className="mt-3 pl-[1.65rem] text-body-sm text-fg-muted">
                    {f.description}
                  </p>
                </li>
              ))}
            </ul>
          ) : null}

          {/* El proceso. Aqui la numeracion si encierra informacion: es una
              secuencia real, medir va antes de instalar. */}
          {content.steps ? (
            <ol data-reveal className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {content.steps.map((s) => (
                <li key={s.number} className="min-w-0 border-t-2 border-cyan pt-5">
                  <p
                    className="font-mono text-data text-cyan-ink-strong"
                    data-tabular
                    aria-hidden="true"
                  >
                    {s.number}
                  </p>
                  <p className="mt-2 text-card-title text-navy">{s.title}</p>
                  <p className="mt-2 text-body-sm text-fg-muted">{s.description}</p>
                </li>
              ))}
            </ol>
          ) : null}

          <div
            data-reveal
            className={cn(
              "mt-12 flex flex-col gap-6 border-t pt-8 sm:flex-row sm:items-center sm:justify-between",
              dark ? "border-white/12" : "border-line",
            )}
          >
            <p
              className={cn(
                "max-w-[32ch] text-display-3 text-balance",
                dark ? "text-cyan" : "text-navy",
              )}
            >
              {content.closing}
            </p>
            <Button
              href={content.cta.href}
              variant="navy"
              size="lg"
              iconRight={<Icon name="arrow-right" size={18} />}
              className="w-full sm:w-auto sm:shrink-0"
            >
              {content.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
