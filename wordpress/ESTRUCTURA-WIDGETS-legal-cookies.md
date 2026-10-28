# Estructura de widgets · Politica de cookies

Pagina de WordPress: `/legal/cookies`. Plantilla: **Elementor a ancho completo** (Elementor Canvas no: la cabecera y el pie son plantillas del Theme Builder).

Como leer este plano:

- Cada linea es un elemento, en el orden en que se monta. La sangria es el anidamiento.
- **Contenedor**: Disposicion → *Ancho completo*. Todo lo demas (direccion, relleno, hueco) se queda como venga: lo anula el CSS. Si pone `<section>` u otra etiqueta, se elige en Disposicion → Etiqueta HTML.
- **clases**: se pegan tal cual en Avanzado → Clases CSS, separadas por espacios.
- Los textos entre comillas invertidas se pegan en la pestana *Codigo* / *Texto* del widget, con sus etiquetas `<span>`/`<em>` si las llevan: son las que dan el color y el subrayado.
- Ningun widget lleva estilos del panel, efectos de movimiento ni animacion de entrada.

## Contenedor raiz

- **Contenedor** `<main>` · clases: `dl-landing`
    Contiene todas las secciones de abajo, en este orden.

## 1. Seccion `legal-cookies`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `main`

- **Contenedor** · clases: `cm-5o ms-legal-cookies`
    - **Contenedor** · clases: `cm-5p`
        - **Editor de texto** · clases: `cm-5q`
            Texto: `<h1>Política de cookies</h1><p><strong>Esta web no utiliza cookies.</strong> No hay analítica, ni píxeles de seguimiento, ni contenido incrustado de terceros, así que no se almacena ninguna información en tu navegador y no hace falta pedirte consentimiento.</p><h2>Si en el futuro se añade analítica</h2><p>La recomendación técnica es usar una herramienta sin cookies. Si finalmente se instala Google Analytics 4, será obligatorio un banner con Consent Mode v2 y habrá que actualizar esta página antes de publicarlo.</p>`
