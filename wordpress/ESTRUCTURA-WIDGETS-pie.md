# Estructura de widgets · Pie (plantilla)

Pagina de WordPress: `(plantilla Pie del Theme Builder)`. Theme Builder → Pie → mostrar en todo el sitio (Elementor Canvas no: la cabecera y el pie son plantillas del Theme Builder).

Como leer este plano:

- Cada linea es un elemento, en el orden en que se monta. La sangria es el anidamiento.
- **Contenedor**: Disposicion → *Ancho completo*. Todo lo demas (direccion, relleno, hueco) se queda como venga: lo anula el CSS. Si pone `<section>` u otra etiqueta, se elige en Disposicion → Etiqueta HTML.
- **clases**: se pegan tal cual en Avanzado → Clases CSS, separadas por espacios.
- Los textos entre comillas invertidas se pegan en la pestana *Codigo* / *Texto* del widget, con sus etiquetas `<span>`/`<em>` si las llevan: son las que dan el color y el subrayado.
- Ningun widget lleva estilos del panel, efectos de movimiento ni animacion de entrada.

## Contenedor raiz

- **Contenedor** (sin etiqueta) · clases: `dl-landing`
    Contiene todas las secciones de abajo, en este orden.

## 1. Seccion `pie`

- **Contenedor** `<footer>` · clases: `cm-8d tone-dark ms-pie`
    - **HTML** · clases: `dl-flat` · pegar `html/pie-01.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
    - **Contenedor** · clases: `cm-8e`
        - **Contenedor** · clases: `cm-8f`
            - **Contenedor** · clases: `(ninguna)`
                - **HTML** · clases: `dl-flat` · pegar `html/pie-02.html`
                    Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
                - **Editor de texto** · clases: `cm-8g`
                    Texto: `Tecnología y telecomunicaciones para hoteles. Conectividad, voz fija y móvil, WiFi, IPTV e inteligencia artificial integradas y gestionadas por un equipo que entiende la operativa hotelera.`
                - **Lista de iconos** · clases: `cm-8h`
                    - [`check.svg`] `Experiencia en 482 hoteles`
                    - [`check.svg`] `17 países con soporte especializado`
            - **Contenedor** `<nav>` · clases: `(ninguna)`
                - **Titulo** · clases: `cm-3t` · etiqueta `h2`
                    Titulo: `Navegación`
                - **Lista de iconos** · clases: `cm-8i`
                    - `<a class="inline-block py-1.5 text-body-sm text-fg-inverse-muted transition-colors hover:text-white" href="/">Inicio</a>`
                    - `<a class="inline-block py-1.5 text-body-sm text-fg-inverse-muted transition-colors hover:text-white" href="/soluciones">Soluciones por hotel</a>`
                    - `<a class="inline-block py-1.5 text-body-sm text-fg-inverse-muted transition-colors hover:text-white" href="/nosotros">Nosotros y especialización</a>`
                    - `<a class="inline-block py-1.5 text-body-sm text-fg-inverse-muted transition-colors hover:text-white" href="/partners">Canal de partners</a>`
            - **Contenedor** · clases: `(ninguna)`
                - **Titulo** · clases: `cm-3t` · etiqueta `h2`
                    Titulo: `Partners y contacto`
                - **Contenedor** · clases: `cm-8j`
                    - **Editor de texto** · clases: `cm-8k`
                        Texto: `¿Ya eres partner de Comunica?`
                    - **Boton** · clases: `cm-8l cm-btn`
                        Texto: «Acceder al portal de partners» · Enlace: `/partners#portal` · Icono: `shield-check.svg` (antes)
                - **Contenedor** · clases: `cm-8m`
                    - **Lista de iconos** · clases: `cm-8n cm-solo`
                        - [`map-pin.svg`] `Avda. Manoteras, 24`
                    - **Boton** · clases: `cm-8o cm-btn`
                        Texto: «+34 910 600 600» · Enlace: `tel:+34910600600` · Icono: `phone.svg` (antes)
                    - **Boton** · clases: `cm-8p cm-btn`
                        Texto: «comercial@comunica.com» · Enlace: `mailto:comercial@comunica.com` · Icono: `mail.svg` (antes)
                    - **HTML** · clases: `dl-flat` · pegar `html/pie-03.html`
                        Por que HTML: Enlace con dos iconos (logotipo y flecha de enlace externo): el widget Boton solo admite uno. Para cambiar la URL, editar el href.
        - **Editor de texto** · clases: `cm-8q`
            Texto: `Un solo interlocutor. Menos gestión. Más tranquilidad.`
        - **Contenedor** · clases: `cm-8r`
            - **Editor de texto** · clases: `(ninguna)`
                Texto: `© 2026 Comunistone S.L. Todos los derechos reservados.`
            - **Contenedor** `<nav>` · clases: `(ninguna)`
                - **Lista de iconos** · clases: `cm-8s`
                    - `<a class="inline-block py-1.5 transition-colors hover:text-white" href="/legal/aviso-legal">Aviso legal</a>`
                    - `<a class="inline-block py-1.5 transition-colors hover:text-white" href="/legal/privacidad">Política de privacidad</a>`
