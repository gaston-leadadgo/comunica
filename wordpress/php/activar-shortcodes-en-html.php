<?php
/**
 * IMPRESCINDIBLE — sin esto, el formulario NUNCA se verá.
 * -----------------------------------------------------------------------
 * Por diseño, el widget "HTML" de Elementor vuelca el código tal cual lo
 * pegaste, SIN ejecutar los shortcodes de WordPress que haya dentro (es un
 * comportamiento normal y documentado de Elementor: ese widget es para HTML
 * literal, no para contenido de WordPress). Por eso el shortcode
 * [contact-form-7 id="..." ...] aparece como texto entre corchetes en vez
 * de convertirse en el formulario — y por eso pasaba lo mismo incluso con
 * un formulario nuevo recién creado: no es un problema del formulario, es
 * que ese widget nunca llegó a intentar ejecutar ningún shortcode.
 *
 * Este filtro le dice a Elementor que SÍ ejecute los shortcodes que
 * encuentre dentro de sus widgets HTML (y solo de ese tipo de widget; el
 * resto de tu sitio no se ve afectado).
 *
 * CÓMO INSTALARLO (elige una opción):
 *   A) Si usas un tema hijo (child theme): pega esto al final del
 *      functions.php de tu tema hijo.
 *   B) Si no usas tema hijo: instala el plugin gratuito "WPCode" (o "Code
 *      Snippets"), crea un snippet nuevo de tipo PHP con este contenido, y
 *      actívalo para todo el sitio ("Ejecutar en todas partes" / "Auto
 *      Insert" - Everywhere).
 *
 * Después de instalarlo, recarga la página de la landing (puede hacer
 * falta refrescar también la caché si tu hosting o un plugin de caché la
 * está sirviendo desde una copia guardada).
 */

add_filter('elementor/widget/render_content', function ($content, $widget) {
    if ($widget->get_name() === 'html') {
        return do_shortcode($content);
    }
    return $content;
}, 10, 2);
