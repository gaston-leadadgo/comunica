"use client";

import { Container } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { home } from "@/content/home";
import { useBrandMotion } from "@/lib/gsap/use-brand-motion";

/**
 * Banda de autoridad: cuatro datos, justo despues del hero.
 *
 * Primera version sin marquee: cuatro celdas a todo el ancho con el numero y una
 * etiqueta en mono de 13px. A 1.900px cada celda media 470px y el contenido
 * ocupaba la esquina superior izquierda: tres cuartas partes de cada celda
 * vacias, la etiqueta casi ilegible y nada que se moviera salvo el contador. El
 * cliente la rechazo, con razon.
 *
 * Ahora cada dato es una TARJETA que se llena de verdad:
 * - un icono en su pastilla cyan, que dice de un vistazo de que va cada cifra;
 * - la cifra grande y, al lado, la etiqueta a tamaño de lectura (16px, no 13);
 * - un filo con el degradado de marca arriba, que se dibuja al entrar.
 * El contenedor deja de ir a todo el ancho (`Container` normal, no `wide`) y la
 * seccion pierde altura: la banda tiene que golpear y dejar paso, no ocupar una
 * pantalla.
 *
 * Movimiento, en una sola secuencia al entrar: las tarjetas suben en cascada, el
 * filo se dibuja de izquierda a derecha, el icono hace un pequeño rebote y la
 * cifra cuenta desde cero. Bajo `prefers-reduced-motion` no se anima nada y todo
 * se ve en su estado final.
 *
 * Los contadores: el numero se renderiza ya en su valor final en el HTML. Si el
 * JS no llega, se lee 482. Nunca al reves.
 */
export function CredibilityBand() {
  const { credibility } = home;

  const scope = useBrandMotion<HTMLUListElement>(({ gsap, scope, reduced }) => {
    if (reduced) return;

    const tl = gsap.timeline({
      scrollTrigger: { trigger: scope, start: "top 85%", once: true },
    });

    tl.from("[data-stat]", {
      opacity: 0,
      y: 28,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.1,
      immediateRender: true,
    })
      .from(
        "[data-stat-bar]",
        {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.1,
          immediateRender: true,
        },
        0.15,
      )
      .from(
        "[data-stat-icon]",
        {
          scale: 0.5,
          rotate: -14,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(2)",
          stagger: 0.1,
          immediateRender: true,
        },
        0.2,
      );

    gsap.utils.toArray<HTMLElement>("[data-count]", scope).forEach((el, i) => {
      const target = Number(el.dataset.count);
      if (!Number.isFinite(target) || target < 2) return;
      const obj = { v: 0 };
      tl.to(
        obj,
        {
          v: target,
          duration: 1.3,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = String(Math.round(obj.v));
          },
        },
        0.2 + i * 0.1,
      );
    });
  });

  const cards = [
    ...credibility.stats.map((s) => ({
      key: s.label,
      icon: s.icon,
      value: s.value as string | null,
      title: null as string | null,
      text: s.label,
    })),
    {
      key: credibility.support.title,
      icon: credibility.support.icon,
      value: null,
      title: credibility.support.title,
      text: credibility.support.detail,
    },
  ];

  return (
    <section
      data-tone="dark"
      aria-label={credibility.label}
      className="relative isolate overflow-hidden bg-navy py-14 text-fg-inverse lg:py-20"
    >
      <div aria-hidden="true" className="bg-radial-wash absolute inset-0 -z-10 opacity-60" />

      <Container>
        <ul
          ref={scope}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
        >
          {cards.map((c) => (
            <li
              key={c.key}
              data-stat
              className="group/stat relative flex min-w-0 items-center gap-5 overflow-hidden rounded-xl border border-white/10 bg-white/[0.05] p-5 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:bg-white/[0.08] sm:flex-col sm:items-start sm:gap-4 sm:p-7"
            >
              {/* Filo con el degradado de marca: se dibuja al entrar */}
              <span
                aria-hidden="true"
                data-stat-bar
                className="bg-brand-gradient absolute inset-x-0 top-0 h-[3px]"
              />

              <span
                data-stat-icon
                aria-hidden="true"
                className="grid size-12 shrink-0 place-items-center rounded-lg bg-cyan/15 text-cyan ring-1 ring-cyan/25 transition-colors group-hover/stat:bg-cyan/25 sm:size-14"
              >
                <Icon name={c.icon} size={24} />
              </span>

              <span className="min-w-0">
                {c.value ? (
                  <span className="block text-metric text-white" data-tabular>
                    <span data-count={c.value}>{c.value}</span>
                  </span>
                ) : (
                  <span className="block text-display-3 text-cyan text-balance">
                    {c.title}
                  </span>
                )}
                <span className="mt-1.5 block text-body text-fg-inverse-muted text-pretty sm:mt-2">
                  {c.text}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
