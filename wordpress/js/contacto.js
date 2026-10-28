/*
 * Formulario de Contacto (Contact Form 7) - comportamiento del original.
 * ---------------------------------------------------------------------------
 * Port de components/sections/contacto/form.tsx y content/contacto.ts.
 * Marcado: cf7/formulario-contacto.txt (pestana Formulario de CF7).
 *
 * Lo que CF7 no hace y aqui se reproduce:
 *   1. Intencion desde ?intent=: valida contra la lista del original (si no
 *      existe cae a "general"), rellena el campo oculto `intent`, pone el
 *      titulo del bloque y marca la pildora que le corresponde (once
 *      intenciones -> cinco pildoras, con INTENT_PILL_OF).
 *   2. Pildoras: botones con aria-pressed; al pulsar cambian la intencion y
 *      las clases (el cn(...) del original).
 *   3. Zona "Adjuntar factura": solo visible si la pildora es "factura".
 *   4. Referencia de la solicitud (COM-123456) generada al enviar y mandada en
 *      el campo oculto `ticket`, para que salga en el correo y en el panel.
 *   5. Boton "Enviar consulta" -> "Enviando" mientras CF7 espera respuesta.
 *   6. Mensajes de error por campo con los textos literales del original
 *      (CF7 solo tiene un mensaje generico por tipo de error), y el resumen
 *      "Revisa los campos marcados: N" con el numero de errores.
 *   7. wpcf7invalid: el foco va al primer campo con error.
 *   8. wpcf7mailsent: el formulario se sustituye por el panel "Mensaje
 *      recibido" (con nombre, empresa y referencia) y el foco va a el.
 *   9. Iconos: CF7 puede filtrar <svg> del marcado del formulario, asi que los
 *      iconos se escriben aqui y se insertan en los <span class="js-icono-*">.
 *
 * Sin dependencias. ES2019.
 */
(function () {
  "use strict";

  /* --------------------------------------------- datos de content/contacto.ts */

  var CONTACT_INTENTS = [
    "general", "factura", "iandrea", "hotel_conectado", "hotel_consolidado",
    "hotel_gestionado", "proyecto_especializado", "extension", "wifi",
    "partner_canal", "partner_service_provider", "partner_referral"
  ];

  var INTENT_TITLE = {
    general: "Cuéntanos qué necesitas resolver en tu hotel",
    factura: "Solicitud de revisión de factura tecnológica",
    iandrea: "Demostración e información de iAndrea",
    hotel_conectado: "Consulta: Hotel Conectado (independientes)",
    hotel_consolidado: "Consulta: Hotel Consolidado (pequeñas cadenas)",
    hotel_gestionado: "Consulta: Hotel Gestionado (cadenas en crecimiento)",
    proyecto_especializado: "Consulta: Proyecto Especializado (grandes cadenas)",
    extension: "Consulta: Extensión Dinámica",
    wifi: "Consulta: WiFi hotelero",
    partner_canal: "Unirse al canal de partners de Comunica",
    partner_service_provider: "Solicitud de partner: Service Provider",
    partner_referral: "Solicitud de partner: Referral Partner"
  };

  /* Orden de las pildoras (INTENT_PILLS). */
  var INTENT_PILLS = ["general", "factura", "iandrea", "hotel_conectado", "partner_canal"];

  var INTENT_PILL_OF = {
    general: "general",
    factura: "factura",
    iandrea: "iandrea",
    hotel_conectado: "hotel_conectado",
    hotel_consolidado: "hotel_conectado",
    hotel_gestionado: "hotel_conectado",
    proyecto_especializado: "hotel_conectado",
    extension: "general",
    wifi: "hotel_conectado",
    partner_canal: "partner_canal",
    partner_service_provider: "partner_canal",
    partner_referral: "partner_canal"
  };

  var TEXTO = {
    submit: "Enviar consulta",
    submitting: "Enviando",
    errorSummary: "Revisa los campos marcados:"
  };

  /* Mensajes de lib/validation/lead.ts, en el orden en que los comprueba zod:
     vacio/corto (req), formato (fmt), largo (max). */
  var MENSAJES = {
    nombre: { min: 2, max: 120, req: "Escribe tu nombre.", maxMsg: "El nombre es demasiado largo." },
    email: {
      min: 1, max: 180,
      req: "Necesitamos un email para responderte.",
      fmt: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      fmtMsg: "Ese email no parece válido.",
      maxMsg: "El email es demasiado largo."
    },
    telefono: {
      min: 6, max: 24,
      req: "Necesitamos un teléfono de contacto.",
      fmt: /^[+()\d\s.-]{6,24}$/,
      fmtMsg: "Revisa el teléfono: solo números y prefijo.",
      maxMsg: "El teléfono es demasiado largo."
    },
    empresa: {
      min: 2, max: 160,
      req: "Dinos el nombre de tu hotel, cadena o empresa.",
      maxMsg: "El nombre es demasiado largo."
    },
    dimension: { min: 0, max: 120, maxMsg: "Resume un poco más." },
    mensaje: { min: 0, max: 2000, maxMsg: "El mensaje es demasiado largo." },
    consent: { fijo: "Necesitamos tu consentimiento para poder responderte." }
  };

  /* Clases de las pildoras: cn(...) del original. */
  var PILL_BASE = "rounded-full px-4 py-2.5 text-body-sm font-semibold transition-colors";
  var PILL_ON = "bg-navy text-white";
  var PILL_OFF = "border border-line text-navy hover:border-navy";

  /* Iconos lucide tal cual los pinta el original (trazo 1.6). */
  var SVG_ABRE = '<svg xmlns="http://www.w3.org/2000/svg" width="{t}" height="{t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="{c}" aria-hidden="true" focusable="false">';
  var ICONOS = {
    "file-text": {
      t: 16, c: "lucide lucide-file-text text-cyan-ink",
      d: '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path>'
    },
    "check-circle": {
      t: 26, c: "lucide lucide-circle-check-big",
      d: '<path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path>'
    },
    "shield-check": {
      t: 15, c: "lucide lucide-shield-check",
      d: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path>'
    }
  };

  /* ------------------------------------------------------------ utilidades */

  function svg(nombre) {
    var i = ICONOS[nombre];
    return SVG_ABRE.replace(/\{t\}/g, String(i.t)).replace("{c}", i.c) + i.d + "</svg>";
  }

  function pintarIconos(ambito) {
    Object.keys(ICONOS).forEach(function (nombre) {
      var huecos = ambito.querySelectorAll(".js-icono-" + nombre);
      for (var k = 0; k < huecos.length; k++) {
        var h = huecos[k];
        var tmp = document.createElement("div");
        tmp.innerHTML = svg(nombre);
        h.parentNode.replaceChild(tmp.firstChild, h);
      }
    });
  }

  /** Intencion de la URL, validada igual que app/contacto/page.tsx. */
  function intentDeLaUrl() {
    var raw = "";
    try {
      raw = new URLSearchParams(window.location.search).get("intent") || "";
    } catch (e) { raw = ""; }
    return CONTACT_INTENTS.indexOf(raw) !== -1 ? raw : "general";
  }

  /** `COM-` + 6 digitos aleatorios (el original los saca de un UUID). */
  function generarTicket() {
    var digitos = "";
    if (window.crypto && window.crypto.getRandomValues) {
      var a = new Uint32Array(6);
      window.crypto.getRandomValues(a);
      for (var i = 0; i < 6; i++) digitos += String(a[i] % 10);
    } else {
      digitos = String(Math.floor(Math.random() * 1e6));
      while (digitos.length < 6) digitos = "0" + digitos;
    }
    return "COM-" + digitos;
  }

  /** Texto del error de un campo con la misma prioridad que el esquema zod. */
  function mensajeDe(nombre, valor) {
    var m = MENSAJES[nombre];
    if (!m) return null;
    if (m.fijo) return m.fijo;
    var v = String(valor || "").trim();
    if (m.req && (v === "" || v.length < m.min)) return m.req;
    if (m.fmt && !m.fmt.test(v)) return m.fmtMsg;
    if (m.max && v.length > m.max) return m.maxMsg;
    return m.fmtMsg || m.req || m.maxMsg || null;
  }

  function campo(form, nombre) {
    return form.querySelector('[name="' + nombre + '"]');
  }

  /* ---------------------------------------------------------------- montaje */

  function iniciar(form) {
    if (form.__contactoIniciado) return;
    var caja = form.querySelector(".js-contacto-form");
    if (!caja) return;
    form.__contactoIniciado = true;

    var titulo = caja.querySelector(".js-intent-titulo");
    var zonaFactura = caja.querySelector(".js-zona-factura");
    var hIntent = campo(form, "intent");
    var hConsulta = campo(form, "consulta");
    var hTicket = campo(form, "ticket");
    var boton = form.querySelector(".wpcf7-submit");
    var pills = Array.prototype.slice.call(caja.querySelectorAll('fieldset button[type="button"]'));

    pintarIconos(form);

    /* --- intencion y pildoras --- */
    var selected = intentDeLaUrl();

    function pintarIntent() {
      var pill = INTENT_PILL_OF[selected];
      if (hIntent) hIntent.value = selected;
      if (hConsulta) hConsulta.value = INTENT_TITLE[selected];
      if (titulo) titulo.textContent = INTENT_TITLE[selected];
      pills.forEach(function (b, i) {
        var valor = b.getAttribute("value") || INTENT_PILLS[i];
        var on = pill === valor;
        b.setAttribute("aria-pressed", on ? "true" : "false");
        b.className = PILL_BASE + " " + (on ? PILL_ON : PILL_OFF);
      });
      if (zonaFactura) zonaFactura.hidden = pill !== "factura";
    }

    pills.forEach(function (b, i) {
      b.type = "button";
      b.addEventListener("click", function () {
        var valor = b.getAttribute("value") || INTENT_PILLS[i];
        if (CONTACT_INTENTS.indexOf(valor) === -1) return;
        selected = valor;
        pintarIntent();
      });
    });
    pintarIntent();

    // CF7 vacia los campos al terminar un envio correcto (form.reset()); los
    // ocultos vuelven a su valor por defecto, asi que se repintan.
    form.addEventListener("reset", function () {
      window.setTimeout(pintarIntent, 0);
    });

    /* --- envio: referencia y texto "Enviando" ---
       En fase de captura y en el contenedor del form, para ir siempre antes
       que el listener de CF7 (que esta en el propio form y lee los campos). */
    (form.parentNode || document).addEventListener("submit", function (e) {
      if (e.target !== form) return;
      if (hTicket) hTicket.value = generarTicket();
      if (hIntent) hIntent.value = selected;
      if (hConsulta) hConsulta.value = INTENT_TITLE[selected];
      if (boton) boton.value = TEXTO.submitting;
    }, true);

    // El texto vuelve cuando CF7 quita la clase .submitting (sea cual sea el
    // resultado, incluido un fallo de red).
    if (boton && window.MutationObserver) {
      new MutationObserver(function () {
        if (!form.classList.contains("submitting") && boton.value !== TEXTO.submit) {
          boton.value = TEXTO.submit;
        }
      }).observe(form, { attributes: true, attributeFilter: ["class"] });
    }

    /* --- mensajes de error por campo con el texto del original --- */
    function corregirTip(tip) {
      if (tip.__corregido) return;
      var wrap = tip.closest(".wpcf7-form-control-wrap");
      if (!wrap) return;
      var control = wrap.querySelector("[name]");
      var nombre = wrap.getAttribute("data-name") || (control ? control.name : "");
      var msg = mensajeDe(nombre, control ? control.value : "");
      if (!msg) return;
      tip.__corregido = true;
      tip.textContent = msg;
      // La lista para lectores de pantalla (aria-describedby del campo).
      var c = wrap.querySelector("[aria-describedby]");
      var sr = c ? document.getElementById(c.getAttribute("aria-describedby")) : null;
      if (sr && sr.tagName === "LI") {
        var enlace = sr.querySelector("a");
        (enlace || sr).textContent = msg;
      }
    }

    if (window.MutationObserver) {
      new MutationObserver(function (lista) {
        lista.forEach(function (m) {
          for (var i = 0; i < m.addedNodes.length; i++) {
            var n = m.addedNodes[i];
            if (n.nodeType !== 1) continue;
            if (n.classList.contains("wpcf7-not-valid-tip")) corregirTip(n);
            else {
              var tips = n.querySelectorAll ? n.querySelectorAll(".wpcf7-not-valid-tip") : [];
              for (var k = 0; k < tips.length; k++) corregirTip(tips[k]);
            }
          }
        });
      }).observe(form, { childList: true, subtree: true });
    }
  }

  /* -------------------------------------------------- eventos de CF7 */

  function formDe(evento) {
    var f = evento.target;
    if (!f || !f.querySelector) return null;
    if (f.tagName !== "FORM") f = f.querySelector("form.wpcf7-form") || f.closest("form");
    return f && f.querySelector(".js-contacto-form") ? f : null;
  }

  document.addEventListener("wpcf7invalid", function (evento) {
    var form = formDe(evento);
    if (!form) return;
    var res = (evento.detail && evento.detail.apiResponse) || {};
    var n = (res.invalid_fields || []).length || form.querySelectorAll(".wpcf7-not-valid").length;

    // Foco en el primer campo con error.
    var primero = form.querySelector(".wpcf7-not-valid, [aria-invalid='true']");
    if (primero && primero.focus) primero.focus();

    // Resumen "Revisa los campos marcados: N". CF7 escribe su mensaje despues
    // de lanzar el evento, por eso se espera un tick.
    window.setTimeout(function () {
      var texto = TEXTO.errorSummary + " " + n;
      var salida = form.querySelectorAll(".wpcf7-response-output");
      for (var i = 0; i < salida.length; i++) salida[i].textContent = texto;
      var wrap = form.closest(".wpcf7");
      var sr = wrap ? wrap.querySelector('.screen-reader-response [role="status"]') : null;
      if (sr) sr.textContent = texto;
    }, 0);
  }, false);

  document.addEventListener("wpcf7mailsent", function (evento) {
    var form = formDe(evento);
    if (!form) return;
    var caja = form.querySelector(".js-contacto-form");
    var ok = form.querySelector(".js-contacto-ok");
    if (!caja || !ok) return;

    var datos = {};
    ((evento.detail && evento.detail.inputs) || []).forEach(function (x) {
      datos[x.name] = String(x.value || "").trim();
    });
    var nombre = datos.nombre || "";
    var empresa = datos.empresa || "";

    var texto = ok.querySelector(".js-ok-texto");
    if (texto) {
      texto.textContent =
        (nombre ? "Gracias, " + nombre + ". " : "") +
        "Hemos registrado tu solicitud" +
        (empresa ? " para " + empresa : "") +
        ".";
    }
    var ticket = ok.querySelector(".js-ok-ticket");
    if (ticket) ticket.textContent = datos.ticket || "";

    caja.hidden = true;
    ok.hidden = false;
    ok.setAttribute("tabindex", "-1");
    ok.focus();
    if (window.ScrollTrigger && window.ScrollTrigger.refresh) window.ScrollTrigger.refresh();
  }, false);

  /* ------------------------------------------------------------ arranque */

  function iniciarTodos(ambito) {
    var cajas = (ambito || document).querySelectorAll(".js-contacto-form");
    for (var i = 0; i < cajas.length; i++) {
      var f = cajas[i].closest("form");
      if (f) iniciar(f);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { iniciarTodos(); });
  } else {
    iniciarTodos();
  }

  window.addEventListener("elementor/frontend/init", function () {
    var ef = window.elementorFrontend;
    if (!ef || !ef.hooks) return;
    ef.hooks.addAction("frontend/element_ready/shortcode.default", function ($scope) {
      var el = $scope && $scope[0] ? $scope[0] : $scope;
      if (el && el.querySelectorAll) iniciarTodos(el);
    });
  });
})();
