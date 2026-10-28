"use client";

import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";
import { soluciones } from "@/content/soluciones";
import { gsap, useBrandMotion } from "@/lib/gsap/use-brand-motion";
import { useVoice } from "@/lib/voice/use-voice";
import { cn } from "@/lib/utils/cn";

/**
 * Simulador interactivo de iAndrea.
 *
 * La idea y el guion vienen de la version de Marcos
 * (`comunica-version-marcos/src/components/AndreaVoiceDemo.tsx`). Lo que cambia
 * aqui, y por que:
 *
 * - Sistema de diseno propio: tokens de marca en lugar de `brand-cyan`/
 *   `brand-dark` sueltos, `Icon` del registro tipado en vez de importar
 *   `lucide-react` directamente, y el navy del manual como superficie.
 * - Copy y establecimientos en `content/soluciones.ts`, no incrustados en el
 *   componente. El original llevaba el guion entero dentro del JSX, incluidas
 *   marcas de terceros sin autorizacion (ver la nota en el content).
 * - Accesibilidad, que en el original no existia: el hilo es una `role="log"`
 *   con `aria-live="polite"`, asi que un lector de pantalla anuncia cada turno
 *   nuevo; los selectores de escenario son `role="tablist"` con flechas; y el
 *   estado de la llamada se anuncia por texto, no solo por el color de un punto.
 * - El indicador de "pensando" respeta `prefers-reduced-motion`: sin
 *   animaciones, los puntos se sustituyen por texto.
 *
 * ---------------------------------------------------------------------------
 * MODO LLAMADA
 *
 * Los escenarios con `voice: true` no se presentan como un chat sino como una
 * llamada de telefono, que es lo que iAndrea hace de verdad: coger el telefono y
 * contestar con voz. Eso cambia tres cosas respecto al modo texto:
 *
 * 1. Hay que DESCOLGAR. El hilo arranca vacio y las preguntas estan bloqueadas
 *    hasta que se pulsa "Llamar". No es ceremonia: la sintesis de voz solo puede
 *    arrancar a partir de un gesto del usuario —Safari lo exige— y ademas nadie
 *    debe encontrarse con una voz sonando por haber pasado por encima de la
 *    seccion. El boton convierte ese requisito tecnico en el gesto que la
 *    metafora ya pedia.
 * 2. iAndrea SALUDA en voz alta al conectar, con un tono de llamada previo. El
 *    saludo es la linea que mas suena a centralita, asi que perderla por
 *    mostrarla ya escrita al entrar desaprovechaba lo mejor del guion.
 * 3. El hilo de burbujas pasa a ser la TRANSCRIPCION de lo que suena. Sigue
 *    estando, y completo, por tres motivos: quien silencia la voz puede seguir
 *    la conversacion, un lector de pantalla la lee igual, y en una oficina con
 *    gente delante la mayoria no va a poner sonido.
 *
 * El modo texto se queda exactamente como estaba.
 *
 * Los dos temporizadores —el tono de llamada y el "pensando"— comparten un unico
 * ref y se limpian al desmontar y al cambiar de escenario. Sin eso, cambiar de
 * pestana con una respuesta en vuelo inyecta el turno del escenario anterior en
 * el hilo del nuevo.
 */

type Turn = { speaker: "andrea" | "user"; text: string; id: number };
type Phase = "idle" | "ringing" | "live";

const THINKING_MS = 1400;
/** Tono de llamada antes de que iAndrea descuelgue. */
const RINGING_MS = 1600;

export function SolucionesIandreaDemo() {
  const { demo } = soluciones;

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const threadRef = useRef<HTMLDivElement>(null);

  /**
   * Hilo inicial de un escenario.
   *
   * En modo llamada arranca VACIO: todavia no se ha descolgado, asi que no puede
   * haber transcripcion. En modo texto arranca con el saludo, como hasta ahora.
   */
  const freshThread = (s: (typeof demo.scenarios)[number]): Turn[] =>
    s.voice ? [] : [{ speaker: "andrea", text: s.greeting, id: 1 }];

  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [turns, setTurns] = useState<Turn[]>(() => freshThread(demo.scenarios[0]));
  const [thinking, setThinking] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [asked, setAsked] = useState<number[]>([]);
  const [muted, setMuted] = useState(false);

  const voice = useVoice();
  const scenario = demo.scenarios[scenarioIndex];
  const isCall = scenario.voice;

  const clearTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  /**
   * Anade un turno al hilo.
   *
   * El `id` se deriva de la longitud de la lista en lugar de un contador
   * externo. Basta para lo que hace falta —una clave unica ENTRE HERMANOS— y
   * evita el contador en un ref, que habria que leer durante el render para
   * sembrar el hilo inicial. Que tras colgar los ids vuelvan a empezar en 1 no
   * es un problema: el hilo se sustituye entero, no se mezcla con el anterior.
   */
  const append = (speaker: Turn["speaker"], text: string) => {
    setTurns((prev) => [...prev, { speaker, text, id: prev.length + 1 }]);
  };

  useEffect(() => clearTimer, []);

  // El hilo tiene alto fijo y scroll propio: al llegar un turno nuevo hay que
  // bajarlo, o la respuesta aparece fuera de vista y parece que no ha pasado
  // nada. `scrollTop` directo y no `scrollIntoView`, que ademas desplazaria la
  // pagina entera.
  useEffect(() => {
    const el = threadRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [turns, thinking]);

  /**
   * Deja el escenario en su estado de partida.
   *
   * Va en los manejadores y no en un `useEffect` sobre `scenarioIndex` a
   * proposito: el escenario solo cambia porque alguien pulsa una pestana, y
   * cortar la voz desde un efecto obligaria a tocar estado dentro de el.
   */
  const resetScenario = (s: (typeof demo.scenarios)[number]) => {
    clearTimer();
    voice.stop();
    setTurns(freshThread(s));
    setThinking(false);
    setPhase("idle");
    setAsked([]);
  };

  const selectScenario = (i: number) => {
    if (i === scenarioIndex) return;
    setScenarioIndex(i);
    resetScenario(demo.scenarios[i]);
  };

  /** Lee el turno de iAndrea, salvo que la llamada este silenciada. */
  const say = (text: string) => {
    if (!isCall || muted) return;
    voice.speak(text);
  };

  /** Descolgar: tono de llamada y, al conectar, el saludo en voz alta. */
  const call = () => {
    clearTimer();
    setTurns([]);
    setAsked([]);
    setThinking(false);
    setPhase("ringing");

    timer.current = setTimeout(() => {
      setTurns([{ speaker: "andrea", text: scenario.greeting, id: 1 }]);
      setPhase("live");
      say(scenario.greeting);
      timer.current = null;
    }, RINGING_MS);
  };

  const hangUp = () => resetScenario(scenario);

  const ask = (optionIndex: number) => {
    if (thinking || voice.speaking) return;
    if (isCall && phase !== "live") return;

    const option = scenario.options[optionIndex];

    setPhase("live");
    setAsked((prev) => (prev.includes(optionIndex) ? prev : [...prev, optionIndex]));
    append("user", option.question);
    setThinking(true);

    clearTimer();
    timer.current = setTimeout(() => {
      append("andrea", option.answer);
      setThinking(false);
      say(option.answer);
      timer.current = null;
    }, THINKING_MS);
  };

  const toggleMute = () => {
    // Silenciar tiene que callar lo que ya esta sonando. Si solo afectara al
    // turno siguiente, el boton parece que no funciona.
    if (!muted) voice.stop();
    setMuted((prev) => !prev);
  };

  const onTabKey = (e: React.KeyboardEvent) => {
    const map: Record<string, number | undefined> = {
      ArrowRight: scenarioIndex + 1,
      ArrowDown: scenarioIndex + 1,
      ArrowLeft: scenarioIndex - 1,
      ArrowUp: scenarioIndex - 1,
      Home: 0,
      End: demo.scenarios.length - 1,
    };
    const next = map[e.key];
    if (next === undefined) return;
    e.preventDefault();
    selectScenario((next + demo.scenarios.length) % demo.scenarios.length);
  };

  const scope = useBrandMotion<HTMLDivElement>(({ gsap, scope, reduced }) => {
    if (reduced) return;
    gsap.from(gsap.utils.toArray("[data-reveal]", scope), {
      opacity: 0,
      y: 22,
      duration: 0.6,
      ease: "power3.out",
      immediateRender: true,
      stagger: 0.1,
      scrollTrigger: { trigger: scope, start: "top 80%", once: true },
    });
  });

  const status = thinking
    ? demo.statusThinking
    : voice.speaking
      ? demo.speakingLabel
      : phase === "ringing"
        ? demo.statusRingingCall
        : phase === "live"
          ? demo.statusLive
          : isCall
            ? demo.statusIdleCall
            : demo.statusIdle;

  const active = phase !== "idle";
  const locked = isCall && phase !== "live";
  const busy = thinking || voice.speaking || phase === "ringing";

  return (
    <section
      id="iandrea-demo"
      data-tone="dark"
      className="relative isolate overflow-hidden bg-navy-deep py-section text-fg-inverse"
    >
      <div aria-hidden="true" className="bg-radial-wash absolute inset-0 -z-10 opacity-70" />

      <Container width="wide">
        <div ref={scope}>
          <div data-reveal className="max-w-[46rem]">
            <p className="font-mono text-eyebrow tracking-[0.2em] text-cyan uppercase">
              {demo.eyebrow}
            </p>
            <h2 className="mt-6 text-display-2 text-white">{demo.title}</h2>
            <p className="measure-lead mt-5 text-lead text-fg-inverse-muted">
              {demo.lead}
            </p>
          </div>

          <div
            data-reveal
            className="mt-12 overflow-hidden rounded-xl border border-white/12 bg-navy"
          >
            {/* Barra superior: identidad + escenarios */}
            <div className="flex flex-col gap-4 border-b border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="relative grid size-10 shrink-0 place-items-center rounded-full border border-cyan/50 bg-cyan/12 text-cyan">
                  <Icon name="sparkles" size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-card-title text-white">
                    iAndrea
                  </span>
                  <span className="block font-mono text-[0.75rem] text-fg-inverse-muted">
                    {scenario.subtitle}
                  </span>
                </span>
              </div>

              {/* Se apila en movil. En una fila los dos escenarios piden 366px
                  y a 320 solo hay 236: el segundo —justo el de la llamada— caia
                  fuera del `overflow-hidden` de la tarjeta y quedaba invisible e
                  inalcanzable en el telefono. */}
              <div
                role="tablist"
                aria-label={demo.scenarioLabel}
                onKeyDown={onTabKey}
                className="flex w-full flex-col gap-1 rounded-lg border border-white/12 bg-navy-deep p-1 sm:w-auto sm:flex-row"
              >
                {demo.scenarios.map((s, i) => {
                  const selected = i === scenarioIndex;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      tabIndex={selected ? 0 : -1}
                      onClick={() => selectScenario(i)}
                      className={cn(
                        "flex min-h-11 items-center justify-center gap-2 rounded-md px-3 py-2 text-body-sm font-semibold transition-colors sm:min-h-0 sm:justify-start",
                        selected
                          ? "bg-cyan text-ink"
                          : "text-fg-inverse-muted hover:bg-white/5 hover:text-white",
                      )}
                    >
                      <Icon name={s.icon} size={15} />
                      <span className="whitespace-nowrap">{s.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              {/* Columna de control */}
              <div className="min-w-0 border-b border-white/10 p-6 lg:border-r lg:border-b-0 lg:p-8">
                <p className="measure-body text-body-sm text-fg-inverse-muted">
                  {scenario.description}
                </p>

                {/* Descolgar y colgar. Solo en modo llamada: en modo texto el
                    hilo ya esta abierto desde el principio. */}
                {isCall ? (
                  <div className="mt-7">
                    {active ? (
                      <button
                        type="button"
                        onClick={hangUp}
                        className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-5 py-3 text-body-sm font-semibold text-white transition-colors hover:bg-white/16"
                      >
                        <Icon name="phone-off" size={16} />
                        {demo.hangUpLabel}
                        {phase === "live" ? <CallTimer /> : null}
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={call}
                        className="inline-flex items-center gap-2.5 rounded-full bg-cyan px-5 py-3 text-body-sm font-semibold text-ink transition-colors hover:bg-cyan-soft"
                      >
                        <Icon name="phone-call" size={16} />
                        {demo.callLabel}
                      </button>
                    )}
                  </div>
                ) : null}

                <p className="mt-8 font-mono text-eyebrow tracking-[0.2em] text-cyan uppercase">
                  {demo.optionsLabel}
                </p>

                <ul className="mt-4 flex flex-col gap-2">
                  {scenario.options.map((o, i) => (
                    <li key={o.label}>
                      <button
                        type="button"
                        onClick={() => ask(i)}
                        disabled={busy || locked}
                        className={cn(
                          "group flex w-full items-center justify-between gap-3 rounded-lg border px-4 py-3 text-left text-body-sm transition-colors",
                          "disabled:cursor-not-allowed disabled:opacity-50",
                          asked.includes(i)
                            ? "border-white/10 bg-transparent text-fg-inverse-muted"
                            : "border-white/15 bg-white/[0.05] text-white hover:border-cyan hover:bg-cyan/10",
                        )}
                      >
                        <span className="min-w-0">{o.label}</span>
                        <Icon
                          name={isCall ? "phone" : "message-square"}
                          size={15}
                          className="shrink-0 text-cyan"
                        />
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Por que estan bloqueadas. Sin esta linea, tres botones
                    apagados parecen una averia y no un paso previo. */}
                {locked ? (
                  <p className="mt-4 flex items-start gap-2 text-small text-fg-inverse-muted">
                    <Icon name="info" size={13} className="mt-0.5 shrink-0 text-cyan" />
                    {demo.lockedHint}
                  </p>
                ) : null}

                {!isCall ? (
                  <button
                    type="button"
                    onClick={hangUp}
                    className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-full text-small text-fg-inverse-muted transition-colors hover:text-white"
                  >
                    <Icon name="refresh-cw" size={13} />
                    {demo.resetLabel}
                  </button>
                ) : null}
              </div>

              {/* Columna de conversacion */}
              <div className="flex min-w-0 flex-col p-6 lg:p-8">
                {/* Se apila en movil. Con el boton de sonido en la misma linea,
                    a 375px el estado se quedaba en una columna de 89px y se
                    partia en tres renglones —medido— mientras el boton se partia
                    en dos. */}
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-3 border-b border-white/10 pb-4">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "size-2.5 shrink-0 rounded-full",
                      thinking || voice.speaking || phase === "ringing"
                        ? "animate-blip bg-cyan"
                        : phase === "live"
                          ? "bg-positive-soft"
                          : "bg-white/30",
                    )}
                  />
                  {/* El estado va tambien como texto, no solo como color: es la
                      unica forma de que se entienda sin ver el punto. */}
                  <span className="font-mono text-[0.75rem] tracking-[0.1em] text-fg-inverse-muted uppercase">
                    {status}
                  </span>

                  {isCall ? (
                    <button
                      type="button"
                      onClick={toggleMute}
                      aria-pressed={muted}
                      // `min-h-11` son los 44px de objetivo tactil que pide el
                      // sistema: con el relleno solo se quedaba en 31px.
                      className="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full border border-white/15 px-3 py-1.5 font-mono text-[0.75rem] tracking-[0.08em] text-fg-inverse-muted uppercase transition-colors hover:border-cyan hover:text-white sm:ml-auto sm:min-h-0 sm:w-auto sm:justify-start"
                    >
                      <Icon name={muted ? "volume-x" : "volume-2"} size={13} />
                      {muted ? demo.unmuteLabel : demo.muteLabel}
                    </button>
                  ) : null}
                </div>

                <div
                  ref={threadRef}
                  role="log"
                  aria-live="polite"
                  aria-label={demo.title}
                  className="mt-5 flex max-h-[19rem] min-h-[15rem] flex-col gap-3 overflow-y-auto pr-1"
                >
                  {turns.map((t) => {
                    const isAndrea = t.speaker === "andrea";
                    return (
                      <div
                        key={t.id}
                        className={cn(
                          "flex max-w-[88%] items-start gap-2.5",
                          isAndrea ? "mr-auto" : "ml-auto flex-row-reverse",
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            "grid size-7 shrink-0 place-items-center rounded-full",
                            isAndrea
                              ? "bg-cyan/15 text-cyan"
                              : "bg-white/10 text-fg-inverse-muted",
                          )}
                        >
                          <Icon name={isAndrea ? "sparkles" : "user"} size={13} />
                        </span>
                        <p
                          className={cn(
                            "rounded-lg p-3.5 text-body-sm",
                            isAndrea
                              ? "rounded-tl-none border border-white/10 bg-white/[0.06] text-white"
                              : "rounded-tr-none bg-cyan text-ink",
                          )}
                        >
                          {/* Prefijo solo para lectores de pantalla: sin el, el
                              hilo se anuncia como un monologo sin turnos. */}
                          <span className="sr-only">
                            {isAndrea ? "iAndrea: " : "Tú: "}
                          </span>
                          {t.text}
                        </p>
                      </div>
                    );
                  })}

                  {thinking ? <ThinkingBubble /> : null}
                  {phase === "ringing" ? (
                    <p className="m-auto font-mono text-small text-fg-inverse-muted">
                      {demo.statusRingingCall}
                    </p>
                  ) : null}
                </div>

                <p className="mt-5 flex items-start gap-2 border-t border-white/10 pt-4 font-mono text-[0.75rem] leading-relaxed text-fg-inverse-muted">
                  <Icon name="info" size={13} className="mt-px shrink-0 text-cyan" />
                  {isCall ? demo.voiceDisclaimer : demo.disclaimer}
                </p>

                {/* Solo aparece si de verdad ha fallado: no hay forma de saber
                    antes de intentarlo si el sistema tiene voz en español. */}
                {isCall && voice.unavailable ? (
                  <p className="mt-3 flex items-start gap-2 rounded-lg border border-white/10 bg-white/[0.04] p-3 text-small text-fg-inverse-muted">
                    <Icon
                      name="volume-x"
                      size={14}
                      className="mt-0.5 shrink-0 text-cyan"
                    />
                    {demo.voiceUnavailable}
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          <p
            data-reveal
            className="mt-6 flex items-center gap-2 text-body-sm text-fg-inverse-muted"
          >
            <Icon name="zap" size={15} className="shrink-0 text-cyan" />
            {demo.footerNote}
          </p>
        </div>
      </Container>
    </section>
  );
}

/**
 * Contador de duracion de la llamada.
 *
 * Componente aparte y no estado del simulador porque avanza cada segundo: dentro
 * del componente grande obligaria a repintar el hilo entero sesenta veces por
 * minuto para mover dos digitos.
 */
function CallTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <span className="font-mono text-[0.75rem] text-fg-inverse-muted" data-tabular>
      {mm}:{ss}
    </span>
  );
}

/**
 * Los tres puntos de "escribiendo".
 *
 * Bajo `prefers-reduced-motion` los puntos quietos no comunican nada, asi que en
 * ese caso se cae a texto. La animacion se monta con GSAP y no con clases de
 * Tailwind porque el retardo por punto es lo que da la sensacion de secuencia, y
 * `animation-delay` en tres clases distintas es mas ruido que un timeline.
 */
function ThinkingBubble() {
  const dots = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = dots.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.to("[data-dot]", {
        y: -4,
        duration: 0.4,
        ease: "power1.inOut",
        stagger: { each: 0.14, repeat: -1, yoyo: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div className="mr-auto flex max-w-[88%] items-start gap-2.5">
      <span
        aria-hidden="true"
        className="grid size-7 shrink-0 place-items-center rounded-full bg-cyan/15 text-cyan"
      >
        <Icon name="sparkles" size={13} />
      </span>
      <span
        ref={dots}
        aria-hidden="true"
        className="flex items-center gap-1.5 rounded-lg rounded-tl-none border border-white/10 bg-white/[0.06] px-4 py-4"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            data-dot
            className="block size-1.5 rounded-full bg-cyan"
          />
        ))}
      </span>
    </div>
  );
}
