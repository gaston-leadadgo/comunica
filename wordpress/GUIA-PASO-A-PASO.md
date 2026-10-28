# Comunica en WordPress + Elementor · versión híbrida

Guía para montar la web entera (Inicio, Soluciones, Nosotros, Partners, Contacto, las tres páginas legales, la cabecera y el pie) con **widgets nativos de Elementor**. Así el cliente puede cambiar textos, imágenes y enlaces desde el panel sin tocar código.

Síguela en orden y con el editor abierto al lado.

---

## Antes de empezar

**Hace falta:**

- WordPress con **Elementor Pro** 3.24 o superior (probado contra el CSS de Elementor 4.3.5) y el tema **Hello Elementor**.
- **Contact Form 7**.
- **WPCode** o **Code Snippets**, para los cuatro snippets PHP. Si usas tema hijo, valen pegados en su `functions.php`.
- Acceso por **FTP** o al gestor de archivos del hosting.

**Lo que hay en el paquete:**

| Carpeta | Qué es |
|---|---|
| `css/` | `01-estilos-base.css` es el CSS de la web, acotado a `.dl-landing`. `02-adaptador-widgets.css` hace que los widgets se comporten como el HTML original. `03-clases.css` contiene las clases cortas `cm-*` de cada elemento. `estilos-cf7.css` es para el formulario. |
| `js/` | `comunica.js` (cabecera, componentes y animaciones), `calculadora.js`, `simulador.js`, `contacto.js` y, en `vendor/`, GSAP 3.15 en copia local. |
| `assets/` | Fuentes (13 woff2), imágenes y vídeo. |
| `iconos/` | Los 34 iconos SVG de los widgets. |
| `html/` | Los 23 bloques que van en widgets HTML: cabecera, calculadora, simulador, formulario, arcos decorativos y logotipo del pie. |
| `cf7/` | Las pestañas Formulario, Correo y Mensajes de Contact Form 7. |
| `php/` | Los cuatro snippets. |
| `ESTRUCTURA-WIDGETS-*.md` | El plano de montaje de cada página: cada widget, en orden, con sus clases y su contenido literal. |

**Tiempo, siendo honestos:** son **1.121 elementos** (527 contenedores, 338 textos, 89 títulos, 35 botones, 49 iconos, 43 listas, 17 imágenes y 23 bloques HTML).

| Página | Elementos |
|---|---|
| Inicio | 428 |
| Soluciones | 388 |
| Nosotros | 116 |
| Partners | 130 |
| Contacto | 24 |
| Pie | ~45 |
| Legales | 3 cada una |

A ritmo de montaje real (crear, pegar clases, pegar texto, comprobar) salen **entre 30 y 45 horas**, más una jornada de revisión. Usar **Copiar / Pegar estilo** y **Duplicar** en las piezas repetidas (tarjetas, filas, pestañas) baja mucho ese tiempo: las clases van con el elemento.

> **Monta y valida primero la sección 1 de Inicio (el hero) completa** antes de seguir. Si algo del método falla en tu instalación (un plugin que mete CSS, una opción del tema), se corrige una vez en el adaptador y sirve para las 1.100 piezas restantes. Descubrirlo en la sección 1 cuesta una hora; en la 14, el día entero.

---

## Las cuatro reglas que no se saltan

1. **Contenedores a cero.** Se configuran en el paso 0. Si no, todo sale con 10 px de más por todas partes.
2. **Todos los contenedores en *Ancho completo*, nunca *En caja* (Boxed).** El modo en caja mete un `div` extra dentro del contenedor y las rejillas dejan de ver a sus hijos: salen en una sola columna.
3. **Nada de *Efectos de movimiento* ni *Animación de entrada*.** Las animaciones ya las hace GSAP, y las dos se pelean. Además, un `transform` en un contenedor padre rompe el `position: fixed` de la cabecera y de la barra inferior del móvil.
4. **No tocar la pestaña *Estilo*.** Todo el aspecto sale del CSS. Esto es también lo que protege el diseño cuando edite el cliente: puede cambiar el texto de un titular, pero no su tamaño, porque ese control no está en su widget.

---

## Paso 0 · Ajustes globales de Elementor

1. **Elementor → Ajustes → General:** marca *Desactivar colores predeterminados* y *Desactivar fuentes predeterminadas*. Si no, el kit pinta los títulos y botones con su color de acento.
2. **Elementor → Ajustes → Avanzado → Habilitar carga de archivos sin filtrar (SVG):** actívalo. Sin esto no se pueden subir los iconos.
3. **Elementor → Ajustes → Funciones:** *Contenedor Flexbox* y *Rendimiento de marcado optimizado* activos (en Elementor 4 ya lo están por defecto).
4. **Sitio → Ajustes del sitio → Diseño:**
   - *Ancho del contenido* en 1440 px.
   - *Relleno de contenedores* a 0 en los cuatro lados.
   - *Espacio entre elementos* (columnas y filas) a 0.
   - *Espacio entre widgets* a 0.
5. **Sitio → Ajustes del sitio → Tipografía y Colores globales:** no hace falta tocarlos, el CSS manda. No borres nada.

## Paso 1 · Subir los archivos

Por FTP, crea `/wp-content/uploads/comunica/` y sube dentro:

```
wp-content/uploads/comunica/
├── css/        ← todo css/ del paquete
├── js/         ← todo js/ del paquete, con vendor/
├── fuentes/    ← assets/fuentes/
├── images/     ← assets/images/
└── video/      ← assets/video/
```

Respeta las mayúsculas y las rutas: el CSS y los bloques HTML las llevan escritas así.

Además, sube por la **Biblioteca de medios** las imágenes que van en widgets Imagen. En cada plano aparecen como «Imagen: `…/images/…`», y son 17 entre todas las páginas. Los widgets Imagen solo eligen de la biblioteca. Las que usan los bloques HTML (el póster del vídeo del hero) se leen de la carpeta del FTP.

**Comprobación:** abre `https://TU-DOMINIO/wp-content/uploads/comunica/js/comunica.js` en el navegador. Tiene que verse el código. Si sale un 404, la ruta está mal y nada va a funcionar.

## Paso 2 · Los cuatro snippets PHP

En WPCode o Code Snippets, crea un snippet PHP por archivo de `php/`, activado en todo el sitio:

| Snippet | Qué rompe si falta |
|---|---|
| `cargar-comunica.php` | **Todo.** Carga las cuatro hojas y los scripts, *después* de las de Elementor, que es lo que hace que las clases `cm-*` ganen los empates. Pegar el CSS en *Personalizar → CSS adicional* no garantiza ese orden. |
| `activar-shortcodes-en-html.php` | El formulario sale como texto: `[contact-form-7 id="123" …]`. Por diseño, el widget HTML de Elementor no ejecuta shortcodes. |
| `desactivar-autop.php` | Los campos del formulario salen descolocados, con `<p>` y `<br>` metidos entre etiqueta y campo. |
| `honeypot-antispam.php` | Nada visible. Sin él, solo se pierde el filtro contra robots del campo trampa `web`. |

**Por qué no se usa *Elementor → Custom Code*:** con Custom Code, el orden respecto a las hojas de Elementor depende de la prioridad que elijas, y si algún día se cambia, el diseño se descuadra en silencio. Con el snippet, las hojas se declaran dependientes de las de Elementor y WordPress garantiza el orden.

**Sobre los selectores de posición** (`:first-child`, `:last-child`, `:nth-child(odd)` y `> :not(:last-child)` del CSS base): siguen funcionando porque en Elementor 4 cada contenedor tiene exactamente los mismos hijos que el original, sin envoltorios intermedios. No metas widgets ni contenedores de más dentro de una rejilla, o la tarjeta impar dejará de ocupar el ancho completo.

## Paso 3 · Crear las páginas

Crea estas páginas con la plantilla **Elementor a ancho completo**. No uses *Elementor Lienzo*: Lienzo quita la cabecera y el pie del Theme Builder.

| Página | Slug | Plano |
|---|---|---|
| Inicio (portada en *Ajustes → Lectura*) | `/` | `ESTRUCTURA-WIDGETS-home.md` |
| Soluciones | `soluciones` | `ESTRUCTURA-WIDGETS-soluciones.md` |
| Nosotros | `nosotros` | `ESTRUCTURA-WIDGETS-nosotros.md` |
| Partners | `partners` | `ESTRUCTURA-WIDGETS-partners.md` |
| Contacto | `contacto` | `ESTRUCTURA-WIDGETS-contacto.md` |
| Legal (madre, vacía) | `legal` | — |
| Aviso legal (hija de Legal) | `legal/aviso-legal` | `ESTRUCTURA-WIDGETS-legal-aviso-legal.md` |
| Política de privacidad (hija) | `legal/privacidad` | `ESTRUCTURA-WIDGETS-legal-privacidad.md` |
| Política de cookies (hija) | `legal/cookies` | `ESTRUCTURA-WIDGETS-legal-cookies.md` |

Los slugs no son opcionales. Los enlaces de la web los llevan escritos, y la cabecera decide el enlace activo y el modo claro sobre el hero oscuro de Partners por la URL.

## Paso 4 · Cabecera y pie (Theme Builder)

**Cabecera:** *Plantillas → Theme Builder → Cabecera → Añadir*. Mostrar en todo el sitio.

- Un contenedor (ancho completo) con la clase `dl-landing`.
- Dentro, un widget **HTML** con la clase `dl-flat` y el contenido de `html/cabecera.html`.

Ese bloque lleva tres piezas:

- La cabecera.
- La barra fija inferior del móvil.
- Los degradados de marca, un `<svg>` invisible. **No lo borres:** lo usan el logotipo y los arcos decorativos de todas las páginas.

**Pie:** *Theme Builder → Pie → Añadir*. Mostrar en todo el sitio. Monta `ESTRUCTURA-WIDGETS-pie.md`, que va con widgets nativos. El contenedor exterior lleva `dl-landing`.

## Paso 5 · Contact Form 7

1. *Contacto → Añadir nuevo*, título «Contacto Comunica».
2. **Formulario:** borra lo que trae y pega `cf7/formulario-contacto.txt` tal cual. No lo reescribas a mano: en las etiquetas de CF7 las opciones sin comillas van *antes* que los valores entrecomillados, y al revés CF7 no reconoce la etiqueta y la imprime como texto.
3. **Correo:** copia `cf7/correo.txt`. Cambia `DOMINIO-DE-LA-WEB` por el dominio real en el remitente, o el correo acabará en spam.
4. **Mensajes** y **Ajustes adicionales:** copia `cf7/mensajes.txt`. Incluye `acceptance_as_validation: on`, que hace que el botón no esté desactivado hasta marcar la casilla de privacidad, como en el original.
5. Guarda y copia el ID del shortcode. Pégalo en `html/contacto-formulario.html` en lugar del `123`.

**El enlace de privacidad del formulario apunta a `/legal/privacidad`.** Esa página tiene ahora mismo un texto provisional que dice «Pendiente de redacción definitiva». Un formulario que recoge datos personales sin una política de privacidad real no cumple el RGPD. **Tiene que redactarla el responsable legal de Comunistone S.L. antes de publicar**; no es un detalle pendiente.

## Paso 6 · Montar las páginas

Abre el plano de la página y ve línea a línea.

- **Contenedor:** Disposición → *Ancho completo*. Si el plano dice `<section>`, `<article>`, `<nav>`, `<header>` o `<footer>`, elígelo en *Etiqueta HTML*. Clases en *Avanzado → Clases CSS*. No toques dirección, alineación, relleno ni hueco: el CSS los anula y solo añadirías ruido.
- **Contenedor raíz** de cada página: es el primero del plano, lleva `dl-landing` y la etiqueta `<main>`. Todas las secciones van dentro.
- **Título:** el texto entre comillas invertidas va tal cual en el campo *Título*, con sus `<span>` y `<em>`. Esas etiquetas son las que dan el segundo color, el subrayado de «tu hotel» y los saltos de línea. Elige la etiqueta (h1, h2, h3) que indica el plano.
- **Editor de texto:** pega el texto en la pestaña **Código** (no en Visual), con sus etiquetas.
- **Botón:** texto, enlace e icono (*Icono → Subir SVG*, desde `iconos/`). Si el plano dice «(despues)», el icono va detrás del texto. Deja la posición del icono como venga: la clase `is-icono-despues` ya lo coloca.
- **Icono:** *Subir SVG* desde `iconos/`.
- **Lista de iconos:** un elemento por línea del plano, con el icono indicado. El texto va con sus etiquetas.
- **Imagen:** elígela de la biblioteca, tamaño *Completo*. Rellena el texto alternativo que indica el plano; si es decorativa, déjalo vacío.
- **HTML:** pega el archivo de `html/` que dice el plano. Lleva la clase `dl-flat` siempre, porque hace que el envoltorio del widget no ocupe caja.
- **ID CSS:** cuando el plano dice «ID CSS del contenedor», va en *Avanzado → ID CSS*. Son los destinos de los enlaces con ancla (`/partners#portal`, `#wifi`…).

**Clases que no hay que tocar nunca:** `ms-*` (qué animación lleva la sección), `m-*` (las piezas que anima), `js-*` (los componentes con estado) e `is-on` (el elemento abierto al cargar). Si se borra una, esa pieza deja de moverse o de responder, sin ningún error visible.

**Las tres piezas que son aplicaciones** tienen su propio LÉEME o comentario al principio del archivo: la calculadora, el simulador de iAndrea y el formulario. Sus textos y parámetros están en un bloque `<script type="application/json">` al principio del widget HTML. El cliente puede cambiarlos ahí sin tocar el JavaScript:

- **Calculadora:** los límites de los deslizadores y los coeficientes de la fórmula.
- **Simulador:** los guiones de conversación.

**Textos legales:** cada página legal lleva todo el documento en **un solo Editor de texto** con la clase `legal-prose`. Se edita como un documento normal (títulos, párrafos y listas desde la barra del editor) y el CSS los formatea por etiqueta.

## Paso 7 · Comprobaciones

Recarga cada página desde arriba, con la caché vaciada.

**Aspecto**

- [ ] La cabecera flota como píldora transparente y, al bajar, gana fondo blanco translúcido y borde.
- [ ] En Partners, la cabecera empieza en blanco sobre el azul y pasa a la versión clara al bajar.
- [ ] El enlace de la página actual sale en cian y con la raya degradada debajo.
- [ ] Los títulos van en Space Grotesk, el texto en Plus Jakarta Sans y las cifras en JetBrains Mono. Comprueba en la pestaña *Red* que las fuentes cargan desde `/uploads/comunica/fuentes/` y no desde Google.
- [ ] Los iconos se ven con trazo fino, no macizos.
- [ ] Los arcos decorativos y el logotipo llevan su degradado azul. Si salen negros, falta el bloque de degradados de la cabecera.

**Animaciones** (bajando despacio)

- [ ] El titular del hero entra línea a línea y el vídeo del hotel aparece y se desplaza un poco al hacer scroll.
- [ ] Se dibuja el subrayado de «tu hotel».
- [ ] Las cifras (482, 17) cuentan desde 0 y las barras se llenan de izquierda a derecha.
- [ ] Las tarjetas de los bentos entran escalonadas.
- [ ] En escritorio, las tarjetas de «¿Cómo trabajamos?» se apilan y encogen un poco al bajar.
- [ ] En Nosotros, las cifras de la escala cuentan desde 0.

**Funcionamiento**

- [ ] Perfiles (Inicio): al pulsar una lama se abre esa y se cierran las demás. Funciona con el teclado (Tab + Intro).
- [ ] Diferenciales: al pulsar una tarjeta pasa a azul y se ensancha, y las demás se recolocan con una transición, sin huecos.
- [ ] Testimonios: las flechas y los avatares cambian la cita.
- [ ] Calculadora: los 5 deslizadores mueven las cifras al momento. Con los valores por defecto sale **343 € – 471 € al mes**.
- [ ] Soluciones: las pestañas de perfiles cambian el panel y responden a las flechas del teclado.
- [ ] Simulador de iAndrea: el chat responde. En «Llamada de reserva» suena, conecta, iAndrea habla con voz femenina, y Silenciar y Colgar funcionan.
- [ ] Formulario: `/contacto?intent=wifi` marca «Soluciones para mi hotel». Un envío con errores muestra los mensajes por campo. Un envío correcto muestra «Mensaje recibido» **y el correo llega**.
- [ ] Los anclajes (`/partners#portal`) bajan dejando la cabecera por encima del título.

**Móvil** (375 px)

- [ ] No hay scroll horizontal en ninguna página.
- [ ] El menú de hamburguesa abre y cierra, y también se cierra con Escape.
- [ ] La barra «Cuéntanos qué necesitas resolver» está fija abajo y no tapa el pie. En Contacto no aparece.
- [ ] La barra fija de la calculadora («Ahorro / mes») acompaña el scroll en su sección.

**Edición** (lo que justifica esta versión)

- [ ] Cambia el texto de un titular desde el panel y comprueba que conserva tamaño y color.
- [ ] Cambia una imagen por otra de la biblioteca y comprueba que conserva el recorte.
- [ ] Cambia el texto y el enlace de un botón.
- [ ] Edita un párrafo de la política de privacidad.
- [ ] Cambia una respuesta del simulador en su JSON y comprueba que el chat la dice.

---

## Cuando algo no sale

| Lo que ves | Qué pasa |
|---|---|
| Todo amontonado, sin espacios ni colores | No cargan las hojas (falta `cargar-comunica.php`, o un 404 en `/uploads/comunica/css/`), o el contenedor raíz no tiene la clase `dl-landing`. |
| Todo un poco más separado de lo normal | No se hizo el paso 0: relleno y hueco de contenedores siguen en 10 px. |
| Una rejilla sale en una sola columna | Ese contenedor está en *En caja*. Pásalo a *Ancho completo*. |
| Un elemento concreto sale sin estilo | Su clase `cm-*` está mal copiada (falta, sobra un espacio o lleva una letra cambiada). Compárala con el plano. |
| Un titular sale en la fuente del texto, no en Space Grotesk | La etiqueta no es la del plano (h1/h2/h3), o se pegaron estilos en la pestaña *Estilo*. |
| Un texto pierde el color o el subrayado de «tu hotel» | Se pegó en la pestaña *Visual* del editor y se perdieron las etiquetas `<span>`/`<em>`. Vuelve a pegarlo en *Código*. |
| Los iconos salen negros y macizos | Los SVG se subieron como imagen y no como icono, o falta el adaptador (02). |
| El logotipo o los arcos salen negros | Falta el `<svg>` de degradados del principio de `html/cabecera.html`. |
| La cabecera no se queda fija o la barra móvil se mueve con la página | Un contenedor padre tiene *Efectos de movimiento*, *Transformar* o *Animación de entrada*. Quítalos. |
| Las animaciones no arrancan | Mira la consola del navegador: un 404 en `/uploads/comunica/js/` o en `vendor/gsap.min.js`. O un plugin de optimización está retrasando o combinando scripts: excluye los de `/uploads/comunica/`. |
| Una sección no anima pero las demás sí | Falta su clase `ms-*` en el contenedor de la sección. |
| Las lamas, las pestañas o el bento no responden al clic | Falta una clase `js-*` o se borró `is-on` del elemento abierto por defecto. |
| El formulario sale como `[contact-form-7 id=…]` | Falta `activar-shortcodes-en-html.php`. Pasa igual con un formulario recién creado, porque el problema no es el formulario. |
| Los campos del formulario salen descolocados | Falta `desactivar-autop.php`. |
| CF7 imprime trozos como `[text* nombre …]` dentro del formulario | Esa etiqueta se reescribió a mano con las opciones en otro orden. Vuelve a pegar `formulario-contacto.txt`. |
| Un botón se queda de un color raro al pulsarlo | El tema pinta `:focus`. Ya está neutralizado al principio de la hoja 01; si vuelve a pasar, otro plugin añade estilos a `button`. |
| El simulador habla con voz masculina o no habla | El navegador no tiene voces en español instaladas (pasa en algunos Linux y Android). Sale el aviso «voz no disponible». No es un fallo del montaje. |

## Qué es distinto respecto al original

Lo que no ha quedado idéntico, y por qué:

- **La calculadora, el simulador de iAndrea y el formulario no son widgets nativos.** Son aplicaciones: deslizadores con una fórmula, un guion de conversación con voz sintética, y validación con envío. Van en widgets HTML con su JavaScript, y sus textos y parámetros se editan en el JSON del propio bloque.
- **El formulario lo envía Contact Form 7, no la web original.** Diferencias:
  - El botón de enviar es un `<input>`, así que la flecha y el barrido de color al pasar el ratón se dibujan con fondos CSS en lugar de con elementos.
  - CF7 corta el texto en el máximo de caracteres en vez de avisar.
  - El teléfono no admite puntos.
  - La referencia `COM-xxxxxx` se genera en el navegador.
  - Un envío marcado como spam muestra el mensaje de spam de CF7; el original fingía que se había enviado.
  - Las comprobaciones de las que se encargan CF7 y los snippets **no se han probado en un WordPress real**: hazlo con un envío de verdad antes de dar la web por buena.
- **El icono de las lamas de perfiles son dos widgets** (flecha y check), porque un widget Icono solo tiene un dibujo y aquí cambia al abrir. El JS muestra uno u otro.
- **El enlace de LinkedIn del pie es un bloque HTML:** lleva dos iconos (el logotipo y la flecha de enlace externo) y el widget Botón solo admite uno. Las demás redes sociales que se pidieron siguen pendientes de URL.
- **El segundo botón del hero en móvil** cabe en una línea, mientras que el original lo partía en dos. En el original, el icono y el texto iban en un `<span>` interior que estrechaba el texto.
- **Simulador:** dos correcciones respecto al original.
  - Silenciar durante el tono de llamada ahora silencia también la primera respuesta; el original la decía igualmente.
  - Las flechas del teclado mueven el foco a la pestaña elegida.

**Encontrado en la web original durante la conversión.** No es del paquete, pero conviene corregirlo en las dos versiones. Tres imágenes están declaradas a 1400×1750 y el archivo real mide 1792×2400:

- `home-differentials-engineer-hands.webp`
- `home-catalog-keycard-still.webp`
- `nosotros-trust-delegar.webp`

Al terminar de cargar, la imagen cambia de proporción y la rejilla de diferenciales crece 40 px. En WordPress se ve directamente con su proporción real.

## Si hay que regenerar el paquete

Los generadores están en `web nueva/_elementor-fuente/herramientas/`. Si cambia la web original, el proceso es:

1. Volver a capturar el HTML.
2. Ejecutar `convertir.py`, después `css.py` y después `generar.py`.

El CSS de las clases `cm-*` se compila con el Tailwind del propio proyecto, así que cualquier cambio de diseño en la web llega igual.

**Ojo:** los nombres `cm-*` se reparten de nuevo en cada generación. Si se regenera con la web ya montada, hay que repasar el plano entero o conservar el `03-clases.css` anterior.
