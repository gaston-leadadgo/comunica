# Estructura de widgets · Politica de privacidad

Pagina de WordPress: `/legal/privacidad`. Plantilla: **Elementor a ancho completo** (Elementor Canvas no: la cabecera y el pie son plantillas del Theme Builder).

Como leer este plano:

- Cada linea es un elemento, en el orden en que se monta. La sangria es el anidamiento.
- **Contenedor**: Disposicion → *Ancho completo*. Todo lo demas (direccion, relleno, hueco) se queda como venga: lo anula el CSS. Si pone `<section>` u otra etiqueta, se elige en Disposicion → Etiqueta HTML.
- **clases**: se pegan tal cual en Avanzado → Clases CSS, separadas por espacios.
- Los textos entre comillas invertidas se pegan en la pestana *Codigo* / *Texto* del widget, con sus etiquetas `<span>`/`<em>` si las llevan: son las que dan el color y el subrayado.
- Ningun widget lleva estilos del panel, efectos de movimiento ni animacion de entrada.

## Contenedor raiz

- **Contenedor** `<main>` · clases: `dl-landing`
    Contiene todas las secciones de abajo, en este orden.

## 1. Seccion `legal-privacidad`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `main`

- **Contenedor** · clases: `cm-5o ms-legal-privacidad`
    - **Contenedor** · clases: `cm-5p`
        - **Editor de texto** · clases: `cm-5q`
            Texto: `<h1>Política de privacidad</h1><p><strong>Pendiente de redacción definitiva.</strong> Debe redactarla el responsable legal de Comunica. Mientras tanto, esto es lo que el formulario de la web hace realmente con los datos.</p><h2>Qué datos se recogen</h2><ul><li>Nombre y apellidos, email, teléfono.</li><li>Hotel, cadena o empresa, y su dimensión aproximada.</li><li>El mensaje que escribas.</li></ul><h2>Para qué</h2><p>Únicamente para responder a la consulta que envías. La base legal es tu consentimiento, que se solicita de forma expresa mediante la casilla del formulario.</p><h2>Cuánto tiempo y con quién</h2><p>Pendiente de definir el plazo de conservación y el destino de los leads (correo, CRM o ambos). No se ceden datos a terceros ni se realizan envíos comerciales sin permiso explícito.</p><h2>Tus derechos</h2><p>Puedes solicitar acceso, rectificación, supresión, limitación, portabilidad y oposición escribiendo a <a href="mailto:comercial@comunica.com">comercial@comunica.com</a>.</p>`
