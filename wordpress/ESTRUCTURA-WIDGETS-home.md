# Estructura de widgets · Inicio

Pagina de WordPress: `/`. Plantilla: **Elementor a ancho completo** (Elementor Canvas no: la cabecera y el pie son plantillas del Theme Builder).

Como leer este plano:

- Cada linea es un elemento, en el orden en que se monta. La sangria es el anidamiento.
- **Contenedor**: Disposicion → *Ancho completo*. Todo lo demas (direccion, relleno, hueco) se queda como venga: lo anula el CSS. Si pone `<section>` u otra etiqueta, se elige en Disposicion → Etiqueta HTML.
- **clases**: se pegan tal cual en Avanzado → Clases CSS, separadas por espacios.
- Los textos entre comillas invertidas se pegan en la pestana *Codigo* / *Texto* del widget, con sus etiquetas `<span>`/`<em>` si las llevan: son las que dan el color y el subrayado.
- Ningun widget lleva estilos del panel, efectos de movimiento ni animacion de entrada.

## Contenedor raiz

- **Contenedor** `<main>` · clases: `dl-landing cm-5n`
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

## 3. Seccion `problema`

- **Contenedor** `<section>` · clases: `cm-11 tone-light ms-problema`
    - **Contenedor** · clases: `cm-3`
        - **Titulo** · clases: `cm-12` · etiqueta `h2`
            Titulo: `Tu huésped no distingue entre tecnología y servicio`
        - **Contenedor** · clases: `(ninguna)`
            - **Editor de texto** · clases: `cm-13`
                Texto: `Solo sabe que:`
            - **Contenedor** · clases: `cm-14`
                - **Contenedor** `<article>` · clases: `cm-15 group/cell m-cell`
                    - **Contenedor** · clases: `cm-16`
                        - **Icono** · clases: `cm-17` · Icono: `wifi.svg`
                        - **Contenedor** · clases: `cm-18`
                    - **Editor de texto** · clases: `cm-19`
                        Texto: `El WiFi no funciona`
                - **Contenedor** `<article>` · clases: `cm-15 group/cell m-cell`
                    - **Contenedor** · clases: `cm-16`
                        - **Icono** · clases: `cm-17` · Icono: `activity.svg`
                        - **Contenedor** · clases: `cm-18`
                    - **Editor de texto** · clases: `cm-19`
                        Texto: `La conexión falla`
                - **Contenedor** `<article>` · clases: `cm-15 group/cell m-cell`
                    - **Contenedor** · clases: `cm-16`
                        - **Icono** · clases: `cm-17` · Icono: `circle-question-mark.svg`
                        - **Contenedor** · clases: `cm-18`
                    - **Editor de texto** · clases: `cm-19`
                        Texto: `Algo que debería ser fácil le está dando problemas`
            - **Contenedor** · clases: `cm-1a`
                - **Editor de texto** · clases: `cm-1b`
                    Texto: `Y mientras tanto, alguien de tu equipo intenta averiguar cuál de los proveedores tiene que resolver el problema.`
        - **Contenedor** · clases: `cm-1c`
            - **HTML** · clases: `dl-flat` · pegar `html/home-02.html`
                Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
            - **Contenedor** · clases: `cm-1d`
                - **Contenedor** · clases: `cm-1e`
                    - **Contenedor** · clases: `cm-1f`
                    - **Editor de texto** · clases: `cm-1g`
                        Texto: `La tecnología debería hacer más sencillo gestionar un hotel, no añadir un obstáculo nuevo.`
                - **Editor de texto** · clases: `cm-1h`
                    Texto: `Por eso en Comunica no empezamos enseñándote un catálogo.`
        - **Contenedor** · clases: `cm-1i`
            - **Editor de texto** · clases: `cm-5`
                Texto: `Empezamos preguntando:`
            - **Lista de iconos** · clases: `cm-1j`
                - `<span class="font-mono text-data text-cyan-ink-strong is-tabular">01</span><span class="text-card-title">¿Qué está fallando?</span>`
                - `<span class="font-mono text-data text-cyan-ink-strong is-tabular">02</span><span class="text-card-title">¿Qué te está haciendo perder tiempo?</span>`
                - `<span class="font-mono text-data text-cyan-ink-strong is-tabular">03</span><span class="text-card-title">¿Qué estás pagando que quizá ya no necesitas?</span>`
                - `<span class="font-mono text-data text-cyan-ink-strong is-tabular">04</span><span class="text-card-title">¿Qué podría funcionar mejor?</span>`
            - **Editor de texto** · clases: `cm-1k`
                Texto: `Y después buscamos la forma de resolverlo.`
    - **HTML** · clases: `dl-flat` · pegar `html/home-03.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.

## 4. Seccion `valor`

- **Contenedor** `<section>` · clases: `cm-1l tone-light ms-valor`
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `cm-1m`
            - **Titulo** · clases: `cm-1n` · etiqueta `h2`
                Titulo: `Tecnología hotelera que funciona`
            - **Editor de texto** · clases: `cm-1o`
                Texto: `Comunica integra y gestiona las telecomunicaciones y soluciones tecnológicas que necesita un hotel`
        - **Contenedor** · clases: `cm-1p`
            - **Contenedor** · clases: `cm-1q m-cell`
                - **Contenedor** · clases: `(ninguna)`
                    - **Editor de texto** · clases: `cm-5`
                        Texto: `Soluciones`
                    - **Lista de iconos** · clases: `cm-1r`
                        - `Conectividad`
                        - `Voz fija - Móvil`
                        - `WiFi`
                        - `IPTV`
                        - `Integraciones`
                        - `Inteligencia artificial`
                        - `Soporte`
                - **Contenedor** · clases: `cm-1s`
                    - **Editor de texto** · clases: `cm-1t`
                        Texto: `Pero <em class="mark-hotel">nuestra diferencia</em> no está en tener muchos servicios.`
                    - **Editor de texto** · clases: `cm-1u`
                        Texto: `Está en conseguir que tú tengas menos cosas de las que preocuparte.`
            - **Contenedor** · clases: `cm-1v m-cell`
                - **Imagen** · clases: `cm-1w`
                    Imagen: `/wp-content/uploads/comunica/images/home/home-catalog-keycard-still.webp` · Texto alternativo: «» (decorativa: dejar vacio)
            - **Contenedor** · clases: `cm-1x m-cell`
                - **Editor de texto** · clases: `cm-1y is-tabular`
                    Texto: `01`
                - **Editor de texto** · clases: `cm-1z`
                    Texto: `Un equipo que entiende tu operativa.`
            - **Contenedor** · clases: `cm-1x m-cell`
                - **Editor de texto** · clases: `cm-1y is-tabular`
                    Texto: `02`
                - **Editor de texto** · clases: `cm-1z`
                    Texto: `Un interlocutor que conoce tu instalación.`
            - **Contenedor** · clases: `cm-1x m-cell`
                - **Editor de texto** · clases: `cm-1y is-tabular`
                    Texto: `03`
                - **Editor de texto** · clases: `cm-1z`
                    Texto: `Alguien que te ayuda a detectar qué mejorar.`
            - **Contenedor** · clases: `cm-20 m-cell`
                - **Editor de texto** · clases: `cm-b`
                    Texto: `Entendemos. Proponemos. Resolvemos.`

## 5. Seccion `testimonios`

- **Contenedor** `<section>` · clases: `cm-21 tone-light js-testimonios ms-testimonios`
    - **Contenedor** · clases: `cm-w`
        - **Contenedor** · clases: `(ninguna)`
            - **Contenedor** · clases: `cm-22`
                - **Editor de texto** · clases: `cm-5`
                    Texto: `Experiencias reales`
                - **Contenedor** · clases: `cm-23`
                    - **Contenedor** · clases: `cm-24 js-prev js-btn`
                        - **Icono** · clases: `cm-25` · Icono: `arrow-right.svg`
                    - **Contenedor** · clases: `cm-24 js-next js-btn`
                        - **Icono** · clases: `cm-26` · Icono: `arrow-right.svg`
            - **Contenedor** · clases: `cm-27`
                - **Contenedor** · clases: `cm-28`
                    - **Contenedor** · clases: `cm-29 js-avatar is-on js-btn`
                        - **Editor de texto** · clases: `cm-2a`
                            Texto: `MG`
                        - **Contenedor** · clases: `cm-2b js-solo-on`
                    - **Contenedor** · clases: `cm-2c js-avatar js-btn`
                        - **Editor de texto** · clases: `cm-2a`
                            Texto: `CR`
                        - **Contenedor** · clases: `cm-2b js-solo-on`
                    - **Contenedor** · clases: `cm-2d js-avatar js-btn`
                        - **Editor de texto** · clases: `cm-2a`
                            Texto: `JS`
                        - **Contenedor** · clases: `cm-2b js-solo-on`
                - **Contenedor** · clases: `cm-o js-slides`
                    - **Contenedor** · clases: `cm-2e js-slide is-on`
                        - **Editor de texto** · clases: `cm-2f`
                            Texto: `«`
                        - **Contenedor** · clases: `cm-2g`
                            - **Editor de texto** · clases: `cm-2h`
                                Texto: `Antes teníamos 4 proveedores distintos y cuando fallaba el WiFi nadie se hacía responsable. Con Comunica tenemos un único interlocutor que resuelve en minutos cualquier incidencia.`
                        - **Contenedor** · clases: `cm-2i`
                            - **Editor de texto** · clases: `cm-2j`
                                Texto: `Manuel Gómez`
                            - **Editor de texto** · clases: `cm-2k`
                                Texto: `Director General · Resort Costa Brava (180 hab.)`
                    - **Contenedor** · clases: `cm-2e js-slide`
                        - **Editor de texto** · clases: `cm-2f`
                            Texto: `«`
                        - **Contenedor** · clases: `cm-2g`
                            - **Editor de texto** · clases: `cm-2h`
                                Texto: `iAndrea y la centralita en la nube nos han permitido atender el 100% de las llamadas en temporada alta sin saturar recepción. El huésped recibe respuesta inmediata en su idioma.`
                        - **Contenedor** · clases: `cm-2i`
                            - **Editor de texto** · clases: `cm-2j`
                                Texto: `Carmen Rivas`
                            - **Editor de texto** · clases: `cm-2k`
                                Texto: `Operations Manager · Hotel Boutique Madrid`
                    - **Contenedor** · clases: `cm-2e js-slide`
                        - **Editor de texto** · clases: `cm-2f`
                            Texto: `«`
                        - **Contenedor** · clases: `cm-2g`
                            - **Editor de texto** · clases: `cm-2h`
                                Texto: `Modernizar la red y la telefonía de 6 hoteles con ellos fue impecable. Cero cortes en el servicio al cliente y un ahorro operativo tangible desde el primer mes.`
                        - **Contenedor** · clases: `cm-2i`
                            - **Editor de texto** · clases: `cm-2j`
                                Texto: `Javier Serrano`
                            - **Editor de texto** · clases: `cm-2k`
                                Texto: `Director IT · Cadena Hotelera Urbana`

## 6. Seccion `calculadora`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `calculadora`

- **Contenedor** `<section>` · clases: `cm-2l tone-dark js-calculadora ms-calculadora`
    - **Contenedor** · clases: `cm-2m`
    - **HTML** · clases: `dl-flat` · pegar `html/home-04.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
    - **Contenedor** · clases: `cm-w`
        - **Contenedor** · clases: `(ninguna)`
            - **Contenedor** · clases: `cm-2n m-reveal`
                - **Titulo** · clases: `cm-1n` · etiqueta `h2`
                    Titulo: `¿Cuánto te cuesta hoy la complejidad de tus telecomunicaciones?`
                - **Editor de texto** · clases: `cm-2o`
                    Texto: `Cuando un hotel acumula operadores, contratos y servicios a lo largo de los años, es fácil acabar pagando por duplicidades, servicios que ya no se utilizan o soluciones que nunca se han revisado.`
                - **Editor de texto** · clases: `cm-2p`
                    Texto: `Haz una primera estimación de cuánto podrías optimizar`
            - **HTML** · clases: `dl-flat` · pegar `html/home-calculadora.html`
                Por que HTML: Deslizadores y resultado de la calculadora: son controles <input type=range> y una cifra que calcula el JS; Elementor no tiene widget para eso.
            - **Contenedor** · clases: `cm-2q m-reveal`
                - **Editor de texto** · clases: `cm-2r`
                    Texto: `¿Quieres saber qué hay realmente detrás de este número?`
                - **Editor de texto** · clases: `cm-2s`
                    Texto: `Revisamos contigo tus servicios y tu factura actual para detectar dónde puede existir margen de mejora`
                - **Boton** · clases: `cm-2t cm-btn is-btn-marca is-icono-despues group/btn`
                    Texto: «Solicita una revisión de tu factura» · Enlace: `/contacto?intent=factura&habitaciones=60&gasto=1500&plantas=4&areas=4&extensiones=15` · Icono: `arrow-right.svg` (despues)

## 7. Seccion `perfiles`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `perfiles`

- **Contenedor** `<section>` · clases: `cm-2u tone-light js-acordeon ms-perfiles`
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `(ninguna)`
            - **Contenedor** · clases: `cm-2v m-head`
                - **Titulo** · clases: `cm-1n` · etiqueta `h2`
                    Titulo: `No todos los hoteles necesitan lo mismo`
                - **Editor de texto** · clases: `cm-1o`
                    Texto: `Por eso no empezamos por nuestros productos. Empezamos por <em class="mark-hotel">tu hotel</em>`
            - **Contenedor** · clases: `cm-2w`
                - **Contenedor** · clases: `cm-2x m-lama js-acc is-on`
                    - **Contenedor** · clases: `cm-2y group/lama js-btn`
                        - **Editor de texto** · clases: `cm-2z is-tabular`
                            Texto: `1`
                            Cambia con el JS: no tocar sus clases.
                        - **Editor de texto** · clases: `cm-30`
                            Texto: `Hotel Conectado`
                            Cambia con el JS: no tocar sus clases.
                        - **Icono** · clases: `cm-31` · Icono: `check.svg`
                            Cambia con el JS: no tocar sus clases.
                        - **Icono** · clases: `cm-32` · Icono: `arrow-right.svg`
                            Cambia con el JS: no tocar sus clases.
                    - **Contenedor** · clases: `cm-33`
                        - **Contenedor** · clases: `cm-34`
                            - **Contenedor** · clases: `cm-o`
                                - **Editor de texto** · clases: `cm-35`
                                    Texto: `Para hoteles independientes`
                                - **Titulo** · clases: `cm-36` · etiqueta `h3`
                                    Titulo: `Lo esencial bien resuelto`
                                - **Editor de texto** · clases: `cm-37`
                                    Texto: `Tienes un hotel que gestionar. No necesitas convertirte también en experto en telecomunicaciones.`
                                - **Editor de texto** · clases: `cm-38`
                                    Texto: `Centralizamos las comunicaciones esenciales de tu establecimiento para que conectividad, telefonía fija y móvil y WiFi funcionen bajo una misma gestión.`
                                - **Contenedor** · clases: `cm-39`
                                    - **Boton** · clases: `cm-3a cm-btn is-btn-marca is-icono-despues group/btn`
                                        Texto: «Quiero saber si encaja con mi hotel» · Enlace: `/contacto?intent=hotel_conectado` · Icono: `arrow-right.svg` (despues)
                            - **Contenedor** · clases: `cm-3b`
                                - **Imagen** · clases: `cm-3c`
                                    Imagen: `/wp-content/uploads/comunica/images/home/home-profile-conectado-independiente.webp` · Texto alternativo: «» (decorativa: dejar vacio)
                                - **Editor de texto** · clases: `cm-3d`
                                    Texto: `1 propiedad`
                - **Contenedor** · clases: `cm-3e m-lama js-acc`
                    - **Contenedor** · clases: `cm-2y group/lama js-btn`
                        - **Editor de texto** · clases: `cm-2z is-tabular`
                            Texto: `2-10`
                            Cambia con el JS: no tocar sus clases.
                        - **Editor de texto** · clases: `cm-30`
                            Texto: `Hotel Consolidado`
                            Cambia con el JS: no tocar sus clases.
                        - **Icono** · clases: `cm-31` · Icono: `check.svg`
                            Cambia con el JS: no tocar sus clases.
                        - **Icono** · clases: `cm-32` · Icono: `arrow-right.svg`
                            Cambia con el JS: no tocar sus clases.
                    - **Contenedor** · clases: `cm-33`
                        - **Contenedor** · clases: `cm-34`
                            - **Contenedor** · clases: `cm-o`
                                - **Editor de texto** · clases: `cm-35`
                                    Texto: `Para pequeñas cadenas`
                                - **Titulo** · clases: `cm-36` · etiqueta `h3`
                                    Titulo: `Varias propiedades. Una sola forma de gestionarlas`
                                - **Editor de texto** · clases: `cm-37`
                                    Texto: `Más hoteles no deberían significar más contratos, más facturas y más proveedores a los que perseguir cuando algo falla.`
                                - **Editor de texto** · clases: `cm-38`
                                    Texto: `Centralizamos las telecomunicaciones fijas y móviles de todas tus propiedades para simplificar la gestión del grupo.`
                                - **Contenedor** · clases: `cm-39`
                                    - **Boton** · clases: `cm-3a cm-btn is-btn-marca is-icono-despues group/btn`
                                        Texto: «Quiero centralizar mi cadena» · Enlace: `/contacto?intent=hotel_consolidado` · Icono: `arrow-right.svg` (despues)
                            - **Contenedor** · clases: `cm-3b`
                                - **Imagen** · clases: `cm-3c`
                                    Imagen: `/wp-content/uploads/comunica/images/home/home-profile-consolidado-grupo.webp` · Texto alternativo: «» (decorativa: dejar vacio)
                                - **Editor de texto** · clases: `cm-3d`
                                    Texto: `2-10 propiedades`
                - **Contenedor** · clases: `cm-3e m-lama js-acc`
                    - **Contenedor** · clases: `cm-2y group/lama js-btn`
                        - **Editor de texto** · clases: `cm-2z is-tabular`
                            Texto: `10-50`
                            Cambia con el JS: no tocar sus clases.
                        - **Editor de texto** · clases: `cm-30`
                            Texto: `Hotel Gestionado`
                            Cambia con el JS: no tocar sus clases.
                        - **Icono** · clases: `cm-31` · Icono: `check.svg`
                            Cambia con el JS: no tocar sus clases.
                        - **Icono** · clases: `cm-32` · Icono: `arrow-right.svg`
                            Cambia con el JS: no tocar sus clases.
                    - **Contenedor** · clases: `cm-33`
                        - **Contenedor** · clases: `cm-34`
                            - **Contenedor** · clases: `cm-o`
                                - **Editor de texto** · clases: `cm-35`
                                    Texto: `Para cadenas en crecimiento`
                                - **Titulo** · clases: `cm-36` · etiqueta `h3`
                                    Titulo: `Una cadena. Un mismo estándar tecnológico`
                                - **Editor de texto** · clases: `cm-37`
                                    Texto: `Cuando una cadena crece, la tecnología también tiene que hacerlo.`
                                - **Editor de texto** · clases: `cm-38`
                                    Texto: `Homogeneizamos comunicaciones fijas y móviles, conectividad y experiencia digital entre propiedades y las integramos con los sistemas del hotel.`
                                - **Contenedor** · clases: `cm-39`
                                    - **Boton** · clases: `cm-3a cm-btn is-btn-marca is-icono-despues group/btn`
                                        Texto: «Habla con un especialista» · Enlace: `/contacto?intent=hotel_gestionado` · Icono: `arrow-right.svg` (despues)
                            - **Contenedor** · clases: `cm-3b`
                                - **Imagen** · clases: `cm-3c`
                                    Imagen: `/wp-content/uploads/comunica/images/home/home-profile-gestionado-cadena.webp` · Texto alternativo: «» (decorativa: dejar vacio)
                                - **Editor de texto** · clases: `cm-3d`
                                    Texto: `10-50 propiedades`
                - **Contenedor** · clases: `cm-3e m-lama js-acc`
                    - **Contenedor** · clases: `cm-2y group/lama js-btn`
                        - **Editor de texto** · clases: `cm-2z is-tabular`
                            Texto: `50+`
                            Cambia con el JS: no tocar sus clases.
                        - **Editor de texto** · clases: `cm-30`
                            Texto: `Proyecto Especializado`
                            Cambia con el JS: no tocar sus clases.
                        - **Icono** · clases: `cm-31` · Icono: `check.svg`
                            Cambia con el JS: no tocar sus clases.
                        - **Icono** · clases: `cm-32` · Icono: `arrow-right.svg`
                            Cambia con el JS: no tocar sus clases.
                    - **Contenedor** · clases: `cm-33`
                        - **Contenedor** · clases: `cm-34`
                            - **Contenedor** · clases: `cm-o`
                                - **Editor de texto** · clases: `cm-35`
                                    Texto: `Para grandes cadenas`
                                - **Titulo** · clases: `cm-36` · etiqueta `h3`
                                    Titulo: `No hace falta sustituir lo que funciona para resolver lo que falta`
                                - **Editor de texto** · clases: `cm-37`
                                    Texto: `Quizá no necesites cambiar tu infraestructura. Quizá necesites resolver únicamente aquello que tu proveedor habitual no puede cubrir. Entramos ahí.`
                                - **Editor de texto** · clases: `cm-38`
                                    Texto: `Diseñamos e integramos soluciones tecnológicas específicas, de la voz fija y móvil al PMS, dentro de la arquitectura existente.`
                                - **Contenedor** · clases: `cm-39`
                                    - **Boton** · clases: `cm-3a cm-btn is-btn-marca is-icono-despues group/btn`
                                        Texto: «Cuéntanos tu proyecto» · Enlace: `/contacto?intent=proyecto_especializado` · Icono: `arrow-right.svg` (despues)
                            - **Contenedor** · clases: `cm-3b`
                                - **Imagen** · clases: `cm-3c`
                                    Imagen: `/wp-content/uploads/comunica/images/home/home-profile-especializado-proyecto.webp` · Texto alternativo: «» (decorativa: dejar vacio)
                                - **Editor de texto** · clases: `cm-3d`
                                    Texto: `50+ propiedades`

## 8. Seccion `innovacion`

- **Contenedor** `<section>` · clases: `cm-3f tone-light ms-innovacion`
    - **Contenedor** · clases: `cm-w`
        - **Contenedor** · clases: `cm-2n`
            - **Editor de texto** · clases: `cm-5`
                Texto: `Innovación aplicada`
            - **Titulo** · clases: `cm-6` · etiqueta `h2`
                Titulo: `Tecnología que no solo resuelve. También se adelanta`
            - **Editor de texto** · clases: `cm-1o`
                Texto: `No innovamos para añadir más tecnología al hotel. Innovamos cuando encontramos una forma de quitar trabajo, reducir complejidad o mejorar la experiencia del huésped`

## 9. Seccion `iandrea`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `iandrea`

- **Contenedor** `<section>` · clases: `cm-3g tone-dark ms-iandrea`
    - **HTML** · clases: `dl-flat` · pegar `html/home-06.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `cm-3h`
            - **Contenedor** · clases: `cm-o`
                - **Editor de texto** · clases: `cm-3i m-reveal-l`
                    Texto: `<span aria-hidden="true" class="bg-brand-gradient absolute top-1 left-0 h-[calc(100%-0.5rem)] w-[3px] rounded-full"></span>Una llamada de recepción que no atiende puede ser una reserva que se pierde`
                - **Contenedor** · clases: `m-reveal-l`
                    - **Titulo** · clases: `cm-3j` · etiqueta `h2`
                        Titulo: `iAndrea`
                    - **Editor de texto** · clases: `cm-3k`
                        Texto: `La voz con inteligencia artificial de Comunica para hoteles`
                - **Contenedor** · clases: `cm-3l m-reveal-l`
                    - **Editor de texto** · clases: `cm-1h`
                        Texto: `En recepción no siempre se puede coger el teléfono. Hay huéspedes delante. Check-ins. Incidencias. Consultas. Momentos en los que simplemente no quedan más manos.`
                    - **Editor de texto** · clases: `cm-3m`
                        Texto: `iAndrea está para esos momentos. Y para muchos otros.`
                - **Lista de iconos** · clases: `cm-3n m-reveal-l`
                    - [`check.svg`] `Menos llamadas perdidas`
                    - [`check.svg`] `Menos interrupciones`
                    - [`check.svg`] `Más capacidad de atención`
            - **Contenedor** · clases: `cm-o`
                - **Contenedor** · clases: `m-reveal-r`
                    - **Imagen** · clases: `cm-3o`
                        Imagen: `/wp-content/uploads/comunica/images/home/home-iandrea-voice-ai.webp` · Texto alternativo: «» (decorativa: dejar vacio)
                - **Contenedor** · clases: `cm-3p m-reveal-r`
                    - **Editor de texto** · clases: `cm-1h`
                        Texto: `No viene a sustituir a recepción. Viene a conseguir que recepción pueda centrarse en lo que necesita a una persona.`
                    - **Editor de texto** · clases: `cm-3q`
                        Texto: `IA pensada para quitar trabajo al equipo. No para darle otra herramienta que gestionar.`
                - **Contenedor** · clases: `cm-3r m-reveal-r`
                    - **Boton** · clases: `cm-2t cm-btn is-btn-marca is-icono-despues group/btn`
                        Texto: «Conoce iAndrea» · Enlace: `/soluciones#iandrea` · Icono: `arrow-right.svg` (despues)
        - **Contenedor** · clases: `cm-3s`
            - **Editor de texto** · clases: `cm-3t m-caps-label`
                Texto: `iAndrea puede:`
            - **Contenedor** · clases: `cm-3u`
                - **Contenedor** · clases: `cm-3v m-cap`
                    - **Icono** · clases: `cm-3w` · Icono: `phone-call.svg`
                    - **Contenedor** · clases: `cm-3x`
                        - **Titulo** · clases: `cm-3y` · etiqueta `h3`
                            Titulo: `Atender llamadas 24/7`
                        - **Editor de texto** · clases: `cm-3z`
                            Texto: `Sin franjas sin cobertura y sin que una llamada fuera de horario se pierda.`
                - **Contenedor** · clases: `cm-3v m-cap`
                    - **Icono** · clases: `cm-3w` · Icono: `circle-question-mark.svg`
                    - **Contenedor** · clases: `cm-3x`
                        - **Titulo** · clases: `cm-3y` · etiqueta `h3`
                            Titulo: `Responder preguntas frecuentes`
                        - **Editor de texto** · clases: `cm-3z`
                            Texto: `Horarios, servicios, ubicación o condiciones, resueltos en la propia llamada.`
                - **Contenedor** · clases: `cm-3v m-cap`
                    - **Icono** · clases: `cm-3w` · Icono: `calendar-range.svg`
                    - **Contenedor** · clases: `cm-3x`
                        - **Titulo** · clases: `cm-3y` · etiqueta `h3`
                            Titulo: `Gestionar reservas y recoger datos`
                        - **Editor de texto** · clases: `cm-3z`
                            Texto: `Toma la información que necesitas y la deja registrada donde corresponde.`
                - **Contenedor** · clases: `cm-40 m-cap`
                    - **Icono** · clases: `cm-3w` · Icono: `users.svg`
                    - **Contenedor** · clases: `cm-3x`
                        - **Titulo** · clases: `cm-3y` · etiqueta `h3`
                            Titulo: `Cualificar y derivar a una persona`
                        - **Editor de texto** · clases: `cm-3z`
                            Texto: `Cuando la conversación necesita intervención humana, la pasa con el contexto.`
                - **Contenedor** · clases: `cm-40 m-cap`
                    - **Icono** · clases: `cm-3w` · Icono: `layers.svg`
                    - **Contenedor** · clases: `cm-3x`
                        - **Titulo** · clases: `cm-3y` · etiqueta `h3`
                            Titulo: `Atender varias llamadas a la vez`
                        - **Editor de texto** · clases: `cm-3z`
                            Texto: `La centralita deja de tener un límite de manos disponibles en recepción.`
                - **Contenedor** · clases: `cm-40 m-cap`
                    - **Icono** · clases: `cm-3w` · Icono: `globe.svg`
                    - **Contenedor** · clases: `cm-3x`
                        - **Titulo** · clases: `cm-3y` · etiqueta `h3`
                            Titulo: `Hablar en más de 15 idiomas`
                        - **Editor de texto** · clases: `cm-3z`
                            Texto: `El huésped recibe respuesta en su idioma sin depender del turno de guardia.`
                - **Contenedor** · clases: `cm-40 m-cap`
                    - **Icono** · clases: `cm-3w` · Icono: `workflow.svg`
                    - **Contenedor** · clases: `cm-3x`
                        - **Titulo** · clases: `cm-3y` · etiqueta `h3`
                            Titulo: `Integrarse con tus sistemas`
                        - **Editor de texto** · clases: `cm-3z`
                            Texto: `Reservas, CRM, ERP y centralitas IP: consulta información y ejecuta acciones durante la conversación.`

## 10. Seccion `extension`

- **Contenedor** `<section>` · clases: `cm-41 tone-light ms-extension`
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `cm-42`
            - **Contenedor** · clases: `cm-o`
                - **Editor de texto** · clases: `cm-5`
                    Texto: `Innovación en telefonía hotelera`
                - **Titulo** · clases: `cm-43` · etiqueta `h2`
                    Titulo: `Extensión Dinámica`
                - **Editor de texto** · clases: `cm-44`
                    Texto: `La extensión de la habitación, en el móvil del huésped`
                - **Contenedor** · clases: `cm-45`
                    - **Editor de texto** · clases: `cm-46`
                        Texto: `El teléfono de la habitación lleva décadas formando parte del hotel.`
                    - **Editor de texto** · clases: `cm-46`
                        Texto: `Pero muchos huéspedes ya llevan en el bolsillo el dispositivo con el que prefieren comunicarse.`
                    - **Editor de texto** · clases: `cm-46`
                        Texto: `Con la Extensión Dinámica de Comunica, el huésped escanea un código QR y puede utilizar su propio móvil como extensión de la habitación durante su estancia.`
                - **Lista de iconos** · clases: `cm-47`
                    - [`check.svg`] `Menos hardware`
                    - [`check.svg`] `Menos mantenimiento`
                    - [`check.svg`] `Experiencia mobile-first`
                - **Editor de texto** · clases: `cm-48`
                    Texto: `Para el hotel, supone una nueva forma de plantear la telefonía de las habitaciones y resulta especialmente interesante en reformas, ampliaciones y nuevos proyectos.`
                - **Contenedor** · clases: `cm-3r`
                    - **Boton** · clases: `cm-49 cm-btn is-btn-marca is-icono-despues group/btn`
                        Texto: «Conoce la Extensión Dinámica» · Enlace: `/contacto?intent=extension` · Icono: `arrow-right.svg` (despues)
            - **Contenedor** · clases: `cm-4a`
                - **Contenedor** · clases: `cm-4b`
                    - **Imagen** · clases: `cm-4c`
                        Imagen: `/wp-content/uploads/comunica/images/soluciones/soluciones-extension-desk-sin-telefono.webp` · Texto alternativo: «» (decorativa: dejar vacio)
                - **Contenedor** · clases: `cm-4d`
                    - **Contenedor** · clases: `cm-4e m-step`
                        - **Contenedor** · clases: `cm-4f`
                            - **Editor de texto** · clases: `cm-4g is-tabular`
                                Texto: `01`
                            - **Icono** · clases: `cm-4h` · Icono: `hotel.svg`
                        - **Editor de texto** · clases: `cm-o`
                            Texto: `<span class="block text-body-sm font-semibold text-pretty">Habitación 304</span><span class="block font-mono text-[0.75rem] text-fg-muted text-pretty">Huésped conectado</span>`
                    - **Contenedor** · clases: `cm-4e m-step`
                        - **Contenedor** · clases: `cm-4f`
                            - **Editor de texto** · clases: `cm-4g is-tabular`
                                Texto: `02`
                            - **Icono** · clases: `cm-4h` · Icono: `smartphone.svg`
                        - **Editor de texto** · clases: `cm-o`
                            Texto: `<span class="block text-body-sm font-semibold text-pretty">Código QR en la habitación</span><span class="block font-mono text-[0.75rem] text-fg-muted text-pretty">Escanear al llegar</span>`
                    - **Contenedor** · clases: `cm-4e m-step`
                        - **Contenedor** · clases: `cm-4f`
                            - **Editor de texto** · clases: `cm-4g is-tabular`
                                Texto: `03`
                            - **Icono** · clases: `cm-4h` · Icono: `phone-call.svg`
                        - **Editor de texto** · clases: `cm-o`
                            Texto: `<span class="block text-body-sm font-semibold text-pretty">Móvil del huésped</span><span class="block font-mono text-[0.75rem] text-fg-muted text-pretty">Ext. 304 Activa</span>`
                - **Lista de iconos** · clases: `cm-4i`
                    - [`circle-check-big.svg`] `Llamada directa a Recepción`
                    - [`circle-check-big.svg`] `Room Service`

## 11. Seccion `wifi`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `wifi`

- **Contenedor** `<section>` · clases: `cm-4j tone-dark ms-wifi`
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `(ninguna)`
            - **Contenedor** · clases: `cm-42`
                - **Contenedor** · clases: `cm-4k m-reveal`
                    - **Editor de texto** · clases: `cm-4l`
                        Texto: `WiFi hotelero`
                    - **Titulo** · clases: `cm-4m` · etiqueta `h2`
                        Titulo: `Un buen WiFi no empieza en el router.`
                    - **Editor de texto** · clases: `cm-4n`
                        Texto: `Empieza entendiendo tu hotel`
                    - **Contenedor** · clases: `cm-4o`
                        - **Editor de texto** · clases: `cm-1h`
                            Texto: `La cobertura que necesita un hotel depende del edificio, de dónde se concentra el uso y de cuántos dispositivos se conectan al mismo tiempo.`
                        - **Editor de texto** · clases: `cm-4p`
                            Texto: `Por eso, antes de instalar, medimos.`
                        - **Editor de texto** · clases: `cm-1h`
                            Texto: `Diseñamos la red, seleccionamos el equipamiento adecuado y, si lo necesitas, nos encargamos también de gestionarla para mantenerla operativa.`
                    - **Lista de iconos** · clases: `cm-4q`
                        - [`check.svg`] `Cobertura medida`
                        - [`check.svg`] `Equipamiento especializado`
                        - [`check.svg`] `Portal cautivo`
                        - [`check.svg`] `Gestión de red`
                - **Contenedor** · clases: `cm-4r m-reveal`
                    - **Imagen** · clases: `cm-4s`
                        Imagen: `/wp-content/uploads/comunica/images/home/home-wifi-instalacion.webp` · Texto alternativo: «» (decorativa: dejar vacio)
            - **Contenedor** · clases: `cm-4t m-reveal`
                - **Editor de texto** · clases: `cm-4u`
                    Texto: `Menos preocupación por el WiFi. Más atención a tus huéspedes.`
                - **Boton** · clases: `cm-s cm-btn is-btn-marca is-icono-despues group/btn`
                    Texto: «Conoce nuestro WiFi para hoteles» · Enlace: `/soluciones#wifi` · Icono: `arrow-right.svg` (despues)

## 12. Seccion `diferenciales`

- **Contenedor** `<section>` · clases: `cm-1l tone-light js-bento ms-diferenciales`
    - **Contenedor** · clases: `cm-3`
        - **Titulo** · clases: `cm-4v` · etiqueta `h2`
            Titulo: `<span class="block">No necesitas un proveedor que sepa de telecomunicaciones.</span><span class="block">Necesitas uno que entienda <em class="mark-hotel">tu hotel</em>.</span><span class="block">Necesitas a Comunica.</span>`
        - **Contenedor** · clases: `(ninguna)`
            - **Contenedor** · clases: `cm-4w`
                - **Contenedor** · clases: `cm-4x m-cell m-card js-bento-celda js-btn`
                    - **Editor de texto** · clases: `cm-4y is-tabular`
                        Texto: `01`
                        Cambia con el JS: no tocar sus clases.
                    - **Editor de texto** · clases: `cm-4z`
                        Texto: `Especialización hotelera`
                        Cambia con el JS: no tocar sus clases.
                    - **Editor de texto** · clases: `cm-50`
                        Texto: `Llevamos años resolviendo problemas tecnológicos en hoteles reales. Eso significa que cuando nos cuentas lo que ocurre, no tienes que explicarnos primero cómo funciona tu negocio.`
                        Cambia con el JS: no tocar sus clases.
                - **Contenedor** · clases: `cm-4x m-cell m-card js-bento-celda js-btn`
                    - **Editor de texto** · clases: `cm-4y is-tabular`
                        Texto: `02`
                        Cambia con el JS: no tocar sus clases.
                    - **Editor de texto** · clases: `cm-4z`
                        Texto: `Todo conectado bajo una misma gestión`
                        Cambia con el JS: no tocar sus clases.
                    - **Editor de texto** · clases: `cm-50`
                        Texto: `Voz fija y móvil, conectividad, WiFi, IPTV, IA e integraciones pueden trabajar bajo un mismo equipo. Menos interlocutores. Menos complejidad.`
                        Cambia con el JS: no tocar sus clases.
                - **Contenedor** · clases: `cm-4x m-cell m-card js-bento-celda js-btn`
                    - **Editor de texto** · clases: `cm-4y is-tabular`
                        Texto: `03`
                        Cambia con el JS: no tocar sus clases.
                    - **Editor de texto** · clases: `cm-4z`
                        Texto: `Soporte con nombre propio`
                        Cambia con el JS: no tocar sus clases.
                    - **Editor de texto** · clases: `cm-50`
                        Texto: `Cuando surge un problema, no deberías empezar explicando qué tienes contratado. Hay personas detrás del servicio que conocen tu instalación y entienden el contexto.`
                        Cambia con el JS: no tocar sus clases.
                - **Contenedor** · clases: `cm-4x m-cell m-card js-bento-celda is-on js-btn`
                    - **Editor de texto** · clases: `cm-4y is-tabular`
                        Texto: `04`
                        Cambia con el JS: no tocar sus clases.
                    - **Editor de texto** · clases: `cm-4z`
                        Texto: `Integración con la operativa hotelera`
                        Cambia con el JS: no tocar sus clases.
                    - **Editor de texto** · clases: `cm-50`
                        Texto: `La tecnología no debería vivir aislada. La conectamos con los sistemas y procesos del hotel para que trabaje a favor de la operación.`
                        Cambia con el JS: no tocar sus clases.
                - **Contenedor** · clases: `cm-4x m-cell m-card js-bento-celda js-btn`
                    - **Editor de texto** · clases: `cm-4y is-tabular`
                        Texto: `05`
                        Cambia con el JS: no tocar sus clases.
                    - **Editor de texto** · clases: `cm-4z`
                        Texto: `Mirar más allá del problema de hoy`
                        Cambia con el JS: no tocar sus clases.
                    - **Editor de texto** · clases: `cm-50`
                        Texto: `Resolver importa. Pero también detectar qué podría mejorar antes de que se convierta en un problema. Hoy resolvemos. Queremos ayudarte también a anticiparte.`
                        Cambia con el JS: no tocar sus clases.
                - **Contenedor** · clases: `cm-51 m-cell`
                    - **Imagen** · clases: `cm-52`
                        Imagen: `/wp-content/uploads/comunica/images/home/home-differentials-engineer-hands.webp` · Texto alternativo: «» (decorativa: dejar vacio)

## 13. Seccion `metodo`

- **Contenedor** `<section>` · clases: `cm-11 tone-light ms-metodo`
    - **HTML** · clases: `dl-flat` · pegar `html/home-07.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
    - **Contenedor** · clases: `cm-w`
        - **Titulo** · clases: `cm-53` · etiqueta `h2`
            Titulo: `¿Cómo trabajamos?`
        - **Editor de texto** · clases: `cm-54`
            Texto: `Empezamos por entender <em class="mark-hotel">tu hotel</em>. No por venderte un paquete`
        - **Contenedor** · clases: `cm-55`
            - **Contenedor** `<article>` · clases: `cm-56 m-card`
                - **Contenedor** · clases: `cm-57`
                    - **Editor de texto** · clases: `cm-58`
                        Texto: `<span aria-hidden="true" class="font-mono text-metric leading-none text-cyan-ink is-tabular">1</span><span aria-hidden="true" class="bg-brand-gradient hidden h-px w-12 lg:block"></span>`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-59` · etiqueta `h3`
                            Titulo: `Hablamos`
                        - **Editor de texto** · clases: `cm-5a`
                            Texto: `Nos cuentas cómo funciona tu establecimiento o cadena, qué proveedores tienes y qué quieres mejorar.`
            - **Contenedor** `<article>` · clases: `cm-5b m-card`
                - **Contenedor** · clases: `cm-57`
                    - **Editor de texto** · clases: `cm-58`
                        Texto: `<span aria-hidden="true" class="font-mono text-metric leading-none text-cyan-ink is-tabular">2</span><span aria-hidden="true" class="bg-brand-gradient hidden h-px w-12 lg:block"></span>`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-59` · etiqueta `h3`
                            Titulo: `Revisamos`
                        - **Editor de texto** · clases: `cm-5a`
                            Texto: `Analizamos los servicios contratados y, cuando procede, la factura y la instalación para detectar duplicidades, servicios innecesarios o puntos de mejora.`
            - **Contenedor** `<article>` · clases: `cm-5c m-card`
                - **Contenedor** · clases: `cm-57`
                    - **Editor de texto** · clases: `cm-58`
                        Texto: `<span aria-hidden="true" class="font-mono text-metric leading-none text-cyan-ink is-tabular">3</span><span aria-hidden="true" class="bg-brand-gradient hidden h-px w-12 lg:block"></span>`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-59` · etiqueta `h3`
                            Titulo: `Diagnosticamos`
                        - **Editor de texto** · clases: `cm-5a`
                            Texto: `Revisamos la infraestructura que afecta al proyecto: conectividad, cobertura WiFi, voz fija y móvil, capacidad, integraciones o aquello que necesitemos conocer.`
            - **Contenedor** `<article>` · clases: `cm-5d m-card`
                - **Contenedor** · clases: `cm-57`
                    - **Editor de texto** · clases: `cm-58`
                        Texto: `<span aria-hidden="true" class="font-mono text-metric leading-none text-cyan-ink is-tabular">4</span><span aria-hidden="true" class="bg-brand-gradient hidden h-px w-12 lg:block"></span>`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-59` · etiqueta `h3`
                            Titulo: `Proponemos`
                        - **Editor de texto** · clases: `cm-5a`
                            Texto: `Te presentamos una solución adaptada al problema detectado y un plan para llevarla a cabo.`
            - **Contenedor** `<article>` · clases: `cm-5e m-card`
                - **Contenedor** · clases: `cm-57`
                    - **Editor de texto** · clases: `cm-58`
                        Texto: `<span aria-hidden="true" class="font-mono text-metric leading-none text-cyan-ink is-tabular">5</span><span aria-hidden="true" class="bg-brand-gradient hidden h-px w-12 lg:block"></span>`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-59` · etiqueta `h3`
                            Titulo: `Migramos`
                        - **Editor de texto** · clases: `cm-5a`
                            Texto: `Coordinamos la implantación buscando preservar la continuidad de la operación del hotel.`
            - **Contenedor** `<article>` · clases: `cm-5f m-card`
                - **Contenedor** · clases: `cm-57`
                    - **Editor de texto** · clases: `cm-58`
                        Texto: `<span aria-hidden="true" class="font-mono text-metric leading-none text-cyan-ink is-tabular">6</span><span aria-hidden="true" class="bg-brand-gradient hidden h-px w-12 lg:block"></span>`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-59` · etiqueta `h3`
                            Titulo: `Nos quedamos`
                        - **Editor de texto** · clases: `cm-5a`
                            Texto: `Una vez implantada la solución, seguimos ahí. Soporte, seguimiento y revisión para seguir detectando oportunidades de mejora.`

## 14. Seccion `cta-final`

- **Contenedor** `<section>` · clases: `cm-5g tone-dark ms-cta-final`
    - **HTML** · clases: `dl-flat` · pegar `html/home-08.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
    - **Contenedor** · clases: `cm-w`
        - **Contenedor** · clases: `cm-1m`
            - **Titulo** · clases: `cm-1n m-reveal` · etiqueta `h2`
                Titulo: `¿Qué parte de la tecnología de <em class="mark-hotel">tu hotel</em> te está dando más trabajo del que debería?`
            - **Contenedor** · clases: `cm-5h m-reveal`
                - **Editor de texto** · clases: `cm-5i`
                    Texto: `Cuéntanoslo.`
                - **Editor de texto** · clases: `cm-5i`
                    Texto: `No necesitas saber qué producto necesitas. Necesitas saber qué quieres resolver.`
                - **Editor de texto** · clases: `cm-5j`
                    Texto: `Nosotros empezaremos por ahí.`
            - **Contenedor** · clases: `cm-5k m-reveal`
                - **Boton** · clases: `cm-5l cm-btn is-btn-marca is-icono-despues group/btn`
                    Texto: «Habla con un especialista hotelero» · Enlace: `/contacto` · Icono: `arrow-right.svg` (despues)
                - **Boton** · clases: `cm-5m cm-btn is-btn-marca group/btn`
                    Texto: «Solicita una revisión de tu factura» · Enlace: `/contacto?intent=factura` · Icono: `file-text.svg` (antes)
