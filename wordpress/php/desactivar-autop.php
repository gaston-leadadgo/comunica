<?php
/**
 * IMPRESCINDIBLE para que el formulario se vea bien (no solo que funcione).
 * -----------------------------------------------------------------------
 * Por defecto, Contact Form 7 le pasa el contenido de la pestaña
 * "Formulario" por la misma función que WordPress usa en las entradas del
 * blog para "adivinar" dónde van los párrafos (wpautop()). Esa función
 * envuelve trozos de texto en <p> y convierte saltos de línea sueltos en
 * <br>, sin enterarse de que aquí ya hay una estructura HTML propia y
 * deliberada (nuestros <div class="cf7-field">, etc.). El resultado es
 * exactamente lo que se ve en el navegador: un <p> y un <br> insertados
 * entre el icono y el campo, que rompen la maquetación de icono
 * superpuesto sobre el input.
 *
 * Verificado en el código fuente real de Contact Form 7
 * (includes/functions.php, función wpcf7_autop_or_not()): usa el filtro
 * de WordPress "wpcf7_autop_or_not", que vale `true` si no se toca. Este
 * snippet lo pone a `false`.
 *
 * CÓMO INSTALARLO (elige una opción, igual que los snippets anteriores):
 *   A) Tema hijo: pégalo al final de functions.php.
 *   B) Sin tema hijo: plugin "WPCode" (o "Code Snippets"), snippet PHP,
 *      activado para todo el sitio.
 *
 * Aviso: este filtro afecta a TODOS los formularios de Contact Form 7 del
 * sitio (no solo a este), porque Contact Form 7 no permite desactivarlo
 * formulario por formulario. Si en el futuro creas otro formulario más
 * sencillo con el asistente visual de Contact Form 7 y notas que le faltan
 * saltos de línea, es por este mismo cambio — añade tú mismo los <br> o
 * <p> que necesites en su pestaña "Formulario".
 */

add_filter('wpcf7_autop_or_not', '__return_false');
