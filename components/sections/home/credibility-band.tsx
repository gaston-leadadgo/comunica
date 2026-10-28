"use client";

import { Container } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { home } from "@/content/home";
import { revealOnScroll, useBrandMotion } from "@/lib/gsap/use-brand-motion";

/**
 * Banda de autoridad.
 *
 * Va aqui y no dentro del hero: meter cifras crudas en el hero lo carga y le
 * quita aire. Como bloque propio, la cifra golpea mas.
 *
 * Antes la banda era una frase con las cifras y, debajo, un marquee de grupos
 * hoteleros ("Ya confian en Comunica"). El marquee se retira por decision de
 * cliente: eran marcas de terceros. Para que la banda no pierda peso, las cifras
 * dejan de ser una frase y pasan a ser datos, cada uno con su tamaño propio, y
 * entran contando desde cero.
 *
 * Los contadores: el numero se renderiza ya en su valor final en el HTML y GSAP
 * lo anima desde cero al entrar en pantalla. Si el JS no llega, se lee 482.
 * Nunca al reves.
 *
 * Fondo en navy 540 C (el azul del manual): el blanco sobre navy da 13,46:1 y el
 * cyan 4,53:1, asi que ambos pasan AA.
 */
export function CredibilityBand() {
  const { credibility } = home;

  const scope = useBrandMotion<HTMLDivElement>(({ gsap, scope, reduced }) => {
    if (reduced) return;

    revealOnScroll(gsap, scope, "[data-stat]", { stagger: 0.1, start: "top 85%" });

    gsap.utils.toArray<HTMLElement>("[data-count]", scope).forEach((el) => {
      const target = Number(el.dataset.count);
      if (!Number.isFinite(target) || target < 2) return;
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target,
        duration: 1.2,
        ease: "power2.out",
        immediateRender: true,
        onUpdate: () => {
          el.textContent = String(Math.round(obj.v));
        },
        scrollTrigger: { trigger: scope, start: "top 85%", once: true },
      });
    });
  });

  return (
    <section
      data-tone="dark"
      aria-label={credibility.label}
      className="relative isolate overflow-hidden bg-navy py-section-sm text-fg-inverse"
    >
      <Container width="wide" className="relative">
        {/* Cuatro celdas: 2 x 2 en movil, una fila en escritorio. Las tres
            primeras son cifras; la cuarta, "Soporte que te conoce", no es un
            numero y por eso lleva icono en lugar de contador, y el cyan que
            antes tenia en la frase. */}
        <div
          ref={scope}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/12 lg:grid-cols-4"
        >
          {credibility.stats.map((s) => (
            // `p-5` en movil: con `p-6` a 320px a cada celda le quedaban 92px
            // y "interlocutor", en mono, mide 94.
            <div key={s.label} data-stat className="min-w-0 bg-navy p-5 sm:p-8">
              <p className="text-metric text-white" data-tabular>
                <span data-count={s.value}>{s.value}</span>
              </p>
              <p className="mt-2 font-mono text-data text-fg-inverse-muted text-pretty">
                {s.label}
              </p>
            </div>
          ))}

          <div data-stat className="flex min-w-0 flex-col justify-between bg-navy p-5 sm:p-8">
            <Icon name="headphones" size={28} className="text-cyan" />
            <p className="mt-4 text-display-3 text-cyan text-pretty">
              {credibility.support}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
