"use client";

import { SmartImage } from "@/components/media/smart-image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { HotelText } from "@/components/ui/hotel-text";
import { Icon } from "@/components/ui/icon";
import { home } from "@/content/home";
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
    const rest = scope.querySelectorAll<HTMLElement>("[data-lead],[data-ctas]");
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
      {/* Fondo ambiental. Vuelve tras el primer montaje del hero partido, donde
          se habia quitado por miedo a que el archivo —de fondo blanco solido— se
          recortase encima como un rectangulo. Lo resuelve el `mix-blend-multiply`
          de la ilustracion, mas abajo: el blanco puro se vuelve transparente y la
          textura atraviesa la imagen en lugar de morir en su borde. */}
      <div aria-hidden="true" className="bg-dot-grid absolute inset-0 -z-20 opacity-70" />
      <div aria-hidden="true" className="bg-radial-wash absolute inset-0 -z-10" />

      {/* Sin arco de marca en este hero. Iba pegado al borde derecho, que es
          justo donde ahora vive la ilustracion: con `multiply`, el trazo se
          veria ATRAVESANDO el edificio de arriba abajo, y a esa escala no se
          lee como el arco de la identidad sino como un arañazo en el render. */}

      <Container width="wide" className="relative">
        <div
          ref={scope}
          // `gap-x-4` en escritorio, no `gap-x-10`: la ilustracion ya trae su
          // propio aire dentro del archivo, asi que un canal ancho se suma al
          // margen del dibujo y el hueco entre texto e imagen se duplica.
          className="grid items-center gap-x-10 gap-y-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-x-4"
        >
          {/* Columna de argumento.
              Sin cifra de credibilidad: la cabecera ya lleva "350 hoteles · 13
              paises" a dos centimetros de aqui, y repetirla en el hero la
              convertia en ruido en lugar de en prueba. */}
          <div className="min-w-0">
            <h1 className="text-display-hero-split">
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

          {/* La ilustracion, a sangre por la derecha y fundida con el fondo.
              -----------------------------------------------------------------
              `mix-blend-multiply`: el archivo tiene fondo blanco SOLIDO, no
              transparente. Multiplicar deja pasar intacto lo que hay debajo alli
              donde la imagen es blanca (255 x fondo / 255 = fondo) y solo oscurece
              donde hay dibujo. Resultado: la rejilla de puntos y el lavado radial
              cruzan por detras del edificio en lugar de morir en un borde recto,
              que es lo que delataba el montaje.

              El margen negativo la lleva hasta el borde del viewport. En movil
              sangra por los dos lados: a 375px se quedaba en 330px y los rotulos
              (Conectividad es el mas largo) dejaban de leerse. */}
          {/* El `mix-blend-multiply` va en ESTE contenedor y no en el `<img>`.
              GSAP le pone un `transform` (entrada y paralaje) y una `opacity`, y
              ambas cosas crean un contexto de apilamiento: una imagen que
              blendease dentro de el quedaria aislada y el modo de fusion no
              haria nada. Aplicado al propio elemento transformado, la fusion
              sigue ocurriendo contra el fondo de la seccion, que es lo que se
              busca. */}
          <div
            data-art
            className="-mx-gutter min-w-0 mix-blend-multiply lg:mx-0 lg:-mr-[clamp(1.5rem,4.5vw,4rem)]"
          >
            <SmartImage
              image="home-hero-isometric"
              sizes="(min-width: 1024px) 56vw, 100vw"
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
