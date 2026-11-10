# Estructura de widgets · Nosotros

Pagina de WordPress: `/nosotros`. Plantilla: **Elementor a ancho completo** (Elementor Canvas no: la cabecera y el pie son plantillas del Theme Builder).

Como leer este plano:

- Cada linea es un elemento, en el orden en que se monta. La sangria es el anidamiento.
- **Contenedor**: Disposicion → *Ancho completo*. Todo lo demas (direccion, relleno, hueco) se queda como venga: lo anula el CSS. Si pone `<section>` u otra etiqueta, se elige en Disposicion → Etiqueta HTML.
- **clases**: se pegan tal cual en Avanzado → Clases CSS, separadas por espacios.
- Los textos entre comillas invertidas se pegan en la pestana *Codigo* / *Texto* del widget, con sus etiquetas `<span>`/`<em>` si las llevan: son las que dan el color y el subrayado.
- Ningun widget lleva estilos del panel, efectos de movimiento ni animacion de entrada.

## Contenedor raiz

- **Contenedor** `<main>` · clases: `dl-landing cm-5q`
    Contiene todas las secciones de abajo, en este orden.

## 1. Seccion `nos-hero`

- **Contenedor** `<section>` · clases: `cm-5u tone-light ms-nos-hero`
    - **Contenedor** · clases: `cm-5v`
    - **Contenedor** · clases: `cm-2`
    - **HTML** · clases: `dl-flat` · pegar `html/nosotros-01.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `(ninguna)`
            - **Editor de texto** · clases: `cm-5 m-reveal`
                Texto: `Comunica`
            - **Titulo** · clases: `cm-5w m-reveal` · etiqueta `h1`
                Titulo: `<span class="block text-balance">No somos un operador que también trabaja con hoteles.</span> <span class="mt-1 block text-balance text-cyan-strong">Somos especialistas en tecnología hotelera</span>`
            - **Editor de texto** · clases: `cm-5x m-reveal`
                Texto: `Y la diferencia importa`
            - **Editor de texto** · clases: `cm-7 m-reveal`
                Texto: `Porque para resolver correctamente la tecnología de un hotel no basta con saber de redes, telefonía fija y móvil o WiFi. Hay que entender qué ocurre dentro del hotel cuando esa tecnología falla.`

## 2. Seccion `nos-conocimiento`

- **Contenedor** `<section>` · clases: `cm-1n tone-light ms-nos-conocimiento`
    - **Contenedor** · clases: `cm-w`
        - **Contenedor** · clases: `(ninguna)`
            - **Contenedor** · clases: `cm-5y`
                - **Titulo** · clases: `cm-5z m-reveal` · etiqueta `h2`
                    Titulo: `Sabemos de tecnología y también dónde tiene que funcionar`
                - **Contenedor** · clases: `cm-o m-reveal`
                    - **Lista de iconos** · clases: `cm-60`
                        - [`check.svg`] `<span aria-hidden="true" class="mt-1 shrink-0 font-mono text-[0.75rem] text-cyan-ink-strong is-tabular">01</span><span class="text-body">Sabemos qué significa una recepción en hora punta.</span>`
                        - [`check.svg`] `<span aria-hidden="true" class="mt-1 shrink-0 font-mono text-[0.75rem] text-cyan-ink-strong is-tabular">02</span><span class="text-body">Una propiedad que no puede perder conectividad.</span>`
                        - [`check.svg`] `<span aria-hidden="true" class="mt-1 shrink-0 font-mono text-[0.75rem] text-cyan-ink-strong is-tabular">03</span><span class="text-body">Varias sedes que deberían trabajar como una.</span>`
                        - [`check.svg`] `<span aria-hidden="true" class="mt-1 shrink-0 font-mono text-[0.75rem] text-cyan-ink-strong is-tabular">04</span><span class="text-body">Una integración que afecta a la experiencia del huésped.</span>`
                        - [`check.svg`] `<span aria-hidden="true" class="mt-1 shrink-0 font-mono text-[0.75rem] text-cyan-ink-strong is-tabular">05</span><span class="text-body">O una incidencia que no entiende de horarios de oficina.</span>`
                    - **Contenedor** · clases: `cm-61`
                        - **Editor de texto** · clases: `cm-47`
                            Texto: `Por eso Comunica combina distintas capacidades bajo una misma forma de trabajar.`
                        - **Editor de texto** · clases: `cm-62`
                            Texto: `Somos operador. Integramos tecnología. Gestionamos proyectos. Asesoramos. Implantamos. Damos soporte.`
            - **Contenedor** · clases: `cm-63 tone-dark m-reveal`
                - **Contenedor** · clases: `cm-o`
                    - **Editor de texto** · clases: `cm-64`
                        Texto: `Pero ninguna de esas etiquetas explica por sí sola lo que hacemos. La que realmente importa es otra:`
                    - **Editor de texto** · clases: `cm-65`
                        Texto: `Especialistas en hoteles.`
                - **Boton** · clases: `cm-5o cm-btn is-btn-marca is-icono-despues group/btn`
                    Texto: «Habla con un especialista» · Enlace: `/contacto` · Icono: `arrow-right.svg` (despues)

## 3. Seccion `nos-escala`

- **Contenedor** `<section>` · clases: `cm-66 tone-dark ms-nos-escala`
    - **Contenedor** · clases: `cm-2o`
    - **HTML** · clases: `dl-flat` · pegar `html/nosotros-02.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `(ninguna)`
            - **Contenedor** · clases: `cm-67`
                - **Contenedor** · clases: `cm-o`
                    - **Editor de texto** · clases: `cm-4q`
                        Texto: `482 hoteles. 17 países`
                    - **Contenedor** · clases: `cm-68`
                        - **Editor de texto** · clases: `cm-69 is-tabular`
                            Texto: `<span class="m-count">482</span><span class="ml-3 align-baseline font-mono text-data text-fg-inverse-muted">hoteles</span>`
                        - **Editor de texto** · clases: `cm-6a is-tabular`
                            Texto: `<span class="m-count">17</span><span class="ml-3 align-baseline font-mono text-data text-fg-inverse-muted">países</span>`
                    - **Lista de iconos** · clases: `cm-6b cm-solo`
                        - [`headphones.svg`] `Soporte que te conoce`
                    - **Contenedor** · clases: `cm-6c`
                        - **Contenedor** · clases: `cm-6d m-keycard`
                        - **Contenedor** · clases: `cm-6d m-keycard`
                        - **Contenedor** · clases: `cm-6d m-keycard`
                        - **Contenedor** · clases: `cm-6d m-keycard`
                        - **Contenedor** · clases: `cm-6e m-keycard`
                        - **Contenedor** · clases: `cm-6d m-keycard`
                        - **Contenedor** · clases: `cm-6d m-keycard`
                        - **Contenedor** · clases: `cm-6d m-keycard`
                        - **Contenedor** · clases: `cm-6d m-keycard`
                        - **Contenedor** · clases: `cm-6d m-keycard`
                        - **Contenedor** · clases: `cm-6d m-keycard`
                        - **Contenedor** · clases: `cm-6d m-keycard`
                        - **Contenedor** · clases: `cm-6d m-keycard`
                        - **Contenedor** · clases: `cm-6d m-keycard`
                        - **Contenedor** · clases: `cm-6d m-keycard`
                        - **Contenedor** · clases: `cm-6d m-keycard`
                        - **Contenedor** · clases: `cm-6d m-keycard`
                - **Contenedor** · clases: `cm-o`
                    - **Contenedor** · clases: `cm-6f`
                        - **Editor de texto** · clases: `cm-6g`
                            Texto: `Nuestra especialización no nace de una declaración de intenciones. Nace de haber trabajado con cientos de hoteles y haber tenido que resolver problemas reales dentro de ellos.`
                        - **Editor de texto** · clases: `cm-6g`
                            Texto: `Cada proyecto nos permite entender mejor qué necesita un establecimiento, qué cambia cuando hablamos de una cadena y dónde una solución aparentemente correcta puede fallar cuando llega a la operativa real.`
                    - **Editor de texto** · clases: `cm-6h`
                        Texto: `Ese conocimiento acumulado es parte del servicio que recibe cada nuevo cliente.`

## 4. Seccion `nos-confianza`

- **Contenedor** `<section>` · clases: `cm-23 tone-light ms-nos-confianza`
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `cm-6i`
            - **Contenedor** · clases: `cm-o m-reveal`
                - **Titulo** · clases: `cm-14` · etiqueta `h2`
                    Titulo: `Confiable no es una palabra bonita. Es una forma de trabajar`
                - **Editor de texto** · clases: `cm-6j`
                    Texto: `Queremos que nuestros clientes puedan delegar. Que cuando aparezca un problema sepan a quién llamar. Que no tengan que empezar cada conversación explicando desde cero qué tienen instalado. Y que cuando exista una forma mejor de hacer algo, no tengan que ser siempre ellos quienes la descubran.`
                - **Editor de texto** · clases: `cm-6k`
                    Texto: `Para nosotros, confianza significa:`
                - **Lista de iconos** · clases: `cm-6l`
                    - `<span aria-hidden="true" class="font-mono text-data text-cyan-ink-strong is-tabular">01</span><span class="text-card-title">Escuchar antes de proponer.</span>`
                    - `<span aria-hidden="true" class="font-mono text-data text-cyan-ink-strong is-tabular">02</span><span class="text-card-title">Recomendar lo que tiene sentido.</span>`
                    - `<span aria-hidden="true" class="font-mono text-data text-cyan-ink-strong is-tabular">03</span><span class="text-card-title">Ejecutar, no quedarnos en el asesoramiento.</span>`
                    - `<span aria-hidden="true" class="font-mono text-data text-cyan-ink-strong is-tabular">04</span><span class="text-card-title">Dar la cara cuando algo falla.</span>`
                    - `<span aria-hidden="true" class="font-mono text-data text-cyan-ink-strong is-tabular">05</span><span class="text-card-title">Y seguir pensando en cómo mejorar después de haber implantado la solución.</span>`
                - **Lista de iconos** · clases: `cm-6m cm-solo`
                    - [`shield-check.svg`] `Porque la confianza no se consigue con palabras, sino resolviendo problemas una y otra vez.`
            - **Contenedor** · clases: `cm-6n m-reveal`
                - **Imagen** · clases: `cm-6o`
                    Imagen: `/wp-content/uploads/comunica/images/nosotros/nosotros-trust-delegar.webp` · Texto alternativo: «La responsable de un hotel al teléfono en la oficina interna, tranquila, mientras al fondo se trabaja en la instalación»

## 5. Seccion `nos-equipo`

- **Contenedor** `<section>` · clases: `cm-2w tone-light ms-nos-equipo`
    - **Contenedor** · clases: `cm-w`
        - **Contenedor** · clases: `(ninguna)`
            - **Contenedor** · clases: `m-block`
                - **Contenedor** · clases: `cm-6p m-reveal`
                    - **Titulo** · clases: `cm-6q` · etiqueta `h2`
                        Titulo: `Un equipo. Muchas capacidades`
                    - **Contenedor** · clases: `cm-3s`
                        - **Editor de texto** · clases: `cm-6r`
                            Texto: `Hay empresas excelentes en conectividad. Otras en WiFi. Otras en IPTV. Otras en voz fija y móvil. Y otras se especializan en inteligencia artificial.`
                        - **Editor de texto** · clases: `cm-62`
                            Texto: `Nuestra fortaleza es poder entender el conjunto. Y hacernos cargo de la complejidad que aparece cuando todas esas piezas tienen que funcionar juntas.`
                - **Lista de iconos** · clases: `cm-6s m-reveal`
                    - [`radio.svg`] `Conectividad`
                    - [`phone-call.svg`] `Voz fija y centralita virtual`
                    - [`smartphone.svg`] `Móvil`
                    - [`wifi.svg`] `WiFi`
                    - [`tv.svg`] `IPTV`
                    - [`workflow.svg`] `Integraciones`
                    - [`sparkles.svg`] `iAndrea`
                    - [`monitor-smartphone.svg`] `Terminales, accesorios y equipamiento`
                    - [`headphones.svg`] `Soporte`
                - **Contenedor** · clases: `cm-6t m-reveal`
                    - **Contenedor** · clases: `cm-6u`
                        - **Editor de texto** · clases: `cm-5`
                            Texto: `Para un hotel independiente significa:`
                        - **Editor de texto** · clases: `cm-6v`
                            Texto: `«Aquí me lo pueden resolver.»`
                    - **Contenedor** · clases: `cm-6u`
                        - **Editor de texto** · clases: `cm-5`
                            Texto: `Para una cadena significa:`
                        - **Editor de texto** · clases: `cm-6v`
                            Texto: `Simplificar proveedores, propiedades, integraciones y gestión administrativa.`
            - **Contenedor** · clases: `cm-6w m-block`
                - **Contenedor** · clases: `cm-6x m-reveal`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-6y` · etiqueta `h2`
                            Titulo: `Tecnología que resuelve lo de hoy y se anticipa a lo de mañana`
                        - **Editor de texto** · clases: `cm-6z`
                            Texto: `No creemos que innovar consista en añadir tecnología porque esté de moda. Consiste en detectar cuándo una nueva solución puede hacer más sencilla la operación, mejorar la experiencia del huésped o quitar trabajo al equipo.`
                    - **Contenedor** · clases: `cm-o`
                        - **Editor de texto** · clases: `cm-47`
                            Texto: `iAndrea es un ejemplo de esa forma de entender la innovación. No nace para que un hotel pueda decir que utiliza inteligencia artificial. Nace para que una llamada no se pierda porque recepción está ocupada, para que determinadas consultas no interrumpan continuamente al equipo y para que la tecnología absorba tareas que no necesitan a una persona.`
                        - **Editor de texto** · clases: `cm-70`
                            Texto: `Ese es el tipo de innovación que nos interesa. Tecnología útil. Aplicada con sentido.`
            - **Contenedor** · clases: `cm-6w m-block`
                - **Contenedor** · clases: `cm-71 m-reveal`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-72` · etiqueta `h2`
                            Titulo: `<span class="block">Hoy resolvemos.</span><span class="block">Mañana nos anticipamos</span>`
                        - **Contenedor** · clases: `cm-73`
                            - **Editor de texto** · clases: `cm-47`
                                Texto: `No queremos limitarnos a reaccionar cuando algo falla. Queremos conocer suficientemente bien <em class="mark-hotel">tu hotel</em> como para poder proponerte mejoras antes de que tengas que pedirlas.`
                            - **Editor de texto** · clases: `cm-48`
                                Texto: `Porque ser un buen partner tecnológico no consiste solo en responder. También consiste en mirar un poco más adelante.`
                    - **Contenedor** · clases: `cm-o`
                        - **Imagen** · clases: `cm-74`
                            Imagen: `/wp-content/uploads/comunica/images/nosotros/nosotros-innovacion-preparado.webp` · Texto alternativo: «» (decorativa: dejar vacio)

## 6. Seccion `cierre`

- **Contenedor** `<section>` · clases: `cm-75 tone-dark ms-cierre`
    - **HTML** · clases: `dl-flat` · pegar `html/nosotros-03.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
    - **Contenedor** · clases: `cm-w`
        - **Contenedor** · clases: `cm-2p`
            - **Titulo** · clases: `cm-1p m-reveal` · etiqueta `h2`
                Titulo: `¿Hay algo que podría funcionar mejor en <em class="mark-hotel">tu hotel</em>?`
            - **Contenedor** · clases: `cm-76 m-reveal`
                - **Editor de texto** · clases: `cm-5l`
                    Texto: `Cuéntanoslo.`
                - **Editor de texto** · clases: `cm-5l`
                    Texto: `Puede que ya sepamos cómo resolverlo.`
                - **Editor de texto** · clases: `cm-5m`
                    Texto: `Y puede que detectemos algo que todavía no habías considerado.`
            - **Contenedor** · clases: `cm-77 m-reveal`
                - **Boton** · clases: `cm-5o cm-btn is-btn-marca is-icono-despues group/btn`
                    Texto: «Habla con Comunica» · Enlace: `/contacto` · Icono: `arrow-right.svg` (despues)
