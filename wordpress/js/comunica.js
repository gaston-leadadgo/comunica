/*!
 * Comunica · comportamiento de la web en WordPress + Elementor (version hibrida)
 *
 * Sustituye a los componentes de React de la web original. Sin dependencias
 * propias: si GSAP (+ ScrollTrigger y Flip) esta cargado, anima; si no, la web
 * funciona igual, sin animaciones.
 *
 * Todo cuelga de clases que se ponen en Avanzado -> Clases CSS:
 *   ms-<seccion>   que animacion de entrada lleva cada seccion (tabla MOTION)
 *   m-<pieza>      las piezas que anima esa seccion
 *   js-<pieza>     los componentes con estado (pestanas, acordeon, carrusel...)
 *   is-on          el elemento encendido de cada componente
 * Si se borra una de esas clases en el panel, esa pieza deja de funcionar.
 *
 * La calculadora, el simulador de iAndrea y el formulario tienen su propio JS
 * (calculadora.js, simulador.js, contacto.js).
 */
(function () {
  "use strict";

  var doc = document;
  var root = doc.documentElement;
  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // En el editor de Elementor no se anima nada: las piezas se quedarian a
  // opacidad 0 esperando un scroll que en el panel no llega.
  var EDITOR = doc.body.classList.contains("elementor-editor-active") ||
    /[?&]elementor-preview=/.test(location.search);

  function $$(sel, ctx) {
    return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel));
  }
  function swap(el, quitar, poner) {
    if (quitar) el.classList.remove.apply(el.classList, quitar.split(/\s+/).filter(Boolean));
    if (poner) el.classList.add.apply(el.classList, poner.split(/\s+/).filter(Boolean));
  }
  function ruta() {
    var p = location.pathname.replace(/\/+$/, "");
    return p === "" ? "/" : p;
  }
  function g() {
    return !REDUCED && !EDITOR && window.gsap ? window.gsap : null;
  }

  /* ---------------------------------------------------------------- botones
     Lo que en la web eran <button> aqui son contenedores de Elementor (un
     contenedor no puede ser <button>). Se les devuelve el rol, el foco y el
     teclado. */
  function botones() {
    $$(".dl-landing .js-btn").forEach(function (el) {
      if (!el.hasAttribute("role")) el.setAttribute("role", "button");
      if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "0");
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          el.click();
        }
      });
    });
  }

  /* -------------------------------------------------------------- cabecera */
  function cabecera() {
    var header = doc.querySelector(".js-cabecera");
    if (!header) return;
    var pildora = header.querySelector(".js-pildora");
    var boton = header.querySelector("[data-menu-boton]");
    var panel = header.querySelector("[data-menu-panel]");
    var iconoMenu = boton ? boton.innerHTML : "";
    var plantillaX = doc.querySelector("template.js-icono-cerrar");
    var iconoX = plantillaX ? plantillaX.innerHTML : iconoMenu;
    var actual = ruta();
    var sobreOscuro = actual.indexOf("/partners") === 0;
    var scrolled = false;
    var abierto = false;

    // Altura publicada en --header-h: la usan el relleno superior de los heros,
    // el scroll-margin de las anclas y las columnas fijas.
    function publicar() {
      root.style.setProperty("--header-h", header.offsetHeight + "px");
    }
    publicar();
    if (window.ResizeObserver) new ResizeObserver(publicar).observe(header);

    function activo(href) {
      return href === "/" ? actual === "/" : actual.indexOf(href) === 0;
    }

    function pintar() {
      var invertido = sobreOscuro && !scrolled && !abierto;
      if (scrolled || abierto) {
        swap(pildora, "border-transparent bg-transparent", "border-line bg-paper/80 shadow-sm backdrop-blur-xl");
      } else {
        swap(pildora, "border-line bg-paper/80 shadow-sm backdrop-blur-xl", "border-transparent bg-transparent");
      }
      pildora.classList.toggle("tone-dark", invertido);
      $$("[data-cls-oscuro]", header).forEach(function (el) {
        var a = el.getAttribute("data-cls-claro"), b = el.getAttribute("data-cls-oscuro");
        if (invertido) swap(el, a, b); else swap(el, b, a);
      });
      var logo = header.querySelector(".js-logo-texto");
      if (logo) logo.setAttribute("fill", invertido ? "#fff" : "var(--color-ink)");

      $$(".js-nav a", header).forEach(function (a) {
        var on = activo(a.getAttribute("href"));
        swap(a, "text-cyan text-white hover:text-cyan text-cyan-ink text-fg hover:text-cyan-ink");
        swap(a, null, invertido ? (on ? "text-cyan" : "text-white hover:text-cyan")
          : (on ? "text-cyan-ink" : "text-fg hover:text-cyan-ink"));
        var raya = a.querySelector(".js-raya");
        if (on && !raya) {
          raya = doc.createElement("span");
          raya.setAttribute("aria-hidden", "true");
          raya.className = "js-raya bg-brand-gradient absolute inset-x-4 bottom-1 h-[2px] rounded-full";
          a.appendChild(raya);
        } else if (!on && raya) {
          raya.remove();
        }
        if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
      });
      $$(".js-nav-movil a", header).forEach(function (a) {
        var on = activo(a.getAttribute("href"));
        swap(a, on ? "text-fg" : "text-cyan-ink", on ? "text-cyan-ink" : "text-fg");
        if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
      });
    }

    function onScroll() {
      var s = window.scrollY > 12;
      if (s !== scrolled) {
        scrolled = s;
        pintar();
      }
    }

    var overflowPrevio = "";
    function abrir(si) {
      abierto = si;
      panel.hidden = !si;
      boton.setAttribute("aria-expanded", String(si));
      boton.setAttribute("aria-label", si ? "Cerrar menu" : "Abrir menu");
      boton.innerHTML = si ? iconoX : iconoMenu;
      if (si) {
        overflowPrevio = doc.body.style.overflow;
        doc.body.style.overflow = "hidden";
      } else {
        doc.body.style.overflow = overflowPrevio;
      }
      pintar();
    }
    if (boton && panel) {
      boton.addEventListener("click", function () { abrir(!abierto); });
      doc.addEventListener("keydown", function (e) {
        if (abierto && e.key === "Escape") abrir(false);
      });
      // Un enlace del menu que lleva a otra ancla de la misma pagina no recarga.
      panel.addEventListener("click", function (e) {
        if (e.target.closest("a")) abrir(false);
      });
    }

    scrolled = window.scrollY > 12;
    pintar();
    window.addEventListener("scroll", onScroll, { passive: true });

    // CTA fija movil: fuera en Contacto, que ya es el formulario. Mientras se
    // ve, el <body> reserva su altura (regla body[data-sticky-cta] del CSS).
    var cta = doc.querySelector(".js-cta-fija");
    if (cta) {
      if (actual.indexOf("/contacto") === 0) {
        cta.remove();
        doc.body.removeAttribute("data-sticky-cta");
      } else {
        doc.body.setAttribute("data-sticky-cta", "true");
      }
    }
  }

  /* ------------------------------------------------------------ testimonios */
  function testimonios() {
    $$(".js-testimonios").forEach(function (sec) {
      var slides = $$(".js-slide", sec);
      var avatares = $$(".js-avatar", sec);
      if (!slides.length) return;
      var n = slides.length;
      var idx = Math.max(0, slides.findIndex(function (s) { return s.classList.contains("is-on"); }));
      var caja = sec.querySelector(".js-slides");
      if (caja) caja.setAttribute("aria-live", "polite");

      function ir(i, animar) {
        idx = (i + n) % n;
        slides.forEach(function (s, k) {
          s.classList.toggle("is-on", k === idx);
        });
        avatares.forEach(function (a, k) {
          var on = k === idx;
          a.classList.toggle("is-on", on);
          a.style.zIndex = on ? 10 : n - k;
          if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
        });
        var gs = g();
        if (animar && gs) {
          gs.from(slides[idx], { opacity: 0, y: 8, duration: 0.35, ease: "power2.out", immediateRender: true });
        }
      }
      avatares.forEach(function (a, k) {
        // Nombre: el penultimo texto de la cita (comillas, cita, nombre, cargo).
        var ps = slides[k] ? slides[k].querySelectorAll(".elementor-widget-text-editor") : [];
        var nombre = ps.length > 1 ? ps[ps.length - 2].textContent.trim() : "";
        if (!a.hasAttribute("aria-label")) a.setAttribute("aria-label", "Ver testimonio " + (k + 1) + (nombre ? " de " + nombre : ""));
        a.addEventListener("click", function () { ir(k, true); });
      });
      var prev = sec.querySelector(".js-prev"), next = sec.querySelector(".js-next");
      if (prev) {
        prev.setAttribute("aria-label", "Testimonio anterior");
        prev.addEventListener("click", function () { ir(idx - 1, true); });
      }
      if (next) {
        next.setAttribute("aria-label", "Testimonio siguiente");
        next.addEventListener("click", function () { ir(idx + 1, true); });
      }
      sec.setAttribute("aria-roledescription", "carrusel");
      ir(idx, false);
    });
  }

  /* ---------------------------------------------- acordeon de perfiles (home) */
  function acordeon() {
    $$(".js-acordeon").forEach(function (sec) {
      var items = $$(".js-acc", sec);
      function abrir(it) {
        items.forEach(function (o) {
          var on = o === it;
          o.classList.toggle("is-on", on);
          o.style.flexGrow = on ? "2.6" : "0.55";
          o.style.flexBasis = "0";
          var b = o.querySelector(".js-btn");
          if (b) b.setAttribute("aria-expanded", String(on));
        });
      }
      items.forEach(function (it, k) {
        var b = it.querySelector(".js-btn");
        if (!b) return;
        b.setAttribute("aria-expanded", String(it.classList.contains("is-on")));
        b.addEventListener("click", function () { abrir(it); });
      });
    });
  }

  /* ------------------------------------------- bento de diferenciales (home)
     La elegida y una segunda ocupan 4 de las 6 columnas; el orden del DOM no
     cambia nunca (ver el comentario del componente original). */
  function bento() {
    $$(".js-bento").forEach(function (sec) {
      var celdas = $$(".js-bento-celda", sec);
      if (!celdas.length) return;
      var activo = Math.max(0, celdas.findIndex(function (c) { return c.classList.contains("is-on"); }));
      var ultimo = celdas.length - 1;

      function aplicar(a) {
        var segunda = a === ultimo ? ultimo - 1 : ultimo;
        celdas.forEach(function (c, k) {
          var on = k === a;
          c.classList.toggle("is-on", on);
          c.classList.toggle("tone-dark", on);
          c.classList.toggle("is-wide", k === a || k === segunda);
          c.setAttribute("aria-pressed", String(on));
        });
      }
      celdas.forEach(function (c, k) {
        c.addEventListener("click", function () {
          if (k === activo) return;
          var gs = g();
          var estado = gs && window.Flip ? window.Flip.getState(celdas, { props: "backgroundColor,color" }) : null;
          activo = k;
          aplicar(k);
          if (estado) window.Flip.from(estado, { duration: 0.4, ease: "power2.out" });
        });
      });
      aplicar(activo);
    });
  }

  /* -------------------------------------------- pestanas de perfiles (soluciones) */
  function pestanas() {
    $$(".js-pestanas").forEach(function (sec, s) {
      var tabs = $$(".js-tab", sec);
      var panels = $$(".js-panel", sec);
      if (!tabs.length) return;
      var lista = tabs[0].parentElement;
      lista.setAttribute("role", "tablist");
      lista.setAttribute("aria-orientation", "vertical");
      lista.setAttribute("aria-label", "Perfiles de hotel");
      var activo = Math.max(0, tabs.findIndex(function (t) { return t.classList.contains("is-on"); }));

      tabs.forEach(function (t, k) {
        t.setAttribute("role", "tab");
        t.id = t.id || "perfil-" + s + "-tab-" + k;
        if (panels[k]) {
          panels[k].setAttribute("role", "tabpanel");
          panels[k].id = panels[k].id || "perfil-" + s + "-panel-" + k;
          panels[k].setAttribute("aria-labelledby", t.id);
          panels[k].setAttribute("tabindex", "0");
        }
        t.addEventListener("click", function () { ir(k, false); });
      });

      function ir(k, foco) {
        activo = (k + tabs.length) % tabs.length;
        tabs.forEach(function (t, i) {
          var on = i === activo;
          t.classList.toggle("is-on", on);
          t.setAttribute("aria-selected", String(on));
          t.setAttribute("tabindex", on ? "0" : "-1");
          if (on && panels[i]) t.setAttribute("aria-controls", panels[i].id); else t.removeAttribute("aria-controls");
        });
        panels.forEach(function (p, i) { p.classList.toggle("is-on", i === activo); });
        if (foco) tabs[activo].focus();
      }
      lista.addEventListener("keydown", function (e) {
        var mapa = { ArrowDown: activo + 1, ArrowRight: activo + 1, ArrowUp: activo - 1, ArrowLeft: activo - 1, Home: 0, End: tabs.length - 1 };
        if (!(e.key in mapa)) return;
        e.preventDefault();
        e.stopPropagation();
        ir(mapa[e.key], true);
      }, true);
      ir(activo, false);
    });
  }

  /* ------------------------------------------------------------ video hero
     Arranca solo si el usuario no pide movimiento reducido. */
  function videoHero() {
    $$(".dl-landing video[loop][muted], .dl-landing video[loop]").forEach(function (v) {
      v.muted = true;
      if (REDUCED) {
        v.pause();
        v.currentTime = 0;
        v.removeAttribute("autoplay");
      } else {
        var p = v.play();
        if (p && p.catch) p.catch(function () {});
      }
    });
  }

  /* ----------------------------------------------------------- animaciones
     Copia literal de los useBrandMotion de cada seccion. */
  function revelar(gs, scope, piezas, o) {
    o = o || {};
    var els = typeof piezas === "string" ? $$(piezas, scope) : piezas;
    if (!els.length) return;
    var v = { opacity: 0, y: o.y == null ? 24 : o.y, duration: o.duration || 0.65,
      stagger: o.stagger == null ? 0.09 : o.stagger, delay: o.delay || 0, ease: o.ease || "power3.out",
      immediateRender: true, scrollTrigger: { trigger: scope, start: o.start || "top 82%", once: true } };
    if (o.scale) v.scale = o.scale;
    gs.from(els, v);
  }
  function celdas(gs, scope, sel, o) {
    var els = $$(sel, scope);
    if (!els.length) return;
    gs.from(els, { opacity: 0, y: o.y, scale: o.scale, duration: o.duration, ease: "power2.out", immediateRender: true,
      stagger: { each: o.each, from: o.from || "start", grid: "auto" },
      scrollTrigger: { trigger: scope, start: o.start, once: true } });
  }
  function entrada(gs, scope, sel, o) {
    var els = $$(sel, scope);
    if (!els.length) return;
    gs.from(els, { opacity: 0, y: o.y || 0, x: o.x || 0, duration: o.duration, ease: o.ease || "power3.out",
      immediateRender: true, stagger: o.stagger || 0, delay: o.delay || 0,
      scrollTrigger: o.inmediato ? undefined : { trigger: o.trigger ? $$(o.trigger, scope)[0] || scope : scope,
        start: o.start, once: true } });
  }
  function contar(gs, el, o) {
    var objetivo = parseInt((el.textContent || "").replace(/\D/g, ""), 10);
    if (!isFinite(objetivo) || objetivo < (o.min || 0)) return;
    var obj = { v: 0 };
    var tw = { v: objetivo, duration: o.duration, ease: "power2.out",
      onUpdate: function () { el.textContent = String(Math.round(obj.v)); } };
    if (o.tl) {
      o.tl.to(obj, tw, o.at);
    } else {
      tw.immediateRender = true;
      tw.scrollTrigger = { trigger: o.trigger, start: "top 78%", once: true };
      gs.to(obj, tw);
    }
    el.textContent = "0";
  }

  var MOTION = {
    // La entrada del hero va en CSS (02-adaptador, seccion 12): empieza sin
    // esperar al JS. Aqui solo queda el desplazamiento del video al hacer scroll.
    hero: function (gs, s) {
      var art = s.querySelector(".m-art");
      if (art && window.ScrollTrigger) {
        gs.to(art, { yPercent: -8, ease: "none", scrollTrigger: { trigger: s, start: "top top", end: "bottom top", scrub: 0.5 } });
      }
    },
    cifras: function (gs, s) {
      var tl = gs.timeline({ scrollTrigger: { trigger: s, start: "top 85%", once: true } });
      tl.from($$(".m-stat", s), { opacity: 0, y: 28, duration: 0.6, ease: "power3.out", stagger: 0.1, immediateRender: true })
        .from($$(".m-stat-bar", s), { scaleX: 0, transformOrigin: "left center", duration: 0.7, ease: "power2.out", stagger: 0.1, immediateRender: true }, 0.15)
        .from($$(".m-stat-icon", s), { scale: 0.5, rotate: -14, opacity: 0, duration: 0.5, ease: "back.out(2)", stagger: 0.1, immediateRender: true }, 0.2);
      $$(".m-count", s).forEach(function (el, i) {
        contar(gs, el, { tl: tl, at: 0.2 + i * 0.1, duration: 1.3, min: 2 });
      });
    },
    problema: function (gs, s) { celdas(gs, s, ".m-cell", { y: 18, scale: 0.97, duration: 0.45, each: 0.06, from: "center", start: "top 78%" }); },
    valor: function (gs, s) { celdas(gs, s, ".m-cell", { y: 22, scale: 0.97, duration: 0.55, each: 0.06, start: "top 78%" }); },
    diferenciales: function (gs, s) { celdas(gs, s, ".m-cell", { y: 22, scale: 0.97, duration: 0.55, each: 0.07, start: "top 78%" }); },
    testimonios: function (gs, s) {
      gs.from(s.querySelector(".e-con") || s, { opacity: 0, y: 24, duration: 0.6, ease: "power3.out", immediateRender: true,
        scrollTrigger: { trigger: s, start: "top 82%", once: true } });
    },
    calculadora: function (gs, s) { revelar(gs, s, ".m-reveal", { stagger: 0.1, start: "top 80%" }); },
    perfiles: function (gs, s) {
      revelar(gs, s, ".m-head", { start: "top 85%" });
      revelar(gs, s, ".m-lama", { stagger: 0.08, start: "top 80%", delay: 0.1 });
    },
    iandrea: function (gs, s) {
      revelar(gs, s, ".m-reveal-l", { stagger: 0.1, start: "top 75%" });
      revelar(gs, s, ".m-reveal-r", { stagger: 0.1, start: "top 75%", delay: 0.15 });
      revelar(gs, s, ".m-caps-label", { start: "top 85%" });
      celdas(gs, s, ".m-cap", { y: 20, scale: 0.97, duration: 0.5, each: 0.06, start: "top 82%" });
    },
    extension: function (gs, s) { entrada(gs, s, ".m-step", { y: 14, duration: 0.4, ease: "power2.out", stagger: 0.08, start: "top 82%" }); },
    wifi: function (gs, s) { revelar(gs, s, ".m-reveal", { stagger: 0.08, start: "top 80%" }); },
    metodo: function (gs, s) {
      if (!window.ScrollTrigger) return;
      var mm = gs.matchMedia();
      mm.add("(min-width: 1024px)", function () {
        var cards = $$(".m-card", s);
        cards.forEach(function (card, i) {
          if (i === cards.length - 1) return;
          gs.to(card, { scale: 1 - (cards.length - 1 - i) * 0.014, ease: "none",
            scrollTrigger: { trigger: cards[i + 1], start: "top 92%", end: "top 42%", scrub: 1 } });
        });
      });
    },
    "cta-final": function (gs, s) { revelar(gs, s, ".m-reveal", { stagger: 0.1, start: "top 82%" }); },
    cierre: function (gs, s) { revelar(gs, s, ".m-reveal", { stagger: 0.1, start: "top 85%" }); },

    "sol-hero": function () {}, // entrada en CSS
    "sol-perfiles": function (gs, s) {
      gs.from(s.querySelector(".js-tab") ? s.querySelector(".js-tab").closest(".e-con.e-child").parentElement : s,
        { opacity: 0, y: 24, duration: 0.6, ease: "power3.out", immediateRender: true, scrollTrigger: { trigger: s, start: "top 82%", once: true } });
    },
    "sol-capacidades": function (gs, s) { entrada(gs, s, ".m-row", { x: -16, duration: 0.4, ease: "power2.out", stagger: 0.05, start: "top 80%" }); },
    "sol-iandrea": function (gs, s) {
      entrada(gs, s, ".m-reveal-l", { y: 22, duration: 0.6, stagger: 0.1, start: "top 75%" });
      entrada(gs, s, ".m-call", { x: -16, duration: 0.45, ease: "power2.out", stagger: 0.09, start: "top 78%", trigger: ".m-call" });
      entrada(gs, s, ".m-problem", { y: 16, duration: 0.5, ease: "power2.out", delay: 0.25, start: "top 85%", trigger: ".m-problem" });
      var f = $$(".m-feature", s);
      if (f.length) gs.from(f, { opacity: 0, y: 20, duration: 0.5, ease: "power2.out", immediateRender: true,
        stagger: { each: 0.06, from: "start", grid: "auto" }, scrollTrigger: { trigger: f[0], start: "top 85%", once: true } });
      entrada(gs, s, ".m-reveal-close", { y: 18, duration: 0.55, ease: "power2.out", stagger: 0.1, start: "top 88%", trigger: ".m-reveal-close" });
    },
    simulador: function (gs, s) { entrada(gs, s, ".m-reveal", { y: 22, duration: 0.6, stagger: 0.1, start: "top 80%" }); },

    "nos-hero": function () {}, // entrada en CSS
    "nos-conocimiento": function (gs, s) { revelar(gs, s, ".m-reveal", { stagger: 0.12, start: "top 80%" }); },
    "nos-escala": function (gs, s) {
      $$(".m-count", s).forEach(function (el) { contar(gs, el, { trigger: s, duration: 1.2 }); });
      entrada(gs, s, ".m-keycard", { y: 10, duration: 0.35, ease: "power2.out", stagger: 0.04, start: "top 78%" });
    },
    "nos-confianza": function (gs, s) { revelar(gs, s, ".m-reveal", { stagger: 0.1, start: "top 78%" }); },
    "nos-equipo": function (gs, s) {
      $$(".m-block", s).forEach(function (b) {
        var t = $$(".m-reveal", b);
        if (t.length) gs.from(t, { opacity: 0, y: 22, duration: 0.55, ease: "power3.out", immediateRender: true, stagger: 0.08,
          scrollTrigger: { trigger: b, start: "top 82%", once: true } });
      });
    },

    "par-hero": function () {}, // entrada en CSS
    "par-modelos": function (gs, s) {
      entrada(gs, s, ".m-reveal", { y: 22, duration: 0.6, stagger: 0.1, start: "top 82%" });
      entrada(gs, s, ".m-door", { y: 18, duration: 0.5, ease: "power2.out", stagger: 0.08, start: "top 85%", trigger: ".m-door" });
      entrada(gs, s, ".m-model", { y: 24, duration: 0.6, stagger: 0.12, start: "top 85%", trigger: ".m-model" });
    },
    "par-beneficios": function (gs, s) { celdas(gs, s, ".m-cell", { y: 16, scale: 0.98, duration: 0.42, each: 0.05, start: "top 80%" }); },
    "par-portal": function (gs, s) {
      gs.from(s.querySelector(".e-con") || s, { opacity: 0, y: 20, duration: 0.55, ease: "power3.out", immediateRender: true,
        scrollTrigger: { trigger: s, start: "top 85%", once: true } });
    },
    contacto: function () {} // entrada en CSS
  };

  function animaciones() {
    var gs = g();
    if (!gs) return;
    if (window.ScrollTrigger) gs.registerPlugin(window.ScrollTrigger);
    if (window.Flip) gs.registerPlugin(window.Flip);
    $$(".dl-landing [class*=' ms-'], .dl-landing [class^='ms-']").forEach(function (s) {
      var clave = null;
      s.classList.forEach(function (c) { if (c.indexOf("ms-") === 0) clave = c.slice(3); });
      var fn = clave && MOTION[clave];
      if (!fn) return;
      try { fn(gs, s); } catch (e) { if (window.console) console.warn("[comunica] animacion " + clave, e); }
    });
    // Los ScrollTrigger se calculan con la fuente de reserva; al entrar Space
    // Grotesk las alturas cambian unos pixeles.
    if (window.ScrollTrigger && doc.fonts && doc.fonts.ready) {
      doc.fonts.ready.then(function () { window.ScrollTrigger.refresh(); });
    }
  }

  function iniciar() {
    botones();
    cabecera();
    testimonios();
    acordeon();
    bento();
    pestanas();
    videoHero();
    animaciones();
  }

  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", iniciar);
  else iniciar();
})();
