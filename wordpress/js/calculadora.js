/*
 * Calculadora de potencial de optimizacion (Home) - version Elementor.
 * ---------------------------------------------------------------------------
 * Port 1:1 de dos piezas de la web Next:
 *   - components/sections/home/savings-calculator.tsx (interfaz)
 *   - lib/calculator/estimate.ts (formula)
 *
 * Marcado: html/home-calculadora.html, dentro de un widget HTML. La raiz lleva
 * la clase `js-calc` y dentro un <script type="application/json"
 * class="js-calc-datos"> con los parametros (rangos de los deslizadores y
 * coeficientes de la formula). Si ese bloque falta o no es JSON valido, se usan
 * los valores de abajo, que son los de content/home.ts.
 *
 * Que hace:
 *   - Lee los cinco <input type="range"> en orden (habitaciones, gasto, plantas,
 *     salones y areas, extensiones) y recalcula en cada evento `input`, igual que
 *     el onChange de React.
 *   - Actualiza la cifra de cada deslizador, su `aria-valuetext` en unidades
 *     humanas ("60 habitaciones", "1500 euros al mes"...), la tarjeta de
 *     resultado (mes, ano, coste de referencia) y la barra fija de movil.
 *   - Actualiza el enlace del CTA de la seccion (el boton "Solicita una revision
 *     de tu factura", que es un widget nativo fuera de este bloque) con los
 *     valores elegidos, como hacia el original: &habitaciones=..&gasto=..
 *     Lo busca por la clase `js-calc-cta` y, si no la tiene, por un enlace con
 *     `intent=factura` dentro de la seccion #calculadora.
 *
 * La barra fija de movil ("Ahorro / mes") no necesita JS: igual que en el
 * original, se muestra y se oculta solo con CSS (`sticky` + `lg:hidden`).
 *
 * Sin dependencias. ES2019. Se puede cargar en cualquier punto de la pagina.
 */
(function () {
  "use strict";

  /* Parametros por defecto: copia literal de `calculator` en content/home.ts. */
  var POR_DEFECTO = {
    deslizadores: {
      rooms: { min: 10, max: 300, step: 10, default: 60 },
      spend: { min: 200, max: 8000, step: 100, default: 1500 },
      floors: { min: 1, max: 20, step: 1, default: 4 },
      areas: { min: 0, max: 30, step: 1, default: 4 },
      extensions: { min: 0, max: 100, step: 5, default: 15 }
    },
    benchmark: { base: 180, perRoom: 3.5, perFloor: 15, perArea: 20, perExtension: 5 },
    minRatio: 0.18,
    maxRatio: 0.35,
    floorMinRatio: 0.06,
    floorMaxRatio: 0.12,
    benchmarkFloor: 0.85
  };

  /* Orden de los deslizadores en el marcado y como se anuncia cada valor. */
  var CAMPOS = ["rooms", "spend", "floors", "areas", "extensions"];
  var TEXTO_VALOR = {
    rooms: function (v) { return v + " habitaciones"; },
    spend: function (v) { return v + " euros al mes"; },
    floors: function (v) { return v + " plantas"; },
    areas: function (v) { return v + " salones y áreas de servicio"; },
    extensions: function (v) { return v + " extensiones"; }
  };
  /* Parametro de la URL del CTA para cada campo (mismo orden que el original). */
  var PARAM_CTA = {
    rooms: "habitaciones",
    spend: "gasto",
    floors: "plantas",
    areas: "areas",
    extensions: "extensiones"
  };

  /* Mismo formateador que el original: es-ES, euros, sin decimales. */
  var eur = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0
  });

  /* ------------------------------------------------ formula (estimate.ts) */

  function clamp01(n) {
    return Math.min(1, Math.max(0, n));
  }

  /** Posicion de `value` dentro de un rango de deslizador, de 0 a 1. */
  function norm(value, range) {
    return clamp01((value - range.min) / (range.max - range.min));
  }

  function estimateSavings(input, c) {
    var b = c.benchmark;
    var r = c.deslizadores;

    var benchmark =
      b.base +
      b.perRoom * input.rooms +
      b.perFloor * input.floors +
      b.perArea * input.areas +
      b.perExtension * input.extensions;

    var complexity = clamp01(
      0.35 * norm(input.floors, r.floors) +
        0.35 * norm(input.areas, r.areas) +
        0.3 * norm(input.extensions, r.extensions)
    );

    // 0,8 = paga un 20 % menos que la referencia (sin margen); 2,0 = paga el
    // doble (todo el margen). Entre medias, lineal.
    var intensity = clamp01((input.spend / benchmark - 0.8) / 1.2);

    var position = 0.5 * complexity + 0.5 * intensity;

    var mid = (c.minRatio + c.maxRatio) / 2;
    var rateMin = c.minRatio + (mid - c.minRatio) * position;
    var rateMax = mid + (c.maxRatio - mid) * position;

    var headroom = Math.max(0, input.spend - c.benchmarkFloor * benchmark);
    var cappedRatio = input.spend > 0 ? headroom / input.spend : 0;

    var minRatio = Math.max(c.floorMinRatio, Math.min(rateMin, cappedRatio));
    var maxRatio = Math.max(
      c.floorMaxRatio,
      Math.min(rateMax, cappedRatio),
      minRatio
    );

    return {
      benchmark: Math.round(benchmark),
      minMonthly: Math.round(input.spend * minRatio),
      maxMonthly: Math.round(input.spend * maxRatio)
    };
  }

  /* ------------------------------------------------------------ utilidades */

  function leerDatos(raiz) {
    var datos = POR_DEFECTO;
    var bloque = raiz.querySelector(".js-calc-datos");
    if (!bloque) return datos;
    try {
      var leidos = JSON.parse(bloque.textContent);
      var desl = {};
      CAMPOS.forEach(function (k) {
        desl[k] = Object.assign({}, POR_DEFECTO.deslizadores[k], (leidos.deslizadores || {})[k]);
      });
      datos = Object.assign({}, POR_DEFECTO, leidos, {
        deslizadores: desl,
        benchmark: Object.assign({}, POR_DEFECTO.benchmark, leidos.benchmark)
      });
    } catch (e) {
      if (window.console) console.warn("[calculadora] JSON de datos no valido; uso los valores por defecto.", e);
    }
    return datos;
  }

  /** Sustituye los nodos de texto anteriores a `ancla` (o todos) por `texto`. */
  function textoAntesDe(el, ancla, texto) {
    var n = el.firstChild;
    while (n && n !== ancla) {
      var sig = n.nextSibling;
      el.removeChild(n);
      n = sig;
    }
    el.insertBefore(document.createTextNode(texto), ancla || null);
  }

  /** Sustituye los nodos de texto posteriores a `ancla` por `texto`. */
  function textoDespuesDe(el, ancla, texto) {
    while (ancla.nextSibling) el.removeChild(ancla.nextSibling);
    el.appendChild(document.createTextNode(texto));
  }

  /* ---------------------------------------------------------------- montaje */

  function iniciar(raiz) {
    if (!raiz || raiz.__calcIniciada) return;
    var c = leerDatos(raiz);

    var inputs = raiz.querySelectorAll('input[type="range"]');
    if (inputs.length < CAMPOS.length) return;
    raiz.__calcIniciada = true;

    var estado = {};
    var piezas = {};

    CAMPOS.forEach(function (k, i) {
      var input = inputs[i];
      var r = c.deslizadores[k];
      input.min = String(r.min);
      input.max = String(r.max);
      input.step = String(r.step);
      input.value = String(r.default);
      estado[k] = Number(input.value);
      piezas[k] = {
        input: input,
        cifra: input.parentElement.querySelector("label .is-tabular")
      };
      input.addEventListener("input", function (e) {
        estado[k] = Number(e.target.value);
        pintar();
      });
    });

    var metrica = raiz.querySelector("[aria-live]");
    var tarjeta = metrica ? metrica.parentElement : raiz;
    var guion = metrica ? metrica.querySelector("span") : null;
    var anual = tarjeta.querySelector("p.text-display-3");
    var anualSufijo = anual ? anual.querySelector("span") : null;
    var referencia = tarjeta.querySelector("p.border-t .is-tabular");
    var barraMovil = raiz.querySelector(".sticky .is-tabular");

    var seccion = raiz.closest("#calculadora") || raiz.closest("section") || raiz.parentElement;
    var ctas = [];
    if (seccion) {
      ctas = Array.prototype.slice.call(seccion.querySelectorAll("a.js-calc-cta, .js-calc-cta a"));
      if (!ctas.length) {
        ctas = Array.prototype.slice.call(seccion.querySelectorAll('a[href*="intent=factura"]'));
      }
    }

    function pintar() {
      var res = estimateSavings(estado, c);
      var min = eur.format(res.minMonthly);
      var max = eur.format(res.maxMonthly);

      CAMPOS.forEach(function (k) {
        var v = estado[k];
        var p = piezas[k];
        if (p.cifra) p.cifra.textContent = k === "spend" ? eur.format(v) : String(v);
        p.input.setAttribute("aria-valuetext", TEXTO_VALOR[k](v));
      });

      if (metrica && guion) {
        textoAntesDe(metrica, guion, min);
        textoDespuesDe(metrica, guion, max);
      }
      if (anual) {
        textoAntesDe(
          anual,
          anualSufijo,
          eur.format(res.minMonthly * 12) + " - " + eur.format(res.maxMonthly * 12)
        );
      }
      if (referencia) referencia.textContent = eur.format(res.benchmark);
      if (barraMovil) barraMovil.textContent = min + " - " + max;

      ctas.forEach(function (a) {
        var href = a.getAttribute("href");
        if (!href) return;
        try {
          var url = new URL(href, window.location.href);
          CAMPOS.forEach(function (k) {
            url.searchParams.set(PARAM_CTA[k], String(estado[k]));
          });
          var nuevo = url.origin === window.location.origin
            ? url.pathname + url.search + url.hash
            : url.href;
          a.setAttribute("href", nuevo);
        } catch (e) { /* href raro: se deja como esta */ }
      });
    }

    pintar();
  }

  function iniciarTodas(ambito) {
    var lista = (ambito || document).querySelectorAll(".js-calc");
    for (var i = 0; i < lista.length; i++) iniciar(lista[i]);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { iniciarTodas(); });
  } else {
    iniciarTodas();
  }

  // Editor de Elementor: el widget HTML se vuelve a pintar al editarlo.
  window.addEventListener("elementor/frontend/init", function () {
    var ef = window.elementorFrontend;
    if (!ef || !ef.hooks) return;
    ef.hooks.addAction("frontend/element_ready/html.default", function ($scope) {
      var el = $scope && $scope[0] ? $scope[0] : $scope;
      if (el && el.querySelectorAll) iniciarTodas(el);
    });
  });
})();
