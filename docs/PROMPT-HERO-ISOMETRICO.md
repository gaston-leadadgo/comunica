# Hero isométrico — prompts de generación

Referencia: `public/images/hero-1.png` (la maqueta que aprobaste).

Objetivo: una ilustración isométrica de hotel **en corte**, con las plantas
abiertas como una casa de muñecas y el cableado recorriendo el edificio de
arriba abajo. Sustituye a la fotografía de lobby del hero actual.

---

## Reglas antes de generar (léelas, ahorran repeticiones)

**1. Nada de texto dentro de la imagen.** Ni el rótulo "HOTEL" de la azotea, ni
"COMUNICA" en la caja, ni las etiquetas WiFi / Voz / IPTV / Conectividad / IA de
la derecha. Los modelos de imagen escriben jerigonza: letras inventadas, acentos
mal puestos, palabras a medias. En una web que vende rigor técnico a un director
de IT, eso se detecta en dos segundos y hunde la credibilidad.

Todo ese texto lo pone la web por encima, en HTML real: nítido en pantallas
retina, accesible, traducible y editable sin regenerar la imagen. Por eso los
prompts piden explícitamente **superficies lisas y vacías** donde luego irán el
rótulo y la marca.

**2. El tercio izquierdo va vacío.** Ahí vive el titular. Si el edificio se
centra, el texto le cae encima.

**3. Genera primero la variante A y quédatela como referencia.** Adjúntala en
las siguientes generaciones para que el color y la luz no deriven.

---

## Prompt principal (variante A — la del render)

> Isometric architectural cutaway illustration of a modern five-storey boutique
> hotel, rendered as an open dollhouse cross-section so every floor is visible at
> once. Photorealistic 3D render, clean and precise, floating on a pure white
> background with a soft contact shadow beneath the building.
>
> The building sits in the right two thirds of the frame, seen from a raised
> three-quarter isometric angle, tilted slightly to the left. The entire left
> third of the image is empty white space with nothing in it.
>
> From bottom to top the floors read:
> ground floor — a technical room with slim black server racks and patch panels,
> their status lights glowing cyan;
> first floor — a meeting room with a long table and chairs, and a small open
> office area;
> second floor — a restaurant with laid tables, warm pendant lights and a bar;
> third floor — the reception lobby: a long stone counter, a lounge with sofas
> and armchairs, potted plants;
> top floor — three guest bedrooms with made beds, bedside lamps and a wall
> mounted flat screen in each.
>
> A slim glowing cyan cable runs vertically through the core of the building,
> branching into every floor along the ceilings and walls, like a nervous system
> made of light. All the branches converge downwards into a single rounded white
> device that floats just below the ground floor, lit from within with cyan.
>
> On the roof there is a rectangular sign panel mounted on a frame — the panel is
> completely blank, smooth and empty, with no letters, no logo and no markings of
> any kind. The floating device below the building is likewise a plain smooth
> white rounded box with a completely blank top face, no text and no logo.
>
> At street level: a small entrance canopy, three steps, clipped hedges in
> planters, two slim trees and one dark grey saloon car parked at the kerb.
>
> Colour: predominantly white, warm off-white and pale grey architecture, warm
> amber interior lighting in the rooms, and a single saturated accent — electric
> cyan #009FE3 — used only for the cables, the device glow and the server status
> lights. Deep navy #003057 in the darkest shadows. No other saturated colour
> anywhere.
>
> Crisp, clean, high detail, soft even studio lighting, subtle ambient occlusion,
> no harsh shadows, no depth of field blur.
>
> Absolutely no text, no letters, no numbers, no logos, no watermarks, no UI
> panels, no floating labels, no callout badges, no icons anywhere in the image.
> No people. No world map, no globe, no dotted network mesh, no hexagons, no
> circuit board patterns, no lens flares.

---

## Variante B — más ilustrada, menos render

Por si el fotorrealismo resulta demasiado "stock 3D". Mismo contenido, acabado de
ilustración editorial:

> Same isometric hotel cutaway as described, but rendered as a refined vector
> style architectural illustration: flat planes with subtle gradients, clean
> lines, no photographic texture, no reflections. Muted paper white and warm grey
> palette with electric cyan #009FE3 as the only accent. Editorial, technical,
> calm — closer to an architect's axonometric drawing than to a product render.
>
> Same restrictions: no text, no letters, no logos, blank roof sign panel, blank
> device face, empty left third, no people.

---

## Especificaciones del archivo

| Dato | Valor |
|---|---|
| Nombre | `home-hero-isometric-cutaway.webp` |
| Ubicación | `public/images/home/` |
| Ratio | 16:9 |
| Maestro | 2560 × 1440 px |
| Exportar | WebP calidad 82 |
| Zona segura | tercio izquierdo completamente vacío |

---

## Qué monta la web encima (no lo pidas en la imagen)

1. **Rótulo de la azotea** — texto real sobre el panel liso.
2. **Marca en el dispositivo** — el logotipo SVG de Comunica sobre la cara lisa.
3. **Las cinco etiquetas flotantes** (WiFi, Voz, IPTV, Conectividad, IA) — píldoras
   en HTML con los iconos del sistema, ancladas al borde derecho.
4. **El "Todo bajo control"** de abajo — otra píldora HTML.

Cuando tengas la imagen generada, dímelo y monto las cuatro capas sobre ella.

---

## Nota de dirección de arte

Esta imagen se aparta de la línea fotográfica del resto del sitio (hotel real,
luz natural, grano fino), que se eligió justamente para no parecer una web de
telco genérica. El corte isométrico con cables luminosos es un recurso muy
extendido en el sector: gana en claridad —se ve de un golpe todo lo que Comunica
toca dentro de un hotel— y pierde en diferenciación.

Es una decisión legítima y tuya; lo dejo escrito para que sea consciente, no para
discutirla. Si se adopta, conviene que el resto de imágenes de la home sigan
siendo fotografía real: mezclar un render isométrico con más ilustración 3D en
otras secciones sí terminaría de acercar el sitio al aspecto de catálogo de
operador.
