<?php
/**
 * IMPRESCINDIBLE — carga el CSS y el JS de la web Comunica.
 * -----------------------------------------------------------------------
 * Sin esto, las paginas salen con el texto amontonado, sin espacios ni
 * colores, y nada se mueve.
 *
 * Los archivos se suben por FTP a  /wp-content/uploads/comunica/
 * (ver GUIA-PASO-A-PASO.md, paso 1). Este snippet:
 *
 *   1. Carga las 4 hojas en este orden, que importa:
 *        01-estilos-base  ->  02-adaptador-widgets  ->  03-clases  ->  estilos-cf7
 *      y las declara DEPENDIENTES de las de Elementor, para que se impriman
 *      DESPUES. La regla mas fuerte de Elementor sobre los widgets empata en
 *      especificidad con las clases cm-*, y en un empate gana la que va
 *      despues. Si las pegas en otro sitio (Personalizar > CSS adicional, la
 *      pestana CSS de Elementor), ese orden ya no esta garantizado.
 *   2. Carga GSAP (copia local, sin CDN externo: RGPD) y los cuatro scripts
 *      de la web en el pie, en este orden.
 *   3. Usa la fecha de modificacion de cada archivo como version: al subir
 *      una version nueva por FTP, el navegador no sirve la vieja de cache.
 *
 * Como instalarlo: igual que los otros snippets (WPCode / Code Snippets,
 * tipo PHP, "Ejecutar en todas partes"), o al final del functions.php del
 * tema hijo.
 */

add_action('wp_enqueue_scripts', function () {
    $dir = WP_CONTENT_DIR . '/uploads/comunica';
    $url = content_url('/uploads/comunica');
    $ver = function ($rel) use ($dir) {
        $f = $dir . '/' . $rel;
        return file_exists($f) ? (string) filemtime($f) : null;
    };

    // Las hojas de Elementor que tienen que ir antes. Si alguna no existe en
    // la pagina (p. ej. una pagina sin Elementor), WordPress la ignora.
    $deps_css = array_values(array_filter(
        ['elementor-frontend', 'elementor-post-' . get_the_ID(), 'contact-form-7'],
        function ($h) { return wp_style_is($h, 'registered'); }
    ));

    $anterior = $deps_css;
    foreach ([
        'comunica-base'       => 'css/01-estilos-base.css',
        'comunica-adaptador'  => 'css/02-adaptador-widgets.css',
        'comunica-clases'     => 'css/03-clases.css',
        'comunica-cf7'        => 'css/estilos-cf7.css',
    ] as $handle => $rel) {
        wp_enqueue_style($handle, "$url/$rel", $anterior, $ver($rel));
        $anterior = [$handle];
    }

    wp_enqueue_script('comunica-gsap', "$url/js/vendor/gsap.min.js", [], '3.15.0', true);
    wp_enqueue_script('comunica-scrolltrigger', "$url/js/vendor/ScrollTrigger.min.js", ['comunica-gsap'], '3.15.0', true);
    wp_enqueue_script('comunica-flip', "$url/js/vendor/Flip.min.js", ['comunica-gsap'], '3.15.0', true);

    $anterior = ['comunica-gsap', 'comunica-scrolltrigger', 'comunica-flip'];
    foreach ([
        'comunica-js'          => 'js/comunica.js',
        'comunica-calculadora' => 'js/calculadora.js',
        'comunica-simulador'   => 'js/simulador.js',
        'comunica-contacto'    => 'js/contacto.js',
    ] as $handle => $rel) {
        wp_enqueue_script($handle, "$url/$rel", $anterior, $ver($rel), true);
    }
}, 20); // 20: despues de que Elementor registre sus hojas (prioridad 10).

// Las fuentes de la web: que el navegador empiece a pedirlas antes de leer el
// CSS. Solo las dos que se ven en la primera pantalla.
add_action('wp_head', function () {
    $url = content_url('/uploads/comunica/fuentes');
    foreach (['0c89a48fa5027cee-s.p.2cyn07wtgehh0.woff2', 'fba5a26ea33df6a3-s.p.18rizl4rsrl42.woff2'] as $f) {
        printf('<link rel="preload" href="%s/%s" as="font" type="font/woff2" crossorigin>' . "\n", esc_url($url), $f);
    }
}, 1);
