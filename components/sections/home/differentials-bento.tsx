"use client";

import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import { useRef, useState } from "react";

import { SIZES, SmartImage } from "@/components/media/smart-image";
import { Container } from "@/components/ui/section";
import { HotelText } from "@/components/ui/hotel-text";
import { Icon } from "@/components/ui/icon";
import { home } from "@/content/home";
import { gsap, useBrandMotion } from "@/lib/gsap/use-brand-motion";

gsap.registerPlugin(Flip);

/**
 * Bento de diferenciales, interactivo.
 *
 * Antes era una rejilla estatica de cinco tarjetas iguales: los cinco
 * argumentos competian por la misma atencion y ninguno ganaba. Ahora la rejilla
 * tiene un protagonista: la tarjeta seleccionada ocupa el bloque grande, en
 * navy y con su desarrollo completo; las otras cuatro quedan como titulares
 * compactos, listos para tomar el relevo. Al pulsar cualquiera, la cuadricula se
 * reorganiza y la elegida pasa a principal.
 *
 * Densidad, con 12 columnas y cero celdas muertas:
 *   filas 1-2: destacada (col-span-8, row-span-2) + imagen (col-span-4, row-span-2)
 *   fila 3:    las cuatro restantes (col-span-3 cada una) = 12
 *
 * El orden del DOM se recalcula en cada seleccion —la destacada siempre va
 * primera— en lugar de dejarla en su sitio y estirarla: con `grid-flow-dense` y
 * la destacada en mitad de la lista, las celdas anteriores llenaban la primera
 * fila y el bloque grande caia a la segunda, cambiando la composicion entera
 * segun cual se pulsara.
 *
 * El movimiento es GSAP Flip: se mide la posicion de todas las celdas ANTES de
 * cambiar de estado y se interpola desde ahi despues de que React repinte, asi
 * que las tarjetas se deslizan a su nueva posicion en lugar de saltar. Es la
 * unica forma de animar un cambio de `grid-column`/`grid-row`, que no son
 * propiedades interpolables por CSS.
 */
export function DifferentialsBento() {
  const { differentials } = home;
  const [active, setActive] = useState(0);

  const gridRef = useRef<HTMLDivElement>(null);
  /** Instantanea previa al cambio. Se consume en el `useGSAP` de abajo. */
  const pending = useRef<Flip.FlipState | null>(null);

  const select = (index: number) => {
    if (index === active) return;
    const grid = gridRef.current;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (grid && !reduced) {
      pending.current = Flip.getState(grid.querySelectorAll("[data-cell]"), {
        // `props` incluye lo que Flip no deduce de la geometria: sin esto, el
        // cambio de fondo y de color de texto salta de golpe a mitad del
        // deslizamiento.
        props: "backgroundColor,color",
      });
    }
    setActive(index);
  };

  // Corre despues de que React haya pintado el nuevo reparto de la rejilla, que
  // es cuando Flip puede medir el estado final y animar desde el guardado.
  useGSAP(
    () => {
      if (!pending.current) return;
      Flip.from(pending.current, {
        duration: 0.55,
        ease: "power2.inOut",
        // `absolute` saca las celdas del flujo durante la animacion: sin ello,
        // las que cambian de fila arrastran a las demas y el conjunto tiembla.
        absolute: true,
        nested: true,
      });
      pending.current = null;
    },
    { dependencies: [active] },
  );

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

  const featured = { item: differentials.items[active], index: active };
  /** El resto, en su orden original. */
  const rest = differentials.items
    .map((item, index) => ({ item, index }))
    .filter(({ index }) => index !== active);

  return (
    <section data-tone="light" className="bg-paper-warm py-section">
      <Container width="wide">
        {/* Medida ancha a proposito. Son 93 caracteres y contienen
            "telecomunicaciones.", una palabra de 19: por debajo de ~1.240px el
            corte natural cae antes de esa palabra y el titular se va a tres
            lineas aunque geometricamente quepa en dos. */}
        <h2 className="mx-auto max-w-[46ch] text-center text-display-2 text-balance">
          <HotelText>{differentials.title}</HotelText>
        </h2>

        <p className="mx-auto mt-6 text-center font-mono text-eyebrow tracking-[0.2em] text-cyan-ink-strong uppercase">
          {differentials.hint}
        </p>

        <div ref={scope}>
          <div
            ref={gridRef}
            className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2 lg:grid-cols-12"
          >
            {/* Destacada. Va PRIMERA en el DOM siempre: la colocacion
                automatica de CSS Grid llena por orden de origen, asi que un
                bloque de 8 columnas en mitad de la lista se descolgaria a la
                fila siguiente y la composicion cambiaria segun cual estuviera
                seleccionada. */}
            <article
              key={featured.item.title}
              data-cell
              data-tone="dark"
              className="flex min-w-0 flex-col bg-navy p-8 text-fg-inverse transition-colors sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:p-12"
            >
              <span className="font-mono text-data text-cyan" data-tabular>
                {String(featured.index + 1).padStart(2, "0")}
              </span>
              <h3 className="measure-card mt-6 text-display-2 text-white">
                {featured.item.title}
              </h3>
              <p className="measure-body mt-6 text-body text-fg-inverse-muted">
                {featured.item.description}
              </p>
            </article>

            {/* Imagen: cierra las dos primeras filas junto a la destacada */}
            <div
              data-cell
              className="relative min-w-0 bg-paper sm:col-span-2 lg:col-span-4 lg:row-span-2"
            >
              <SmartImage
                image="home-differentials-engineer-hands"
                sizes={SIZES.grid2}
                decorative
                wrapperClassName="h-full !aspect-auto min-h-[14rem]"
              />
            </div>

            {/* Las cuatro restantes: solo el titular. El desarrollo aparece al
                promoverlas, que es lo que hace que la rejilla quepa en pantalla
                y que pulsar tenga una recompensa visible. */}
            {rest.map(({ item, index }) => (
              <article
                key={item.title}
                data-cell
                className="group flex min-w-0 flex-col bg-paper transition-colors hover:bg-paper-warm-2 lg:col-span-3"
              >
                <button
                  type="button"
                  onClick={() => select(index)}
                  // No es un `tab`: la destacada no es un panel aparte, es esta
                  // misma tarjeta transformada. `aria-expanded` describe
                  // exactamente eso — se despliega en su sitio.
                  aria-expanded={false}
                  className="flex flex-1 flex-col p-7 text-left"
                >
                  <span
                    className="font-mono text-data text-cyan-ink-strong"
                    data-tabular
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-5 flex flex-1 items-end justify-between gap-4">
                    <span className="measure-card text-card-title">
                      {item.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-navy transition-colors group-hover:border-navy group-hover:bg-navy group-hover:text-white"
                    >
                      <Icon name="arrow-right" size={15} />
                    </span>
                  </span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
