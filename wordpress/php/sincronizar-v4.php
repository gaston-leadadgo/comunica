// Comunica · sincronizacion. Cuando VERSION sube, en la siguiente carga del
// escritorio vuelve a bajar el CSS, el JS, las imagenes y el favicon de la
// rama elementor-wp, reescribe las paginas, la cabecera y el pie con sus
// widgets y actualiza el formulario de Contact Form 7.
// ATENCION: sobrescribe lo editado en Elementor en esas paginas.
$VERSION = 4;
if (!is_admin() || wp_doing_ajax() || !current_user_can('manage_options')) {
    return;
}
$st = get_option('comunica_inst');
if (!is_array($st) || ($st['paso'] ?? '') !== 'fin') {
    return;
}
$sy = get_option('comunica_sync', ['v' => 1]);
if ((int) $sy['v'] >= $VERSION || get_transient('comunica_inst_lock')) {
    return;
}
set_transient('comunica_inst_lock', 1, 90);
if ((int) ($sy['para'] ?? 0) !== $VERSION) {
    $sy = ['v' => (int) $sy['v'], 'para' => $VERSION, 'i' => 0, 'fase' => 'archivos'];
}

if (!function_exists('comunica_sync_get')) {
    function comunica_sync_raw() {
        return 'https://raw.githubusercontent.com/gaston-leadadgo/comunica/elementor-wp/wordpress/';
    }
    function comunica_sync_get($rel) {
        $r = wp_remote_get(comunica_sync_raw() . $rel . '?v=' . time(), ['timeout' => 60]);
        if (is_wp_error($r) || wp_remote_retrieve_response_code($r) !== 200) {
            return null;
        }
        return wp_remote_retrieve_body($r);
    }
    function comunica_sync_base() {
        $up = wp_upload_dir();
        return $up['basedir'] . '/comunica';
    }
    function comunica_sync_baseurl() {
        $up = wp_upload_dir();
        return set_url_scheme($up['baseurl'] . '/comunica', 'https');
    }
    function comunica_sync_bajar($rel, $dest) {
        global $wp_filesystem;
        $tmp = download_url(comunica_sync_raw() . $rel . '?v=' . time(), 120);
        if (is_wp_error($tmp)) {
            return $tmp->get_error_message();
        }
        $file = comunica_sync_base() . '/' . $dest;
        wp_mkdir_p(dirname($file));
        return $wp_filesystem->move($tmp, $file, true) ? true : 'no se pudo mover';
    }
    function comunica_sync_adjunto($dest, $mime, $titulo, $alt) {
        $file = comunica_sync_base() . '/' . $dest;
        $id = wp_insert_attachment(['guid' => comunica_sync_baseurl() . '/' . $dest, 'post_mime_type' => $mime,
            'post_title' => $titulo, 'post_status' => 'inherit'], $file);
        if (!$id || is_wp_error($id)) {
            return 0;
        }
        if (strpos($mime, 'image/svg') !== 0) {
            $sz = wp_getimagesize($file);
            wp_update_attachment_metadata($id, ['width' => $sz ? (int) $sz[0] : 0, 'height' => $sz ? (int) $sz[1] : 0,
                'file' => _wp_relative_upload_path($file), 'sizes' => []]);
        }
        if ($alt !== '') {
            update_post_meta($id, '_wp_attachment_image_alt', $alt);
        }
        return $id;
    }
    function comunica_sync_guardar($id, $clave, $st) {
        $json = comunica_sync_get('elementor/' . $clave . '.json');
        if (!$json || json_decode($json) === null) {
            return 'ERROR datos ' . $clave;
        }
        $json = preg_replace_callback('/"@@ICONO_ID:([a-z0-9-]+)@@"/', function ($m) use ($st) {
            return (string) ($st['iconos'][$m[1]]['id'] ?? 0);
        }, $json);
        $json = preg_replace_callback('/@@ICONO_URL:([a-z0-9-]+)@@/', function ($m) use ($st) {
            return $st['iconos'][$m[1]]['url'] ?? '';
        }, $json);
        $json = preg_replace_callback('/"@@IMG_ID:([^"@]+)@@"/', function ($m) use ($st) {
            return (string) ($st['imgs'][$m[1]]['id'] ?? 0);
        }, $json);
        $json = preg_replace_callback('/@@IMG_URL:([^"@]+)@@/', function ($m) use ($st) {
            return $st['imgs'][$m[1]]['url'] ?? '';
        }, $json);
        $json = str_replace('@@CF7_ID@@', (string) $st['cf7'], $json);
        update_post_meta($id, '_elementor_data', wp_slash($json));
        delete_post_meta($id, '_elementor_css');
        delete_post_meta($id, '_elementor_element_cache');
        return $clave . ' -> ' . $id;
    }
}

$t0 = microtime(true);
$log = (array) get_option('comunica_inst_log', []);
$man = json_decode((string) comunica_sync_get('manifiesto.json'), true);
if (!$man) {
    delete_transient('comunica_inst_lock');
    return;
}
WP_Filesystem();
$base = comunica_sync_base();
$baseurl = comunica_sync_baseurl();

// 1. CSS, JS, imagenes y favicon (las fuentes y el video no cambian)
if ($sy['fase'] === 'archivos') {
    $lista = array_values(array_filter($man['archivos'], function ($a) {
        foreach (['css/', 'js/', 'images/', 'favicon/'] as $pre) {
            if (strpos($a['dest'], $pre) === 0) {
                return true;
            }
        }
        return false;
    }));
    while ($sy['i'] < count($lista) && microtime(true) - $t0 < 10) {
        $r = comunica_sync_bajar($lista[$sy['i']]['repo'], $lista[$sy['i']]['dest']);
        if ($r !== true) {
            $log[] = 'sync ' . $VERSION . ' ERROR ' . $lista[$sy['i']]['dest'] . ': ' . $r;
        }
        $sy['i']++;
    }
    if ($sy['i'] >= count($lista)) {
        $sy['fase'] = 'medios';
    }
}

// 2. Iconos o imagenes nuevos que no estuvieran en la Biblioteca
if ($sy['fase'] === 'medios' && microtime(true) - $t0 < 10) {
    foreach ($man['iconos'] as $n) {
        if (empty($st['iconos'][$n])) {
            $dest = 'iconos/' . $n . '.svg';
            if (comunica_sync_bajar($dest, $dest) === true) {
                $id = comunica_sync_adjunto($dest, 'image/svg+xml', 'Icono ' . $n, '');
                if ($id) {
                    $st['iconos'][$n] = ['id' => $id, 'url' => $baseurl . '/' . $dest];
                }
            }
        }
    }
    foreach ($man['imagenes'] as $im) {
        if (empty($st['imgs'][$im['src']])) {
            $dest = ltrim($im['src'], '/');
            if (!file_exists($base . '/' . $dest)) {
                comunica_sync_bajar('assets/' . $dest, $dest);
            }
            $tipo = wp_check_filetype($dest);
            $id = file_exists($base . '/' . $dest) ? comunica_sync_adjunto($dest, $tipo['type'] ? $tipo['type'] : 'image/webp', basename($dest), $im['alt']) : 0;
            if ($id) {
                $st['imgs'][$im['src']] = ['id' => $id, 'url' => $baseurl . '/' . $dest];
            }
        }
    }
    // Favicon transparente: adjunto nuevo y como icono del sitio.
    if (empty($st['favicon_v4']) && file_exists($base . '/favicon/favicon-512.png')) {
        $fid = comunica_sync_adjunto('favicon/favicon-512.png', 'image/png', 'Icono del sitio Comunica (transparente)', 'Comunica');
        if ($fid) {
            $st['favicon_v4'] = $fid;
            update_option('site_icon', $fid);
        }
    }
    update_option('comunica_inst', $st, false);
    $sy['fase'] = 'cf7';
}

// 3. Formulario: subida real de la factura, que llega adjunta al correo.
if ($sy['fase'] === 'cf7' && microtime(true) - $t0 < 10) {
    if (class_exists('WPCF7_ContactForm') && $st['cf7']) {
        $cf = WPCF7_ContactForm::get_instance((int) $st['cf7']);
        $form = comunica_sync_get('cf7/formulario-contacto.txt');
        if ($cf && $form) {
            $p = $cf->get_properties();
            $p['form'] = $form;
            $p['mail']['attachments'] = '[factura]';
            if (strpos($p['mail']['body'], '[factura]') === false) {
                $p['mail']['body'] = str_replace("\n\nConsentimiento de privacidad:",
                    "\n\nFactura adjunta: [factura]\n\nConsentimiento de privacidad:", $p['mail']['body']);
            }
            $p['messages'] = array_merge($p['messages'], [
                'upload_failed' => 'No hemos podido subir la factura. Inténtalo de nuevo o envíanosla por correo.',
                'upload_file_type_invalid' => 'La factura tiene que ser PDF, JPG o PNG.',
                'upload_file_too_large' => 'La factura no puede pasar de 10 MB.',
                'upload_failed_php_error' => 'No hemos podido subir la factura. Inténtalo de nuevo o envíanosla por correo.',
            ]);
            $cf->set_properties($p);
            $cf->save();
            $log[] = 'sync ' . $VERSION . ' cf7 ' . $st['cf7'] . ' con subida de factura';
        }
    }
    $sy['fase'] = 'paginas';
}

// 4. Paginas, cabecera, pie y ajustes
if ($sy['fase'] === 'paginas' && microtime(true) - $t0 < 12) {
    foreach ($st['paginas'] as $clave => $id) {
        if ($clave !== 'legal') {
            $log[] = 'sync ' . $VERSION . ' ' . comunica_sync_guardar((int) $id, $clave, $st);
        }
    }
    $log[] = 'sync ' . $VERSION . ' ' . comunica_sync_guardar(12, 'cabecera', $st);
    $log[] = 'sync ' . $VERSION . ' ' . comunica_sync_guardar(14, 'pie', $st);
    update_option('elementor_google_font', '0');
    if (class_exists('\Elementor\Plugin')) {
        \Elementor\Plugin::$instance->files_manager->clear_cache();
    }
    do_action('cache_enabler_clear_complete_cache');
    $sy = ['v' => $VERSION];
    $log[] = 'sync ' . $VERSION . ' FIN ' . gmdate('c');
}

update_option('comunica_sync', $sy, false);
update_option('comunica_inst_log', $log, false);
delete_transient('comunica_inst_lock');
