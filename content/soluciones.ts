import { routes } from "./site";
import type { Cta } from "./schema";

/**
 * Copy de Soluciones. Transcripcion literal de la demo aprobada
 * (Copys/src/components/SolutionsSection.tsx), con la ortografia corregida.
 *
 * Las cuatro fichas de perfil y las siete capacidades NO estan aqui: viven en
 * `content/perfiles.ts`, porque la home tambien las usa. Este fichero solo tiene
 * lo que es exclusivo de la pagina: cabecera, el bloque largo de iAndrea y el
 * cierre.
 */
export const soluciones = {
  hero: {
    eyebrow: "Soluciones para hoteles",
    titleLine1: "No te ofrecemos un catálogo.",
    titleLine2: "Construimos la solución alrededor de tu hotel",
    body: [
      "Un establecimiento independiente no tiene los mismos problemas que una cadena de veinte propiedades.",
      "Por eso combinamos conectividad, voz, WiFi, IPTV, inteligencia artificial e integraciones según tu tamaño, tu infraestructura y tu forma de operar.",
    ],
    highlight:
      "Primero entendemos qué necesitas. Después decidimos qué tecnología tiene sentido",
    cta: {
      label: "Habla con un especialista hotelero",
      href: routes.contacto,
    } satisfies Cta,
  },

  /** Etiquetas de la ficha de perfil, comunes a los cuatro paneles. */
  profileLabels: {
    tablistLabel: "Perfiles de hotel",
    includes: "Servicios incluidos:",
    optional: "Puedes añadir:",
    specific: "Soluciones específicas:",
  },

  capabilities: {
    title: "Las capacidades con las que construimos cada solución",
  },

  /** El bloque largo de iAndrea, exclusivo de esta pagina. */
  iandrea: {
    title: "iAndrea",
    subtitle:
      "Tu solución cuando el hotel recibe más llamadas de las que tu equipo puede atender",
    /** Las cuatro llamadas simultaneas. Se leen en cascada. */
    calls: [
      "Un huésped llama para preguntar por un servicio.",
      "Otro quiere hacer una reserva.",
      "Otro necesita información.",
      "Otro llama mientras recepción está atendiendo a quien acaba de llegar.",
    ],
    problem:
      "El problema no es que el teléfono suene. El problema es lo que ocurre cuando nadie puede responder.",
    definition: [
      "iAndrea es el agente virtual de voz con inteligencia artificial de Comunica.",
      "Puede atender llamadas entrantes y salientes, conversar con el cliente y realizar tareas durante la conversación.",
    ],
    features: [
      {
        title: "Atiende 24/7",
        description:
          "La atención telefónica puede continuar cuando el equipo no está disponible.",
        icon: "clock",
      },
      {
        title: "Gestiona reservas",
        description:
          "Puede atender solicitudes y conectarse con sistemas externos para realizar acciones durante la conversación.",
        icon: "calendar-range",
      },
      {
        title: "Responde preguntas frecuentes",
        description:
          "Horarios, servicios, información del establecimiento y otras consultas repetitivas pueden resolverse sin interrumpir al equipo.",
        icon: "help-circle",
      },
      {
        title: "Atiende varias llamadas a la vez",
        description:
          "La capacidad de atención deja de depender de que haya una persona disponible justo en ese momento.",
        icon: "layers",
      },
      {
        title: "Se configura en más de 15 idiomas",
        description:
          "Una ventaja especialmente relevante para hoteles con huéspedes internacionales.",
        icon: "globe",
      },
      {
        title: "Recoge y cualifica información",
        description:
          "Puede obtener datos durante la conversación, clasificar oportunidades y registrar información para su seguimiento.",
        icon: "database",
      },
      {
        title: "Deriva cuando hace falta una persona",
        description:
          "Automatiza aquello que puede resolverse de forma sencilla y pasa la conversación al equipo cuando necesita intervención humana.",
        icon: "split",
      },
      {
        title: "Se integra con tus sistemas",
        description:
          "Puede conectarse con CRM, software de reservas, ERP y centralitas IP para consultar información o realizar acciones durante la conversación.",
        icon: "workflow",
      },
    ],
    closing: [
      "La IA no debería darte más trabajo. Añadir una herramienta más que tu equipo tenga que aprender, alimentar y vigilar no resuelve demasiado.",
      "Por eso el valor de iAndrea no está simplemente en utilizar inteligencia artificial. Está en quitar tareas repetitivas de encima de las personas para que puedan dedicar su tiempo a aquellas conversaciones y situaciones en las que sí hacen falta.",
    ],
    motto: "Automatiza lo repetitivo. Mantén a las personas donde aportan valor.",
    cta: {
      label: "Quiero conocer iAndrea",
      href: `${routes.contacto}?intent=iandrea`,
    } satisfies Cta,
  },

  closing: {
    title: "¿No sabes qué solución necesitas?",
    body: [
      "Es lo normal, no deberías tener que diseñarla tú. Nosotros nos encargamos de ello.",
      "Cuéntanos qué está ocurriendo y analizaremos contigo qué merece la pena mantener, qué puede mejorarse y qué solución tiene sentido.",
    ],
    cta: {
      label: "Habla con un especialista hotelero",
      href: routes.contacto,
    } satisfies Cta,
  },
} as const;
