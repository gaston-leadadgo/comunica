"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * La voz de iAndrea en el simulador.
 *
 * Usa `speechSynthesis`, la sintesis que ya trae el navegador, y NO ficheros de
 * audio. La razon es que el simulador vive en una web estatica y los seis turnos
 * guionizados cambian con el copy: en cuanto el cliente reescribe una respuesta,
 * un mp3 grabado se queda desincronizado sin que nada avise, y el visitante oye
 * una cosa mientras lee otra. Con sintesis, la voz sale siempre del mismo texto
 * que se ve en pantalla, asi que no puede desincronizarse.
 *
 * La contrapartida es real y hay que tenerla presente: la calidad depende del
 * sistema operativo de quien visita. En Windows salen Helena o Laura, en macOS
 * Monica, en Android las de Google —estas notablemente mejores—. Ninguna suena
 * como la voz neuronal del producto de verdad. Si algun dia se quiere control
 * total del timbre, el camino es grabar los turnos con un TTS de calidad y
 * reproducir ficheros; entonces habra que asumir el mantenimiento de mantenerlos
 * a la par del copy.
 */

/**
 * Voces femeninas en español que exponen los navegadores mas habituales.
 *
 * Hace falta la lista porque la API no dice el genero de la voz: solo nombre e
 * idioma. Y el genero importa aqui, no por estetica, sino porque el producto se
 * llama iAndrea y se presenta como una voz de mujer; que la demo hable con voz
 * de hombre confundiria sobre lo que se esta vendiendo.
 *
 * Se compara en minusculas y por inclusion, porque el nombre real llega con
 * adornos del sistema ("Microsoft Helena - Spanish (Spain)").
 */
const FEMALE_ES = [
  "helena",
  "laura",
  "monica",
  "mónica",
  "paulina",
  "sabina",
  "elvira",
  "esperanza",
  "dalia",
  "ximena",
  "irene",
  "lia",
  "lía",
  "marisol",
  "google español", // la de Google es femenina y suele ser la mejor disponible
];

/**
 * Voces masculinas conocidas, para descartarlas explicitamente.
 *
 * No basta con quedarse con las de `FEMALE_ES`: si en un sistema no hay ninguna
 * de esas, el respaldo es "cualquier voz en español", y sin esta lista ese
 * respaldo puede caer en Pablo o Jorge, que estan instalados por defecto junto a
 * las femeninas.
 */
const MALE_ES = [
  "pablo",
  "jorge",
  "diego",
  "carlos",
  "miguel",
  "juan",
  "raul",
  "raúl",
  "alvaro",
  "álvaro",
  "enrique",
];

function matches(voiceName: string, list: string[]) {
  const name = voiceName.toLowerCase();
  return list.some((candidate) => name.includes(candidate));
}

/**
 * Elige la mejor voz disponible, en este orden:
 *
 * 1. Femenina y de España, que es el acento del copy ("¿Desea consultar
 *    disponibilidad?", tarifas en euros, hotel peninsular).
 * 2. Femenina en cualquier variante de español.
 * 3. Cualquier español que no este en la lista de masculinas.
 *
 * Devuelve `null` si no hay ninguna en español. En ese caso el simulador no
 * intenta hablar en otro idioma —una respuesta española leida con fonetica
 * inglesa es peor que el silencio— y se sigue en texto.
 */
function pickVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const spanish = voices.filter((v) => v.lang.toLowerCase().startsWith("es"));
  if (!spanish.length) return null;

  const female = spanish.filter((v) => matches(v.name, FEMALE_ES));

  return (
    female.find((v) => v.lang.toLowerCase().startsWith("es-es")) ??
    female[0] ??
    spanish.find((v) => !matches(v.name, MALE_ES)) ??
    null
  );
}

/**
 * Parte el texto en trozos que quepan en una sola locucion.
 *
 * No es una optimizacion: es el apaño a un fallo conocido de Chrome, que corta
 * la sintesis alrededor de los quince segundos y deja de emitir `end`, con lo
 * que la interfaz se queda creyendo que iAndrea sigue hablando para siempre.
 * Las respuestas del guion rondan las tres frases, justo en esa frontera.
 *
 * Se corta por final de frase y se vuelven a unir las cortas hasta el limite,
 * porque encolar frase a frase mete un silencio audible en cada punto y la
 * llamada suena troceada.
 */
const CHUNK_LIMIT = 160;

function chunk(text: string): string[] {
  const sentences = text.match(/[^.!?…]+[.!?…]*\s*/g) ?? [text];
  const out: string[] = [];

  for (const sentence of sentences) {
    const last = out[out.length - 1];
    if (last && last.length + sentence.length <= CHUNK_LIMIT) {
      out[out.length - 1] = last + sentence;
    } else {
      out.push(sentence);
    }
  }

  return out.map((s) => s.trim()).filter(Boolean);
}

export type Voice = {
  /** Lee el texto en voz alta. Cancela lo que estuviera sonando. */
  speak: (text: string, onDone?: () => void) => void;
  /** Corta la locucion en curso. No dispara el `onDone` de quien la pidio. */
  stop: () => void;
  /** `true` mientras suena algo: alimenta el indicador de "hablando". */
  speaking: boolean;
  /**
   * `true` cuando se ha intentado hablar y no habia voz en español.
   *
   * Se resuelve al intentarlo y no al montar a proposito: en el primer render el
   * servidor no puede saber que voces tiene el visitante, y adelantar un aviso
   * que luego se contradice provoca un desajuste de hidratacion.
   */
  unavailable: boolean;
};

export function useVoice(): Voice {
  const [speaking, setSpeaking] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);
  /**
   * Contador de locuciones.
   *
   * `cancel()` dispara `end` en las locuciones pendientes en varios
   * navegadores, asi que sin un testigo de generacion el `onDone` de una llamada
   * ya colgada seguiria ejecutandose y encadenaria el turno siguiente en una
   * conversacion que el usuario acaba de cerrar.
   */
  const generation = useRef(0);

  // La lista de voces llega de forma asincrona en Chrome: la primera llamada a
  // `getVoices()` puede devolver un array vacio y rellenarse despues. Se resuelve
  // aqui y se guarda en un ref, no en estado, porque nada de lo que se pinta
  // depende de QUE voz es.
  useEffect(() => {
    const synth = window.speechSynthesis;
    if (!synth) return;

    const load = () => {
      voiceRef.current = pickVoice(synth.getVoices());
    };
    load();
    synth.addEventListener("voiceschanged", load);

    return () => {
      synth.removeEventListener("voiceschanged", load);
      // Sin esto la voz sigue sonando despues de cambiar de pagina: la sintesis
      // vive en el navegador, no en el componente que la pidio.
      synth.cancel();
    };
  }, []);

  const stop = useCallback(() => {
    generation.current += 1;
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  }, []);

  const speak = useCallback((text: string, onDone?: () => void) => {
    const synth = window.speechSynthesis;
    if (!synth) {
      setUnavailable(true);
      onDone?.();
      return;
    }

    // Reintenta la seleccion: si el usuario pulsa antes de que Chrome haya
    // poblado la lista, en este momento ya suele estar.
    voiceRef.current ??= pickVoice(synth.getVoices());
    const voice = voiceRef.current;

    if (!voice) {
      setUnavailable(true);
      onDone?.();
      return;
    }

    generation.current += 1;
    const mine = generation.current;
    synth.cancel();

    const parts = chunk(text);
    setSpeaking(true);

    parts.forEach((part, i) => {
      const utterance = new SpeechSynthesisUtterance(part);
      utterance.voice = voice;
      utterance.lang = voice.lang;
      // Un pelo por debajo del ritmo por defecto. Una centralita que atropella
      // las palabras se percibe como una grabacion; algo mas pausado se lee como
      // alguien que atiende con calma, que es lo que iAndrea tiene que parecer.
      utterance.rate = 0.98;

      const finish = () => {
        if (mine !== generation.current) return; // locucion de una llamada ya cerrada
        setSpeaking(false);
        onDone?.();
      };

      if (i === parts.length - 1) {
        utterance.onend = finish;
        // Tambien en error: si la sintesis falla a mitad, dejar `speaking` en
        // `true` congelaria la interfaz con el indicador encendido.
        utterance.onerror = finish;
      }

      synth.speak(utterance);
    });
  }, []);

  return { speak, stop, speaking, unavailable };
}
