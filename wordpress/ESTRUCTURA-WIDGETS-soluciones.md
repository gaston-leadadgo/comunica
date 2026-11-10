# Estructura de widgets · Soluciones

Pagina de WordPress: `/soluciones`. Plantilla: **Elementor a ancho completo** (Elementor Canvas no: la cabecera y el pie son plantillas del Theme Builder).

Como leer este plano:

- Cada linea es un elemento, en el orden en que se monta. La sangria es el anidamiento.
- **Contenedor**: Disposicion → *Ancho completo*. Todo lo demas (direccion, relleno, hueco) se queda como venga: lo anula el CSS. Si pone `<section>` u otra etiqueta, se elige en Disposicion → Etiqueta HTML.
- **clases**: se pegan tal cual en Avanzado → Clases CSS, separadas por espacios.
- Los textos entre comillas invertidas se pegan en la pestana *Codigo* / *Texto* del widget, con sus etiquetas `<span>`/`<em>` si las llevan: son las que dan el color y el subrayado.
- Ningun widget lleva estilos del panel, efectos de movimiento ni animacion de entrada.

## Contenedor raiz

- **Contenedor** `<main>` · clases: `dl-landing cm-5q`
    Contiene todas las secciones de abajo, en este orden.

## 1. Seccion `sol-hero`

- **Contenedor** `<section>` · clases: `cm-5u tone-light ms-sol-hero`
    - **Contenedor** · clases: `cm-2`
    - **HTML** · clases: `dl-flat` · pegar `html/soluciones-01.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
    - **Contenedor** · clases: `cm-m`
        - **Contenedor** · clases: `(ninguna)`
            - **Editor de texto** · clases: `cm-5 m-reveal`
                Texto: `Soluciones para hoteles`
            - **Titulo** · clases: `cm-8v m-reveal` · etiqueta `h1`
                Titulo: `<span class="block text-balance">No te ofrecemos un catálogo.</span> <span class="mt-1 block text-balance text-cyan-strong">Construimos la solución alrededor de <em class="mark-hotel">tu hotel</em></span>`
            - **Contenedor** · clases: `cm-8w m-reveal`
                - **Contenedor** · clases: `cm-3s`
                    - **Editor de texto** · clases: `cm-6r`
                        Texto: `Un establecimiento independiente no tiene los mismos problemas que una cadena de veinte propiedades.`
                    - **Editor de texto** · clases: `cm-6r`
                        Texto: `Por eso combinamos conectividad, voz fija y centralita virtual, móvil, WiFi, IPTV, inteligencia artificial e integraciones según tu tamaño, tu infraestructura y tu forma de operar.`
                - **Contenedor** · clases: `cm-o`
                    - **Editor de texto** · clases: `cm-8x`
                        Texto: `Primero entendemos qué necesitas. Después decidimos qué tecnología tiene sentido`
                    - **Contenedor** · clases: `cm-3b`
                        - **Boton** · clases: `cm-89 cm-btn is-btn-marca is-icono-despues group/btn`
                            Texto: «Habla con un especialista hotelero» · Enlace: `/contacto` · Icono: `arrow-right.svg` (despues)

## 2. Seccion `sol-perfiles`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `perfiles`

- **Contenedor** `<section>` · clases: `cm-1n tone-light js-pestanas ms-sol-perfiles`
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `cm-8y`
            - **Contenedor** · clases: `cm-8z`
                - **Contenedor** · clases: `cm-90 js-tab is-on js-btn`
                    - **Editor de texto** · clases: `cm-91`
                        Texto: `Hotel Conectado`
                    - **Editor de texto** · clases: `cm-92 is-tabular`
                        Texto: `1 propiedad`
                        Cambia con el JS: no tocar sus clases.
                    - **Contenedor** · clases: `cm-93 js-solo-on`
                - **Contenedor** · clases: `cm-90 js-tab js-btn`
                    - **Editor de texto** · clases: `cm-91`
                        Texto: `Hotel Consolidado`
                    - **Editor de texto** · clases: `cm-92 is-tabular`
                        Texto: `2-10 propiedades`
                        Cambia con el JS: no tocar sus clases.
                    - **Contenedor** · clases: `cm-93 js-solo-on`
                - **Contenedor** · clases: `cm-90 js-tab js-btn`
                    - **Editor de texto** · clases: `cm-91`
                        Texto: `Hotel Gestionado`
                    - **Editor de texto** · clases: `cm-92 is-tabular`
                        Texto: `10-50 propiedades`
                        Cambia con el JS: no tocar sus clases.
                    - **Contenedor** · clases: `cm-93 js-solo-on`
                - **Contenedor** · clases: `cm-90 js-tab js-btn`
                    - **Editor de texto** · clases: `cm-91`
                        Texto: `Proyecto Especializado`
                    - **Editor de texto** · clases: `cm-92 is-tabular`
                        Texto: `50+ propiedades`
                        Cambia con el JS: no tocar sus clases.
                    - **Contenedor** · clases: `cm-93 js-solo-on`
            - **Contenedor** · clases: `cm-94 js-panel is-on`
                - **Contenedor** · clases: `cm-95`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-72` · etiqueta `h2`
                            Titulo: `Hotel Conectado`
                        - **Editor de texto** · clases: `cm-96`
                            Texto: `Lo esencial bien resuelto`
                    - **Editor de texto** · clases: `cm-97`
                        Texto: `Para hoteles independientes`
                - **Contenedor** · clases: `cm-98`
                    - **Contenedor** · clases: `cm-o`
                        - **Contenedor** · clases: `cm-99`
                            - **Editor de texto** · clases: `cm-47`
                                Texto: `Tienes suficientes cosas de las que ocuparte. Que Internet funcione, que el WiFi llegue donde tiene que llegar o que la telefonía esté operativa no debería requerir tu atención constante.`
                            - **Editor de texto** · clases: `cm-62`
                                Texto: `Hotel Conectado reúne las comunicaciones esenciales de tu establecimiento bajo una misma gestión.`
                        - **Editor de texto** · clases: `cm-9a`
                            Texto: `Servicios incluidos:`
                        - **Contenedor** · clases: `cm-9b`
                            - **Contenedor** · clases: `cm-9c`
                                - **Lista de iconos** · clases: `cm-9d cm-solo`
                                    - [`check.svg`] `Centralita virtual`
                                - **Editor de texto** · clases: `cm-9e`
                                    Texto: `Comunicaciones del hotel gestionadas desde una solución flexible.`
                            - **Contenedor** · clases: `cm-9c`
                                - **Lista de iconos** · clases: `cm-9d cm-solo`
                                    - [`check.svg`] `Móvil de empresa`
                                - **Editor de texto** · clases: `cm-9e`
                                    Texto: `Líneas móviles para el equipo con tarifas flexibles, en la misma factura que el resto de servicios.`
                            - **Contenedor** · clases: `cm-9c`
                                - **Lista de iconos** · clases: `cm-9d cm-solo`
                                    - [`check.svg`] `Internet con multicobertura y respaldo automático`
                                - **Editor de texto** · clases: `cm-9e`
                                    Texto: `Para reducir la dependencia de una única conexión.`
                            - **Contenedor** · clases: `cm-9c`
                                - **Lista de iconos** · clases: `cm-9d cm-solo`
                                    - [`check.svg`] `WiFi gestionado`
                                - **Editor de texto** · clases: `cm-9e`
                                    Texto: `Con separación entre la red utilizada por empleados y la destinada a huéspedes.`
                            - **Contenedor** · clases: `cm-9c`
                                - **Lista de iconos** · clases: `cm-9d cm-solo`
                                    - [`check.svg`] `Soporte técnico`
                                - **Editor de texto** · clases: `cm-9e`
                                    Texto: `Para ayudarte cuando lo necesites.`
                        - **Contenedor** · clases: `cm-9f`
                            - **Editor de texto** · clases: `cm-9g`
                                Texto: `Puedes añadir:`
                            - **Lista de iconos** · clases: `cm-9h`
                                - [`sparkles.svg`] `Portal cautivo personalizado con la marca del hotel.`
                                - [`sparkles.svg`] `iAndrea para reforzar la atención telefónica cuando aumenta la demanda o el equipo no puede responder.`
                    - **Contenedor** · clases: `cm-o`
                        - **Imagen** · clases: `cm-3e`
                            Imagen: `/wp-content/uploads/comunica/images/home/home-profile-conectado-independiente.webp` · Texto alternativo: «» (decorativa: dejar vacio)
                        - **Editor de texto** · clases: `cm-9i`
                            Texto: `El objetivo es sencillo: que funcione sin que tengas que gestionarlo todo.`
                        - **Contenedor** · clases: `cm-3q`
                            - **Boton** · clases: `cm-7s cm-btn is-btn-marca is-icono-despues group/btn`
                                Texto: «Quiero saber si encaja con mi hotel» · Enlace: `/contacto?intent=hotel_conectado` · Icono: `arrow-right.svg` (despues)
            - **Contenedor** · clases: `cm-94 js-panel`
                - **Contenedor** · clases: `cm-95`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-72` · etiqueta `h2`
                            Titulo: `Hotel Consolidado`
                        - **Editor de texto** · clases: `cm-96`
                            Texto: `Varias propiedades. Una sola forma de gestionarlas`
                    - **Editor de texto** · clases: `cm-97`
                        Texto: `Para pequeñas cadenas`
                - **Contenedor** · clases: `cm-98`
                    - **Contenedor** · clases: `cm-o`
                        - **Contenedor** · clases: `cm-99`
                            - **Editor de texto** · clases: `cm-47`
                                Texto: `Cada nueva propiedad puede traer consigo otro proveedor, otro contrato, otra factura y otra forma de trabajar. Hasta que alguien decide centralizar.`
                            - **Editor de texto** · clases: `cm-62`
                                Texto: `Hotel Consolidado permite gestionar las telecomunicaciones del grupo como una única estructura.`
                        - **Editor de texto** · clases: `cm-9a`
                            Texto: `Servicios incluidos:`
                        - **Contenedor** · clases: `cm-9b`
                            - **Contenedor** · clases: `cm-9c`
                                - **Lista de iconos** · clases: `cm-9d cm-solo`
                                    - [`check.svg`] `Centralita premium multi-sede`
                                - **Editor de texto** · clases: `cm-9e`
                                    Texto: `Extensiones compartidas, colas de espera, grabación y gestión entre propiedades.`
                            - **Contenedor** · clases: `cm-9c`
                                - **Lista de iconos** · clases: `cm-9d cm-solo`
                                    - [`check.svg`] `Móvil corporativo del grupo`
                                - **Editor de texto** · clases: `cm-9e`
                                    Texto: `Las líneas y terminales de todas las propiedades bajo un mismo contrato y una sola gestión.`
                            - **Contenedor** · clases: `cm-9c`
                                - **Lista de iconos** · clases: `cm-9d cm-solo`
                                    - [`check.svg`] `Conectividad gestionada`
                                - **Editor de texto** · clases: `cm-9e`
                                    Texto: `Con visión centralizada del tráfico del grupo.`
                            - **Contenedor** · clases: `cm-9c`
                                - **Lista de iconos** · clases: `cm-9d cm-solo`
                                    - [`check.svg`] `WiFi y portal cautivo por propiedad`
                                - **Editor de texto** · clases: `cm-9e`
                                    Texto: `Una experiencia adaptada a cada establecimiento sin perder el control del conjunto.`
                            - **Contenedor** · clases: `cm-9c`
                                - **Lista de iconos** · clases: `cm-9d cm-solo`
                                    - [`check.svg`] `Reporting consolidado y soporte dedicado`
                                - **Editor de texto** · clases: `cm-9e`
                                    Texto: `Más visibilidad y conocimiento del conjunto de establecimientos.`
                        - **Contenedor** · clases: `cm-9f`
                            - **Editor de texto** · clases: `cm-9g`
                                Texto: `Puedes añadir:`
                            - **Lista de iconos** · clases: `cm-9h`
                                - [`sparkles.svg`] `IPTV e iAndrea.`
                    - **Contenedor** · clases: `cm-o`
                        - **Imagen** · clases: `cm-9j`
                            Imagen: `/wp-content/uploads/comunica/images/home/home-profile-consolidado-grupo.webp` · Texto alternativo: «» (decorativa: dejar vacio)
                        - **Editor de texto** · clases: `cm-9i`
                            Texto: `Porque gestionar cinco hoteles no debería significar gestionar cinco veces la tecnología.`
                        - **Contenedor** · clases: `cm-3q`
                            - **Boton** · clases: `cm-7s cm-btn is-btn-marca is-icono-despues group/btn`
                                Texto: «Quiero centralizar mi cadena» · Enlace: `/contacto?intent=hotel_consolidado` · Icono: `arrow-right.svg` (despues)
            - **Contenedor** · clases: `cm-94 js-panel`
                - **Contenedor** · clases: `cm-95`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-72` · etiqueta `h2`
                            Titulo: `Hotel Gestionado`
                        - **Editor de texto** · clases: `cm-96`
                            Texto: `Una cadena. Un mismo estándar tecnológico`
                    - **Editor de texto** · clases: `cm-97`
                        Texto: `Para cadenas en crecimiento`
                - **Contenedor** · clases: `cm-98`
                    - **Contenedor** · clases: `cm-o`
                        - **Contenedor** · clases: `cm-99`
                            - **Editor de texto** · clases: `cm-47`
                                Texto: `El huésped reconoce tu marca independientemente del hotel en el que se aloje. Tu tecnología también debería responder a un mismo estándar.`
                            - **Editor de texto** · clases: `cm-62`
                                Texto: `Hotel Gestionado ayuda a homogeneizar las comunicaciones y la experiencia tecnológica entre establecimientos, integrándolas con los sistemas del hotel.`
                        - **Editor de texto** · clases: `cm-9a`
                            Texto: `Servicios incluidos:`
                        - **Contenedor** · clases: `cm-9b`
                            - **Contenedor** · clases: `cm-9c`
                                - **Lista de iconos** · clases: `cm-9d cm-solo`
                                    - [`check.svg`] `Comunicaciones multi-sede`
                                - **Editor de texto** · clases: `cm-9e`
                                    Texto: `Centralita premium, SIP Trunk e integración con herramientas corporativas como Teams.`
                            - **Contenedor** · clases: `cm-9c`
                                - **Lista de iconos** · clases: `cm-9d cm-solo`
                                    - [`check.svg`] `Movilidad corporativa integrada`
                                - **Editor de texto** · clases: `cm-9e`
                                    Texto: `El móvil de cada empleado funciona como su extensión: se le localiza esté donde esté, dentro o fuera del hotel.`
                            - **Contenedor** · clases: `cm-9c`
                                - **Lista de iconos** · clases: `cm-9d cm-solo`
                                    - [`check.svg`] `Conectividad de alta capacidad`
                                - **Editor de texto** · clases: `cm-9e`
                                    Texto: `Fibra dedicada FTTO y sistema de respaldo 5G.`
                            - **Contenedor** · clases: `cm-9c`
                                - **Lista de iconos** · clases: `cm-9d cm-solo`
                                    - [`check.svg`] `WiFi integrado con los sistemas del hotel`
                                - **Editor de texto** · clases: `cm-9e`
                                    Texto: `Para conectar la experiencia del huésped con la operativa del establecimiento.`
                            - **Contenedor** · clases: `cm-9c`
                                - **Lista de iconos** · clases: `cm-9d cm-solo`
                                    - [`check.svg`] `IPTV gestionada y soporte 24/7`
                                - **Editor de texto** · clases: `cm-9e`
                                    Texto: `Una capa más de comunicación en habitación con interlocutor dedicado.`
                    - **Contenedor** · clases: `cm-o`
                        - **Imagen** · clases: `cm-9j`
                            Imagen: `/wp-content/uploads/comunica/images/home/home-profile-gestionado-cadena.webp` · Texto alternativo: «» (decorativa: dejar vacio)
                        - **Editor de texto** · clases: `cm-9i`
                            Texto: `Menos diferencias entre hoteles. Más control sobre el conjunto.`
                        - **Contenedor** · clases: `cm-3q`
                            - **Boton** · clases: `cm-7s cm-btn is-btn-marca is-icono-despues group/btn`
                                Texto: «Habla con un especialista» · Enlace: `/contacto?intent=hotel_gestionado` · Icono: `arrow-right.svg` (despues)
            - **Contenedor** · clases: `cm-94 js-panel`
                - **Contenedor** · clases: `cm-95`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-72` · etiqueta `h2`
                            Titulo: `Proyecto Especializado`
                        - **Editor de texto** · clases: `cm-96`
                            Texto: `No hace falta sustituir lo que funciona para resolver lo que falta`
                    - **Editor de texto** · clases: `cm-97`
                        Texto: `Para grandes cadenas`
                - **Contenedor** · clases: `cm-98`
                    - **Contenedor** · clases: `cm-o`
                        - **Contenedor** · clases: `cm-99`
                            - **Editor de texto** · clases: `cm-47`
                                Texto: `Puede que ya trabajes con un gran operador. Puede que tengas un equipo IT propio y una infraestructura estandarizada. Pero incluso en ese escenario aparecen proyectos o necesidades que requieren una capacidad muy específica.`
                            - **Editor de texto** · clases: `cm-62`
                                Texto: `Comunica puede incorporarse como partner tecnológico para resolver esa pieza concreta.`
                        - **Editor de texto** · clases: `cm-9a`
                            Texto: `Soluciones específicas:`
                        - **Contenedor** · clases: `cm-9b`
                            - **Contenedor** · clases: `cm-9c`
                                - **Lista de iconos** · clases: `cm-9d cm-solo`
                                    - [`check.svg`] `SIP Trunk para Contact Center`
                            - **Contenedor** · clases: `cm-9c`
                                - **Lista de iconos** · clases: `cm-9d cm-solo`
                                    - [`check.svg`] `Soluciones de voz fija y móvil`
                            - **Contenedor** · clases: `cm-9c`
                                - **Lista de iconos** · clases: `cm-9d cm-solo`
                                    - [`check.svg`] `iAndrea personalizada`
                            - **Contenedor** · clases: `cm-9c`
                                - **Lista de iconos** · clases: `cm-9d cm-solo`
                                    - [`check.svg`] `IPTV e integraciones específicas`
                        - **Contenedor** · clases: `cm-9f`
                            - **Editor de texto** · clases: `cm-9g`
                                Texto: `Puedes añadir:`
                            - **Lista de iconos** · clases: `cm-9h`
                                - [`sparkles.svg`] `Integración con tu PMS.`
                    - **Contenedor** · clases: `cm-o`
                        - **Imagen** · clases: `cm-9j`
                            Imagen: `/wp-content/uploads/comunica/images/home/home-profile-especializado-proyecto.webp` · Texto alternativo: «» (decorativa: dejar vacio)
                        - **Editor de texto** · clases: `cm-9i`
                            Texto: `Nos integramos donde podemos aportar valor. Sin obligarte a sustituir lo que ya funciona.`
                        - **Contenedor** · clases: `cm-3q`
                            - **Boton** · clases: `cm-7s cm-btn is-btn-marca is-icono-despues group/btn`
                                Texto: «Cuéntanos tu proyecto» · Enlace: `/contacto?intent=proyecto_especializado` · Icono: `arrow-right.svg` (despues)

## 3. Seccion `sol-capacidades`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `capacidades`

- **Contenedor** `<section>` · clases: `cm-23 tone-light ms-sol-capacidades`
    - **Contenedor** · clases: `cm-w`
        - **Titulo** · clases: `cm-9k` · etiqueta `h2`
            Titulo: `Las capacidades con las que construimos cada solución`
        - **Contenedor** · clases: `cm-9l`
            - **Contenedor** · clases: `cm-9m group/row m-row`
                - **Contenedor** · clases: `cm-9n`
                    - **Editor de texto** · clases: `cm-9o is-tabular`
                        Texto: `01`
                    - **Contenedor** · clases: `cm-9p`
                        - **Icono** · clases: `cm-9q` · Icono: `radio.svg`
                        - **Titulo** · clases: `(ninguna)` · etiqueta `h3`
                            Titulo: `Conectividad`
                    - **Editor de texto** · clases: `cm-9r`
                        Texto: `Internet de alta capacidad, multicobertura y sistemas de respaldo adaptados a las necesidades de cada establecimiento.`
            - **Contenedor** · clases: `cm-9m group/row m-row`
                - **Contenedor** · clases: `cm-9n`
                    - **Editor de texto** · clases: `cm-9o is-tabular`
                        Texto: `02`
                    - **Contenedor** · clases: `cm-9p`
                        - **Icono** · clases: `cm-9q` · Icono: `phone-call.svg`
                        - **Titulo** · clases: `(ninguna)` · etiqueta `h3`
                            Titulo: `Voz fija y centralita virtual`
                    - **Editor de texto** · clases: `cm-9r`
                        Texto: `Centralitas virtuales, soluciones multi-sede, SIP Trunk, numeración, colas y comunicaciones adaptadas a la operativa hotelera.`
            - **Contenedor** · clases: `cm-9m group/row m-row`
                - **Contenedor** · clases: `cm-9n`
                    - **Editor de texto** · clases: `cm-9o is-tabular`
                        Texto: `03`
                    - **Contenedor** · clases: `cm-9p`
                        - **Icono** · clases: `cm-9q` · Icono: `smartphone.svg`
                        - **Titulo** · clases: `(ninguna)` · etiqueta `h3`
                            Titulo: `Móvil`
                    - **Editor de texto** · clases: `cm-9r`
                        Texto: `Móvil de empresa sin sorpresas en la factura, con tarifas flexibles y una única gestión junto al resto de servicios del hotel.`
            - **Contenedor** · clases: `cm-9m group/row m-row`
                - **Contenedor** · clases: `cm-9n`
                    - **Editor de texto** · clases: `cm-9o is-tabular`
                        Texto: `04`
                    - **Contenedor** · clases: `cm-9p`
                        - **Icono** · clases: `cm-9q` · Icono: `wifi.svg`
                        - **Titulo** · clases: `(ninguna)` · etiqueta `h3`
                            Titulo: `WiFi`
                    - **Editor de texto** · clases: `cm-9r`
                        Texto: `Redes gestionadas para empleados y huéspedes, cobertura, segmentación y portales cautivos.`
            - **Contenedor** · clases: `cm-9m group/row m-row`
                - **Contenedor** · clases: `cm-9n`
                    - **Editor de texto** · clases: `cm-9o is-tabular`
                        Texto: `05`
                    - **Contenedor** · clases: `cm-9p`
                        - **Icono** · clases: `cm-9q` · Icono: `tv.svg`
                        - **Titulo** · clases: `(ninguna)` · etiqueta `h3`
                            Titulo: `IPTV`
                    - **Editor de texto** · clases: `cm-9r`
                        Texto: `Televisión e información del hotel integradas en la experiencia de la habitación.`
            - **Contenedor** · clases: `cm-9m group/row m-row`
                - **Contenedor** · clases: `cm-9n`
                    - **Editor de texto** · clases: `cm-9o is-tabular`
                        Texto: `06`
                    - **Contenedor** · clases: `cm-9p`
                        - **Icono** · clases: `cm-9q` · Icono: `workflow.svg`
                        - **Titulo** · clases: `(ninguna)` · etiqueta `h3`
                            Titulo: `Integraciones`
                    - **Editor de texto** · clases: `cm-9r`
                        Texto: `Conexión entre comunicaciones y sistemas hoteleros para reducir tareas manuales y mejorar la operación.`
            - **Contenedor** · clases: `cm-9m group/row m-row`
                - **Contenedor** · clases: `cm-9n`
                    - **Editor de texto** · clases: `cm-9o is-tabular`
                        Texto: `07`
                    - **Contenedor** · clases: `cm-9p`
                        - **Icono** · clases: `cm-9q` · Icono: `sparkles.svg`
                        - **Titulo** · clases: `(ninguna)` · etiqueta `h3`
                            Titulo: `iAndrea`
                    - **Editor de texto** · clases: `cm-9r`
                        Texto: `Inteligencia artificial aplicada a la atención telefónica del hotel.`
            - **Contenedor** · clases: `cm-9m group/row m-row`
                - **Contenedor** · clases: `cm-9n`
                    - **Editor de texto** · clases: `cm-9o is-tabular`
                        Texto: `08`
                    - **Contenedor** · clases: `cm-9p`
                        - **Icono** · clases: `cm-9q` · Icono: `monitor-smartphone.svg`
                        - **Titulo** · clases: `(ninguna)` · etiqueta `h3`
                            Titulo: `Terminales, accesorios y equipamiento`
                    - **Editor de texto** · clases: `cm-9r`
                        Texto: `El equipamiento de comunicaciones del hotel, desde el móvil hasta el PC o la pantalla, suministrado por quien ya gestiona tus servicios.`
            - **Contenedor** · clases: `cm-9m group/row m-row`
                - **Contenedor** · clases: `cm-9n`
                    - **Editor de texto** · clases: `cm-9o is-tabular`
                        Texto: `09`
                    - **Contenedor** · clases: `cm-9p`
                        - **Icono** · clases: `cm-9q` · Icono: `headphones.svg`
                        - **Titulo** · clases: `(ninguna)` · etiqueta `h3`
                            Titulo: `Soporte`
                    - **Editor de texto** · clases: `cm-9r`
                        Texto: `Personas que conocen la instalación y entienden el contexto en el que se produce cada incidencia. Profesionales que realizan consultoría y análisis de lo que tienes.`

## 4. Seccion `cierre`

- **Contenedor** `<section>` · clases: `cm-75 tone-dark ms-cierre`
    - **HTML** · clases: `dl-flat` · pegar `html/soluciones-02.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
    - **Contenedor** · clases: `cm-w`
        - **Contenedor** · clases: `cm-2p`
            - **Titulo** · clases: `cm-1p m-reveal` · etiqueta `h2`
                Titulo: `¿No sabes qué solución necesitas?`
            - **Contenedor** · clases: `cm-76 m-reveal`
                - **Editor de texto** · clases: `cm-5l`
                    Texto: `Es lo normal, no deberías tener que diseñarla tú. Nosotros nos encargamos de ello.`
                - **Editor de texto** · clases: `cm-5l`
                    Texto: `Cuéntanos qué está ocurriendo y analizaremos contigo qué merece la pena mantener, qué puede mejorarse y qué solución tiene sentido.`
            - **Contenedor** · clases: `cm-77 m-reveal`
                - **Boton** · clases: `cm-5o cm-btn is-btn-marca is-icono-despues group/btn`
                    Texto: «Habla con un especialista hotelero» · Enlace: `/contacto` · Icono: `arrow-right.svg` (despues)

## 5. Seccion `extension`

- **Contenedor** `<section>` · clases: `cm-9s tone-light ms-extension`
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `cm-3j`
            - **Contenedor** · clases: `cm-o`
                - **Titulo** · clases: `cm-72` · etiqueta `h2`
                    Titulo: `Extensión Dinámica`
                - **Editor de texto** · clases: `cm-9t`
                    Texto: `La extensión de la habitación, en el móvil del huésped`
                - **Contenedor** · clases: `cm-3n`
                    - **Editor de texto** · clases: `cm-47`
                        Texto: `Con la Extensión Dinámica de Comunica, el huésped escanea un código QR y puede utilizar su propio móvil como extensión de la habitación durante su estancia.`
                    - **Editor de texto** · clases: `cm-47`
                        Texto: `Una forma más flexible de plantear la telefonía hotelera, especialmente interesante en reformas, ampliaciones y nuevos proyectos.`
                - **Lista de iconos** · clases: `cm-9u`
                    - `<strong class="font-semibold text-navy">Menos hardware. Menos mantenimiento.</strong> Reduce la dependencia de terminales físicos, cableado específico y equipos que instalar, reparar o sustituir.`
                    - `<strong class="font-semibold text-navy">Una experiencia más mobile-first.</strong> El huésped utiliza el dispositivo que ya conoce y lleva consigo, sin necesidad de depender del teléfono de sobremesa de la habitación.`
                    - `<strong class="font-semibold text-navy">Integrada en el ecosistema del hotel.</strong> Puede formar parte de una arquitectura conjunta con WiFi, voz fija y centralita virtual, móvil, iAndrea e integraciones, bajo un mismo proveedor.`
                - **Editor de texto** · clases: `cm-9v`
                    Texto: `Menos infraestructura que gestionar. Más flexibilidad para comunicar.`
                - **Contenedor** · clases: `cm-3q`
                    - **Boton** · clases: `cm-3r cm-btn is-btn-marca is-icono-despues group/btn`
                        Texto: «Quiero conocer la Extensión Dinámica» · Enlace: `/contacto?intent=extension` · Icono: `arrow-right.svg` (despues)
            - **Contenedor** · clases: `cm-3s`
                - **Contenedor** · clases: `cm-3t`
                    - **Imagen** · clases: `cm-3u`
                        Imagen: `/wp-content/uploads/comunica/images/soluciones/soluciones-extension-desk-sin-telefono.webp` · Texto alternativo: «» (decorativa: dejar vacio)
                - **Contenedor** · clases: `cm-9w`
                    - **Contenedor** · clases: `cm-9x m-step`
                        - **Contenedor** · clases: `cm-3x`
                            - **Editor de texto** · clases: `cm-9y is-tabular`
                                Texto: `01`
                            - **Icono** · clases: `cm-9z` · Icono: `hotel.svg`
                        - **Editor de texto** · clases: `cm-o`
                            Texto: `<span class="block text-body-sm font-semibold text-pretty">Habitación 304</span><span class="block font-mono text-[0.75rem] text-pretty text-fg-muted">Huésped conectado</span>`
                    - **Contenedor** · clases: `cm-9x m-step`
                        - **Contenedor** · clases: `cm-3x`
                            - **Editor de texto** · clases: `cm-9y is-tabular`
                                Texto: `02`
                            - **Icono** · clases: `cm-9z` · Icono: `smartphone.svg`
                        - **Editor de texto** · clases: `cm-o`
                            Texto: `<span class="block text-body-sm font-semibold text-pretty">Código QR en la habitación</span><span class="block font-mono text-[0.75rem] text-pretty text-fg-muted">Escanear al llegar</span>`
                    - **Contenedor** · clases: `cm-9x m-step`
                        - **Contenedor** · clases: `cm-3x`
                            - **Editor de texto** · clases: `cm-9y is-tabular`
                                Texto: `03`
                            - **Icono** · clases: `cm-9z` · Icono: `phone-call.svg`
                        - **Editor de texto** · clases: `cm-o`
                            Texto: `<span class="block text-body-sm font-semibold text-pretty">Móvil del huésped</span><span class="block font-mono text-[0.75rem] text-pretty text-fg-muted">Ext. 304 Activa</span>`
                - **Lista de iconos** · clases: `cm-a0`
                    - [`circle-check-big.svg`] `Llamada directa a Recepción`
                    - [`circle-check-big.svg`] `Room Service`

## 6. Seccion `wifi`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `wifi`

- **Contenedor** `<section>` · clases: `cm-41 tone-light ms-wifi`
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `(ninguna)`
            - **Contenedor** · clases: `cm-3j`
                - **Contenedor** · clases: `cm-42 m-reveal`
                    - **Editor de texto** · clases: `cm-43`
                        Texto: `WiFi hotelero`
                    - **Titulo** · clases: `cm-44` · etiqueta `h2`
                        Titulo: `WiFi seguro y gestionado, diseñado para tu hotel`
                    - **Contenedor** · clases: `cm-46`
                        - **Editor de texto** · clases: `cm-47`
                            Texto: `Para el huésped, el WiFi forma parte de la experiencia de su estancia. Cuando falla, no piensa que existe un problema de red: responsabiliza al hotel.`
                        - **Editor de texto** · clases: `cm-47`
                            Texto: `Y un buen WiFi hotelero no se improvisa.`
                        - **Editor de texto** · clases: `cm-47`
                            Texto: `Cada edificio es diferente. Cambian la distribución, los materiales, las zonas de mayor uso y el número de dispositivos conectados en las horas punta.`
                        - **Editor de texto** · clases: `cm-48`
                            Texto: `Por eso empezamos midiendo antes de instalar.`
                - **Contenedor** · clases: `cm-4a m-reveal`
                    - **Imagen** · clases: `cm-4b`
                        Imagen: `/wp-content/uploads/comunica/images/soluciones/soluciones-wifi-medicion.webp` · Texto alternativo: «» (decorativa: dejar vacio)
            - **Contenedor** · clases: `cm-a1 m-reveal`
                - **Contenedor** · clases: `cm-a2`
                    - **Contenedor** · clases: `cm-a3`
                        - **Icono** · clases: `cm-a4` · Icono: `check.svg`
                        - **Titulo** · clases: `(ninguna)` · etiqueta `h3`
                            Titulo: `Cobertura medida`
                    - **Editor de texto** · clases: `cm-a5`
                        Texto: `Analizamos la cobertura in situ para definir cuántos puntos de acceso necesita el hotel y dónde deben colocarse.`
                - **Contenedor** · clases: `cm-a2`
                    - **Contenedor** · clases: `cm-a3`
                        - **Icono** · clases: `cm-a4` · Icono: `check.svg`
                        - **Titulo** · clases: `(ninguna)` · etiqueta `h3`
                            Titulo: `El equipamiento adecuado para cada proyecto`
                    - **Editor de texto** · clases: `cm-a5`
                        Texto: `Trabajamos con fabricantes especializados y seleccionamos la tecnología que mejor se adapta al edificio y a la operativa del hotel.`
                - **Contenedor** · clases: `cm-a2`
                    - **Contenedor** · clases: `cm-a3`
                        - **Icono** · clases: `cm-a4` · Icono: `check.svg`
                        - **Titulo** · clases: `(ninguna)` · etiqueta `h3`
                            Titulo: `Portal cautivo integrado`
                    - **Editor de texto** · clases: `cm-a5`
                        Texto: `Portal personalizado con la marca del hotel, disponible en varios idiomas y con posibilidad de integración con el PMS. Además, permite gestionar consentimientos y datos del huésped conforme al RGPD.`
                - **Contenedor** · clases: `cm-a2`
                    - **Contenedor** · clases: `cm-a3`
                        - **Icono** · clases: `cm-a4` · Icono: `check.svg`
                        - **Titulo** · clases: `(ninguna)` · etiqueta `h3`
                            Titulo: `Y si quieres, también nos encargamos de gestionarlo`
                    - **Editor de texto** · clases: `cm-a5`
                        Texto: `No tenemos por qué desaparecer cuando termina la instalación. Podemos gestionar la red para ayudar a mantenerla operativa y disponible y convertirnos en un único interlocutor para el proyecto.`
            - **Contenedor** · clases: `cm-a6 m-reveal`
                - **Contenedor** · clases: `cm-a7`
                    - **Editor de texto** · clases: `cm-20 is-tabular`
                        Texto: `01`
                    - **Editor de texto** · clases: `cm-a8`
                        Texto: `Medimos`
                    - **Editor de texto** · clases: `cm-a9`
                        Texto: `Analizamos la cobertura y las necesidades reales del hotel.`
                - **Contenedor** · clases: `cm-a7`
                    - **Editor de texto** · clases: `cm-20 is-tabular`
                        Texto: `02`
                    - **Editor de texto** · clases: `cm-a8`
                        Texto: `Diseñamos e implantamos`
                    - **Editor de texto** · clases: `cm-a9`
                        Texto: `Ponemos en marcha equipamiento, red, portal y registro.`
                - **Contenedor** · clases: `cm-a7`
                    - **Editor de texto** · clases: `cm-20 is-tabular`
                        Texto: `03`
                    - **Editor de texto** · clases: `cm-a8`
                        Texto: `Gestionamos`
                    - **Editor de texto** · clases: `cm-a9`
                        Texto: `Si lo necesitas, nos hacemos cargo de la operativa de la red.`
            - **Contenedor** · clases: `cm-4c m-reveal`
                - **Editor de texto** · clases: `cm-4d`
                    Texto: `Menos preocupación por el WiFi. Más atención a tus huéspedes.`
                - **Boton** · clases: `cm-s cm-btn is-btn-marca is-icono-despues group/btn`
                    Texto: «Quiero mejorar el WiFi de mi hotel» · Enlace: `/contacto?intent=wifi` · Icono: `arrow-right.svg` (despues)

## 7. Seccion `sol-iandrea`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `iandrea`

- **Contenedor** `<section>` · clases: `cm-4e tone-dark ms-sol-iandrea`
    - **HTML** · clases: `dl-flat` · pegar `html/soluciones-03.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `(ninguna)`
            - **Contenedor** · clases: `cm-aa`
                - **Contenedor** · clases: `cm-o`
                    - **Titulo** · clases: `cm-ab m-reveal-l` · etiqueta `h2`
                        Titulo: `iAndrea`
                    - **Editor de texto** · clases: `cm-ac m-reveal-l`
                        Texto: `Tu solución cuando el hotel recibe más llamadas de las que tu equipo puede atender`
                    - **Contenedor** · clases: `cm-61 m-reveal-l`
                        - **Editor de texto** · clases: `cm-4k`
                            Texto: `iAndrea es el agente virtual de voz con inteligencia artificial de Comunica.`
                        - **Editor de texto** · clases: `cm-1j`
                            Texto: `Puede atender llamadas entrantes y salientes, conversar con el cliente y realizar tareas durante la conversación.`
                    - **Contenedor** · clases: `cm-ad m-reveal-l`
                        - **Boton** · clases: `cm-2v cm-btn is-btn-marca is-icono-despues group/btn`
                            Texto: «Quiero conocer iAndrea» · Enlace: `/contacto?intent=iandrea` · Icono: `arrow-right.svg` (despues)
                - **Contenedor** · clases: `cm-o`
                    - **Contenedor** · clases: `cm-ae`
                        - **Contenedor** · clases: `cm-af m-call`
                            - **Icono** · clases: `cm-ag` · Icono: `phone-call.svg`
                            - **Editor de texto** · clases: `cm-8m`
                                Texto: `Un huésped llama para preguntar por un servicio.`
                        - **Contenedor** · clases: `cm-af m-call`
                            - **Icono** · clases: `cm-ag` · Icono: `phone-call.svg`
                            - **Editor de texto** · clases: `cm-8m`
                                Texto: `Otro quiere hacer una reserva.`
                        - **Contenedor** · clases: `cm-af m-call`
                            - **Icono** · clases: `cm-ag` · Icono: `phone-call.svg`
                            - **Editor de texto** · clases: `cm-8m`
                                Texto: `Otro necesita información.`
                        - **Contenedor** · clases: `cm-af m-call`
                            - **Icono** · clases: `cm-ag` · Icono: `phone-call.svg`
                            - **Editor de texto** · clases: `cm-8m`
                                Texto: `Otro llama mientras recepción está atendiendo a quien acaba de llegar.`
                    - **Editor de texto** · clases: `cm-ah m-problem`
                        Texto: `El problema no es que el teléfono suene. El problema es lo que ocurre cuando nadie puede responder.`
            - **Contenedor** · clases: `cm-ai`
                - **Contenedor** · clases: `cm-aj m-feature`
                    - **Icono** · clases: `cm-ak` · Icono: `clock.svg`
                    - **Contenedor** · clases: `cm-7y`
                        - **Titulo** · clases: `cm-4v` · etiqueta `h3`
                            Titulo: `Atiende 24/7`
                        - **Editor de texto** · clases: `cm-al`
                            Texto: `La atención telefónica puede continuar cuando el equipo no está disponible.`
                - **Contenedor** · clases: `cm-aj m-feature`
                    - **Icono** · clases: `cm-ak` · Icono: `calendar-range.svg`
                    - **Contenedor** · clases: `cm-7y`
                        - **Titulo** · clases: `cm-4v` · etiqueta `h3`
                            Titulo: `Gestiona reservas`
                        - **Editor de texto** · clases: `cm-al`
                            Texto: `Puede atender solicitudes y conectarse con sistemas externos para realizar acciones durante la conversación.`
                - **Contenedor** · clases: `cm-aj m-feature`
                    - **Icono** · clases: `cm-ak` · Icono: `circle-question-mark.svg`
                    - **Contenedor** · clases: `cm-7y`
                        - **Titulo** · clases: `cm-4v` · etiqueta `h3`
                            Titulo: `Responde preguntas frecuentes`
                        - **Editor de texto** · clases: `cm-al`
                            Texto: `Horarios, servicios, información del establecimiento y otras consultas repetitivas pueden resolverse sin interrumpir al equipo.`
                - **Contenedor** · clases: `cm-aj m-feature`
                    - **Icono** · clases: `cm-ak` · Icono: `layers.svg`
                    - **Contenedor** · clases: `cm-7y`
                        - **Titulo** · clases: `cm-4v` · etiqueta `h3`
                            Titulo: `Atiende varias llamadas a la vez`
                        - **Editor de texto** · clases: `cm-al`
                            Texto: `La capacidad de atención deja de depender de que haya una persona disponible justo en ese momento.`
                - **Contenedor** · clases: `cm-aj m-feature`
                    - **Icono** · clases: `cm-ak` · Icono: `globe.svg`
                    - **Contenedor** · clases: `cm-7y`
                        - **Titulo** · clases: `cm-4v` · etiqueta `h3`
                            Titulo: `Se configura en más de 15 idiomas`
                        - **Editor de texto** · clases: `cm-al`
                            Texto: `Una ventaja especialmente relevante para hoteles con huéspedes internacionales.`
                - **Contenedor** · clases: `cm-aj m-feature`
                    - **Icono** · clases: `cm-ak` · Icono: `database.svg`
                    - **Contenedor** · clases: `cm-7y`
                        - **Titulo** · clases: `cm-4v` · etiqueta `h3`
                            Titulo: `Recoge y cualifica información`
                        - **Editor de texto** · clases: `cm-al`
                            Texto: `Puede obtener datos durante la conversación, clasificar oportunidades y registrar información para su seguimiento.`
                - **Contenedor** · clases: `cm-aj m-feature`
                    - **Icono** · clases: `cm-ak` · Icono: `split.svg`
                    - **Contenedor** · clases: `cm-7y`
                        - **Titulo** · clases: `cm-4v` · etiqueta `h3`
                            Titulo: `Deriva cuando hace falta una persona`
                        - **Editor de texto** · clases: `cm-al`
                            Texto: `Automatiza aquello que puede resolverse de forma sencilla y pasa la conversación al equipo cuando necesita intervención humana.`
                - **Contenedor** · clases: `cm-aj m-feature`
                    - **Icono** · clases: `cm-ak` · Icono: `workflow.svg`
                    - **Contenedor** · clases: `cm-7y`
                        - **Titulo** · clases: `cm-4v` · etiqueta `h3`
                            Titulo: `Se integra con tus sistemas`
                        - **Editor de texto** · clases: `cm-al`
                            Texto: `Puede conectarse con CRM, software de reservas, ERP y centralitas IP para consultar información o realizar acciones durante la conversación.`
            - **Contenedor** · clases: `cm-am`
                - **Contenedor** · clases: `cm-99 m-reveal-close`
                    - **Editor de texto** · clases: `cm-1j`
                        Texto: `La IA no debería darte más trabajo. Añadir una herramienta más que tu equipo tenga que aprender, alimentar y vigilar no resuelve demasiado.`
                    - **Editor de texto** · clases: `cm-1j`
                        Texto: `Por eso el valor de iAndrea no está simplemente en utilizar inteligencia artificial. Está en quitar tareas repetitivas de encima de las personas para que puedan dedicar su tiempo a aquellas conversaciones y situaciones en las que sí hacen falta.`
                - **Editor de texto** · clases: `cm-an m-reveal-close`
                    Texto: `Automatiza lo repetitivo. Mantén a las personas donde aportan valor.`

## 8. Seccion `simulador`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `iandrea-demo`

- **Contenedor** `<section>` · clases: `cm-ao tone-dark ms-simulador`
    - **Contenedor** · clases: `cm-79`
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `(ninguna)`
            - **Contenedor** · clases: `cm-4 m-reveal`
                - **Editor de texto** · clases: `cm-4q`
                    Texto: `Pruébalo`
                - **Titulo** · clases: `cm-ap` · etiqueta `h2`
                    Titulo: `Escucha cómo responde iAndrea`
                - **Editor de texto** · clases: `cm-aq`
                    Texto: `Elige un escenario y una pregunta. Verás la conversación tal y como la resolvería en tu hotel, sin pasar por recepción.`
            - **HTML** · clases: `dl-flat` · pegar `html/soluciones-simulador.html`
                Por que HTML: Simulador de iAndrea: es una aplicacion (pestanas, conversacion, voz sintetica). El guion editable va en un bloque de datos al principio del HTML.
            - **Lista de iconos** · clases: `cm-ar m-reveal cm-solo`
                - [`zap.svg`] `Se integra con tu centralita actual. La puesta en marcha se mide en días, no en meses.`
