"use client";

import { SmartImage } from "@/components/media/smart-image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { HotelText } from "@/components/ui/hotel-text";
import { Icon } from "@/components/ui/icon";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { useBrandMotion } from "@/lib/gsap/use-brand-motion";

/**
 * Hero partido: argumento a la izquierda, hotel en corte a la derecha.
 *
 * Sustituye al hero centrado. Aquel usaba una fotografia de lobby al 16 % de
 * opacidad como fondo a sangre —una textura, no una imagen— porque no habia
 * ninguna pieza que aguantase ser protagonista. La ilustracion isometrica si lo
 * es: enseña de un vistazo las cinco capas que Comunica gestiona dentro de un
 * hotel, y eso es exactamente el argumento del titular. Ponerla al 16 % detras
 * del texto seria desperdiciarla.
 *
 * Decisiones de composicion:
 *
 * - La ilustracion NO es decorativa, asi que lleva `alt` descriptivo y no
 *   `decorative`. Contiene ademas los unicos rotulos (WiFi, Voz, IPTV,
 *   Conectividad, IA) que no existen en el DOM: sin ese `alt`, para un lector de
 *   pantalla esa parte del argumento no existe.
 * - Fuera la rejilla de puntos y el lavado radial del fondo. El archivo tiene
 *   fondo blanco solido, asi que sobre cualquier textura se recortaria como un
 *   rectangulo blanco evidente. El hero va en papel plano y la imagen funde.
 * - La cifra de credibilidad vuelve al hero. Se habia sacado cuando el titular
 *   estaba centrado y competia por el mismo eje vertical; en dos columnas el
 *   espacio existe y es el primer dato que un director de IT busca.
 * - Un solo CTA dominante (`navy`) y el segundo en `outline`, segun el patron
 *   hero-centrico: dos botones del mismo peso reparten la atencion y ninguno la
 *   gana.
 *
 * Movimiento: entrada escalonada de la columna de texto, la ilustracion entra
 * despues (es el remate, no la apertura) y un paralaje MUY corto al bajar
 * —8 % de desplazamiento, solo sobre la imagen, nunca sobre el texto—. El
 * titular se renderiza en su estado final en el HTML y se anima con
 * `gsap.from()`, que es lo que permite que siga siendo el elemento LCP.
 */
export function HeroCinematic() {
  const { hero } = home;

  const scope = useBrandMotion<HTMLDivElement>(({ gsap, scope, reduced }) => {
    if (reduced) return;

    const lines = scope.querySelectorAll<HTMLElement>("[data-line]");
    const rest = scope.querySelectorAll<HTMLElement>(
      "[data-eyebrow],[data-lead],[data-ctas]",
    );
    const art = scope.querySelector<HTMLElement>("[data-art]");

    gsap.from(lines, {
      opacity: 0,
      y: 24,
      duration: 0.75,
      ease: "power3.out",
      immediateRender: true,
      stagger: 0.09,
    });

    gsap.from(rest, {
      opacity: 0,
      y: 16,
      duration: 0.6,
      delay: 0.2,
      ease: "power3.out",
      immediateRender: true,
      stagger: 0.08,
    });

    if (art) {
      gsap.from(art, {
        opacity: 0,
        y: 26,
        scale: 0.985,
        duration: 0.9,
        delay: 0.25,
        ease: "power3.out",
        immediateRender: true,
      });

      // Paralaje de apoyo. `yPercent` corto (8) y solo sobre la ilustracion:
      // desplazar texto al hacer scroll estorba la lectura.
      gsap.to(art, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: scope,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    }
  });

  return (
    <section
      data-tone="light"
      className="relative isolate flex min-h-dvh items-center overflow-hidden bg-paper pt-[calc(var(--header-h)+clamp(1.5rem,4vw,3rem))] pb-[clamp(2rem,5vw,4rem)]"
    >
      <Container width="wide" className="relative">
        <div
          ref={scope}
          className="grid items-center gap-x-10 gap-y-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-x-8"
        >
          {/* Columna de argumento */}
          <div className="min-w-0">
            <p
              data-eyebrow
              className="flex items-center gap-2.5 font-mono text-eyebrow tracking-[0.18em] text-cyan-ink-strong uppercase"
            >
              <span data-tabular>{site.claims.hotels} hoteles</span>
              <span aria-hidden="true" className="text-line">
                ·
              </span>
              <span data-tabular>{site.claims.countries} países</span>
            </p>

            <h1 className="mt-6 text-display-hero-split">
              <span data-line className="block text-balance">
                <HotelText>{hero.titleLine1}</HotelText>
              </span>{" "}
              <span data-line className="mt-1 block text-balance text-cyan-strong">
                {hero.titleLine2}
              </span>
            </h1>

            <p data-lead className="measure-lead mt-6 text-lead text-fg-muted">
              {hero.lead}
            </p>

            <div
              data-ctas
              className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            >
              <Button
                href={hero.ctas[0].href}
                size="lg"
                variant="navy"
                iconRight={<Icon name="arrow-right" size={18} />}
                className="w-full sm:w-auto"
              >
                {hero.ctas[0].label}
              </Button>
              <Button
                href={hero.ctas[1].href}
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
              >
                <span className="inline-flex items-center gap-2">
                  <Icon name="file-text" size={17} />
                  {hero.ctas[1].label}
                </span>
              </Button>
            </div>
          </div>

          {/* La ilustracion, a sangre.
              En escritorio solo por la derecha, con un margen negativo del ancho
              del canal: el archivo trae aire por los cuatro lados, asi que
              dentro del contenedor se veria pequeña y flotando. Sangrada, el
              edificio llega al borde del viewport y el hero deja de parecer una
              tarjeta centrada.
              En movil sangra por los dos lados. No es estetica: a 375px la
              ilustracion se queda en 330px y los rotulos de las etiquetas
              (Conectividad es el mas largo) empiezan a no leerse; recuperar los
              45px del canal es la unica holgura disponible. */}
          <div
            data-art
            className="-mx-gutter min-w-0 lg:mx-0 lg:-mr-[clamp(1.25rem,4vw,3rem)]"
          >
            <SmartImage
              image="home-hero-isometric"
              sizes="(min-width: 1024px) 58vw, 100vw"
              priority
              wrapperClassName="!aspect-auto"
              className="h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
