# Estructura de widgets · Aviso legal

Pagina de WordPress: `/legal/aviso-legal`. Plantilla: **Elementor a ancho completo** (Elementor Canvas no: la cabecera y el pie son plantillas del Theme Builder).

Como leer este plano:

- Cada linea es un elemento, en el orden en que se monta. La sangria es el anidamiento.
- **Contenedor**: Disposicion → *Ancho completo*. Todo lo demas (direccion, relleno, hueco) se queda como venga: lo anula el CSS. Si pone `<section>` u otra etiqueta, se elige en Disposicion → Etiqueta HTML.
- **clases**: se pegan tal cual en Avanzado → Clases CSS, separadas por espacios.
- Los textos entre comillas invertidas se pegan en la pestana *Codigo* / *Texto* del widget, con sus etiquetas `<span>`/`<em>` si las llevan: son las que dan el color y el subrayado.
- Ningun widget lleva estilos del panel, efectos de movimiento ni animacion de entrada.

## Contenedor raiz

- **Contenedor** `<main>` · clases: `dl-landing`
    Contiene todas las secciones de abajo, en este orden.

## 1. Seccion `legal-aviso-legal`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `main`

- **Contenedor** · clases: `cm-5o ms-legal-aviso-legal`
    - **Contenedor** · clases: `cm-5p`
        - **Editor de texto** · clases: `cm-5q`
            Texto: `<h1>Aviso legal</h1><p><strong>Pendiente de redacción definitiva.</strong> Esta página está preparada para recibir el texto legal que facilite Comunica. Hasta entonces no se indexa en buscadores.</p><h2>Titular del sitio</h2><p>Comunistone S.L.<br/>Avda. Manoteras, 24<br/>28050 Madrid, España<br/>Teléfono: 910 600 600<br/>Correo: <a href="mailto:comercial@comunica.com">comercial@comunica.com</a></p><h2>Datos que faltan por confirmar</h2><ul><li>CIF y datos de inscripción en el Registro Mercantil.</li><li>Número de operador registrado ante la CNMC.</li><li>Correo corporativo definitivo para comunicaciones legales.</li><li>Condiciones de uso, propiedad intelectual y ley aplicable.</li></ul>`
