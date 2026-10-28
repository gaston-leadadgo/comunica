# Estructura de widgets · Contacto

Pagina de WordPress: `/contacto`. Plantilla: **Elementor a ancho completo** (Elementor Canvas no: la cabecera y el pie son plantillas del Theme Builder).

Como leer este plano:

- Cada linea es un elemento, en el orden en que se monta. La sangria es el anidamiento.
- **Contenedor**: Disposicion → *Ancho completo*. Todo lo demas (direccion, relleno, hueco) se queda como venga: lo anula el CSS. Si pone `<section>` u otra etiqueta, se elige en Disposicion → Etiqueta HTML.
- **clases**: se pegan tal cual en Avanzado → Clases CSS, separadas por espacios.
- Los textos entre comillas invertidas se pegan en la pestana *Codigo* / *Texto* del widget, con sus etiquetas `<span>`/`<em>` si las llevan: son las que dan el color y el subrayado.
- Ningun widget lleva estilos del panel, efectos de movimiento ni animacion de entrada.

## Contenedor raiz

- **Contenedor** `<main>` · clases: `dl-landing`
    Contiene todas las secciones de abajo, en este orden.

## 1. Seccion `contacto`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `main`

- **Contenedor** · clases: `cm-1 ms-contacto`
    - **Contenedor** · clases: `cm-2`
    - **HTML** · clases: `dl-flat` · pegar `html/contacto-01.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `(ninguna)`
            - **Contenedor** · clases: `cm-4 m-reveal`
                - **Editor de texto** · clases: `cm-5`
                    Texto: `Contacto`
                - **Titulo** · clases: `cm-6` · etiqueta `h1`
                    Titulo: `Cuéntanos qué quieres resolver`
                - **Editor de texto** · clases: `cm-7`
                    Texto: `No necesitas saber qué producto necesitas. Un especialista hotelero analizará tus datos y responderá sin compromiso.`
            - **Contenedor** · clases: `cm-8 m-reveal`
                - **HTML** · clases: `dl-flat` · pegar `html/contacto-formulario.html`
                    Por que HTML: Formulario: lo sustituye Contact Form 7 (ver contact-form-7/).
                - **Contenedor** `<aside>` · clases: `cm-9`
                    - **Contenedor** · clases: `cm-a`
                        - **Editor de texto** · clases: `cm-b`
                            Texto: `También puedes llamarnos`
                        - **Boton** · clases: `cm-c cm-btn is-tabular`
                            Texto: «910 600 600» · Enlace: `tel:+34910600600` · Icono: `phone.svg` (antes)
                        - **Contenedor** · clases: `cm-d`
                            - **Editor de texto** · clases: `cm-e`
                                Texto: `Horario de oficina`
                            - **Editor de texto** · clases: `cm-f`
                                Texto: `Lunes a Viernes de 9:00 a 18:30`
                            - **Editor de texto** · clases: `cm-g`
                                Texto: `El soporte 24/7 forma parte de los acuerdos con SLA ampliado. El horario de arriba es el de atención comercial.`
                        - **Contenedor** · clases: `cm-h`
                            - **Editor de texto** · clases: `cm-e`
                                Texto: `Oficinas`
                            - **Editor de texto** · clases: `cm-i`
                                Texto: `Avda. Manoteras, 24<br/>28050 Madrid<br/>España`
                        - **Contenedor** · clases: `cm-h`
                            - **Boton** · clases: `cm-j cm-btn`
                                Texto: «comercial@comunica.com» · Enlace: `mailto:comercial@comunica.com` · Icono: `mail.svg` (antes)
