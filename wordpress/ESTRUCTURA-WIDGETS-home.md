# Estructura de widgets · Inicio

Pagina de WordPress: `/`. Plantilla: **Elementor a ancho completo** (Elementor Canvas no: la cabecera y el pie son plantillas del Theme Builder).

Como leer este plano:

- Cada linea es un elemento, en el orden en que se monta. La sangria es el anidamiento.
- **Contenedor**: Disposicion → *Ancho completo*. Todo lo demas (direccion, relleno, hueco) se queda como venga: lo anula el CSS. Si pone `<section>` u otra etiqueta, se elige en Disposicion → Etiqueta HTML.
- **clases**: se pegan tal cual en Avanzado → Clases CSS, separadas por espacios.
- Los textos entre comillas invertidas se pegan en la pestana *Codigo* / *Texto* del widget, con sus etiquetas `<span>`/`<em>` si las llevan: son las que dan el color y el subrayado.
- Ningun widget lleva estilos del panel, efectos de movimiento ni animacion de entrada.

## Contenedor raiz

- **Contenedor** `<main>` · clases: `dl-landing cm-5q`
    Contiene todas las secciones de abajo, en este orden.

## 1. Seccion `hero`

- **Contenedor** `<section>` · clases: `cm-k tone-light ms-hero`
    - **Contenedor** · clases: `cm-l`
    - **Contenedor** · clases: `cm-2`
    - **Contenedor** · clases: `cm-m`
        - **Contenedor** · clases: `cm-n`
            - **Contenedor** · clases: `cm-o`
                - **Titulo** · clases: `cm-p` · etiqueta `h1`
                    Titulo: `<span class="block text-balance m-line">Que la tecnología de <em class="mark-hotel mark-hotel-accent">tu hotel</em> funcione,</span> <span class="mt-1 block text-balance text-cyan-strong m-line">sin que tu equipo tenga que estar pendiente</span>`
                - **Editor de texto** · clases: `cm-q m-lead`
                    Texto: `Conectividad, voz fija y móvil, WiFi, IPTV e inteligencia artificial gestionadas por un único equipo especializado en hoteles, que conoce tu operativa y tu instalación`
                - **Contenedor** · clases: `cm-r m-ctas`
                    - **Boton** · clases: `cm-s cm-btn is-btn-marca is-icono-despues group/btn`
                        Texto: «Habla con un especialista hotelero» · Enlace: `/contacto` · Icono: `arrow-right.svg` (despues)
                    - **Boton** · clases: `cm-t cm-btn is-btn-marca group/btn`
                        Texto: «Solicita una revisión de tu factura» · Enlace: `/contacto?intent=factura` · Icono: `file-text.svg` (antes)
            - **HTML** · clases: `dl-flat` · pegar `html/home-01.html`
                Por que HTML: Video en bucle del hero: necesita role/aria-label y arrancar solo si el usuario no pide movimiento reducido, cosas que el widget de video no hace.

## 2. Seccion `cifras`

- **Contenedor** `<section>` · clases: `cm-u tone-dark ms-cifras`
    - **Contenedor** · clases: `cm-v`
    - **Contenedor** · clases: `cm-w`
        - **Contenedor** · clases: `cm-x`
            - **Contenedor** · clases: `cm-y group/stat m-stat`
                - **Contenedor** · clases: `cm-z m-stat-bar`
                - **Icono** · clases: `cm-10 m-stat-icon` · Icono: `hotel.svg`
                - **Editor de texto** · clases: `cm-o`
                    Texto: `<span class="block text-metric text-white is-tabular"><span class="m-count">482</span></span><span class="mt-1.5 block text-body text-fg-inverse-muted text-pretty sm:mt-2">hoteles en los que hemos trabajado</span>`
            - **Contenedor** · clases: `cm-y group/stat m-stat`
                - **Contenedor** · clases: `cm-z m-stat-bar`
                - **Icono** · clases: `cm-10 m-stat-icon` · Icono: `globe.svg`
                - **Editor de texto** · clases: `cm-o`
                    Texto: `<span class="block text-metric text-white is-tabular"><span class="m-count">17</span></span><span class="mt-1.5 block text-body text-fg-inverse-muted text-pretty sm:mt-2">países con soporte especializado</span>`
            - **Contenedor** · clases: `cm-y group/stat m-stat`
                - **Contenedor** · clases: `cm-z m-stat-bar`
                - **Icono** · clases: `cm-10 m-stat-icon` · Icono: `user.svg`
                - **Editor de texto** · clases: `cm-o`
                    Texto: `<span class="block text-metric text-white is-tabular"><span class="m-count">1</span></span><span class="mt-1.5 block text-body text-fg-inverse-muted text-pretty sm:mt-2">interlocutor para todos tus servicios</span>`
            - **Contenedor** · clases: `cm-y group/stat m-stat`
                - **Contenedor** · clases: `cm-z m-stat-bar`
                - **Icono** · clases: `cm-10 m-stat-icon` · Icono: `headphones.svg`
                - **Editor de texto** · clases: `cm-o`
                    Texto: `<span class="block text-display-3 text-cyan text-balance">Soporte que te conoce</span><span class="mt-1.5 block text-body text-fg-inverse-muted text-pretty sm:mt-2">Personas que saben qué tienes instalado antes de que se lo expliques.</span>`
        - **Contenedor** · clases: `cm-11`
            - **Contenedor** · clases: `cm-12 group/stat m-stat`
                - **Contenedor** · clases: `cm-z m-stat-bar`
                - **Icono** · clases: `cm-10 m-stat-icon` · Icono: `wifi.svg`
                - **Editor de texto** · clases: `cm-o`
                    Texto: `<span class="block font-mono text-eyebrow tracking-[0.2em] text-cyan uppercase">Más de</span><span class="mt-1 block text-metric text-white is-tabular"><span class="m-count">12.500</span></span><span class="mt-1.5 block text-body text-fg-inverse-muted text-pretty sm:mt-2">access points WiFi</span>`
            - **Contenedor** · clases: `cm-12 group/stat m-stat`
                - **Contenedor** · clases: `cm-z m-stat-bar`
                - **Icono** · clases: `cm-10 m-stat-icon` · Icono: `shield-check.svg`
                - **Editor de texto** · clases: `cm-o`
                    Texto: `<span class="block font-mono text-eyebrow tracking-[0.2em] text-cyan uppercase">Más de</span><span class="mt-1 block text-metric text-white is-tabular"><span class="m-count">550</span></span><span class="mt-1.5 block text-body text-fg-inverse-muted text-pretty sm:mt-2">firewalls</span>`
            - **Contenedor** · clases: `cm-12 group/stat m-stat`
                - **Contenedor** · clases: `cm-z m-stat-bar`
                - **Icono** · clases: `cm-10 m-stat-icon` · Icono: `bed-double.svg`
                - **Editor de texto** · clases: `cm-o`
                    Texto: `<span class="block font-mono text-eyebrow tracking-[0.2em] text-cyan uppercase">Más de</span><span class="mt-1 block text-metric text-white is-tabular"><span class="m-count">35.000</span></span><span class="mt-1.5 block text-body text-fg-inverse-muted text-pretty sm:mt-2">habitaciones gestionadas</span>`

## 3. Seccion `problema`

- **Contenedor** `<section>` · clases: `cm-13 tone-light ms-problema`
    - **Contenedor** · clases: `cm-3`
        - **Titulo** · clases: `cm-14` · etiqueta `h2`
            Titulo: `Tu huésped no distingue entre tecnología y servicio`
        - **Contenedor** · clases: `(ninguna)`
            - **Editor de texto** · clases: `cm-15`
                Texto: `Solo sabe que:`
            - **Contenedor** · clases: `cm-16`
                - **Contenedor** `<article>` · clases: `cm-17 group/cell m-cell`
                    - **Contenedor** · clases: `cm-18`
                        - **Icono** · clases: `cm-19` · Icono: `wifi.svg`
                        - **Contenedor** · clases: `cm-1a`
                    - **Editor de texto** · clases: `cm-1b`
                        Texto: `El WiFi no funciona`
                - **Contenedor** `<article>` · clases: `cm-17 group/cell m-cell`
                    - **Contenedor** · clases: `cm-18`
                        - **Icono** · clases: `cm-19` · Icono: `activity.svg`
                        - **Contenedor** · clases: `cm-1a`
                    - **Editor de texto** · clases: `cm-1b`
                        Texto: `La conexión falla`
                - **Contenedor** `<article>` · clases: `cm-17 group/cell m-cell`
                    - **Contenedor** · clases: `cm-18`
                        - **Icono** · clases: `cm-19` · Icono: `circle-question-mark.svg`
                        - **Contenedor** · clases: `cm-1a`
                    - **Editor de texto** · clases: `cm-1b`
                        Texto: `Algo que debería ser fácil le está dando problemas`
            - **Contenedor** · clases: `cm-1c`
                - **Editor de texto** · clases: `cm-1d`
                    Texto: `Y mientras tanto, alguien de tu equipo intenta averiguar cuál de los proveedores tiene que resolver el problema.`
        - **Contenedor** · clases: `cm-1e`
            - **HTML** · clases: `dl-flat` · pegar `html/home-02.html`
                Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
            - **Contenedor** · clases: `cm-1f`
                - **Contenedor** · clases: `cm-1g`
                    - **Contenedor** · clases: `cm-1h`
                    - **Editor de texto** · clases: `cm-1i`
                        Texto: `La tecnología debería hacer más sencillo gestionar un hotel, no añadir un obstáculo nuevo.`
                - **Editor de texto** · clases: `cm-1j`
                    Texto: `Por eso en Comunica no empezamos enseñándote un catálogo.`
        - **Contenedor** · clases: `cm-1k`
            - **Editor de texto** · clases: `cm-5`
                Texto: `Empezamos preguntando:`
            - **Lista de iconos** · clases: `cm-1l`
                - `<span class="font-mono text-data text-cyan-ink-strong is-tabular">01</span><span class="text-card-title">¿Qué está fallando?</span>`
                - `<span class="font-mono text-data text-cyan-ink-strong is-tabular">02</span><span class="text-card-title">¿Qué te está haciendo perder tiempo?</span>`
                - `<span class="font-mono text-data text-cyan-ink-strong is-tabular">03</span><span class="text-card-title">¿Qué estás pagando que quizá ya no necesitas?</span>`
                - `<span class="font-mono text-data text-cyan-ink-strong is-tabular">04</span><span class="text-card-title">¿Qué podría funcionar mejor?</span>`
            - **Editor de texto** · clases: `cm-1m`
                Texto: `Y después buscamos la forma de resolverlo.`
    - **HTML** · clases: `dl-flat` · pegar `html/home-03.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.

## 4. Seccion `valor`

- **Contenedor** `<section>` · clases: `cm-1n tone-light ms-valor`
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `cm-1o`
            - **Titulo** · clases: `cm-1p` · etiqueta `h2`
                Titulo: `Tecnología hotelera que funciona`
            - **Editor de texto** · clases: `cm-1q`
                Texto: `Comunica integra y gestiona las telecomunicaciones y soluciones tecnológicas que necesita un hotel`
        - **Contenedor** · clases: `cm-1r`
            - **Contenedor** · clases: `cm-1s m-cell`
                - **Contenedor** · clases: `(ninguna)`
                    - **Editor de texto** · clases: `cm-5`
                        Texto: `Soluciones`
                    - **Lista de iconos** · clases: `cm-1t`
                        - `Conectividad`
                        - `Voz fija - Móvil`
                        - `WiFi`
                        - `IPTV`
                        - `Integraciones`
                        - `Inteligencia artificial`
                        - `Soporte`
                - **Contenedor** · clases: `cm-1u`
                    - **Editor de texto** · clases: `cm-1v`
                        Texto: `Pero <em class="mark-hotel">nuestra diferencia</em> no está en tener muchos servicios.`
                    - **Editor de texto** · clases: `cm-1w`
                        Texto: `Está en conseguir que tú tengas menos cosas de las que preocuparte.`
            - **Contenedor** · clases: `cm-1x m-cell`
                - **Imagen** · clases: `cm-1y`
                    Imagen: `/wp-content/uploads/comunica/images/home/home-catalog-keycard-still.webp` · Texto alternativo: «» (decorativa: dejar vacio)
            - **Contenedor** · clases: `cm-1z m-cell`
                - **Editor de texto** · clases: `cm-20 is-tabular`
                    Texto: `01`
                - **Editor de texto** · clases: `cm-21`
                    Texto: `Un equipo que entiende tu operativa.`
            - **Contenedor** · clases: `cm-1z m-cell`
                - **Editor de texto** · clases: `cm-20 is-tabular`
                    Texto: `02`
                - **Editor de texto** · clases: `cm-21`
                    Texto: `Un interlocutor que conoce tu instalación.`
            - **Contenedor** · clases: `cm-1z m-cell`
                - **Editor de texto** · clases: `cm-20 is-tabular`
                    Texto: `03`
                - **Editor de texto** · clases: `cm-21`
                    Texto: `Alguien que te ayuda a detectar qué mejorar.`
            - **Contenedor** · clases: `cm-22 m-cell`
                - **Editor de texto** · clases: `cm-b`
                    Texto: `Entendemos. Proponemos. Resolvemos.`

## 5. Seccion `testimonios`

- **Contenedor** `<section>` · clases: `cm-23 tone-light js-testimonios ms-testimonios`
    - **Contenedor** · clases: `cm-w`
        - **Contenedor** · clases: `(ninguna)`
            - **Contenedor** · clases: `cm-24`
                - **Editor de texto** · clases: `cm-5`
                    Texto: `Experiencias reales`
                - **Contenedor** · clases: `cm-25`
                    - **Contenedor** · clases: `cm-26 js-prev js-btn`
                        - **Icono** · clases: `cm-27` · Icono: `arrow-right.svg`
                    - **Contenedor** · clases: `cm-26 js-next js-btn`
                        - **Icono** · clases: `cm-28` · Icono: `arrow-right.svg`
            - **Contenedor** · clases: `cm-29`
                - **Contenedor** · clases: `cm-2a`
                    - **Contenedor** · clases: `cm-2b js-avatar is-on js-btn`
                        - **Editor de texto** · clases: `cm-2c`
                            Texto: `AS`
                        - **Contenedor** · clases: `cm-2d js-solo-on`
                    - **Contenedor** · clases: `cm-2e js-avatar js-btn`
                        - **Editor de texto** · clases: `cm-2c`
                            Texto: `JC`
                        - **Contenedor** · clases: `cm-2d js-solo-on`
                    - **Contenedor** · clases: `cm-2f js-avatar js-btn`
                        - **Editor de texto** · clases: `cm-2c`
                            Texto: `AR`
                        - **Contenedor** · clases: `cm-2d js-solo-on`
                - **Contenedor** · clases: `cm-o js-slides`
                    - **Contenedor** · clases: `cm-2g js-slide is-on`
                        - **Editor de texto** · clases: `cm-2h`
                            Texto: `«`
                        - **Contenedor** · clases: `cm-2i`
                            - **Editor de texto** · clases: `cm-2j`
                                Texto: `Nuestras campañas cambian con poca antelación. Comunica se adapta cada vez, sin trasladarnos la complejidad. Es un proveedor con el que se puede trabajar a nuestro ritmo.`
                        - **Contenedor** · clases: `cm-2k`
                            - **Editor de texto** · clases: `cm-2l`
                                Texto: `Alberto S.`
                            - **Editor de texto** · clases: `cm-2m`
                                Texto: `Director de Producto de una agencia de medios multinacional`
                    - **Contenedor** · clases: `cm-2g js-slide`
                        - **Editor de texto** · clases: `cm-2h`
                            Texto: `«`
                        - **Contenedor** · clases: `cm-2i`
                            - **Editor de texto** · clases: `cm-2j`
                                Texto: `Cuando hay una incidencia en un hotel, hablamos con un técnico que ya conoce la instalación. No hay que explicar el problema desde cero ni solventar burocracia innecesaria. Esa cercanía y ese conocimiento nos ahorran mucho tiempo.`
                        - **Contenedor** · clases: `cm-2k`
                            - **Editor de texto** · clases: `cm-2l`
                                Texto: `Jordi C.`
                            - **Editor de texto** · clases: `cm-2m`
                                Texto: `IT Director en una cadena y gestora de hoteles boutique`
                    - **Contenedor** · clases: `cm-2g js-slide`
                        - **Editor de texto** · clases: `cm-2h`
                            Texto: `«`
                        - **Contenedor** · clases: `cm-2i`
                            - **Editor de texto** · clases: `cm-2j`
                                Texto: `Comunica entiende cómo funcionan nuestros hoteles, los diseña y configura con nosotros. Nos acompañan en cada decisión tecnológica. Y además, sin intentar vendernos lo que no necesitamos.`
                        - **Contenedor** · clases: `cm-2k`
                            - **Editor de texto** · clases: `cm-2l`
                                Texto: `Alejandro R.`
                            - **Editor de texto** · clases: `cm-2m`
                                Texto: `CTO de la mayor cadena hotelera de España`

## 6. Seccion `calculadora`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `calculadora`

- **Contenedor** `<section>` · clases: `cm-2n tone-dark js-calculadora ms-calculadora`
    - **Contenedor** · clases: `cm-2o`
    - **HTML** · clases: `dl-flat` · pegar `html/home-04.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
    - **Contenedor** · clases: `cm-w`
        - **Contenedor** · clases: `(ninguna)`
            - **Contenedor** · clases: `cm-2p m-reveal`
                - **Titulo** · clases: `cm-1p` · etiqueta `h2`
                    Titulo: `¿Cuánto te cuesta hoy la complejidad de tus telecomunicaciones?`
                - **Editor de texto** · clases: `cm-2q`
                    Texto: `Cuando un hotel acumula operadores, contratos y servicios a lo largo de los años, es fácil acabar pagando por duplicidades, servicios que ya no se utilizan o soluciones que nunca se han revisado.`
                - **Editor de texto** · clases: `cm-2r`
                    Texto: `Haz una primera estimación de cuánto podrías optimizar`
            - **HTML** · clases: `dl-flat` · pegar `html/home-calculadora.html`
                Por que HTML: Deslizadores y resultado de la calculadora: son controles <input type=range> y una cifra que calcula el JS; Elementor no tiene widget para eso.
            - **Contenedor** · clases: `cm-2s m-reveal`
                - **Editor de texto** · clases: `cm-2t`
                    Texto: `¿Quieres saber qué hay realmente detrás de este número?`
                - **Editor de texto** · clases: `cm-2u`
                    Texto: `Revisamos contigo tus servicios y tu factura actual para detectar dónde puede existir margen de mejora`
                - **Boton** · clases: `cm-2v cm-btn is-btn-marca is-icono-despues group/btn`
                    Texto: «Solicita una revisión de tu factura» · Enlace: `/contacto?intent=factura&habitaciones=60&gasto=1500&plantas=4&areas=4&extensiones=15` · Icono: `arrow-right.svg` (despues)

## 7. Seccion `perfiles`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `perfiles`

- **Contenedor** `<section>` · clases: `cm-2w tone-light js-acordeon ms-perfiles`
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `(ninguna)`
            - **Contenedor** · clases: `cm-2x m-head`
                - **Titulo** · clases: `cm-1p` · etiqueta `h2`
                    Titulo: `No todos los hoteles necesitan lo mismo`
                - **Editor de texto** · clases: `cm-1q`
                    Texto: `Por eso no empezamos por nuestros productos. Empezamos por <em class="mark-hotel">tu hotel</em>`
            - **Contenedor** · clases: `cm-2y`
                - **Contenedor** · clases: `cm-2z m-lama js-acc is-on`
                    - **Contenedor** · clases: `cm-30 group/lama js-btn`
                        - **Editor de texto** · clases: `cm-31 is-tabular`
                            Texto: `1`
                            Cambia con el JS: no tocar sus clases.
                        - **Editor de texto** · clases: `cm-32`
                            Texto: `Hotel Conectado`
                            Cambia con el JS: no tocar sus clases.
                        - **Icono** · clases: `cm-33` · Icono: `check.svg`
                            Cambia con el JS: no tocar sus clases.
                        - **Icono** · clases: `cm-34` · Icono: `arrow-right.svg`
                            Cambia con el JS: no tocar sus clases.
                    - **Contenedor** · clases: `cm-35`
                        - **Contenedor** · clases: `cm-36`
                            - **Contenedor** · clases: `cm-o`
                                - **Editor de texto** · clases: `cm-37`
                                    Texto: `Para hoteles independientes`
                                - **Titulo** · clases: `cm-38` · etiqueta `h3`
                                    Titulo: `Lo esencial bien resuelto`
                                - **Editor de texto** · clases: `cm-39`
                                    Texto: `Tienes un hotel que gestionar. No necesitas convertirte también en experto en telecomunicaciones.`
                                - **Editor de texto** · clases: `cm-3a`
                                    Texto: `Centralizamos las comunicaciones esenciales de tu establecimiento para que conectividad, telefonía fija y móvil y WiFi funcionen bajo una misma gestión.`
                                - **Contenedor** · clases: `cm-3b`
                                    - **Boton** · clases: `cm-3c cm-btn is-btn-marca is-icono-despues group/btn`
                                        Texto: «Quiero saber si encaja con mi hotel» · Enlace: `/contacto?intent=hotel_conectado` · Icono: `arrow-right.svg` (despues)
                            - **Contenedor** · clases: `cm-3d`
                                - **Imagen** · clases: `cm-3e`
                                    Imagen: `/wp-content/uploads/comunica/images/home/home-profile-conectado-independiente.webp` · Texto alternativo: «» (decorativa: dejar vacio)
                                - **Editor de texto** · clases: `cm-3f`
                                    Texto: `1 propiedad`
                - **Contenedor** · clases: `cm-3g m-lama js-acc`
                    - **Contenedor** · clases: `cm-30 group/lama js-btn`
                        - **Editor de texto** · clases: `cm-31 is-tabular`
                            Texto: `2-10`
                            Cambia con el JS: no tocar sus clases.
                        - **Editor de texto** · clases: `cm-32`
                            Texto: `Hotel Consolidado`
                            Cambia con el JS: no tocar sus clases.
                        - **Icono** · clases: `cm-33` · Icono: `check.svg`
                            Cambia con el JS: no tocar sus clases.
                        - **Icono** · clases: `cm-34` · Icono: `arrow-right.svg`
                            Cambia con el JS: no tocar sus clases.
                    - **Contenedor** · clases: `cm-35`
                        - **Contenedor** · clases: `cm-36`
                            - **Contenedor** · clases: `cm-o`
                                - **Editor de texto** · clases: `cm-37`
                                    Texto: `Para pequeñas cadenas`
                                - **Titulo** · clases: `cm-38` · etiqueta `h3`
                                    Titulo: `Varias propiedades. Una sola forma de gestionarlas`
                                - **Editor de texto** · clases: `cm-39`
                                    Texto: `Más hoteles no deberían significar más contratos, más facturas y más proveedores a los que perseguir cuando algo falla.`
                                - **Editor de texto** · clases: `cm-3a`
                                    Texto: `Centralizamos las telecomunicaciones fijas y móviles de todas tus propiedades para simplificar la gestión del grupo.`
                                - **Contenedor** · clases: `cm-3b`
                                    - **Boton** · clases: `cm-3c cm-btn is-btn-marca is-icono-despues group/btn`
                                        Texto: «Quiero centralizar mi cadena» · Enlace: `/contacto?intent=hotel_consolidado` · Icono: `arrow-right.svg` (despues)
                            - **Contenedor** · clases: `cm-3d`
                                - **Imagen** · clases: `cm-3e`
                                    Imagen: `/wp-content/uploads/comunica/images/home/home-profile-consolidado-grupo.webp` · Texto alternativo: «» (decorativa: dejar vacio)
                                - **Editor de texto** · clases: `cm-3f`
                                    Texto: `2-10 propiedades`
                - **Contenedor** · clases: `cm-3g m-lama js-acc`
                    - **Contenedor** · clases: `cm-30 group/lama js-btn`
                        - **Editor de texto** · clases: `cm-31 is-tabular`
                            Texto: `10-50`
                            Cambia con el JS: no tocar sus clases.
                        - **Editor de texto** · clases: `cm-32`
                            Texto: `Hotel Gestionado`
                            Cambia con el JS: no tocar sus clases.
                        - **Icono** · clases: `cm-33` · Icono: `check.svg`
                            Cambia con el JS: no tocar sus clases.
                        - **Icono** · clases: `cm-34` · Icono: `arrow-right.svg`
                            Cambia con el JS: no tocar sus clases.
                    - **Contenedor** · clases: `cm-35`
                        - **Contenedor** · clases: `cm-36`
                            - **Contenedor** · clases: `cm-o`
                                - **Editor de texto** · clases: `cm-37`
                                    Texto: `Para cadenas en crecimiento`
                                - **Titulo** · clases: `cm-38` · etiqueta `h3`
                                    Titulo: `Una cadena. Un mismo estándar tecnológico`
                                - **Editor de texto** · clases: `cm-39`
                                    Texto: `Cuando una cadena crece, la tecnología también tiene que hacerlo.`
                                - **Editor de texto** · clases: `cm-3a`
                                    Texto: `Homogeneizamos comunicaciones fijas y móviles, conectividad y experiencia digital entre propiedades y las integramos con los sistemas del hotel.`
                                - **Contenedor** · clases: `cm-3b`
                                    - **Boton** · clases: `cm-3c cm-btn is-btn-marca is-icono-despues group/btn`
                                        Texto: «Habla con un especialista» · Enlace: `/contacto?intent=hotel_gestionado` · Icono: `arrow-right.svg` (despues)
                            - **Contenedor** · clases: `cm-3d`
                                - **Imagen** · clases: `cm-3e`
                                    Imagen: `/wp-content/uploads/comunica/images/home/home-profile-gestionado-cadena.webp` · Texto alternativo: «» (decorativa: dejar vacio)
                                - **Editor de texto** · clases: `cm-3f`
                                    Texto: `10-50 propiedades`
                - **Contenedor** · clases: `cm-3g m-lama js-acc`
                    - **Contenedor** · clases: `cm-30 group/lama js-btn`
                        - **Editor de texto** · clases: `cm-31 is-tabular`
                            Texto: `50+`
                            Cambia con el JS: no tocar sus clases.
                        - **Editor de texto** · clases: `cm-32`
                            Texto: `Proyecto Especializado`
                            Cambia con el JS: no tocar sus clases.
                        - **Icono** · clases: `cm-33` · Icono: `check.svg`
                            Cambia con el JS: no tocar sus clases.
                        - **Icono** · clases: `cm-34` · Icono: `arrow-right.svg`
                            Cambia con el JS: no tocar sus clases.
                    - **Contenedor** · clases: `cm-35`
                        - **Contenedor** · clases: `cm-36`
                            - **Contenedor** · clases: `cm-o`
                                - **Editor de texto** · clases: `cm-37`
                                    Texto: `Para grandes cadenas`
                                - **Titulo** · clases: `cm-38` · etiqueta `h3`
                                    Titulo: `No hace falta sustituir lo que funciona para resolver lo que falta`
                                - **Editor de texto** · clases: `cm-39`
                                    Texto: `Quizá no necesites cambiar tu infraestructura. Quizá necesites resolver únicamente aquello que tu proveedor habitual no puede cubrir. Entramos ahí.`
                                - **Editor de texto** · clases: `cm-3a`
                                    Texto: `Diseñamos e integramos soluciones tecnológicas específicas, de la voz fija y móvil al PMS, dentro de la arquitectura existente.`
                                - **Contenedor** · clases: `cm-3b`
                                    - **Boton** · clases: `cm-3c cm-btn is-btn-marca is-icono-despues group/btn`
                                        Texto: «Cuéntanos tu proyecto» · Enlace: `/contacto?intent=proyecto_especializado` · Icono: `arrow-right.svg` (despues)
                            - **Contenedor** · clases: `cm-3d`
                                - **Imagen** · clases: `cm-3e`
                                    Imagen: `/wp-content/uploads/comunica/images/home/home-profile-especializado-proyecto.webp` · Texto alternativo: «» (decorativa: dejar vacio)
                                - **Editor de texto** · clases: `cm-3f`
                                    Texto: `50+ propiedades`

## 8. Seccion `innovacion`

- **Contenedor** `<section>` · clases: `cm-3h tone-light ms-innovacion`
    - **Contenedor** · clases: `cm-w`
        - **Contenedor** · clases: `cm-2p`
            - **Editor de texto** · clases: `cm-5`
                Texto: `Innovación aplicada`
            - **Titulo** · clases: `cm-6` · etiqueta `h2`
                Titulo: `Tecnología que no solo resuelve. También se adelanta`
            - **Editor de texto** · clases: `cm-1q`
                Texto: `No innovamos para añadir más tecnología al hotel. Innovamos cuando encontramos una forma de quitar trabajo, reducir complejidad o mejorar la experiencia del huésped`

## 9. Seccion `iandrea`

- **Contenedor** `<section>` · clases: `cm-3i tone-dark ms-iandrea`
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `cm-3j`
            - **Contenedor** · clases: `cm-o`
                - **Editor de texto** · clases: `cm-3k`
                    Texto: `Innovación en telefonía hotelera`
                - **Titulo** · clases: `cm-3l` · etiqueta `h2`
                    Titulo: `Extensión Dinámica`
                - **Editor de texto** · clases: `cm-3m`
                    Texto: `La extensión de la habitación, en el móvil del huésped`
                - **Contenedor** · clases: `cm-3n`
                    - **Editor de texto** · clases: `cm-1j`
                        Texto: `El teléfono de la habitación lleva décadas formando parte del hotel.`
                    - **Editor de texto** · clases: `cm-1j`
                        Texto: `Pero muchos huéspedes ya llevan en el bolsillo el dispositivo con el que prefieren comunicarse.`
                    - **Editor de texto** · clases: `cm-1j`
                        Texto: `Con la Extensión Dinámica de Comunica, el huésped escanea un código QR y puede utilizar su propio móvil como extensión de la habitación durante su estancia.`
                - **Lista de iconos** · clases: `cm-3o`
                    - [`check.svg`] `Menos hardware`
                    - [`check.svg`] `Menos mantenimiento`
                    - [`check.svg`] `Experiencia mobile-first`
                - **Editor de texto** · clases: `cm-3p`
                    Texto: `Para el hotel, supone una nueva forma de plantear la telefonía de las habitaciones y resulta especialmente interesante en reformas, ampliaciones y nuevos proyectos.`
                - **Contenedor** · clases: `cm-3q`
                    - **Boton** · clases: `cm-3r cm-btn is-btn-marca is-icono-despues group/btn`
                        Texto: «Conoce la Extensión Dinámica» · Enlace: `/contacto?intent=extension` · Icono: `arrow-right.svg` (despues)
            - **Contenedor** · clases: `cm-3s`
                - **Contenedor** · clases: `cm-3t`
                    - **Imagen** · clases: `cm-3u`
                        Imagen: `/wp-content/uploads/comunica/images/soluciones/soluciones-extension-desk-sin-telefono.webp` · Texto alternativo: «» (decorativa: dejar vacio)
                - **Contenedor** · clases: `cm-3v`
                    - **Contenedor** · clases: `cm-3w m-step`
                        - **Contenedor** · clases: `cm-3x`
                            - **Editor de texto** · clases: `cm-3y is-tabular`
                                Texto: `01`
                            - **Icono** · clases: `cm-3z` · Icono: `hotel.svg`
                        - **Editor de texto** · clases: `cm-o`
                            Texto: `<span class="block text-body-sm font-semibold text-pretty">Habitación 304</span><span class="block font-mono text-[0.75rem] text-pretty text-fg-inverse-muted">Huésped conectado</span>`
                    - **Contenedor** · clases: `cm-3w m-step`
                        - **Contenedor** · clases: `cm-3x`
                            - **Editor de texto** · clases: `cm-3y is-tabular`
                                Texto: `02`
                            - **Icono** · clases: `cm-3z` · Icono: `smartphone.svg`
                        - **Editor de texto** · clases: `cm-o`
                            Texto: `<span class="block text-body-sm font-semibold text-pretty">Código QR en la habitación</span><span class="block font-mono text-[0.75rem] text-pretty text-fg-inverse-muted">Escanear al llegar</span>`
                    - **Contenedor** · clases: `cm-3w m-step`
                        - **Contenedor** · clases: `cm-3x`
                            - **Editor de texto** · clases: `cm-3y is-tabular`
                                Texto: `03`
                            - **Icono** · clases: `cm-3z` · Icono: `phone-call.svg`
                        - **Editor de texto** · clases: `cm-o`
                            Texto: `<span class="block text-body-sm font-semibold text-pretty">Móvil del huésped</span><span class="block font-mono text-[0.75rem] text-pretty text-fg-inverse-muted">Ext. 304 Activa</span>`
                - **Lista de iconos** · clases: `cm-40`
                    - [`circle-check-big.svg`] `Llamada directa a Recepción`
                    - [`circle-check-big.svg`] `Room Service`

## 10. Seccion `extension`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `wifi`

- **Contenedor** `<section>` · clases: `cm-41 tone-light ms-extension`
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `(ninguna)`
            - **Contenedor** · clases: `cm-3j`
                - **Contenedor** · clases: `cm-42 m-reveal`
                    - **Editor de texto** · clases: `cm-43`
                        Texto: `WiFi hotelero`
                    - **Titulo** · clases: `cm-44` · etiqueta `h2`
                        Titulo: `Un buen WiFi no empieza en el router.`
                    - **Editor de texto** · clases: `cm-45`
                        Texto: `Empieza entendiendo tu hotel`
                    - **Contenedor** · clases: `cm-46`
                        - **Editor de texto** · clases: `cm-47`
                            Texto: `La cobertura que necesita un hotel depende del edificio, de dónde se concentra el uso y de cuántos dispositivos se conectan al mismo tiempo.`
                        - **Editor de texto** · clases: `cm-48`
                            Texto: `Por eso, antes de instalar, medimos.`
                        - **Editor de texto** · clases: `cm-47`
                            Texto: `Diseñamos la red, seleccionamos el equipamiento adecuado y, si lo necesitas, nos encargamos también de gestionarla para mantenerla operativa.`
                    - **Lista de iconos** · clases: `cm-49`
                        - [`check.svg`] `Cobertura medida`
                        - [`check.svg`] `Equipamiento especializado`
                        - [`check.svg`] `Portal cautivo`
                        - [`check.svg`] `Gestión de red`
                - **Contenedor** · clases: `cm-4a m-reveal`
                    - **Imagen** · clases: `cm-4b`
                        Imagen: `/wp-content/uploads/comunica/images/home/home-wifi-instalacion.webp` · Texto alternativo: «» (decorativa: dejar vacio)
            - **Contenedor** · clases: `cm-4c m-reveal`
                - **Editor de texto** · clases: `cm-4d`
                    Texto: `Menos preocupación por el WiFi. Más atención a tus huéspedes.`
                - **Boton** · clases: `cm-s cm-btn is-btn-marca is-icono-despues group/btn`
                    Texto: «Conoce nuestro WiFi para hoteles» · Enlace: `/soluciones#wifi` · Icono: `arrow-right.svg` (despues)

## 11. Seccion `wifi`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `iandrea`

- **Contenedor** `<section>` · clases: `cm-4e tone-dark ms-wifi`
    - **HTML** · clases: `dl-flat` · pegar `html/home-06.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `cm-4f`
            - **Contenedor** · clases: `cm-o`
                - **Editor de texto** · clases: `cm-4g m-reveal-l`
                    Texto: `<span aria-hidden="true" class="bg-brand-gradient absolute top-1 left-0 h-[calc(100%-0.5rem)] w-[3px] rounded-full"></span>Una llamada de recepción que no atiende puede ser una reserva que se pierde`
                - **Contenedor** · clases: `m-reveal-l`
                    - **Titulo** · clases: `cm-4h` · etiqueta `h2`
                        Titulo: `iAndrea`
                    - **Editor de texto** · clases: `cm-4i`
                        Texto: `La voz con inteligencia artificial de Comunica para hoteles`
                - **Contenedor** · clases: `cm-4j m-reveal-l`
                    - **Editor de texto** · clases: `cm-1j`
                        Texto: `En recepción no siempre se puede coger el teléfono. Hay huéspedes delante. Check-ins. Incidencias. Consultas. Momentos en los que simplemente no quedan más manos.`
                    - **Editor de texto** · clases: `cm-4k`
                        Texto: `iAndrea está para esos momentos. Y para muchos otros.`
                - **Lista de iconos** · clases: `cm-4l m-reveal-l`
                    - [`check.svg`] `Menos llamadas perdidas`
                    - [`check.svg`] `Menos interrupciones`
                    - [`check.svg`] `Más capacidad de atención`
            - **Contenedor** · clases: `cm-o`
                - **Contenedor** · clases: `m-reveal-r`
                    - **Imagen** · clases: `cm-4m`
                        Imagen: `/wp-content/uploads/comunica/images/home/home-iandrea-voice-ai.webp` · Texto alternativo: «» (decorativa: dejar vacio)
                - **Contenedor** · clases: `cm-4n m-reveal-r`
                    - **Editor de texto** · clases: `cm-1j`
                        Texto: `No viene a sustituir a recepción. Viene a conseguir que recepción pueda centrarse en lo que necesita a una persona.`
                    - **Editor de texto** · clases: `cm-4o`
                        Texto: `IA pensada para quitar trabajo al equipo. No para darle otra herramienta que gestionar.`
                - **Contenedor** · clases: `cm-3q m-reveal-r`
                    - **Boton** · clases: `cm-2v cm-btn is-btn-marca is-icono-despues group/btn`
                        Texto: «Conoce iAndrea» · Enlace: `/soluciones#iandrea` · Icono: `arrow-right.svg` (despues)
        - **Contenedor** · clases: `cm-4p`
            - **Editor de texto** · clases: `cm-4q m-caps-label`
                Texto: `iAndrea puede:`
            - **Contenedor** · clases: `cm-4r`
                - **Contenedor** · clases: `cm-4s m-cap`
                    - **Icono** · clases: `cm-4t` · Icono: `phone-call.svg`
                    - **Contenedor** · clases: `cm-4u`
                        - **Titulo** · clases: `cm-4v` · etiqueta `h3`
                            Titulo: `Atender llamadas 24/7`
                        - **Editor de texto** · clases: `cm-4w`
                            Texto: `Sin franjas sin cobertura y sin que una llamada fuera de horario se pierda.`
                - **Contenedor** · clases: `cm-4s m-cap`
                    - **Icono** · clases: `cm-4t` · Icono: `circle-question-mark.svg`
                    - **Contenedor** · clases: `cm-4u`
                        - **Titulo** · clases: `cm-4v` · etiqueta `h3`
                            Titulo: `Responder preguntas frecuentes`
                        - **Editor de texto** · clases: `cm-4w`
                            Texto: `Horarios, servicios, ubicación o condiciones, resueltos en la propia llamada.`
                - **Contenedor** · clases: `cm-4s m-cap`
                    - **Icono** · clases: `cm-4t` · Icono: `calendar-range.svg`
                    - **Contenedor** · clases: `cm-4u`
                        - **Titulo** · clases: `cm-4v` · etiqueta `h3`
                            Titulo: `Gestionar reservas y recoger datos`
                        - **Editor de texto** · clases: `cm-4w`
                            Texto: `Toma la información que necesitas y la deja registrada donde corresponde.`
                - **Contenedor** · clases: `cm-4x m-cap`
                    - **Icono** · clases: `cm-4t` · Icono: `users.svg`
                    - **Contenedor** · clases: `cm-4u`
                        - **Titulo** · clases: `cm-4v` · etiqueta `h3`
                            Titulo: `Cualificar y derivar a una persona`
                        - **Editor de texto** · clases: `cm-4w`
                            Texto: `Cuando la conversación necesita intervención humana, la pasa con el contexto.`
                - **Contenedor** · clases: `cm-4x m-cap`
                    - **Icono** · clases: `cm-4t` · Icono: `layers.svg`
                    - **Contenedor** · clases: `cm-4u`
                        - **Titulo** · clases: `cm-4v` · etiqueta `h3`
                            Titulo: `Atender varias llamadas a la vez`
                        - **Editor de texto** · clases: `cm-4w`
                            Texto: `La centralita deja de tener un límite de manos disponibles en recepción.`
                - **Contenedor** · clases: `cm-4x m-cap`
                    - **Icono** · clases: `cm-4t` · Icono: `globe.svg`
                    - **Contenedor** · clases: `cm-4u`
                        - **Titulo** · clases: `cm-4v` · etiqueta `h3`
                            Titulo: `Hablar en más de 15 idiomas`
                        - **Editor de texto** · clases: `cm-4w`
                            Texto: `El huésped recibe respuesta en su idioma sin depender del turno de guardia.`
                - **Contenedor** · clases: `cm-4x m-cap`
                    - **Icono** · clases: `cm-4t` · Icono: `workflow.svg`
                    - **Contenedor** · clases: `cm-4u`
                        - **Titulo** · clases: `cm-4v` · etiqueta `h3`
                            Titulo: `Integrarse con tus sistemas`
                        - **Editor de texto** · clases: `cm-4w`
                            Texto: `Reservas, CRM, ERP y centralitas IP: consulta información y ejecuta acciones durante la conversación.`

## 12. Seccion `diferenciales`

- **Contenedor** `<section>` · clases: `cm-1n tone-light js-bento ms-diferenciales`
    - **Contenedor** · clases: `cm-3`
        - **Titulo** · clases: `cm-4y` · etiqueta `h2`
            Titulo: `<span class="block">No necesitas un proveedor que sepa de telecomunicaciones.</span><span class="block">Necesitas uno que entienda <em class="mark-hotel">tu hotel</em>.</span><span class="block">Necesitas a Comunica.</span>`
        - **Contenedor** · clases: `(ninguna)`
            - **Contenedor** · clases: `cm-4z`
                - **Contenedor** · clases: `cm-50 m-cell m-card js-bento-celda js-btn`
                    - **Editor de texto** · clases: `cm-51 is-tabular`
                        Texto: `01`
                        Cambia con el JS: no tocar sus clases.
                    - **Editor de texto** · clases: `cm-52`
                        Texto: `Especialización hotelera`
                        Cambia con el JS: no tocar sus clases.
                    - **Editor de texto** · clases: `cm-53`
                        Texto: `Llevamos años resolviendo problemas tecnológicos en hoteles reales. Eso significa que cuando nos cuentas lo que ocurre, no tienes que explicarnos primero cómo funciona tu negocio.`
                        Cambia con el JS: no tocar sus clases.
                - **Contenedor** · clases: `cm-50 m-cell m-card js-bento-celda js-btn`
                    - **Editor de texto** · clases: `cm-51 is-tabular`
                        Texto: `02`
                        Cambia con el JS: no tocar sus clases.
                    - **Editor de texto** · clases: `cm-52`
                        Texto: `Todo conectado bajo una misma gestión`
                        Cambia con el JS: no tocar sus clases.
                    - **Editor de texto** · clases: `cm-53`
                        Texto: `Voz fija y móvil, conectividad, WiFi, IPTV, IA e integraciones pueden trabajar bajo un mismo equipo. Menos interlocutores. Menos complejidad.`
                        Cambia con el JS: no tocar sus clases.
                - **Contenedor** · clases: `cm-50 m-cell m-card js-bento-celda js-btn`
                    - **Editor de texto** · clases: `cm-51 is-tabular`
                        Texto: `03`
                        Cambia con el JS: no tocar sus clases.
                    - **Editor de texto** · clases: `cm-52`
                        Texto: `Soporte con nombre propio`
                        Cambia con el JS: no tocar sus clases.
                    - **Editor de texto** · clases: `cm-53`
                        Texto: `Cuando surge un problema, no deberías empezar explicando qué tienes contratado. Hay personas detrás del servicio que conocen tu instalación y entienden el contexto.`
                        Cambia con el JS: no tocar sus clases.
                - **Contenedor** · clases: `cm-50 m-cell m-card js-bento-celda is-on js-btn`
                    - **Editor de texto** · clases: `cm-51 is-tabular`
                        Texto: `04`
                        Cambia con el JS: no tocar sus clases.
                    - **Editor de texto** · clases: `cm-52`
                        Texto: `Integración con la operativa hotelera`
                        Cambia con el JS: no tocar sus clases.
                    - **Editor de texto** · clases: `cm-53`
                        Texto: `La tecnología no debería vivir aislada. La conectamos con los sistemas y procesos del hotel para que trabaje a favor de la operación.`
                        Cambia con el JS: no tocar sus clases.
                - **Contenedor** · clases: `cm-50 m-cell m-card js-bento-celda js-btn`
                    - **Editor de texto** · clases: `cm-51 is-tabular`
                        Texto: `05`
                        Cambia con el JS: no tocar sus clases.
                    - **Editor de texto** · clases: `cm-52`
                        Texto: `Mirar más allá del problema de hoy`
                        Cambia con el JS: no tocar sus clases.
                    - **Editor de texto** · clases: `cm-53`
                        Texto: `Resolver importa. Pero también detectar qué podría mejorar antes de que se convierta en un problema. Hoy resolvemos. Queremos ayudarte también a anticiparte.`
                        Cambia con el JS: no tocar sus clases.
                - **Contenedor** · clases: `cm-54 m-cell`
                    - **Imagen** · clases: `cm-55`
                        Imagen: `/wp-content/uploads/comunica/images/home/home-differentials-engineer-hands.webp` · Texto alternativo: «» (decorativa: dejar vacio)

## 13. Seccion `metodo`

- **Contenedor** `<section>` · clases: `cm-13 tone-light ms-metodo`
    - **HTML** · clases: `dl-flat` · pegar `html/home-07.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
    - **Contenedor** · clases: `cm-w`
        - **Titulo** · clases: `cm-56` · etiqueta `h2`
            Titulo: `¿Cómo trabajamos?`
        - **Editor de texto** · clases: `cm-57`
            Texto: `Empezamos por entender <em class="mark-hotel">tu hotel</em>. No por venderte un paquete`
        - **Contenedor** · clases: `cm-58`
            - **Contenedor** `<article>` · clases: `cm-59 m-card`
                - **Contenedor** · clases: `cm-5a`
                    - **Editor de texto** · clases: `cm-5b`
                        Texto: `<span aria-hidden="true" class="font-mono text-metric leading-none text-cyan-ink is-tabular">1</span><span aria-hidden="true" class="bg-brand-gradient hidden h-px w-12 lg:block"></span>`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-5c` · etiqueta `h3`
                            Titulo: `Hablamos`
                        - **Editor de texto** · clases: `cm-5d`
                            Texto: `Nos cuentas cómo funciona tu establecimiento o cadena, qué proveedores tienes y qué quieres mejorar.`
            - **Contenedor** `<article>` · clases: `cm-5e m-card`
                - **Contenedor** · clases: `cm-5a`
                    - **Editor de texto** · clases: `cm-5b`
                        Texto: `<span aria-hidden="true" class="font-mono text-metric leading-none text-cyan-ink is-tabular">2</span><span aria-hidden="true" class="bg-brand-gradient hidden h-px w-12 lg:block"></span>`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-5c` · etiqueta `h3`
                            Titulo: `Revisamos`
                        - **Editor de texto** · clases: `cm-5d`
                            Texto: `Analizamos los servicios contratados y, cuando procede, la factura y la instalación para detectar duplicidades, servicios innecesarios o puntos de mejora.`
            - **Contenedor** `<article>` · clases: `cm-5f m-card`
                - **Contenedor** · clases: `cm-5a`
                    - **Editor de texto** · clases: `cm-5b`
                        Texto: `<span aria-hidden="true" class="font-mono text-metric leading-none text-cyan-ink is-tabular">3</span><span aria-hidden="true" class="bg-brand-gradient hidden h-px w-12 lg:block"></span>`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-5c` · etiqueta `h3`
                            Titulo: `Diagnosticamos`
                        - **Editor de texto** · clases: `cm-5d`
                            Texto: `Revisamos la infraestructura que afecta al proyecto: conectividad, cobertura WiFi, voz fija y móvil, capacidad, integraciones o aquello que necesitemos conocer.`
            - **Contenedor** `<article>` · clases: `cm-5g m-card`
                - **Contenedor** · clases: `cm-5a`
                    - **Editor de texto** · clases: `cm-5b`
                        Texto: `<span aria-hidden="true" class="font-mono text-metric leading-none text-cyan-ink is-tabular">4</span><span aria-hidden="true" class="bg-brand-gradient hidden h-px w-12 lg:block"></span>`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-5c` · etiqueta `h3`
                            Titulo: `Proponemos`
                        - **Editor de texto** · clases: `cm-5d`
                            Texto: `Te presentamos una solución adaptada al problema detectado y un plan para llevarla a cabo.`
            - **Contenedor** `<article>` · clases: `cm-5h m-card`
                - **Contenedor** · clases: `cm-5a`
                    - **Editor de texto** · clases: `cm-5b`
                        Texto: `<span aria-hidden="true" class="font-mono text-metric leading-none text-cyan-ink is-tabular">5</span><span aria-hidden="true" class="bg-brand-gradient hidden h-px w-12 lg:block"></span>`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-5c` · etiqueta `h3`
                            Titulo: `Migramos`
                        - **Editor de texto** · clases: `cm-5d`
                            Texto: `Coordinamos la implantación buscando preservar la continuidad de la operación del hotel.`
            - **Contenedor** `<article>` · clases: `cm-5i m-card`
                - **Contenedor** · clases: `cm-5a`
                    - **Editor de texto** · clases: `cm-5b`
                        Texto: `<span aria-hidden="true" class="font-mono text-metric leading-none text-cyan-ink is-tabular">6</span><span aria-hidden="true" class="bg-brand-gradient hidden h-px w-12 lg:block"></span>`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-5c` · etiqueta `h3`
                            Titulo: `Nos quedamos`
                        - **Editor de texto** · clases: `cm-5d`
                            Texto: `Una vez implantada la solución, seguimos ahí. Soporte, seguimiento y revisión para seguir detectando oportunidades de mejora.`

## 14. Seccion `cta-final`

- **Contenedor** `<section>` · clases: `cm-5j tone-dark ms-cta-final`
    - **HTML** · clases: `dl-flat` · pegar `html/home-08.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
    - **Contenedor** · clases: `cm-w`
        - **Contenedor** · clases: `cm-1o`
            - **Titulo** · clases: `cm-1p m-reveal` · etiqueta `h2`
                Titulo: `¿Qué parte de la tecnología de <em class="mark-hotel">tu hotel</em> te está dando más trabajo del que debería?`
            - **Contenedor** · clases: `cm-5k m-reveal`
                - **Editor de texto** · clases: `cm-5l`
                    Texto: `Cuéntanoslo.`
                - **Editor de texto** · clases: `cm-5l`
                    Texto: `No necesitas saber qué producto necesitas. Necesitas saber qué quieres resolver.`
                - **Editor de texto** · clases: `cm-5m`
                    Texto: `Nosotros empezaremos por ahí.`
            - **Contenedor** · clases: `cm-5n m-reveal`
                - **Boton** · clases: `cm-5o cm-btn is-btn-marca is-icono-despues group/btn`
                    Texto: «Habla con un especialista hotelero» · Enlace: `/contacto` · Icono: `arrow-right.svg` (despues)
                - **Boton** · clases: `cm-5p cm-btn is-btn-marca group/btn`
                    Texto: «Solicita una revisión de tu factura» · Enlace: `/contacto?intent=factura` · Icono: `file-text.svg` (antes)
