# Estructura de widgets · Partners

Pagina de WordPress: `/partners`. Plantilla: **Elementor a ancho completo** (Elementor Canvas no: la cabecera y el pie son plantillas del Theme Builder).

Como leer este plano:

- Cada linea es un elemento, en el orden en que se monta. La sangria es el anidamiento.
- **Contenedor**: Disposicion → *Ancho completo*. Todo lo demas (direccion, relleno, hueco) se queda como venga: lo anula el CSS. Si pone `<section>` u otra etiqueta, se elige en Disposicion → Etiqueta HTML.
- **clases**: se pegan tal cual en Avanzado → Clases CSS, separadas por espacios.
- Los textos entre comillas invertidas se pegan en la pestana *Codigo* / *Texto* del widget, con sus etiquetas `<span>`/`<em>` si las llevan: son las que dan el color y el subrayado.
- Ningun widget lleva estilos del panel, efectos de movimiento ni animacion de entrada.

## Contenedor raiz

- **Contenedor** `<main>` · clases: `dl-landing cm-5q`
    Contiene todas las secciones de abajo, en este orden.

## 1. Seccion `par-hero`

- **Contenedor** `<section>` · clases: `cm-78 tone-dark ms-par-hero`
    - **Contenedor** · clases: `cm-79`
    - **HTML** · clases: `dl-flat` · pegar `html/partners-01.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `(ninguna)`
            - **Editor de texto** · clases: `cm-4q m-reveal`
                Texto: `Partners Comunica`
            - **Titulo** · clases: `cm-7a m-reveal` · etiqueta `h1`
                Titulo: `<span class="block text-balance">Amplía lo que puedes ofrecer.</span> <span class="mt-1 block text-balance text-cyan">Sin tener que construirlo todo tú</span>`
            - **Contenedor** · clases: `cm-7b m-reveal`
                - **Contenedor** · clases: `cm-3s`
                    - **Editor de texto** · clases: `cm-1j`
                        Texto: `Tus clientes pueden pedirte proyectos que están fuera de tu catálogo o requieren una capacidad técnica que no tiene sentido desarrollar internamente.`
                    - **Editor de texto** · clases: `cm-1j`
                        Texto: `Eso no debería obligarte a decir que no.`
                    - **Editor de texto** · clases: `cm-1j`
                        Texto: `Comunica pone tecnología, capacidad técnica y soporte detrás de tu propuesta.`
                - **Contenedor** · clases: `cm-o`
                    - **Editor de texto** · clases: `cm-7c`
                        Texto: `Tú aportas la relación con el cliente. Nosotros te ayudamos a llegar más lejos.`
                    - **Contenedor** · clases: `cm-7d`
                        - **Boton** · clases: `cm-5o cm-btn is-btn-marca is-icono-despues group/btn`
                            Texto: «Quiero ser partner» · Enlace: `/contacto?intent=partner_canal` · Icono: `arrow-right.svg` (despues)
                        - **Boton** · clases: `cm-7e cm-btn is-btn-marca group/btn`
                            Texto: «Ya soy partner» · Enlace: `#portal` · Icono: `shield-check.svg` (antes)

## 2. Seccion `par-modelos`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `modelos`

- **Contenedor** `<section>` · clases: `cm-23 tone-light ms-par-modelos`
    - **Contenedor** · clases: `cm-3`
        - **Contenedor** · clases: `(ninguna)`
            - **Contenedor** · clases: `cm-7f m-reveal`
                - **Titulo** · clases: `cm-6y` · etiqueta `h2`
                    Titulo: `Que una oportunidad no termine en otro proveedor`
                - **Editor de texto** · clases: `cm-6r`
                    Texto: `Tu cliente ya confía en ti. Pero te pide una solución que no puedes construir. Una integración más compleja. Una solución hotelera. IPTV. Comunicaciones. IA. O un proyecto que necesita más capacidad técnica de la que tienes disponible.`
            - **Contenedor** · clases: `cm-7g`
                - **Lista de iconos** · clases: `cm-7h m-door cm-solo`
                    - [`x.svg`] `Puedes rechazarlo.`
                - **Lista de iconos** · clases: `cm-7h m-door cm-solo`
                    - [`x.svg`] `Puedes enviarlo a otra empresa.`
                - **Lista de iconos** · clases: `cm-7i m-door cm-solo`
                    - [`circle-check-big.svg`] `O puedes tener a Comunica detrás.`
            - **Titulo** · clases: `cm-7j m-reveal` · etiqueta `h2`
                Titulo: `Dos formas de trabajar juntos`
            - **Contenedor** · clases: `cm-7k`
                - **Contenedor** `<article>` · clases: `cm-7l m-model`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-7m` · etiqueta `h3`
                            Titulo: `Service Provider`
                        - **Editor de texto** · clases: `cm-7n`
                            Texto: `Tienes clientes y capacidad comercial. Quieres ampliar lo que puedes ofrecerles.`
                        - **Contenedor** · clases: `cm-7o`
                            - **Editor de texto** · clases: `cm-47`
                                Texto: `Para operadores regionales, distribuidores y empresas tecnológicas con cartera propia que quieren abordar soluciones que hoy no pueden desarrollar por sí mismos.`
                            - **Editor de texto** · clases: `cm-47`
                                Texto: `Comunica aporta catálogo, soporte técnico y capacidad de preventa para ayudarte en los proyectos más complejos.`
                            - **Editor de texto** · clases: `cm-47`
                                Texto: `La colaboración puede plantearse bajo marca Comunica o mediante fórmulas de marca blanca, según el acuerdo.`
                    - **Contenedor** · clases: `(ninguna)`
                        - **Contenedor** · clases: `cm-7p`
                            - **Editor de texto** · clases: `cm-7q`
                                Texto: `Tú mantienes la relación.`
                            - **Editor de texto** · clases: `cm-7r`
                                Texto: `Nosotros ampliamos tu capacidad.`
                        - **Contenedor** · clases: `cm-3q`
                            - **Boton** · clases: `cm-7s cm-btn is-btn-marca is-icono-despues group/btn`
                                Texto: «Quiero ser Service Provider» · Enlace: `/contacto?intent=partner_service_provider` · Icono: `arrow-right.svg` (despues)
                - **Contenedor** `<article>` · clases: `cm-7t m-model`
                    - **Contenedor** · clases: `cm-o`
                        - **Titulo** · clases: `cm-7m` · etiqueta `h3`
                            Titulo: `Referral Partner`
                        - **Editor de texto** · clases: `cm-7n`
                            Texto: `Tú detectas la oportunidad. Nosotros ayudamos a convertirla en proyecto.`
                        - **Contenedor** · clases: `cm-7o`
                            - **Editor de texto** · clases: `cm-47`
                                Texto: `Para agentes, comerciales independientes y pequeñas empresas que tienen relaciones de confianza con propietarios, hoteles o negocios, pero no cuentan con infraestructura técnica propia.`
                            - **Editor de texto** · clases: `cm-47`
                                Texto: `No necesitas convertirte en especialista. Nos cuentas qué necesita el cliente y nuestro equipo se encarga de estudiar el proyecto, preparar la solución y aportar el soporte técnico necesario.`
                    - **Contenedor** · clases: `(ninguna)`
                        - **Contenedor** · clases: `cm-7p`
                            - **Editor de texto** · clases: `cm-7q`
                                Texto: `Tú conoces al cliente.`
                            - **Editor de texto** · clases: `cm-7r`
                                Texto: `Nosotros sabemos cómo resolver la parte tecnológica.`
                        - **Contenedor** · clases: `cm-3q`
                            - **Boton** · clases: `cm-7s cm-btn is-btn-marca is-icono-despues group/btn`
                                Texto: «Quiero ser Referral Partner» · Enlace: `/contacto?intent=partner_referral` · Icono: `arrow-right.svg` (despues)

## 3. Seccion `par-beneficios`

- **Contenedor** `<section>` · clases: `cm-7u tone-light ms-par-beneficios`
    - **HTML** · clases: `dl-flat` · pegar `html/partners-02.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
    - **Contenedor** · clases: `cm-3`
        - **Titulo** · clases: `cm-14` · etiqueta `h2`
            Titulo: `Más negocio sin aumentar tu estructura`
        - **Contenedor** · clases: `cm-7v`
            - **Contenedor** `<article>` · clases: `cm-7w m-cell`
                - **Icono** · clases: `cm-7x` · Icono: `layers.svg`
                - **Contenedor** · clases: `cm-7y`
                    - **Titulo** · clases: `cm-7z` · etiqueta `h3`
                        Titulo: `Un catálogo más amplio`
                    - **Editor de texto** · clases: `cm-80`
                        Texto: `Incorpora soluciones que sería complejo desarrollar por tu cuenta.`
            - **Contenedor** `<article>` · clases: `cm-7w m-cell`
                - **Icono** · clases: `cm-7x` · Icono: `headphones.svg`
                - **Contenedor** · clases: `cm-7y`
                    - **Titulo** · clases: `cm-7z` · etiqueta `h3`
                        Titulo: `Soporte técnico de preventa`
                    - **Editor de texto** · clases: `cm-80`
                        Texto: `Cuando una oportunidad requiere conocimientos que no tienes internamente, los ponemos detrás de ti.`
            - **Contenedor** `<article>` · clases: `cm-7w m-cell`
                - **Icono** · clases: `cm-7x` · Icono: `settings.svg`
                - **Contenedor** · clases: `cm-7y`
                    - **Titulo** · clases: `cm-7z` · etiqueta `h3`
                        Titulo: `Capacidad de ejecución`
                    - **Editor de texto** · clases: `cm-80`
                        Texto: `No tienes que construir una nueva estructura para poder abordar proyectos más grandes o especializados.`
            - **Contenedor** `<article>` · clases: `cm-7w m-cell`
                - **Icono** · clases: `cm-7x` · Icono: `award.svg`
                - **Contenedor** · clases: `cm-7y`
                    - **Titulo** · clases: `cm-7z` · etiqueta `h3`
                        Titulo: `Flexibilidad de marca`
                    - **Editor de texto** · clases: `cm-80`
                        Texto: `Podemos estudiar modelos bajo marca Comunica o marca blanca según la colaboración.`
            - **Contenedor** `<article>` · clases: `cm-7w m-cell`
                - **Icono** · clases: `cm-7x` · Icono: `book-open.svg`
                - **Contenedor** · clases: `cm-7y`
                    - **Titulo** · clases: `cm-7z` · etiqueta `h3`
                        Titulo: `Material comercial`
                    - **Editor de texto** · clases: `cm-80`
                        Texto: `Argumentos y recursos que te ayudan a presentar las soluciones al cliente.`
            - **Contenedor** `<article>` · clases: `cm-7w m-cell`
                - **Icono** · clases: `cm-7x` · Icono: `refresh-cw.svg`
                - **Contenedor** · clases: `cm-7y`
                    - **Titulo** · clases: `cm-7z` · etiqueta `h3`
                        Titulo: `Una relación pensada para crecer`
                    - **Editor de texto** · clases: `cm-80`
                        Texto: `Un modelo de canal en el que cada parte aporta aquello que sabe hacer mejor.`
        - **Contenedor** · clases: `cm-81`
            - **Titulo** · clases: `cm-72` · etiqueta `h2`
                Titulo: `¿Cómo empezamos?`
            - **Contenedor** · clases: `cm-82`
                - **Contenedor** · clases: `cm-83`
                - **Contenedor** · clases: `cm-84`
                    - **Editor de texto** · clases: `cm-85 is-tabular`
                        Texto: `1`
                    - **Titulo** · clases: `cm-86` · etiqueta `h3`
                        Titulo: `Conocemos tu negocio`
                    - **Editor de texto** · clases: `cm-87`
                        Texto: `Nos cuentas qué vendes, a qué tipo de clientes y en qué zonas trabajas.`
                - **Contenedor** · clases: `cm-84`
                    - **Editor de texto** · clases: `cm-85 is-tabular`
                        Texto: `2`
                    - **Titulo** · clases: `cm-86` · etiqueta `h3`
                        Titulo: `Definimos la colaboración`
                    - **Editor de texto** · clases: `cm-87`
                        Texto: `Valoramos qué modelo encaja mejor contigo y qué soluciones pueden complementar tu oferta.`
                - **Contenedor** · clases: `cm-84`
                    - **Editor de texto** · clases: `cm-85 is-tabular`
                        Texto: `3`
                    - **Titulo** · clases: `cm-86` · etiqueta `h3`
                        Titulo: `Preparamos el soporte`
                    - **Editor de texto** · clases: `cm-87`
                        Texto: `Definimos cómo trabajaremos la preventa, la propuesta y la ejecución de los proyectos.`
                - **Contenedor** · clases: `cm-84`
                    - **Editor de texto** · clases: `cm-85 is-tabular`
                        Texto: `4`
                    - **Titulo** · clases: `cm-86` · etiqueta `h3`
                        Titulo: `Generamos negocio juntos`
                    - **Editor de texto** · clases: `cm-87`
                        Texto: `Tú detectas oportunidades. Comunica te ayuda a resolverlas.`
            - **Contenedor** · clases: `cm-88`
                - **Boton** · clases: `cm-89 cm-btn is-btn-marca is-icono-despues group/btn`
                    Texto: «Quiero hablar sobre partners» · Enlace: `/contacto?intent=partner_canal` · Icono: `arrow-right.svg` (despues)

## 4. Seccion `par-portal`

ID CSS del contenedor de la seccion (Avanzado → ID CSS): `portal`

- **Contenedor** `<section>` · clases: `cm-8a tone-light ms-par-portal`
    - **Contenedor** · clases: `cm-w`
        - **Contenedor** · clases: `cm-8b`
            - **Icono** · clases: `cm-8c` · Icono: `shield-check.svg`
            - **Editor de texto** · clases: `cm-5c`
                Texto: `¿Ya eres partner de Comunica?`
            - **Editor de texto** · clases: `cm-8d`
                Texto: `El acceso al portal se habilitará en cuanto esté conectado. Si ya trabajas con nosotros y necesitas material o soporte, escríbenos y te lo hacemos llegar.`
            - **Boton** · clases: `cm-8e cm-btn is-btn-marca is-icono-despues group/btn`
                Texto: «Escribir a mi contacto en Comunica» · Enlace: `/contacto?intent=partner_canal` · Icono: `arrow-right.svg` (despues)

## 5. Seccion `cierre`

- **Contenedor** `<section>` · clases: `cm-75 tone-dark ms-cierre`
    - **HTML** · clases: `dl-flat` · pegar `html/partners-03.html`
        Por que HTML: SVG decorativo (arco de marca, logotipo o motivo): no es contenido editable.
    - **Contenedor** · clases: `cm-w`
        - **Contenedor** · clases: `cm-2p`
            - **Titulo** · clases: `cm-1p m-reveal` · etiqueta `h2`
                Titulo: `Si juntamos ambas cosas, podemos llegar más lejos.`
            - **Contenedor** · clases: `cm-76 m-reveal`
                - **Editor de texto** · clases: `cm-5l`
                    Texto: `Tú ya tienes algo que nosotros no podemos fabricar: la confianza de tu cliente.`
                - **Editor de texto** · clases: `cm-5l`
                    Texto: `Nosotros tenemos tecnología, conocimiento y capacidad técnica que quizá tú no necesites construir.`
            - **Contenedor** · clases: `cm-77 m-reveal`
                - **Boton** · clases: `cm-5o cm-btn is-btn-marca is-icono-despues group/btn`
                    Texto: «Quiero ser partner» · Enlace: `/contacto?intent=partner_canal` · Icono: `arrow-right.svg` (despues)
