/*!
 * Simulador de iAndrea (pagina Soluciones) — version sin React para Elementor.
 *
 * Porta `components/sections/soluciones/iandrea-demo.tsx` y
 * `lib/voice/use-voice.ts` de la web Next. Busca cada `.js-simulador`, lee el
 * guion de su `<script type="application/json" class="js-simulador-datos">` y
 * reproduce el comportamiento del original:
 *
 * - Pestanas de escenario con `role="tablist"`, flechas, Inicio y Fin.
 * - Modo texto: saludo inicial, pregunta, "pensando" 1,4 s y respuesta.
 * - Modo llamada (`voice: true`): Llamar -> tono 1,6 s -> saludo en voz alta,
 *   contador de duracion, silenciar y colgar. Las respuestas se leen con
 *   `speechSynthesis` (voz femenina en espanol, trozos de ~160 caracteres y
 *   testigo de generacion para cancelar).
 * - Al cambiar de escenario se cortan temporizadores y voz.
 *
 * Las clases son las mismas que en el TSX, copiadas literalmente: el CSS de la
 * pagina es el Tailwind compilado de la web y solo existen esas.
 *
 * Sin dependencias. Si existe `window.gsap` anima los puntos de "pensando";
 * si no, los anima con la Web Animations API. Con `prefers-reduced-motion:
 * reduce` no se mueven, como en el original. La entrada de la tarjeta al hacer
 * scroll NO es cosa de este fichero: la tarjeta lleva `m-reveal` y la anima
 * comunica.js con la seccion `ms-simulador`, igual que el titular.
 */
(function () {
  "use strict";

  /** Tiempo de "pensando" antes de cada respuesta. */
  var THINKING_MS = 1400;
  /** Tono de llamada antes de que iAndrea descuelgue. */
  var RINGING_MS = 1600;

  // ---------------------------------------------------------------------------
  // Iconos Lucide (lucide-react 1.32.0), con el mismo marcado que `Icon`.
  // ---------------------------------------------------------------------------

  var PHONE_PATH =
    "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384";
  var VOLUME_PATH =
    "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z";

  function p(d) {
    return '<path d="' + d + '"></path>';
  }

  var ICONS = {
    sparkles:
      p("M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z") +
      p("M20 2v4") +
      p("M22 4h-4") +
      '<circle cx="4" cy="20" r="2"></circle>',
    hotel:
      p("M10 22v-6.57") + p("M12 11h.01") + p("M12 7h.01") + p("M14 15.43V22") +
      p("M15 16a5 5 0 0 0-6 0") + p("M16 11h.01") + p("M16 7h.01") + p("M8 11h.01") +
      p("M8 7h.01") + '<rect x="4" y="2" width="16" height="20" rx="2"></rect>',
    "calendar-range":
      '<rect x="3" y="3" width="18" height="18" rx="2"></rect>' +
      p("M16 2v3") + p("M3 9h18") + p("M8 2v3") + p("M17 13h-6") + p("M13 17H7") +
      p("M7 13h.01") + p("M17 17h.01"),
    "message-square":
      p("M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"),
    phone: p(PHONE_PATH),
    "phone-call": p("M13 2a9 9 0 0 1 9 9") + p("M13 6a5 5 0 0 1 5 5") + p(PHONE_PATH),
    "phone-off":
      p("M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272") +
      p("M22 2 2 22") +
      p("M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473"),
    "refresh-cw":
      p("M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8") + p("M21 3v5h-5") +
      p("M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16") + p("M8 16H3v5"),
    info: '<circle cx="12" cy="12" r="10"></circle>' + p("M12 16v-4") + p("M12 8h.01"),
    user: p("M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2") + '<circle cx="12" cy="7" r="4"></circle>',
    "volume-2": p(VOLUME_PATH) + p("M16 9a5 5 0 0 1 0 6") + p("M19.364 18.364a9 9 0 0 0 0-12.728"),
    "volume-x":
      p(VOLUME_PATH) +
      '<line x1="22" x2="16" y1="9" y2="15"></line><line x1="16" x2="22" y1="9" y2="15"></line>',
  };

  /** Igual que `<Icon name size className />`: si el nombre no existe, nada. */
  function icon(name, size, className) {
    var body = ICONS[name];
    if (!body) return "";
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="' +
      cn("lucide lucide-" + name, className) +
      '" aria-hidden="true" focusable="false">' + body + "</svg>"
    );
  }

  // ---------------------------------------------------------------------------
  // Utilidades
  // ---------------------------------------------------------------------------

  function cn() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(" ");
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function pad2(n) {
    return n < 10 ? "0" + n : String(n);
  }

  function reducedMotion() {
    return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  // ---------------------------------------------------------------------------
  // Voz (port de lib/voice/use-voice.ts)
  // ---------------------------------------------------------------------------

  /** Voces femeninas en espanol; la API no dice el genero, solo el nombre. */
  var FEMALE_ES = [
    "helena", "laura", "monica", "mónica", "paulina", "sabina", "elvira", "esperanza",
    "dalia", "ximena", "irene", "lia", "lía", "marisol",
    "google español", // la de Google es femenina y suele ser la mejor disponible
  ];

  /** Masculinas conocidas, para que el respaldo no caiga en ellas. */
  var MALE_ES = [
    "pablo", "jorge", "diego", "carlos", "miguel", "juan", "raul", "raúl", "alvaro",
    "álvaro", "enrique",
  ];

  function matches(voiceName, list) {
    var name = voiceName.toLowerCase();
    return list.some(function (c) {
      return name.indexOf(c) !== -1;
    });
  }

  /** 1) femenina es-ES, 2) femenina en cualquier espanol, 3) espanol no masculina. */
  function pickVoice(voices) {
    var spanish = voices.filter(function (v) {
      return v.lang.toLowerCase().indexOf("es") === 0;
    });
    if (!spanish.length) return null;
    var female = spanish.filter(function (v) {
      return matches(v.name, FEMALE_ES);
    });
    var esES = female.filter(function (v) {
      return v.lang.toLowerCase().indexOf("es-es") === 0;
    })[0];
    if (esES) return esES;
    if (female[0]) return female[0];
    var neutral = spanish.filter(function (v) {
      return !matches(v.name, MALE_ES);
    })[0];
    return neutral || null;
  }

  /**
   * Trozos de hasta 160 caracteres cortando por final de frase: apano al fallo
   * de Chrome que corta la sintesis hacia los 15 s y no emite `end`.
   */
  var CHUNK_LIMIT = 160;

  function chunk(text) {
    var sentences = text.match(/[^.!?…]+[.!?…]*\s*/g) || [text];
    var out = [];
    sentences.forEach(function (sentence) {
      var last = out[out.length - 1];
      if (last && last.length + sentence.length <= CHUNK_LIMIT) {
        out[out.length - 1] = last + sentence;
      } else {
        out.push(sentence);
      }
    });
    return out
      .map(function (s) {
        return s.trim();
      })
      .filter(Boolean);
  }

  /** Voz elegida. Es comun a todas las instancias: depende del navegador, no del simulador. */
  var chosenVoice = null;
  var voicesListening = false;

  function synth() {
    return "speechSynthesis" in window ? window.speechSynthesis : null;
  }

  function listenVoices() {
    var s = synth();
    if (!s || voicesListening) return;
    voicesListening = true;
    var load = function () {
      chosenVoice = pickVoice(s.getVoices());
    };
    load();
    // La lista llega de forma asincrona en Chrome.
    if (typeof s.addEventListener === "function") s.addEventListener("voiceschanged", load);
    else s.onvoiceschanged = load;
    // Sin esto la voz sigue sonando al salir de la pagina.
    window.addEventListener("pagehide", function () {
      s.cancel();
    });
  }

  /**
   * Equivalente a `useVoice()`. `onChange` se llama cuando cambian `speaking` o
   * `unavailable`, que es lo que en React provocaba un repintado.
   */
  function createVoice(onChange) {
    var voice = { speaking: false, unavailable: false };
    /** Testigo de generacion: `cancel()` dispara `end` en locuciones pendientes. */
    var generation = 0;

    function set(key, value) {
      if (voice[key] === value) return;
      voice[key] = value;
      onChange();
    }

    voice.stop = function () {
      generation += 1;
      var s = synth();
      if (s) s.cancel();
      set("speaking", false);
    };

    voice.speak = function (text, onDone) {
      var s = synth();
      if (!s) {
        set("unavailable", true);
        if (onDone) onDone();
        return;
      }
      // Reintenta la seleccion por si Chrome aun no habia poblado la lista.
      if (!chosenVoice) chosenVoice = pickVoice(s.getVoices());
      var v = chosenVoice;
      if (!v) {
        set("unavailable", true);
        if (onDone) onDone();
        return;
      }

      generation += 1;
      var mine = generation;
      s.cancel();

      var parts = chunk(text);
      set("speaking", true);

      parts.forEach(function (part, i) {
        var u = new SpeechSynthesisUtterance(part);
        u.voice = v;
        u.lang = v.lang;
        u.rate = 0.98;
        var finish = function () {
          if (mine !== generation) return; // locucion de una llamada ya cerrada
          set("speaking", false);
          if (onDone) onDone();
        };
        if (i === parts.length - 1) {
          u.onend = finish;
          u.onerror = finish;
        }
        s.speak(u);
      });
    };

    return voice;
  }

  // ---------------------------------------------------------------------------
  // Plantillas (mismas clases que el TSX)
  // ---------------------------------------------------------------------------

  var TAB_BASE =
    "flex min-h-11 items-center justify-center gap-2 rounded-md px-3 py-2 text-body-sm font-semibold transition-colors sm:min-h-0 sm:justify-start";
  var TAB_ON = "bg-cyan text-ink";
  var TAB_OFF = "text-fg-inverse-muted hover:bg-white/5 hover:text-white";

  function tabHtml(s, selected) {
    return (
      '<button type="button" role="tab" aria-selected="' + (selected ? "true" : "false") +
      '" tabindex="' + (selected ? "0" : "-1") + '" class="' + cn(TAB_BASE, selected ? TAB_ON : TAB_OFF) + '">' +
      icon(s.icon, 15) +
      '<span class="whitespace-nowrap">' + esc(s.name) + "</span></button>"
    );
  }

  function timerHtml(seconds) {
    return (
      '<span class="font-mono text-[0.75rem] text-fg-inverse-muted is-tabular">' +
      pad2(Math.floor(seconds / 60)) + ":" + pad2(seconds % 60) + "</span>"
    );
  }

  /** Columna de control: descripcion, Llamar/Colgar, preguntas, aviso y reiniciar. */
  function controlHtml(d, st, v) {
    var s = d.scenarios[st.index];
    var isCall = !!s.voice;
    var active = st.phase !== "idle";
    var locked = isCall && st.phase !== "live";
    var busy = st.thinking || v.speaking || st.phase === "ringing";
    var h = '<p class="measure-body text-body-sm text-fg-inverse-muted">' + esc(s.description) + "</p>";

    if (isCall) {
      h += '<div class="mt-7">';
      if (active) {
        h +=
          '<button type="button" class="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-5 py-3 text-body-sm font-semibold text-white transition-colors hover:bg-white/16">' +
          icon("phone-off", 16) + esc(d.hangUpLabel) +
          (st.phase === "live" ? timerHtml(st.seconds) : "") +
          "</button>";
      } else {
        h +=
          '<button type="button" class="inline-flex items-center gap-2.5 rounded-full bg-cyan px-5 py-3 text-body-sm font-semibold text-ink transition-colors hover:bg-cyan-soft">' +
          icon("phone-call", 16) + esc(d.callLabel) +
          "</button>";
      }
      h += "</div>";
    }

    h += '<p class="mt-8 font-mono text-eyebrow tracking-[0.2em] text-cyan uppercase">' + esc(d.optionsLabel) + "</p>";
    h += '<ul class="mt-4 flex flex-col gap-2">';
    s.options.forEach(function (o, i) {
      var asked = st.asked.indexOf(i) !== -1;
      h +=
        '<li><button type="button"' + (busy || locked ? " disabled" : "") + ' class="' +
        cn(
          "group flex w-full items-center justify-between gap-3 rounded-lg border px-4 py-3 text-left text-body-sm transition-colors",
          "disabled:cursor-not-allowed disabled:opacity-50",
          asked
            ? "border-white/10 bg-transparent text-fg-inverse-muted"
            : "border-white/15 bg-white/[0.05] text-white hover:border-cyan hover:bg-cyan/10"
        ) +
        '"><span class="min-w-0">' + esc(o.label) + "</span>" +
        icon(isCall ? "phone" : "message-square", 15, "shrink-0 text-cyan") +
        "</button></li>";
    });
    h += "</ul>";

    if (locked) {
      h +=
        '<p class="mt-4 flex items-start gap-2 text-small text-fg-inverse-muted">' +
        icon("info", 13, "mt-0.5 shrink-0 text-cyan") + esc(d.lockedHint) + "</p>";
    }
    if (!isCall) {
      h +=
        '<button type="button" class="mt-3 inline-flex min-h-11 items-center gap-2 rounded-full text-small text-fg-inverse-muted transition-colors hover:text-white">' +
        icon("refresh-cw", 13) + esc(d.resetLabel) + "</button>";
    }
    return h;
  }

  function statusText(d, st, v) {
    var isCall = !!d.scenarios[st.index].voice;
    if (st.thinking) return d.statusThinking;
    if (v.speaking) return d.speakingLabel;
    if (st.phase === "ringing") return d.statusRingingCall;
    if (st.phase === "live") return d.statusLive;
    return isCall ? d.statusIdleCall : d.statusIdle;
  }

  /** Barra de estado: punto, texto y (en llamada) el boton de silenciar. */
  function statusBarHtml(d, st, v) {
    var isCall = !!d.scenarios[st.index].voice;
    var h =
      '<div class="flex flex-wrap items-center gap-x-2.5 gap-y-3 border-b border-white/10 pb-4">' +
      '<span aria-hidden="true" class="' +
      cn(
        "size-2.5 shrink-0 rounded-full",
        st.thinking || v.speaking || st.phase === "ringing"
          ? "animate-blip bg-cyan"
          : st.phase === "live"
            ? "bg-positive-soft"
            : "bg-white/30"
      ) +
      '"></span>' +
      '<span class="font-mono text-[0.75rem] tracking-[0.1em] text-fg-inverse-muted uppercase">' +
      esc(statusText(d, st, v)) + "</span>";
    if (isCall) {
      h +=
        '<button type="button" aria-pressed="' + (st.muted ? "true" : "false") +
        '" class="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full border border-white/15 px-3 py-1.5 font-mono text-[0.75rem] tracking-[0.08em] text-fg-inverse-muted uppercase transition-colors hover:border-cyan hover:text-white sm:ml-auto sm:min-h-0 sm:w-auto sm:justify-start">' +
        icon(st.muted ? "volume-x" : "volume-2", 13) +
        esc(st.muted ? d.unmuteLabel : d.muteLabel) + "</button>";
    }
    return h + "</div>";
  }

  function turnHtml(t) {
    var isAndrea = t.speaker === "andrea";
    return (
      '<div class="' + cn("flex max-w-[88%] items-start gap-2.5", isAndrea ? "mr-auto" : "ml-auto flex-row-reverse") + '">' +
      '<span aria-hidden="true" class="' +
      cn("grid size-7 shrink-0 place-items-center rounded-full", isAndrea ? "bg-cyan/15 text-cyan" : "bg-white/10 text-fg-inverse-muted") +
      '">' + icon(isAndrea ? "sparkles" : "user", 13) + "</span>" +
      '<p class="' +
      cn(
        "rounded-lg p-3.5 text-body-sm",
        isAndrea ? "rounded-tl-none border border-white/10 bg-white/[0.06] text-white" : "rounded-tr-none bg-cyan text-ink"
      ) +
      '"><span class="sr-only">' + (isAndrea ? "iAndrea: " : "Tú: ") + "</span>" + esc(t.text) + "</p></div>"
    );
  }

  var THINKING_HTML =
    '<div class="mr-auto flex max-w-[88%] items-start gap-2.5">' +
    '<span aria-hidden="true" class="grid size-7 shrink-0 place-items-center rounded-full bg-cyan/15 text-cyan">' +
    icon("sparkles", 13) + "</span>" +
    '<span aria-hidden="true" class="flex items-center gap-1.5 rounded-lg rounded-tl-none border border-white/10 bg-white/[0.06] px-4 py-4">' +
    '<span class="block size-1.5 rounded-full bg-cyan"></span>' +
    '<span class="block size-1.5 rounded-full bg-cyan"></span>' +
    '<span class="block size-1.5 rounded-full bg-cyan"></span>' +
    "</span></div>";

  /** Contenido del hilo (`role="log"`). */
  function threadInnerHtml(d, st) {
    var h = st.turns.map(turnHtml).join("");
    if (st.thinking) h += THINKING_HTML;
    if (st.phase === "ringing") {
      h += '<p class="m-auto font-mono text-small text-fg-inverse-muted">' + esc(d.statusRingingCall) + "</p>";
    }
    return h;
  }

  function disclaimerHtml(d, st) {
    var isCall = !!d.scenarios[st.index].voice;
    return (
      '<p class="mt-5 flex items-start gap-2 border-t border-white/10 pt-4 font-mono text-[0.75rem] leading-relaxed text-fg-inverse-muted">' +
      icon("info", 13, "mt-px shrink-0 text-cyan") + esc(isCall ? d.voiceDisclaimer : d.disclaimer) + "</p>"
    );
  }

  function unavailableHtml(d) {
    return (
      '<p class="mt-3 flex items-start gap-2 rounded-lg border border-white/10 bg-white/[0.04] p-3 text-small text-fg-inverse-muted">' +
      icon("volume-x", 14, "mt-0.5 shrink-0 text-cyan") + esc(d.voiceUnavailable) + "</p>"
    );
  }

  /** Interior completo de la tarjeta (sin el `<script>` de datos). */
  function cardInnerHtml(d, st, v) {
    var s = d.scenarios[st.index];
    var isCall = !!s.voice;
    return (
      '<div class="flex flex-col gap-4 border-b border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between">' +
      '<div class="flex items-center gap-3">' +
      '<span class="relative grid size-10 shrink-0 place-items-center rounded-full border border-cyan/50 bg-cyan/12 text-cyan">' +
      icon("sparkles", 18) + "</span>" +
      '<span class="min-w-0"><span class="block text-card-title text-white">iAndrea</span>' +
      '<span class="block font-mono text-[0.75rem] text-fg-inverse-muted">' + esc(s.subtitle) + "</span></span>" +
      "</div>" +
      '<div role="tablist" aria-label="' + esc(d.scenarioLabel) +
      '" class="flex w-full flex-col gap-1 rounded-lg border border-white/12 bg-navy-deep p-1 sm:w-auto sm:flex-row">' +
      d.scenarios.map(function (sc, i) {
        return tabHtml(sc, i === st.index);
      }).join("") +
      "</div></div>" +
      '<div class="grid lg:grid-cols-[0.85fr_1.15fr]">' +
      '<div class="min-w-0 border-b border-white/10 p-6 lg:border-r lg:border-b-0 lg:p-8">' + controlHtml(d, st, v) + "</div>" +
      '<div class="flex min-w-0 flex-col p-6 lg:p-8">' +
      statusBarHtml(d, st, v) +
      '<div role="log" aria-live="polite" aria-label="' + esc(d.title) +
      '" class="mt-5 flex max-h-[19rem] min-h-[15rem] flex-col gap-3 overflow-y-auto pr-1">' +
      threadInnerHtml(d, st) + "</div>" +
      disclaimerHtml(d, st) +
      (isCall && v.unavailable ? unavailableHtml(d) : "") +
      "</div></div>"
    );
  }

  /** Hilo de partida: vacio en llamada (aun no se ha descolgado), saludo en texto. */
  function freshThread(s) {
    return s.voice ? [] : [{ speaker: "andrea", text: s.greeting }];
  }

  function initialState(d) {
    return {
      index: 0,
      turns: freshThread(d.scenarios[0]),
      thinking: false,
      phase: "idle",
      asked: [],
      muted: false,
      seconds: 0,
    };
  }

  // ---------------------------------------------------------------------------
  // Instancia
  // ---------------------------------------------------------------------------

  /** Sustituye un elemento por el HTML dado solo si ha cambiado; conserva el foco por posicion. */
  function swapOuter(el, html) {
    if (el.__html === html) return el;
    var tpl = document.createElement("template");
    tpl.innerHTML = html;
    var next = tpl.content.firstElementChild;
    var focusIdx = focusIndex(el);
    el.parentNode.replaceChild(next, el);
    next.__html = html;
    restoreFocus(next, focusIdx);
    return next;
  }

  function swapInner(el, html) {
    if (el.__html === html) return false;
    var focusIdx = focusIndex(el);
    el.innerHTML = html;
    el.__html = html;
    restoreFocus(el, focusIdx);
    return true;
  }

  function focusIndex(container) {
    var a = document.activeElement;
    if (!a || !container.contains(a)) return -1;
    return Array.prototype.indexOf.call(container.querySelectorAll("button"), a);
  }

  /**
   * En React el boton que se pulsa sigue siendo el mismo nodo tras el repintado
   * y conserva el foco (Llamar -> Colgar, Silenciar -> Activar). Aqui se
   * reconstruye el HTML, asi que se devuelve el foco al boton de la misma
   * posicion, salvo que haya quedado desactivado.
   */
  function restoreFocus(container, idx) {
    if (idx < 0) return;
    var b = container.querySelectorAll("button")[idx];
    if (b && !b.disabled) b.focus({ preventScroll: true });
  }

  function mount(root) {
    if (root.__simulador) return;
    var dataEl = root.querySelector("script.js-simulador-datos");
    if (!dataEl) return;
    var d;
    try {
      d = JSON.parse(dataEl.textContent);
    } catch (err) {
      if (window.console) console.error("[simulador] JSON de datos no valido:", err);
      return;
    }
    if (!d || !d.scenarios || !d.scenarios.length) return;
    root.__simulador = true;

    listenVoices();

    var st = initialState(d);
    /** Temporizador unico para el tono y el "pensando", como el `timer` ref. */
    var timer = null;
    var tick = null;
    var dotAnims = [];
    var dotTween = null;
    var voice = createVoice(function () {
      render();
    });

    // Se reconstruye la tarjeta desde el JSON (el marcado estatico solo sirve
    // para que se vea bien antes de que cargue el JS).
    var content = document.createElement("div");
    content.innerHTML = cardInnerHtml(d, st, voice);
    Array.prototype.slice.call(root.childNodes).forEach(function (n) {
      if (n !== dataEl) root.removeChild(n);
    });
    while (content.firstChild) root.insertBefore(content.firstChild, dataEl);

    var ref = {};
    function grabRefs() {
      ref.subtitle = root.querySelector(".text-card-title").nextElementSibling;
      ref.tablist = root.querySelector('[role="tablist"]');
      ref.tabs = ref.tablist.querySelectorAll('[role="tab"]');
      // Hijos de la tarjeta (sin el <script>): barra superior y rejilla de dos columnas.
      var bloques = Array.prototype.filter.call(root.children, function (n) {
        return n !== dataEl;
      });
      var cols = bloques[1].children;
      ref.control = cols[0];
      ref.conv = cols[1];
      ref.status = ref.conv.children[0];
      ref.thread = ref.conv.querySelector('[role="log"]');
      ref.disclaimer = ref.thread.nextElementSibling;
      ref.unavailable = ref.disclaimer.nextElementSibling;
    }
    grabRefs();
    ref.control.__html = controlHtml(d, st, voice);
    ref.status.__html = statusBarHtml(d, st, voice);
    ref.thread.__html = threadInnerHtml(d, st);
    ref.disclaimer.__html = disclaimerHtml(d, st);

    function clearTimer() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    }

    function stopDots() {
      dotAnims.forEach(function (a) {
        a.cancel();
      });
      dotAnims = [];
      if (dotTween) {
        dotTween.kill();
        dotTween = null;
      }
    }

    /** Los tres puntos: GSAP si esta, si no Web Animations; nada con movimiento reducido. */
    function startDots() {
      stopDots();
      if (!st.thinking || reducedMotion()) return;
      var dots = ref.thread.querySelectorAll(".size-1\\.5");
      if (!dots.length) return;
      var gsap = window.gsap;
      if (gsap) {
        dotTween = gsap.to(dots, {
          y: -4,
          duration: 0.4,
          ease: "power1.inOut",
          stagger: { each: 0.14, repeat: -1, yoyo: true },
        });
      } else if (typeof dots[0].animate === "function") {
        Array.prototype.forEach.call(dots, function (dot, i) {
          dotAnims.push(
            dot.animate([{ transform: "translateY(0)" }, { transform: "translateY(-4px)" }], {
              duration: 400,
              delay: i * 140,
              easing: "ease-in-out",
              iterations: Infinity,
              direction: "alternate",
            })
          );
        });
      }
    }

    /** Contador de la llamada: corre solo en llamada conectada (como `<CallTimer>`). */
    function syncTick() {
      var running = !!d.scenarios[st.index].voice && st.phase === "live";
      if (running && !tick) {
        st.seconds = 0;
        tick = setInterval(function () {
          st.seconds += 1;
          var span = ref.control.querySelector(".is-tabular");
          if (span) span.textContent = pad2(Math.floor(st.seconds / 60)) + ":" + pad2(st.seconds % 60);
          ref.control.__html = controlHtml(d, st, voice);
        }, 1000);
      } else if (!running && tick) {
        clearInterval(tick);
        tick = null;
        st.seconds = 0;
      }
    }

    function render() {
      var s = d.scenarios[st.index];
      var isCall = !!s.voice;
      syncTick();

      ref.subtitle.textContent = s.subtitle;
      Array.prototype.forEach.call(ref.tabs, function (tab, i) {
        var selected = i === st.index;
        tab.setAttribute("aria-selected", selected ? "true" : "false");
        tab.setAttribute("tabindex", selected ? "0" : "-1");
        tab.className = cn(TAB_BASE, selected ? TAB_ON : TAB_OFF);
      });

      swapInner(ref.control, controlHtml(d, st, voice));
      ref.status = swapOuter(ref.status, statusBarHtml(d, st, voice));

      if (swapInner(ref.thread, threadInnerHtml(d, st))) {
        startDots();
        // El hilo tiene alto fijo y scroll propio: se baja al ultimo turno.
        ref.thread.scrollTop = ref.thread.scrollHeight;
      }

      ref.disclaimer = swapOuter(ref.disclaimer, disclaimerHtml(d, st));
      var wantUnavailable = isCall && voice.unavailable;
      if (wantUnavailable && !ref.unavailable) {
        ref.disclaimer.insertAdjacentHTML("afterend", unavailableHtml(d));
        ref.unavailable = ref.disclaimer.nextElementSibling;
      } else if (!wantUnavailable && ref.unavailable) {
        ref.unavailable.parentNode.removeChild(ref.unavailable);
        ref.unavailable = null;
      }
    }

    function append(speaker, text) {
      st.turns = st.turns.concat([{ speaker: speaker, text: text }]);
    }

    /** Deja el escenario en su estado de partida. */
    function resetScenario(s) {
      clearTimer();
      voice.stop();
      st.turns = freshThread(s);
      st.thinking = false;
      st.phase = "idle";
      st.asked = [];
    }

    function selectScenario(i) {
      if (i === st.index) return;
      st.index = i;
      resetScenario(d.scenarios[i]);
      render();
    }

    /** Lee el turno de iAndrea, salvo que no sea llamada o este silenciada. */
    function say(text) {
      if (!d.scenarios[st.index].voice || st.muted) return;
      voice.speak(text);
    }

    /** Descolgar: tono de llamada y, al conectar, el saludo en voz alta. */
    function call() {
      var s = d.scenarios[st.index];
      clearTimer();
      st.turns = [];
      st.asked = [];
      st.thinking = false;
      st.phase = "ringing";
      render();
      timer = setTimeout(function () {
        timer = null;
        st.turns = [{ speaker: "andrea", text: s.greeting }];
        st.phase = "live";
        say(s.greeting);
        render();
      }, RINGING_MS);
    }

    function hangUp() {
      resetScenario(d.scenarios[st.index]);
      render();
    }

    function ask(optionIndex) {
      var s = d.scenarios[st.index];
      if (st.thinking || voice.speaking) return;
      if (s.voice && st.phase !== "live") return;
      var option = s.options[optionIndex];

      st.phase = "live";
      if (st.asked.indexOf(optionIndex) === -1) st.asked = st.asked.concat([optionIndex]);
      append("user", option.question);
      st.thinking = true;

      clearTimer();
      render();
      timer = setTimeout(function () {
        timer = null;
        append("andrea", option.answer);
        st.thinking = false;
        say(option.answer);
        render();
      }, THINKING_MS);
    }

    function toggleMute() {
      // Silenciar tiene que callar lo que ya esta sonando.
      if (!st.muted) voice.stop();
      st.muted = !st.muted;
      render();
    }

    // --- Eventos (delegados: el HTML de las columnas se reconstruye) ---

    ref.tablist.addEventListener("click", function (e) {
      var tab = e.target.closest('[role="tab"]');
      if (!tab) return;
      selectScenario(Array.prototype.indexOf.call(ref.tabs, tab));
    });

    ref.tablist.addEventListener("keydown", function (e) {
      var n = d.scenarios.length;
      var map = {
        ArrowRight: st.index + 1,
        ArrowDown: st.index + 1,
        ArrowLeft: st.index - 1,
        ArrowUp: st.index - 1,
        Home: 0,
        End: n - 1,
      };
      var next = map[e.key];
      if (next === undefined) return;
      e.preventDefault();
      selectScenario((next + n) % n);
      // Roving tabindex: el foco acompana a la pestana seleccionada.
      ref.tabs[st.index].focus();
    });

    ref.control.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn || btn.disabled) return;
      var s = d.scenarios[st.index];
      var li = btn.closest("li");
      if (li) {
        ask(Array.prototype.indexOf.call(li.parentNode.children, li));
      } else if (s.voice) {
        if (st.phase !== "idle") hangUp();
        else call();
      } else {
        hangUp(); // "Reiniciar la llamada"
      }
    });

    ref.conv.addEventListener("click", function (e) {
      var btn = e.target.closest("button[aria-pressed]");
      if (btn) toggleMute();
    });

    render();
  }

  // ---------------------------------------------------------------------------
  // Arranque
  // ---------------------------------------------------------------------------

  function init(scope) {
    var list = (scope || document).querySelectorAll(".js-simulador");
    Array.prototype.forEach.call(list, mount);
  }

  window.ComunicaSimulador = {
    init: init,
    /** Marcado inicial a partir de unos datos (sirve para regenerar el snippet). */
    plantilla: function (d) {
      return cardInnerHtml(d, initialState(d), { speaking: false, unavailable: false });
    },
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      init();
    });
  } else {
    init();
  }

  // Editor de Elementor: el widget se vuelve a pintar al editarlo. Elementor
  // avisa con un evento de jQuery, no con uno nativo.
  function hookElementor() {
    var ef = window.elementorFrontend;
    if (!ef || !ef.hooks || hookElementor.done) return;
    hookElementor.done = true;
    ef.hooks.addAction("frontend/element_ready/html.default", function ($scope) {
      init($scope && $scope[0] ? $scope[0] : document);
    });
  }
  if (window.elementorFrontend && window.elementorFrontend.hooks) hookElementor();
  else if (window.jQuery) window.jQuery(window).on("elementor/frontend/init", hookElementor);
})();
