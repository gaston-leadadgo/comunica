<?php
/**
 * OPCIONAL — filtro anti-spam para el honeypot del formulario de la landing.
 * -----------------------------------------------------------------------
 * El formulario incluye un campo de texto llamado "web", oculto por CSS,
 * que una persona real nunca puede ver ni rellenar. Si llega relleno, es
 * casi con toda seguridad un robot. Este filtro le dice a Contact Form 7
 * que trate esa petición como spam (no llega correo, ni se guarda el lead).
 *
 * CÓMO INSTALARLO (elige una opción):
 *   A) Si usas un tema hijo (child theme): pega esto al final del
 *      functions.php de tu tema hijo.
 *   B) Si no usas tema hijo: instala un plugin tipo "Code Snippets" o
 *      "WPCode" y crea un snippet nuevo de tipo PHP con este contenido,
 *      activado en todo el sitio.
 *
 * Si no lo instalas, el formulario sigue funcionando exactamente igual;
 * simplemente no tendrás este filtro extra contra spam automatizado.
 */

add_filter('wpcf7_spam', function ($spam, $submission) {
    if ($spam) {
        return $spam; // ya lo ha marcado como spam otra regla: no tocar
    }

    $data = $submission->get_posted_data();

    if (!empty($data['web'])) {
        return true; // el campo trampa viene relleno: es un robot
    }

    return $spam;
}, 10, 2);
