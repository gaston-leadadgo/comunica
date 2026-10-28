# Estructura de widgets · Soluciones

Pagina de WordPress: `/soluciones`. Plantilla: **Elementor a ancho completo** (Elementor Canvas no: la cabecera y el pie son plantillas del Theme Builder).

Como leer este plano:

- Cada linea es un elemento, en el orden en que se monta. La sangria es el anidamiento.
- **Contenedor**: Disposicion → *Ancho completo*. Todo lo demas (direccion, relleno, hueco) se queda como venga: lo anula el CSS. Si pone `<section>` u otra etiqueta, se elige en Disposicion → Etiqueta HTML.
- **clases**: se pegan tal cual en Avanzado → Clases CSS, separadas por espacios.
- Los textos entre comillas invertidas se pegan en la pestana *Codigo* / *Texto* del widget, con sus etiquetas `<span>`/`<em>` si las llevan: son las que dan el color y el subrayado.
- Ningun widget lleva estilos del panel, efectos de movimiento ni animacion de entrada.

## Contenedor raiz

- **Contenedor** `<main>` · clases: `dl-landing cm-5n`
    Contiene todas las secciones de abajo, en este orden.

## 1. Seccion `sol-hero`

- **Contenedor** `<section>` · clases: `cm-5r tone-light ms-sol-hero`
    - **Contenedor** · clases: `cm-2`
    - **HTML** · clases: `dl-flat` · pegar `html/soluciones-01.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
    - **Contenedor** · clases: `cm-m`
        - **Contenedor** · clases: `(ninguna)`
            - **Editor de texto** · clases: `cm-5 m-reveal`
                Texto: `Soluciones para hoteles`
            - **Titulo** · clases: `cm-8t m-reveal` · etiqueta `h1`
                Titulo: `<span class="block text-balance">No te ofrecemos un catálogo.</span> <span class="mt-1 block text-balance text-cyan-strong">Construimos la solución alrededor de <em class="mark-hotel">tu hotel</em></span>`
            - **Contenedor** · clases: `cm-8u m-reveal`
                - **Contenedor** · clases: `cm-4a`
                    - **Editor de texto** · clases: `cm-6o`
                        Texto: `Un establecimiento independiente no tiene los mismos problemas que una cadena de veinte propiedades.`
                    - **Editor de texto** · clases: `cm-6o`
                        Texto: `Por eso combinamos conectividad, voz fija y centralita virtual, móvil, WiFi, IPTV, inteligencia artificial e integraciones según tu tamaño, tu infraestructura y tu forma de operar.`
                - **Contenedor** · clases: `cm-o`
                    - **Editor de texto** · clases: `cm-8v`
                        Texto: `Primero entendemos qué necesitas. Después decidimos qué tecnología tiene sentido`
                    - **Contenedor** · clases: `cm-39`
                        - **Boton** · clases: `cm-87 cm-btn is-btn-marca is-icono-despues group/btn`
                            Texto: «Habla con un especialista hotelero» · Enlace: `/contacto` · Icono: `arrow-right.svg` (despues)

## 2. Seccion `sol-perfiles`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `perfiles`

- **Contenedor** `<section>` · clases: `cm-1l tone-light js-pestanas ms-sol-perfiles`
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `cm-8w`
            - **Contenedor** · clases: `cm-8x`
                - **Contenedor** · clases: `cm-8y js-tab is-on js-btn`
                    - **Editor de texto** · clases: `cm-8z`
                        Texto: `Hotel Conectado`
                    - **Editor de texto** · clases: `cm-90 is-tabular`
                        Texto: `1 propiedad`
                        Cambia con el JS: no tocar sus clases.
                    - **Contenedor** · clases: `cm-91 js-solo-on`
                - **Contenedor** · clases: `cm-8y js-tab js-btn`
                    - **Editor de texto** · clases: `cm-8z`
                        Texto: `Hotel Consolidado`
                    - **Editor de texto** · clases: `cm-90 is-tabular`
                        Texto: `2-10 propiedades`
                        Cambia con el JS: no tocar sus clases.
                    - **Contenedor** · clases: `cm-91 js-solo-on`
                - **Contenedor** · clases: `cm-8y js-tab js-btn`
                    - **Editor de texto** · clases: `cm-8z`
                        Texto: `Hotel Gestionado`
                    - **Editor de texto** · clases: `cm-90 is-tabular`
                        Texto: `10-50 propiedades`
                        Cambia con el JS: no tocar sus clases.
                    - **Contenedor** · clases: `cm-91 js-solo-on`
                - **Contenedor** · clases: `cm-8y js-tab js-btn`
                    - **Editor de texto** · clases: `cm-8z`
                        Texto: `Proyecto Especializado`
                    - **Editor de texto** · clases: `cm-90 is-tabular`
                        Texto: `50+ propiedades`
                        Cambia con el JS: no tocar sus clases.
                    - **Contenedor** · clases: `cm-91 js-solo-on`
            - **Contenedor** · clases: `cm-92 js-panel is-on`
                - **Contenedor** · clases: `cm-93`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-6z` · etiqueta `h2`
                            Titulo: `Hotel Conectado`
                        - **Editor de texto** · clases: `cm-94`
                            Texto: `Lo esencial bien resuelto`
                    - **Editor de texto** · clases: `cm-95`
                        Texto: `Para hoteles independientes`
                - **Contenedor** · clases: `cm-96`
                    - **Contenedor** · clases: `cm-o`
                        - **Contenedor** · clases: `cm-97`
                            - **Editor de texto** · clases: `cm-46`
                                Texto: `Tienes suficientes cosas de las que ocuparte. Que Internet funcione, que el WiFi llegue donde tiene que llegar o que la telefonía esté operativa no debería requerir tu atención constante.`
                            - **Editor de texto** · clases: `cm-5z`
                                Texto: `Hotel Conectado reúne las comunicaciones esenciales de tu establecimiento bajo una misma gestión.`
                        - **Editor de texto** · clases: `cm-98`
                            Texto: `Servicios incluidos:`
                        - **Contenedor** · clases: `cm-99`
                            - **Contenedor** · clases: `cm-9a`
                                - **Lista de iconos** · clases: `cm-9b cm-solo`
                                    - [`check.svg`] `Centralita virtual`
                                - **Editor de texto** · clases: `cm-9c`
                                    Texto: `Comunicaciones del hotel gestionadas desde una solución flexible.`
                            - **Contenedor** · clases: `cm-9a`
                                - **Lista de iconos** · clases: `cm-9b cm-solo`
                                    - [`check.svg`] `Móvil de empresa`
                                - **Editor de texto** · clases: `cm-9c`
                                    Texto: `Líneas móviles para el equipo con tarifas flexibles, en la misma factura que el resto de servicios.`
                            - **Contenedor** · clases: `cm-9a`
                                - **Lista de iconos** · clases: `cm-9b cm-solo`
                                    - [`check.svg`] `Internet con multicobertura y respaldo automático`
                                - **Editor de texto** · clases: `cm-9c`
                                    Texto: `Para reducir la dependencia de una única conexión.`
                            - **Contenedor** · clases: `cm-9a`
                                - **Lista de iconos** · clases: `cm-9b cm-solo`
                                    - [`check.svg`] `WiFi gestionado`
                                - **Editor de texto** · clases: `cm-9c`
                                    Texto: `Con separación entre la red utilizada por empleados y la destinada a huéspedes.`
                            - **Contenedor** · clases: `cm-9a`
                                - **Lista de iconos** · clases: `cm-9b cm-solo`
                                    - [`check.svg`] `Soporte técnico`
                                - **Editor de texto** · clases: `cm-9c`
                                    Texto: `Para ayudarte cuando lo necesites.`
                        - **Contenedor** · clases: `cm-9d`
                            - **Editor de texto** · clases: `cm-9e`
                                Texto: `Puedes añadir:`
                            - **Lista de iconos** · clases: `cm-9f`
                                - [`sparkles.svg`] `Portal cautivo personalizado con la marca del hotel.`
                                - [`sparkles.svg`] `iAndrea para reforzar la atención telefónica cuando aumenta la demanda o el equipo no puede responder.`
                    - **Contenedor** · clases: `cm-o`
                        - **Imagen** · clases: `cm-3c`
                            Imagen: `/wp-content/uploads/comunica/images/home/home-profile-conectado-independiente.webp` · Texto alternativo: «» (decorativa: dejar vacio)
                        - **Editor de texto** · clases: `cm-9g`
                            Texto: `El objetivo es sencillo: que funcione sin que tengas que gestionarlo todo.`
                        - **Contenedor** · clases: `cm-3r`
                            - **Boton** · clases: `cm-7q cm-btn is-btn-marca is-icono-despues group/btn`
                                Texto: «Quiero saber si encaja con mi hotel» · Enlace: `/contacto?intent=hotel_conectado` · Icono: `arrow-right.svg` (despues)
            - **Contenedor** · clases: `cm-92 js-panel`
                - **Contenedor** · clases: `cm-93`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-6z` · etiqueta `h2`
                            Titulo: `Hotel Consolidado`
                        - **Editor de texto** · clases: `cm-94`
                            Texto: `Varias propiedades. Una sola forma de gestionarlas`
                    - **Editor de texto** · clases: `cm-95`
                        Texto: `Para pequeñas cadenas`
                - **Contenedor** · clases: `cm-96`
                    - **Contenedor** · clases: `cm-o`
                        - **Contenedor** · clases: `cm-97`
                            - **Editor de texto** · clases: `cm-46`
                                Texto: `Cada nueva propiedad puede traer consigo otro proveedor, otro contrato, otra factura y otra forma de trabajar. Hasta que alguien decide centralizar.`
                            - **Editor de texto** · clases: `cm-5z`
                                Texto: `Hotel Consolidado permite gestionar las telecomunicaciones del grupo como una única estructura.`
                        - **Editor de texto** · clases: `cm-98`
                            Texto: `Servicios incluidos:`
                        - **Contenedor** · clases: `cm-99`
                            - **Contenedor** · clases: `cm-9a`
                                - **Lista de iconos** · clases: `cm-9b cm-solo`
                                    - [`check.svg`] `Centralita premium multi-sede`
                                - **Editor de texto** · clases: `cm-9c`
                                    Texto: `Extensiones compartidas, colas de espera, grabación y gestión entre propiedades.`
                            - **Contenedor** · clases: `cm-9a`
                                - **Lista de iconos** · clases: `cm-9b cm-solo`
                                    - [`check.svg`] `Móvil corporativo del grupo`
                                - **Editor de texto** · clases: `cm-9c`
                                    Texto: `Las líneas y terminales de todas las propiedades bajo un mismo contrato y una sola gestión.`
                            - **Contenedor** · clases: `cm-9a`
                                - **Lista de iconos** · clases: `cm-9b cm-solo`
                                    - [`check.svg`] `Conectividad gestionada`
                                - **Editor de texto** · clases: `cm-9c`
                                    Texto: `Con visión centralizada del tráfico del grupo.`
                            - **Contenedor** · clases: `cm-9a`
                                - **Lista de iconos** · clases: `cm-9b cm-solo`
                                    - [`check.svg`] `WiFi y portal cautivo por propiedad`
                                - **Editor de texto** · clases: `cm-9c`
                                    Texto: `Una experiencia adaptada a cada establecimiento sin perder el control del conjunto.`
                            - **Contenedor** · clases: `cm-9a`
                                - **Lista de iconos** · clases: `cm-9b cm-solo`
                                    - [`check.svg`] `Reporting consolidado y soporte dedicado`
                                - **Editor de texto** · clases: `cm-9c`
                                    Texto: `Más visibilidad y conocimiento del conjunto de establecimientos.`
                        - **Contenedor** · clases: `cm-9d`
                            - **Editor de texto** · clases: `cm-9e`
                                Texto: `Puedes añadir:`
                            - **Lista de iconos** · clases: `cm-9f`
                                - [`sparkles.svg`] `IPTV e iAndrea.`
                    - **Contenedor** · clases: `cm-o`
                        - **Imagen** · clases: `cm-9h`
                            Imagen: `/wp-content/uploads/comunica/images/home/home-profile-consolidado-grupo.webp` · Texto alternativo: «» (decorativa: dejar vacio)
                        - **Editor de texto** · clases: `cm-9g`
                            Texto: `Porque gestionar cinco hoteles no debería significar gestionar cinco veces la tecnología.`
                        - **Contenedor** · clases: `cm-3r`
                            - **Boton** · clases: `cm-7q cm-btn is-btn-marca is-icono-despues group/btn`
                                Texto: «Quiero centralizar mi cadena» · Enlace: `/contacto?intent=hotel_consolidado` · Icono: `arrow-right.svg` (despues)
            - **Contenedor** · clases: `cm-92 js-panel`
                - **Contenedor** · clases: `cm-93`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-6z` · etiqueta `h2`
                            Titulo: `Hotel Gestionado`
                        - **Editor de texto** · clases: `cm-94`
                            Texto: `Una cadena. Un mismo estándar tecnológico`
                    - **Editor de texto** · clases: `cm-95`
                        Texto: `Para cadenas en crecimiento`
                - **Contenedor** · clases: `cm-96`
                    - **Contenedor** · clases: `cm-o`
                        - **Contenedor** · clases: `cm-97`
                            - **Editor de texto** · clases: `cm-46`
                                Texto: `El huésped reconoce tu marca independientemente del hotel en el que se aloje. Tu tecnología también debería responder a un mismo estándar.`
                            - **Editor de texto** · clases: `cm-5z`
                                Texto: `Hotel Gestionado ayuda a homogeneizar las comunicaciones y la experiencia tecnológica entre establecimientos, integrándolas con los sistemas del hotel.`
                        - **Editor de texto** · clases: `cm-98`
                            Texto: `Servicios incluidos:`
                        - **Contenedor** · clases: `cm-99`
                            - **Contenedor** · clases: `cm-9a`
                                - **Lista de iconos** · clases: `cm-9b cm-solo`
                                    - [`check.svg`] `Comunicaciones multi-sede`
                                - **Editor de texto** · clases: `cm-9c`
                                    Texto: `Centralita premium, SIP Trunk e integración con herramientas corporativas como Teams.`
                            - **Contenedor** · clases: `cm-9a`
                                - **Lista de iconos** · clases: `cm-9b cm-solo`
                                    - [`check.svg`] `Movilidad corporativa integrada`
                                - **Editor de texto** · clases: `cm-9c`
                                    Texto: `El móvil de cada empleado funciona como su extensión: se le localiza esté donde esté, dentro o fuera del hotel.`
                            - **Contenedor** · clases: `cm-9a`
                                - **Lista de iconos** · clases: `cm-9b cm-solo`
                                    - [`check.svg`] `Conectividad de alta capacidad`
                                - **Editor de texto** · clases: `cm-9c`
                                    Texto: `Fibra dedicada FTTO y sistema de respaldo 5G.`
                            - **Contenedor** · clases: `cm-9a`
                                - **Lista de iconos** · clases: `cm-9b cm-solo`
                                    - [`check.svg`] `WiFi integrado con los sistemas del hotel`
                                - **Editor de texto** · clases: `cm-9c`
                                    Texto: `Para conectar la experiencia del huésped con la operativa del establecimiento.`
                            - **Contenedor** · clases: `cm-9a`
                                - **Lista de iconos** · clases: `cm-9b cm-solo`
                                    - [`check.svg`] `IPTV gestionada y soporte 24/7`
                                - **Editor de texto** · clases: `cm-9c`
                                    Texto: `Una capa más de comunicación en habitación con interlocutor dedicado.`
                    - **Contenedor** · clases: `cm-o`
                        - **Imagen** · clases: `cm-9h`
                            Imagen: `/wp-content/uploads/comunica/images/home/home-profile-gestionado-cadena.webp` · Texto alternativo: «» (decorativa: dejar vacio)
                        - **Editor de texto** · clases: `cm-9g`
                            Texto: `Menos diferencias entre hoteles. Más control sobre el conjunto.`
                        - **Contenedor** · clases: `cm-3r`
                            - **Boton** · clases: `cm-7q cm-btn is-btn-marca is-icono-despues group/btn`
                                Texto: «Habla con un especialista» · Enlace: `/contacto?intent=hotel_gestionado` · Icono: `arrow-right.svg` (despues)
            - **Contenedor** · clases: `cm-92 js-panel`
                - **Contenedor** · clases: `cm-93`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-6z` · etiqueta `h2`
                            Titulo: `Proyecto Especializado`
                        - **Editor de texto** · clases: `cm-94`
                            Texto: `No hace falta sustituir lo que funciona para resolver lo que falta`
                    - **Editor de texto** · clases: `cm-95`
                        Texto: `Para grandes cadenas`
                - **Contenedor** · clases: `cm-96`
                    - **Contenedor** · clases: `cm-o`
                        - **Contenedor** · clases: `cm-97`
                            - **Editor de texto** · clases: `cm-46`
                                Texto: `Puede que ya trabajes con un gran operador. Puede que tengas un equipo IT propio y una infraestructura estandarizada. Pero incluso en ese escenario aparecen proyectos o necesidades que requieren una capacidad muy específica.`
                            - **Editor de texto** · clases: `cm-5z`
                                Texto: `Comunica puede incorporarse como partner tecnológico para resolver esa pieza concreta.`
                        - **Editor de texto** · clases: `cm-98`
                            Texto: `Soluciones específicas:`
                        - **Contenedor** · clases: `cm-99`
                            - **Contenedor** · clases: `cm-9a`
                                - **Lista de iconos** · clases: `cm-9b cm-solo`
                                    - [`check.svg`] `SIP Trunk para Contact Center`
                            - **Contenedor** · clases: `cm-9a`
                                - **Lista de iconos** · clases: `cm-9b cm-solo`
                                    - [`check.svg`] `Soluciones de voz fija y móvil`
                            - **Contenedor** · clases: `cm-9a`
                                - **Lista de iconos** · clases: `cm-9b cm-solo`
                                    - [`check.svg`] `iAndrea personalizada`
                            - **Contenedor** · clases: `cm-9a`
                                - **Lista de iconos** · clases: `cm-9b cm-solo`
                                    - [`check.svg`] `IPTV e integraciones específicas`
                        - **Contenedor** · clases: `cm-9d`
                            - **Editor de texto** · clases: `cm-9e`
                                Texto: `Puedes añadir:`
                            - **Lista de iconos** · clases: `cm-9f`
                                - [`sparkles.svg`] `Integración con tu PMS.`
                    - **Contenedor** · clases: `cm-o`
                        - **Imagen** · clases: `cm-9h`
                            Imagen: `/wp-content/uploads/comunica/images/home/home-profile-especializado-proyecto.webp` · Texto alternativo: «» (decorativa: dejar vacio)
                        - **Editor de texto** · clases: `cm-9g`
                            Texto: `Nos integramos donde podemos aportar valor. Sin obligarte a sustituir lo que ya funciona.`
                        - **Contenedor** · clases: `cm-3r`
                            - **Boton** · clases: `cm-7q cm-btn is-btn-marca is-icono-despues group/btn`
                                Texto: «Cuéntanos tu proyecto» · Enlace: `/contacto?intent=proyecto_especializado` · Icono: `arrow-right.svg` (despues)

## 3. Seccion `sol-capacidades`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `capacidades`

- **Contenedor** `<section>` · clases: `cm-21 tone-light ms-sol-capacidades`
    - **Contenedor** · clases: `cm-w`
        - **Titulo** · clases: `cm-9i` · etiqueta `h2`
            Titulo: `Las capacidades con las que construimos cada solución`
        - **Contenedor** · clases: `cm-9j`
            - **Contenedor** · clases: `cm-9k group/row m-row`
                - **Contenedor** · clases: `cm-9l`
                    - **Editor de texto** · clases: `cm-9m is-tabular`
                        Texto: `01`
                    - **Titulo** · clases: `cm-9n` · etiqueta `h3`
                        Titulo: `<svg aria-hidden="true" class="lucide lucide-radio shrink-0 text-cyan-ink" fill="none" focusable="false" height="19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" viewbox="0 0 24 24" width="19" xmlns="http://www.w3.org/2000/svg"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path><path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path><path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path><path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path><circle cx="12" cy="12" r="2"></circle></svg>Conectividad`
                    - **Editor de texto** · clases: `cm-9o`
                        Texto: `Internet de alta capacidad, multicobertura y sistemas de respaldo adaptados a las necesidades de cada establecimiento.`
            - **Contenedor** · clases: `cm-9k group/row m-row`
                - **Contenedor** · clases: `cm-9l`
                    - **Editor de texto** · clases: `cm-9m is-tabular`
                        Texto: `02`
                    - **Titulo** · clases: `cm-9n` · etiqueta `h3`
                        Titulo: `<svg aria-hidden="true" class="lucide lucide-phone-call shrink-0 text-cyan-ink" fill="none" focusable="false" height="19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" viewbox="0 0 24 24" width="19" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>Voz fija y centralita virtual`
                    - **Editor de texto** · clases: `cm-9o`
                        Texto: `Centralitas virtuales, soluciones multi-sede, SIP Trunk, numeración, colas y comunicaciones adaptadas a la operativa hotelera.`
            - **Contenedor** · clases: `cm-9k group/row m-row`
                - **Contenedor** · clases: `cm-9l`
                    - **Editor de texto** · clases: `cm-9m is-tabular`
                        Texto: `03`
                    - **Titulo** · clases: `cm-9n` · etiqueta `h3`
                        Titulo: `<svg aria-hidden="true" class="lucide lucide-smartphone shrink-0 text-cyan-ink" fill="none" focusable="false" height="19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" viewbox="0 0 24 24" width="19" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>Móvil`
                    - **Editor de texto** · clases: `cm-9o`
                        Texto: `Móvil de empresa sin sorpresas en la factura, con tarifas flexibles y una única gestión junto al resto de servicios del hotel.`
            - **Contenedor** · clases: `cm-9k group/row m-row`
                - **Contenedor** · clases: `cm-9l`
                    - **Editor de texto** · clases: `cm-9m is-tabular`
                        Texto: `04`
                    - **Titulo** · clases: `cm-9n` · etiqueta `h3`
                        Titulo: `<svg aria-hidden="true" class="lucide lucide-wifi shrink-0 text-cyan-ink" fill="none" focusable="false" height="19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" viewbox="0 0 24 24" width="19" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>WiFi`
                    - **Editor de texto** · clases: `cm-9o`
                        Texto: `Redes gestionadas para empleados y huéspedes, cobertura, segmentación y portales cautivos.`
            - **Contenedor** · clases: `cm-9k group/row m-row`
                - **Contenedor** · clases: `cm-9l`
                    - **Editor de texto** · clases: `cm-9m is-tabular`
                        Texto: `05`
                    - **Titulo** · clases: `cm-9n` · etiqueta `h3`
                        Titulo: `<svg aria-hidden="true" class="lucide lucide-tv shrink-0 text-cyan-ink" fill="none" focusable="false" height="19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" viewbox="0 0 24 24" width="19" xmlns="http://www.w3.org/2000/svg"><path d="m17 2-5 5-5-5"></path><rect height="15" rx="2" width="20" x="2" y="7"></rect></svg>IPTV`
                    - **Editor de texto** · clases: `cm-9o`
                        Texto: `Televisión e información del hotel integradas en la experiencia de la habitación.`
            - **Contenedor** · clases: `cm-9k group/row m-row`
                - **Contenedor** · clases: `cm-9l`
                    - **Editor de texto** · clases: `cm-9m is-tabular`
                        Texto: `06`
                    - **Titulo** · clases: `cm-9n` · etiqueta `h3`
                        Titulo: `<svg aria-hidden="true" class="lucide lucide-workflow shrink-0 text-cyan-ink" fill="none" focusable="false" height="19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" viewbox="0 0 24 24" width="19" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>Integraciones`
                    - **Editor de texto** · clases: `cm-9o`
                        Texto: `Conexión entre comunicaciones y sistemas hoteleros para reducir tareas manuales y mejorar la operación.`
            - **Contenedor** · clases: `cm-9k group/row m-row`
                - **Contenedor** · clases: `cm-9l`
                    - **Editor de texto** · clases: `cm-9m is-tabular`
                        Texto: `07`
                    - **Titulo** · clases: `cm-9n` · etiqueta `h3`
                        Titulo: `<svg aria-hidden="true" class="lucide lucide-sparkles shrink-0 text-cyan-ink" fill="none" focusable="false" height="19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" viewbox="0 0 24 24" width="19" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>iAndrea`
                    - **Editor de texto** · clases: `cm-9o`
                        Texto: `Inteligencia artificial aplicada a la atención telefónica del hotel.`
            - **Contenedor** · clases: `cm-9k group/row m-row`
                - **Contenedor** · clases: `cm-9l`
                    - **Editor de texto** · clases: `cm-9m is-tabular`
                        Texto: `08`
                    - **Titulo** · clases: `cm-9n` · etiqueta `h3`
                        Titulo: `<svg aria-hidden="true" class="lucide lucide-monitor-smartphone shrink-0 text-cyan-ink" fill="none" focusable="false" height="19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" viewbox="0 0 24 24" width="19" xmlns="http://www.w3.org/2000/svg"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path><path d="M10 19v-3.96 3.15"></path><path d="M7 19h5"></path><rect height="10" rx="2" width="6" x="16" y="12"></rect></svg>Terminales, accesorios y equipamiento`
                    - **Editor de texto** · clases: `cm-9o`
                        Texto: `El equipamiento de comunicaciones del hotel, desde el móvil hasta el PC o la pantalla, suministrado por quien ya gestiona tus servicios.`
            - **Contenedor** · clases: `cm-9k group/row m-row`
                - **Contenedor** · clases: `cm-9l`
                    - **Editor de texto** · clases: `cm-9m is-tabular`
                        Texto: `09`
                    - **Titulo** · clases: `cm-9n` · etiqueta `h3`
                        Titulo: `<svg aria-hidden="true" class="lucide lucide-headphones shrink-0 text-cyan-ink" fill="none" focusable="false" height="19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" viewbox="0 0 24 24" width="19" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>Soporte`
                    - **Editor de texto** · clases: `cm-9o`
                        Texto: `Personas que conocen la instalación y entienden el contexto en el que se produce cada incidencia. Profesionales que realizan consultoría y análisis de lo que tienes.`

## 4. Seccion `cierre`

- **Contenedor** `<section>` · clases: `cm-73 tone-dark ms-cierre`
    - **HTML** · clases: `dl-flat` · pegar `html/soluciones-02.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
    - **Contenedor** · clases: `cm-w`
        - **Contenedor** · clases: `cm-2n`
            - **Titulo** · clases: `cm-1n m-reveal` · etiqueta `h2`
                Titulo: `¿No sabes qué solución necesitas?`
            - **Contenedor** · clases: `cm-74 m-reveal`
                - **Editor de texto** · clases: `cm-5i`
                    Texto: `Es lo normal, no deberías tener que diseñarla tú. Nosotros nos encargamos de ello.`
                - **Editor de texto** · clases: `cm-5i`
                    Texto: `Cuéntanos qué está ocurriendo y analizaremos contigo qué merece la pena mantener, qué puede mejorarse y qué solución tiene sentido.`
            - **Contenedor** · clases: `cm-75 m-reveal`
                - **Boton** · clases: `cm-5l cm-btn is-btn-marca is-icono-despues group/btn`
                    Texto: «Habla con un especialista hotelero» · Enlace: `/contacto` · Icono: `arrow-right.svg` (despues)

## 5. Seccion `extension`

- **Contenedor** `<section>` · clases: `cm-41 tone-light ms-extension`
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `cm-42`
            - **Contenedor** · clases: `cm-o`
                - **Titulo** · clases: `cm-6z` · etiqueta `h2`
                    Titulo: `Extensión Dinámica`
                - **Editor de texto** · clases: `cm-44`
                    Texto: `La extensión de la habitación, en el móvil del huésped`
                - **Contenedor** · clases: `cm-45`
                    - **Editor de texto** · clases: `cm-46`
                        Texto: `Con la Extensión Dinámica de Comunica, el huésped escanea un código QR y puede utilizar su propio móvil como extensión de la habitación durante su estancia.`
                    - **Editor de texto** · clases: `cm-46`
                        Texto: `Una forma más flexible de plantear la telefonía hotelera, especialmente interesante en reformas, ampliaciones y nuevos proyectos.`
                - **Lista de iconos** · clases: `cm-9p`
                    - `<strong class="font-semibold text-navy">Menos hardware. Menos mantenimiento.</strong> Reduce la dependencia de terminales físicos, cableado específico y equipos que instalar, reparar o sustituir.`
                    - `<strong class="font-semibold text-navy">Una experiencia más mobile-first.</strong> El huésped utiliza el dispositivo que ya conoce y lleva consigo, sin necesidad de depender del teléfono de sobremesa de la habitación.`
                    - `<strong class="font-semibold text-navy">Integrada en el ecosistema del hotel.</strong> Puede formar parte de una arquitectura conjunta con WiFi, voz fija y centralita virtual, móvil, iAndrea e integraciones, bajo un mismo proveedor.`
                - **Editor de texto** · clases: `cm-48`
                    Texto: `Menos infraestructura que gestionar. Más flexibilidad para comunicar.`
                - **Contenedor** · clases: `cm-3r`
                    - **Boton** · clases: `cm-49 cm-btn is-btn-marca is-icono-despues group/btn`
                        Texto: «Quiero conocer la Extensión Dinámica» · Enlace: `/contacto?intent=extension` · Icono: `arrow-right.svg` (despues)
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

## 6. Seccion `wifi`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `wifi`

- **Contenedor** `<section>` · clases: `cm-9q tone-light ms-wifi`
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `(ninguna)`
            - **Contenedor** · clases: `cm-42`
                - **Contenedor** · clases: `cm-4k m-reveal`
                    - **Editor de texto** · clases: `cm-9r`
                        Texto: `WiFi hotelero`
                    - **Titulo** · clases: `cm-9s` · etiqueta `h2`
                        Titulo: `WiFi seguro y gestionado, diseñado para tu hotel`
                    - **Contenedor** · clases: `cm-4o`
                        - **Editor de texto** · clases: `cm-46`
                            Texto: `Para el huésped, el WiFi forma parte de la experiencia de su estancia. Cuando falla, no piensa que existe un problema de red: responsabiliza al hotel.`
                        - **Editor de texto** · clases: `cm-46`
                            Texto: `Y un buen WiFi hotelero no se improvisa.`
                        - **Editor de texto** · clases: `cm-46`
                            Texto: `Cada edificio es diferente. Cambian la distribución, los materiales, las zonas de mayor uso y el número de dispositivos conectados en las horas punta.`
                        - **Editor de texto** · clases: `cm-71`
                            Texto: `Por eso empezamos midiendo antes de instalar.`
                - **Contenedor** · clases: `cm-4r m-reveal`
                    - **Imagen** · clases: `cm-4s`
                        Imagen: `/wp-content/uploads/comunica/images/soluciones/soluciones-wifi-medicion.webp` · Texto alternativo: «» (decorativa: dejar vacio)
            - **Contenedor** · clases: `cm-9t m-reveal`
                - **Contenedor** · clases: `cm-9u`
                    - **Titulo** · clases: `cm-9v` · etiqueta `h3`
                        Titulo: `<svg aria-hidden="true" class="lucide lucide-check mt-1 shrink-0 text-positive" fill="none" focusable="false" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Cobertura medida`
                    - **Editor de texto** · clases: `cm-9w`
                        Texto: `Analizamos la cobertura in situ para definir cuántos puntos de acceso necesita el hotel y dónde deben colocarse.`
                - **Contenedor** · clases: `cm-9u`
                    - **Titulo** · clases: `cm-9v` · etiqueta `h3`
                        Titulo: `<svg aria-hidden="true" class="lucide lucide-check mt-1 shrink-0 text-positive" fill="none" focusable="false" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>El equipamiento adecuado para cada proyecto`
                    - **Editor de texto** · clases: `cm-9w`
                        Texto: `Trabajamos con fabricantes especializados y seleccionamos la tecnología que mejor se adapta al edificio y a la operativa del hotel.`
                - **Contenedor** · clases: `cm-9u`
                    - **Titulo** · clases: `cm-9v` · etiqueta `h3`
                        Titulo: `<svg aria-hidden="true" class="lucide lucide-check mt-1 shrink-0 text-positive" fill="none" focusable="false" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Portal cautivo integrado`
                    - **Editor de texto** · clases: `cm-9w`
                        Texto: `Portal personalizado con la marca del hotel, disponible en varios idiomas y con posibilidad de integración con el PMS. Además, permite gestionar consentimientos y datos del huésped conforme al RGPD.`
                - **Contenedor** · clases: `cm-9u`
                    - **Titulo** · clases: `cm-9v` · etiqueta `h3`
                        Titulo: `<svg aria-hidden="true" class="lucide lucide-check mt-1 shrink-0 text-positive" fill="none" focusable="false" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Y si quieres, también nos encargamos de gestionarlo`
                    - **Editor de texto** · clases: `cm-9w`
                        Texto: `No tenemos por qué desaparecer cuando termina la instalación. Podemos gestionar la red para ayudar a mantenerla operativa y disponible y convertirnos en un único interlocutor para el proyecto.`
            - **Contenedor** · clases: `cm-9x m-reveal`
                - **Contenedor** · clases: `cm-9y`
                    - **Editor de texto** · clases: `cm-1y is-tabular`
                        Texto: `01`
                    - **Editor de texto** · clases: `cm-9z`
                        Texto: `Medimos`
                    - **Editor de texto** · clases: `cm-a0`
                        Texto: `Analizamos la cobertura y las necesidades reales del hotel.`
                - **Contenedor** · clases: `cm-9y`
                    - **Editor de texto** · clases: `cm-1y is-tabular`
                        Texto: `02`
                    - **Editor de texto** · clases: `cm-9z`
                        Texto: `Diseñamos e implantamos`
                    - **Editor de texto** · clases: `cm-a0`
                        Texto: `Ponemos en marcha equipamiento, red, portal y registro.`
                - **Contenedor** · clases: `cm-9y`
                    - **Editor de texto** · clases: `cm-1y is-tabular`
                        Texto: `03`
                    - **Editor de texto** · clases: `cm-9z`
                        Texto: `Gestionamos`
                    - **Editor de texto** · clases: `cm-a0`
                        Texto: `Si lo necesitas, nos hacemos cargo de la operativa de la red.`
            - **Contenedor** · clases: `cm-a1 m-reveal`
                - **Editor de texto** · clases: `cm-a2`
                    Texto: `Menos preocupación por el WiFi. Más atención a tus huéspedes.`
                - **Boton** · clases: `cm-s cm-btn is-btn-marca is-icono-despues group/btn`
                    Texto: «Quiero mejorar el WiFi de mi hotel» · Enlace: `/contacto?intent=wifi` · Icono: `arrow-right.svg` (despues)

## 7. Seccion `sol-iandrea`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `iandrea`

- **Contenedor** `<section>` · clases: `cm-3g tone-dark ms-sol-iandrea`
    - **HTML** · clases: `dl-flat` · pegar `html/soluciones-03.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `(ninguna)`
            - **Contenedor** · clases: `cm-a3`
                - **Contenedor** · clases: `cm-o`
                    - **Titulo** · clases: `cm-a4 m-reveal-l` · etiqueta `h2`
                        Titulo: `iAndrea`
                    - **Editor de texto** · clases: `cm-a5 m-reveal-l`
                        Texto: `Tu solución cuando el hotel recibe más llamadas de las que tu equipo puede atender`
                    - **Contenedor** · clases: `cm-5y m-reveal-l`
                        - **Editor de texto** · clases: `cm-3m`
                            Texto: `iAndrea es el agente virtual de voz con inteligencia artificial de Comunica.`
                        - **Editor de texto** · clases: `cm-1h`
                            Texto: `Puede atender llamadas entrantes y salientes, conversar con el cliente y realizar tareas durante la conversación.`
                    - **Contenedor** · clases: `cm-a6 m-reveal-l`
                        - **Boton** · clases: `cm-2t cm-btn is-btn-marca is-icono-despues group/btn`
                            Texto: «Quiero conocer iAndrea» · Enlace: `/contacto?intent=iandrea` · Icono: `arrow-right.svg` (despues)
                - **Contenedor** · clases: `cm-o`
                    - **Contenedor** · clases: `cm-a7`
                        - **Contenedor** · clases: `cm-a8 m-call`
                            - **Icono** · clases: `cm-a9` · Icono: `phone-call.svg`
                            - **Editor de texto** · clases: `cm-8k`
                                Texto: `Un huésped llama para preguntar por un servicio.`
                        - **Contenedor** · clases: `cm-a8 m-call`
                            - **Icono** · clases: `cm-a9` · Icono: `phone-call.svg`
                            - **Editor de texto** · clases: `cm-8k`
                                Texto: `Otro quiere hacer una reserva.`
                        - **Contenedor** · clases: `cm-a8 m-call`
                            - **Icono** · clases: `cm-a9` · Icono: `phone-call.svg`
                            - **Editor de texto** · clases: `cm-8k`
                                Texto: `Otro necesita información.`
                        - **Contenedor** · clases: `cm-a8 m-call`
                            - **Icono** · clases: `cm-a9` · Icono: `phone-call.svg`
                            - **Editor de texto** · clases: `cm-8k`
                                Texto: `Otro llama mientras recepción está atendiendo a quien acaba de llegar.`
                    - **Editor de texto** · clases: `cm-aa m-problem`
                        Texto: `El problema no es que el teléfono suene. El problema es lo que ocurre cuando nadie puede responder.`
            - **Contenedor** · clases: `cm-ab`
                - **Contenedor** · clases: `cm-ac m-feature`
                    - **Icono** · clases: `cm-ad` · Icono: `clock.svg`
                    - **Contenedor** · clases: `cm-7w`
                        - **Titulo** · clases: `cm-3y` · etiqueta `h3`
                            Titulo: `Atiende 24/7`
                        - **Editor de texto** · clases: `cm-ae`
                            Texto: `La atención telefónica puede continuar cuando el equipo no está disponible.`
                - **Contenedor** · clases: `cm-ac m-feature`
                    - **Icono** · clases: `cm-ad` · Icono: `calendar-range.svg`
                    - **Contenedor** · clases: `cm-7w`
                        - **Titulo** · clases: `cm-3y` · etiqueta `h3`
                            Titulo: `Gestiona reservas`
                        - **Editor de texto** · clases: `cm-ae`
                            Texto: `Puede atender solicitudes y conectarse con sistemas externos para realizar acciones durante la conversación.`
                - **Contenedor** · clases: `cm-ac m-feature`
                    - **Icono** · clases: `cm-ad` · Icono: `circle-question-mark.svg`
                    - **Contenedor** · clases: `cm-7w`
                        - **Titulo** · clases: `cm-3y` · etiqueta `h3`
                            Titulo: `Responde preguntas frecuentes`
                        - **Editor de texto** · clases: `cm-ae`
                            Texto: `Horarios, servicios, información del establecimiento y otras consultas repetitivas pueden resolverse sin interrumpir al equipo.`
                - **Contenedor** · clases: `cm-ac m-feature`
                    - **Icono** · clases: `cm-ad` · Icono: `layers.svg`
                    - **Contenedor** · clases: `cm-7w`
                        - **Titulo** · clases: `cm-3y` · etiqueta `h3`
                            Titulo: `Atiende varias llamadas a la vez`
                        - **Editor de texto** · clases: `cm-ae`
                            Texto: `La capacidad de atención deja de depender de que haya una persona disponible justo en ese momento.`
                - **Contenedor** · clases: `cm-ac m-feature`
                    - **Icono** · clases: `cm-ad` · Icono: `globe.svg`
                    - **Contenedor** · clases: `cm-7w`
                        - **Titulo** · clases: `cm-3y` · etiqueta `h3`
                            Titulo: `Se configura en más de 15 idiomas`
                        - **Editor de texto** · clases: `cm-ae`
                            Texto: `Una ventaja especialmente relevante para hoteles con huéspedes internacionales.`
                - **Contenedor** · clases: `cm-ac m-feature`
                    - **Icono** · clases: `cm-ad` · Icono: `database.svg`
                    - **Contenedor** · clases: `cm-7w`
                        - **Titulo** · clases: `cm-3y` · etiqueta `h3`
                            Titulo: `Recoge y cualifica información`
                        - **Editor de texto** · clases: `cm-ae`
                            Texto: `Puede obtener datos durante la conversación, clasificar oportunidades y registrar información para su seguimiento.`
                - **Contenedor** · clases: `cm-ac m-feature`
                    - **Icono** · clases: `cm-ad` · Icono: `split.svg`
                    - **Contenedor** · clases: `cm-7w`
                        - **Titulo** · clases: `cm-3y` · etiqueta `h3`
                            Titulo: `Deriva cuando hace falta una persona`
                        - **Editor de texto** · clases: `cm-ae`
                            Texto: `Automatiza aquello que puede resolverse de forma sencilla y pasa la conversación al equipo cuando necesita intervención humana.`
                - **Contenedor** · clases: `cm-ac m-feature`
                    - **Icono** · clases: `cm-ad` · Icono: `workflow.svg`
                    - **Contenedor** · clases: `cm-7w`
                        - **Titulo** · clases: `cm-3y` · etiqueta `h3`
                            Titulo: `Se integra con tus sistemas`
                        - **Editor de texto** · clases: `cm-ae`
                            Texto: `Puede conectarse con CRM, software de reservas, ERP y centralitas IP para consultar información o realizar acciones durante la conversación.`
            - **Contenedor** · clases: `cm-af`
                - **Contenedor** · clases: `cm-97 m-reveal-close`
                    - **Editor de texto** · clases: `cm-1h`
                        Texto: `La IA no debería darte más trabajo. Añadir una herramienta más que tu equipo tenga que aprender, alimentar y vigilar no resuelve demasiado.`
                    - **Editor de texto** · clases: `cm-1h`
                        Texto: `Por eso el valor de iAndrea no está simplemente en utilizar inteligencia artificial. Está en quitar tareas repetitivas de encima de las personas para que puedan dedicar su tiempo a aquellas conversaciones y situaciones en las que sí hacen falta.`
                - **Editor de texto** · clases: `cm-ag m-reveal-close`
                    Texto: `Automatiza lo repetitivo. Mantén a las personas donde aportan valor.`

## 8. Seccion `simulador`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `iandrea-demo`

- **Contenedor** `<section>` · clases: `cm-ah tone-dark ms-simulador`
    - **Contenedor** · clases: `cm-77`
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `(ninguna)`
            - **Contenedor** · clases: `cm-4 m-reveal`
                - **Editor de texto** · clases: `cm-3t`
                    Texto: `Pruébalo`
                - **Titulo** · clases: `cm-ai` · etiqueta `h2`
                    Titulo: `Escucha cómo responde iAndrea`
                - **Editor de texto** · clases: `cm-aj`
                    Texto: `Elige un escenario y una pregunta. Verás la conversación tal y como la resolvería en tu hotel, sin pasar por recepción.`
            - **HTML** · clases: `dl-flat` · pegar `html/soluciones-simulador.html`
                Por que HTML: Simulador de iAndrea: es una aplicacion (pestanas, conversacion, voz sintetica). El guion editable va en un bloque de datos al principio del HTML.
            - **Lista de iconos** · clases: `cm-ak m-reveal cm-solo`
                - [`zap.svg`] `Se integra con tu centralita actual. La puesta en marcha se mide en días, no en meses.`
