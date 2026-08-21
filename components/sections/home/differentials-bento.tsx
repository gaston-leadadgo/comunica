"use client";

import { SIZES, SmartImage } from "@/components/media/smart-image";
import { Container } from "@/components/ui/section";
import { home } from "@/content/home";
import { useBrandMotion } from "@/lib/gsap/use-brand-motion";
import { cn } from "@/lib/utils/cn";

/**
 * Bento de diferenciales, sin huecos.
 *
 * Verificacion de densidad con 6 columnas y `grid-flow-dense`:
 *   fila 1: item 1 (span 2) + item 2 (span 2) + item 3 (span 2)   = 6
 *   fila 2: imagen (span 2, row 2) + item 4 (span 4)              = 6
 *   fila 3: item 5 (span 4)  [la imagen ocupa las 2 restantes]    = 6
 * Cero celdas muertas. La imagen a dos filas es justo la pieza que evita el
 * hueco que dejarian cinco items en una rejilla de seis columnas.
 *
 * Movimiento: preset "Stagger List / grid: auto" de la guia de motion. Con
 * `grid: 'auto'` GSAP infiere filas y columnas de la propia rejilla CSS, asi
 * que el reves entra en oleada natural en vez de en el orden del markup.
 */
export function DifferentialsBento() {
  const { differentials } = home;

  const scope = useBrandMotion<HTMLDivElement>(({ gsap, scope, reduced }) => {
    if (reduced) return;
    const cells = gsap.utils.toArray<HTMLElement>("[data-cell]", scope);
    if (!cells.length) return;
    gsap.from(cells, {
      opacity: 0,
      y: 22,
      scale: 0.97,
      duration: 0.55,
      ease: "power2.out",
      immediateRender: true,
      stagger: { each: 0.07, from: "start", grid: "auto" },
      scrollTrigger: { trigger: scope, start: "top 78%", once: true },
    });
  });

  return (
    <section data-tone="light" className="bg-paper-warm py-section">
      <Container width="wide">
        {/* Medida ancha a proposito. Son 93 caracteres y contienen
            "telecomunicaciones.", una palabra de 19: por debajo de ~1.240px el
            corte natural cae antes de esa palabra y el titular se va a tres
            lineas aunque geometricamente quepa en dos. */}
        <h2 className="mx-auto max-w-[46ch] text-center text-display-2 text-balance">
          {differentials.title}
        </h2>

        <div
          ref={scope}
          className="mt-16 grid grid-flow-dense grid-cols-1 gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2 lg:grid-cols-6"
        >
          {differentials.items.map((item, i) => (
            <article
              key={item.title}
              data-cell
              className={cn(
                "flex min-w-0 flex-col bg-paper p-8",
                i < 3 ? "lg:col-span-2" : "lg:col-span-4",
              )}
            >
              <span
                className="font-mono text-data text-cyan-ink-strong"
                data-tabular
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 measure-card text-display-3">{item.title}</h3>
              <p className="measure-body mt-4 text-body-sm text-fg-muted">
                {item.description}
              </p>
            </article>
          ))}

          {/* Imagen a dos filas: cierra la rejilla */}
          <div data-cell className="relative min-w-0 bg-paper lg:col-span-2 lg:row-span-2">
            <SmartImage
              image="home-differentials-engineer-hands"
              sizes={SIZES.grid3}
              decorative
              wrapperClassName="h-full !aspect-auto min-h-[18rem]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
