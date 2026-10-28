# Simulador de iAndrea (Soluciones)

**Qué es.** La tarjeta interactiva de la sección «Pruébalo» de Soluciones: pestañas de escenario, conversación tipo chat y la «Llamada de reserva» con voz (Llamar, contador, Silenciar, Colgar). Es el port sin React de `comunica-web/components/sections/soluciones/iandrea-demo.tsx`.

**Qué queda fuera.** El antetítulo «Pruébalo», el titular, la entradilla y la nota final («Se integra con tu centralita actual…») son widgets nativos de Elementor. El snippet es solo la tarjeta (`div.mt-12.overflow-hidden.rounded-xl…`).

## Montaje
1. Sección `iandrea-demo` (clases `cm-ai tone-dark ms-simulador`, ver la sección 8 de `ESTRUCTURA-WIDGETS-soluciones.md`).
2. Tras el bloque del titular y la entradilla: un widget **HTML** con clase `dl-flat` y el contenido de `soluciones-simulador.html`, tal cual.
3. Cargar `js/simulador.js` en la página (pie, después del HTML). No necesita GSAP; si existe, anima los puntos de «pensando». La entrada al hacer scroll la hace `comunica.js` (clase `m-reveal` de la tarjeta dentro de `ms-simulador`).

## Editar las conversaciones
Todo el texto vive en el bloque `<script type="application/json" class="js-simulador-datos">` del principio del snippet. **No hace falta tocar el HTML**: al cargar, el script reconstruye la tarjeta a partir del JSON.

- Textos generales: `statusIdle`, `callLabel`, `hangUpLabel`, `muteLabel`, `disclaimer`, `voiceDisclaimer`…
- `title` no se ve: es el nombre que el lector de pantalla da a la conversación.
- `scenarios`: una pestaña por escenario, en orden. Campos: `name` (pestaña), `icon`, `subtitle`, `description`, `greeting` (saludo de iAndrea) y `options` (cada pregunta: `label` es el botón, `question` lo que dice el huésped, `answer` la respuesta).
- `voice: true` convierte el escenario en llamada con voz. `false` es chat de texto.
- Iconos disponibles: `hotel`, `calendar-range`, `phone`, `phone-call`, `message-square`, `user`, `info`, `sparkles`. Otro nombre deja la pestaña sin icono.

Reglas del JSON: comillas dobles, coma entre elementos y ninguna coma tras el último. Si el JSON está roto, el simulador no arranca y la consola muestra `[simulador] JSON de datos no valido`.

El HTML visible del snippet es el estado inicial (primer escenario) y solo se ve un instante antes de que cargue el JS. Si se cambia el primer escenario en el JSON, conviene cambiar también esos textos para evitar el parpadeo (o regenerarlo con `ComunicaSimulador.plantilla(datos)` desde la consola).

## Dependencias
- CSS: `css/01-estilos-base.css` (utilidades de Tailwind acotadas a `.dl-landing`). Solo existen las clases que usa la web original; no inventar clases nuevas en el snippet.
- JS: `js/simulador.js` busca cada `.js-simulador`; sin él la tarjeta se ve pero no responde.
- Voz: `speechSynthesis` del navegador (voz femenina en español si la hay). Si no hay voz en español, aparece el aviso `voiceUnavailable` y la llamada sigue en texto.
