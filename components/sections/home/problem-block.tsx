"use client";

import { BrandArc } from "@/components/brand/brand-arc";
import { Container } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { home } from "@/content/home";
import { useBrandMotion } from "@/lib/gsap/use-brand-motion";

/**
 * "Tu huesped no distingue entre tecnologia y servicio", en widgets.
 *
 * Rediseñada por peticion de cliente: antes eran dos columnas de texto corrido
 * con un revelado por scrub, y se leia como un articulo. Ahora el copy —que es
 * exactamente el mismo, literal de la demo— se reparte en tres bloques con
 * funciones distintas:
 *
 *   1. Bento de sintomas. Los tres sintomas son tarjetas-señal del lado huesped,
 *      con su icono y un punto de estado en rojo. La cuarta celda es el widget de
 *      diagnostico: las cuatro categorias de servicio marcadas "sin asignar", que
 *      es literalmente lo que describe el parrafo de al lado. Dibujar el problema
 *      convence mas que enunciarlo.
 *   2. Isla navy con la cita y el giro del discurso.
 *   3. Las cuatro preguntas, ya en modo Comunica, con su indice en mono.
 *
 * Movimiento: stagger de rejilla (`grid: "auto"`, `from: "center"`) segun el
 * preset Standard de la guia de motion, pero con `power2.out` en lugar del
 * `back.out` del preset: el rebote se lee como juguete en una web B2B de
 * confianza. Entra una sola vez, sin scrub, porque estas tarjetas se leen de un
 * vistazo y un scrub las tendria a medio opacar durante media pantalla.
 */
export function ProblemBlock() {
  const { problem } = home;
  const { diagnostic } = problem;

  const scope = useBrandMotion<HTMLDivElement>(({ gsap, scope, reduced }) => {
    if (reduced) return;

    const cells = gsap.utils.toArray<HTMLElement>("[data-cell]", scope);
    gsap.from(cells, {
      opacity: 0,
      y: 18,
      scale: 0.97,
      duration: 0.45,
      ease: "power2.out",
      immediateRender: true,
      stagger: { each: 0.06, from: "center", grid: "auto" },
      scrollTrigger: { trigger: scope, start: "top 78%", once: true },
    });
  });

  return (
    <section data-tone="light" className="relative isolate bg-paper py-section">
      <Container width="wide">
        {/* Encabezado: el sintoma a la izquierda, la consecuencia operativa a la
            derecha. Son las dos caras del mismo fallo y por eso van enfrentadas
            en la misma fila, no una debajo de otra. */}
        <div className="grid gap-x-16 gap-y-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h2 className="max-w-[24ch] text-display-2 text-balance">
            {problem.title}
          </h2>
          {problem.body.map((p) => (
            <p key={p} className="measure-body text-body text-fg-muted">
              {p}
            </p>
          ))}
        </div>

        <div ref={scope}>
          <p className="mt-14 font-mono text-eyebrow tracking-[0.2em] text-cyan-ink-strong uppercase">
            {problem.introLabel}
          </p>

          {/* Bento denso: 3 sintomas (2+2+2) sobre el widget de diagnostico
              (col-span-6). Filas exactas de 6, cero celdas muertas. */}
          <div className="mt-5 grid grid-flow-dense grid-cols-1 gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2 lg:grid-cols-6">
            {problem.symptoms.map((s) => (
              <article
                key={s.text}
                data-cell
                className="group/cell relative flex min-w-0 flex-col justify-between gap-8 bg-paper p-7 transition-colors hover:bg-paper-warm lg:col-span-2"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="grid size-11 place-items-center rounded-md bg-critical/[0.07] text-critical">
                    <Icon name={s.icon} size={20} />
                  </span>
                  {/* Punto de estado: parpadea una vez cada 4 s, no en bucle
                      continuo. Un `ping` permanente se lee como alarma. */}
                  <span
                    aria-hidden="true"
                    className="animate-blip size-2 rounded-full bg-critical"
                  />
                </div>
                <p className="measure-card text-display-3 text-fg">{s.text}</p>
              </article>
            ))}

            {/* Widget de diagnostico: las cuatro categorias, ninguna asignada */}
            <div
              data-cell
              className="min-w-0 bg-paper-warm-2 p-7 lg:col-span-6 lg:p-8"
            >
              <p className="font-mono text-eyebrow tracking-[0.2em] text-navy uppercase">
                {diagnostic.label}
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
                {diagnostic.services.map((s) => (
                  <li
                    key={s.name}
                    className="flex min-w-0 items-center gap-3 rounded-lg border border-line bg-paper px-4 py-3.5"
                  >
                    <Icon
                      name={s.icon}
                      size={17}
                      className="shrink-0 text-navy/45"
                    />
                    <span className="min-w-0">
                      <span className="block truncate text-card-title">
                        {s.name}
                      </span>
                      <span className="mt-0.5 block font-mono text-[0.6875rem] tracking-[0.08em] text-critical uppercase">
                        {diagnostic.unassigned}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Isla navy: la cita y el giro. Bloque oscuro dentro de una seccion
            clara, asi que no cuenta como seccion oscura en el ritmo de la
            pagina. */}
        <div className="rounded-shield relative mt-4 overflow-hidden bg-navy p-8 text-fg-inverse lg:p-14">
          <BrandArc
            placement="edge"
            tone="white"
            opacity={0.35}
            className="inset-y-0 right-0 h-full w-[clamp(60px,10vw,140px)]"
          />
          <div className="relative grid gap-x-16 gap-y-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <blockquote className="relative pl-6">
              <span
                aria-hidden="true"
                className="bg-brand-gradient absolute top-0 left-0 h-full w-[3px] rounded-full"
              />
              <p className="max-w-[36ch] text-display-3 text-white text-balance">
                {problem.pullQuote}
              </p>
            </blockquote>
            <p className="measure-body text-body-sm text-fg-inverse-muted">
              {problem.afterQuote}
            </p>
          </div>
        </div>

        {/* Las cuatro preguntas */}
        <div className="mt-14">
          <p className="font-mono text-eyebrow tracking-[0.2em] text-cyan-ink-strong uppercase">
            {problem.questionsLabel}
          </p>

          <ul className="mt-5 grid grid-flow-dense grid-cols-1 gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2 lg:grid-cols-4">
            {problem.questions.map((q, i) => (
              <li
                key={q}
                className="flex min-w-0 flex-col gap-5 bg-paper-warm p-6 transition-colors hover:bg-paper"
              >
                <span
                  className="font-mono text-data text-cyan-ink-strong"
                  data-tabular
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-card-title">{q}</span>
              </li>
            ))}
          </ul>

          <p className="mt-9 text-display-3 text-cyan-strong">
            {problem.closing}
          </p>
        </div>
      </Container>

      <BrandArc
        placement="seam"
        tone="gradient"
        opacity={0.3}
        className="-bottom-px left-1/2 w-[min(820px,88vw)] -translate-x-1/2 rotate-180"
      />
    </section>
  );
}
