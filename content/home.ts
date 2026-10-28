import { routes, site } from "./site";
import type { Cta, IconName, ProcessStep, ValueItem } from "./schema";

/**
 * Copy de la home. Transcripcion literal de la demo aprobada
 * (web nueva/Copys/src/components/HomeSection.tsx), con la ortografia
 * corregida: tildes y ñ restituidas donde la extraccion original las habia
 * perdido.
 *
 * El posicionamiento cambia respecto al material anterior: aqui Comunica no es
 * un operador B2B generalista con una division hotelera, es una empresa
 * especializada en hoteles y nada mas. Todo el copy habla al hotelero.
 */
export const home = {
  hero: {
    /**
     * Sin eyebrow por decision de cliente: "Tecnologia hotelera, resuelta" era
     * la referencia explicita a tecnologia hotelera en la parte superior del
     * sitio que se pidio retirar. La frase no se pierde, sigue siendo el titular
     * de `value` mas abajo, que es donde la demo aprobada ya la usaba.
     */
    titleLine1: "Que la tecnología de tu hotel funcione,",
    titleLine2: "sin que tu equipo tenga que estar pendiente",
    lead: "Conectividad, voz fija y móvil, WiFi, IPTV e inteligencia artificial gestionadas por un único equipo especializado en hoteles, que conoce tu operativa y tu instalación",
    ctas: [
      { label: "Habla con un especialista hotelero", href: routes.contacto, variant: "navy" },
      { label: "Solicita una revisión de tu factura", href: `${routes.contacto}?intent=factura`, variant: "outline" },
    ] satisfies Cta[],
  },

  /**
   * Banda de autoridad. Va justo despues del hero, no dentro.
   *
   * Sin nombres de clientes, por decision de cliente: el marquee "Ya confian en
   * Comunica" se retira. La autoridad la sostienen ahora los datos propios. Las
   * cifras salen de `site.claims`, la misma fuente que la cabecera, el pie y
   * Nosotros, asi que no pueden contradecirse entre si.
   *
   * El tercer dato no es una cifra nueva: "un solo interlocutor" es la promesa
   * que el sitio ya hace en el lema del pie y en los diferenciales. Aqui se
   * cuenta como dato porque es lo que el hotelero compara entre proveedores.
   */
  credibility: {
    label: "Comunica en cifras",
    stats: [
      { value: site.claims.hotels, label: "hoteles en los que hemos trabajado", icon: "hotel" },
      { value: site.claims.countries, label: "países con soporte especializado", icon: "globe" },
      { value: site.claims.interlocutors, label: "interlocutor para todos tus servicios", icon: "user" },
    ] satisfies readonly { value: string; label: string; icon: IconName }[],
    support: {
      title: "Soporte que te conoce",
      detail: "Personas que saben qué tienes instalado antes de que se lo expliques.",
      icon: "headphones",
    } satisfies { title: string; detail: string; icon: IconName },
  },

  problem: {
    title: "Tu huésped no distingue entre tecnología y servicio",
    introLabel: "Solo sabe que:",
    /**
     * Los tres sintomas, con el icono con el que se representa cada uno en las
     * tarjetas. El texto es literal de la demo; el icono es presentacion.
     */
    symptoms: [
      { text: "El WiFi no funciona", icon: "wifi" },
      { text: "La conexión falla", icon: "activity" },
      {
        text: "Algo que debería ser fácil le está dando problemas",
        icon: "help-circle",
      },
    ] satisfies readonly { text: string; icon: IconName }[],
    /* El widget "¿Quien lo resuelve?" se retiro por peticion de cliente:
       repetia en forma de interfaz lo que el parrafo de `body` ya dice. */
    body: [
      "Y mientras tanto, alguien de tu equipo intenta averiguar cuál de los proveedores tiene que resolver el problema.",
    ],
    pullQuote:
      "La tecnología debería hacer más sencillo gestionar un hotel, no añadir un obstáculo nuevo.",
    afterQuote: "Por eso en Comunica no empezamos enseñándote un catálogo.",
    questionsLabel: "Empezamos preguntando:",
    questions: [
      "¿Qué está fallando?",
      "¿Qué te está haciendo perder tiempo?",
      "¿Qué estás pagando que quizá ya no necesitas?",
      "¿Qué podría funcionar mejor?",
    ],
    closing: "Y después buscamos la forma de resolverlo.",
  },

  value: {
    title: "Tecnología hotelera que funciona",
    lead: "Comunica integra y gestiona las telecomunicaciones y soluciones tecnológicas que necesita un hotel",
    /** Etiqueta del listado. Era "Las piezas"; cliente pide "Soluciones". */
    capabilitiesLabel: "Soluciones",
    capabilitiesLine:
      "Conectividad. Voz fija - Móvil. WiFi. IPTV. Integraciones. Inteligencia artificial. Soporte",
    /** Fragmento de `differenceIntro` que va resaltado. */
    differenceLabel: "nuestra diferencia",
    differenceIntro: "Pero nuestra diferencia no está en tener muchos servicios.",
    differenceHighlight:
      "Está en conseguir que tú tengas menos cosas de las que preocuparte.",
    pillars: [
      "Un equipo que entiende tu operativa.",
      "Un interlocutor que conoce tu instalación.",
      "Alguien que te ayuda a detectar qué mejorar.",
    ],
    motto: "Entendemos. Proponemos. Resolvemos.",
  },

  testimonials: {
    label: "Experiencias reales",
    /**
     * PENDIENTE DE AUTORIZACION: nombres, cargos y establecimientos.
     * Vienen de la demo y hay que confirmar que son citas reales y publicables.
     */
    items: [
      {
        quote:
          "Antes teníamos 4 proveedores distintos y cuando fallaba el WiFi nadie se hacía responsable. Con Comunica tenemos un único interlocutor que resuelve en minutos cualquier incidencia.",
        name: "Manuel Gómez",
        role: "Director General · Resort Costa Brava (180 hab.)",
        initials: "MG",
      },
      {
        quote:
          "iAndrea y la centralita en la nube nos han permitido atender el 100% de las llamadas en temporada alta sin saturar recepción. El huésped recibe respuesta inmediata en su idioma.",
        name: "Carmen Rivas",
        role: "Operations Manager · Hotel Boutique Madrid",
        initials: "CR",
      },
      {
        quote:
          "Modernizar la red y la telefonía de 6 hoteles con ellos fue impecable. Cero cortes en el servicio al cliente y un ahorro operativo tangible desde el primer mes.",
        name: "Javier Serrano",
        role: "Director IT · Cadena Hotelera Urbana",
        initials: "JS",
      },
    ],
  },

  calculator: {
    title: "¿Cuánto te cuesta hoy la complejidad de tus telecomunicaciones?",
    lead: "Cuando un hotel acumula operadores, contratos y servicios a lo largo de los años, es fácil acabar pagando por duplicidades, servicios que ya no se utilizan o soluciones que nunca se han revisado.",
    highlight: "Haz una primera estimación de cuánto podrías optimizar",
    roomsLabel: "N.º de habitaciones",
    roomsTicks: ["10 hab.", "150 hab.", "300+ hab."],
    spendLabel: "Gasto mensual actual en telecomunicaciones",
    spendHint: "Voz fija y móvil + conectividad + WiFi + TV",
    spendTicks: ["200 €", "4.000 €", "8.000+ €"],
    floorsLabel: "N.º de plantas",
    floorsTicks: ["1", "10", "20+"],
    areasLabel: "N.º de salones y áreas de servicio",
    areasHint: "Salones, restaurante, spa, gimnasio, zonas comunes…",
    areasTicks: ["0", "15", "30+"],
    extensionsLabel: "N.º de extensiones de administración y servicios",
    extensionsHint: "Recepción, oficinas, cocina, mantenimiento…",
    extensionsTicks: ["0", "50", "100+"],
    benchmarkLabel: "Coste de referencia para un hotel como el tuyo",
    sliderHint:
      "Ajusta los deslizadores según la dimensión aproximada de tu establecimiento.",
    resultLabel: "Potencial de optimización estimado",
    /** Version corta para la barra fija de movil. */
    mobileBarLabel: "Ahorro / mes",
    perMonth: "/ mes",
    perYear: "/ año",
    disclaimer:
      "Estimación orientativa basada en la experiencia de Comunica en el sector hotelero",
    disclaimerDetail:
      "El ahorro real depende de los servicios contratados, proveedores, infraestructura y situación actual de cada hotel.",
    ctaTitle: "¿Quieres saber qué hay realmente detrás de este número?",
    ctaLead:
      "Revisamos contigo tus servicios y tu factura actual para detectar dónde puede existir margen de mejora",
    cta: {
      label: "Solicita una revisión de tu factura",
      href: `${routes.contacto}?intent=factura`,
    } satisfies Cta,
  },

  profiles: {
    title: "No todos los hoteles necesitan lo mismo",
    lead: "Por eso no empezamos por nuestros productos. Empezamos por tu hotel",
  },

  innovation: {
    eyebrow: "Innovación aplicada",
    title: "Tecnología que no solo resuelve. También se adelanta",
    lead: "No innovamos para añadir más tecnología al hotel. Innovamos cuando encontramos una forma de quitar trabajo, reducir complejidad o mejorar la experiencia del huésped",
  },

  iandrea: {
    eyebrow:
      "Una llamada de recepción que no atiende puede ser una reserva que se pierde",
    title: "iAndrea",
    subtitle: "La voz con inteligencia artificial de Comunica para hoteles",
    /**
     * Solo la escena de apertura. Los tres parrafos que empezaban por "Puede..."
     * salen de aqui y pasan a `capabilities`: eran una enumeracion disfrazada de
     * prosa —tres frases con seis o siete acciones cada una— y en pantalla se
     * leian como un muro de texto. La informacion es la misma, troceada en las
     * unidades que ya tenia dentro.
     */
    body: [
      "En recepción no siempre se puede coger el teléfono. Hay huéspedes delante. Check-ins. Incidencias. Consultas. Momentos en los que simplemente no quedan más manos.",
      "iAndrea está para esos momentos. Y para muchos otros.",
    ],
    /** El segundo parrafo va destacado. */
    bodyHighlightIndex: 1,

    /** Rotulo de la rejilla de capacidades. */
    canLabel: "iAndrea puede:",
    /**
     * Las capacidades, una por celda y con icono. Desglosadas literalmente de
     * los tres parrafos "Puede..." de la demo aprobada: no hay copy inventado,
     * solo separado.
     */
    capabilities: [
      {
        title: "Atender llamadas 24/7",
        description:
          "Sin franjas sin cobertura y sin que una llamada fuera de horario se pierda.",
        icon: "phone-call",
      },
      {
        title: "Responder preguntas frecuentes",
        description:
          "Horarios, servicios, ubicación o condiciones, resueltos en la propia llamada.",
        icon: "help-circle",
      },
      {
        title: "Gestionar reservas y recoger datos",
        description:
          "Toma la información que necesitas y la deja registrada donde corresponde.",
        icon: "calendar-range",
      },
      {
        title: "Cualificar y derivar a una persona",
        description:
          "Cuando la conversación necesita intervención humana, la pasa con el contexto.",
        icon: "users",
      },
      {
        title: "Atender varias llamadas a la vez",
        description:
          "La centralita deja de tener un límite de manos disponibles en recepción.",
        icon: "layers",
      },
      {
        title: "Hablar en más de 15 idiomas",
        description:
          "El huésped recibe respuesta en su idioma sin depender del turno de guardia.",
        icon: "globe",
      },
      {
        title: "Integrarse con tus sistemas",
        description:
          "Reservas, CRM, ERP y centralitas IP: consulta información y ejecuta acciones durante la conversación.",
        icon: "workflow",
      },
    ] satisfies readonly {
      title: string;
      description: string;
      icon: IconName;
    }[],
    benefits: [
      "Menos llamadas perdidas",
      "Menos interrupciones",
      "Más capacidad de atención",
    ],
    closing:
      "No viene a sustituir a recepción. Viene a conseguir que recepción pueda centrarse en lo que necesita a una persona.",
    closingHighlight:
      "IA pensada para quitar trabajo al equipo. No para darle otra herramienta que gestionar.",
    cta: { label: "Conoce iAndrea", href: `${routes.soluciones}#iandrea` } satisfies Cta,
  },

  extension: {
    eyebrow: "Innovación en telefonía hotelera",
    title: "Extensión Dinámica",
    subtitle: "La extensión de la habitación, en el móvil del huésped",
    body: [
      "El teléfono de la habitación lleva décadas formando parte del hotel.",
      "Pero muchos huéspedes ya llevan en el bolsillo el dispositivo con el que prefieren comunicarse.",
      "Con la Extensión Dinámica de Comunica, el huésped escanea un código QR y puede utilizar su propio móvil como extensión de la habitación durante su estancia.",
    ],
    benefits: ["Menos hardware", "Menos mantenimiento", "Experiencia mobile-first"],
    closing:
      "Para el hotel, supone una nueva forma de plantear la telefonía de las habitaciones y resulta especialmente interesante en reformas, ampliaciones y nuevos proyectos.",
    cta: {
      label: "Conoce la Extensión Dinámica",
      href: `${routes.contacto}?intent=extension`,
    } satisfies Cta,
    /** Textos del mockup del flujo QR. */
    mockup: {
      room: "Habitación 304",
      guestStatus: "Huésped conectado",
      qrLabel: "Código QR en la habitación",
      qrAction: "Escanear al llegar",
      phoneLabel: "Móvil del huésped",
      extActive: "Ext. 304 Activa",
      actions: ["Llamada directa a Recepción", "Room Service"],
    },
  },

  /**
   * WiFi hotelero, version home. Texto literal de cliente.
   *
   * Corto a proposito: en la home el bloque presenta la idea —medir antes de
   * instalar— y manda a Soluciones, donde esta el desarrollo completo. Por eso
   * lleva etiquetas sueltas (`pills`) y no razones desarrolladas.
   */
  wifi: {
    eyebrow: "WiFi hotelero",
    title: "Un buen WiFi no empieza en el router.",
    subtitle: "Empieza entendiendo tu hotel",
    body: [
      "La cobertura que necesita un hotel depende del edificio, de dónde se concentra el uso y de cuántos dispositivos se conectan al mismo tiempo.",
      "Por eso, antes de instalar, medimos.",
      "Diseñamos la red, seleccionamos el equipamiento adecuado y, si lo necesitas, nos encargamos también de gestionarla para mantenerla operativa.",
    ],
    /** "Por eso, antes de instalar, medimos." es la tesis del bloque. */
    highlightIndex: 1,
    pills: [
      "Cobertura medida",
      "Equipamiento especializado",
      "Portal cautivo",
      "Gestión de red",
    ],
    closing: "Menos preocupación por el WiFi. Más atención a tus huéspedes.",
    cta: {
      label: "Conoce nuestro WiFi para hoteles",
      href: `${routes.soluciones}#wifi`,
    } satisfies Cta,
  },

  differentials: {
    /**
     * Tres frases, tres lineas. Vienen partidas desde el copy y no se dejan al
     * navegador porque el corte ES el argumento: cada linea niega la anterior
     * hasta llegar al nombre. Repartidas por ancho disponible, "Necesitas a
     * Comunica" acabaria colgando de la linea de arriba y el remate se perderia.
     */
    titleLines: [
      "No necesitas un proveedor que sepa de telecomunicaciones.",
      "Necesitas uno que entienda tu hotel.",
      "Necesitas a Comunica.",
    ],
    items: [
      {
        title: "Especialización hotelera",
        description:
          "Llevamos años resolviendo problemas tecnológicos en hoteles reales. Eso significa que cuando nos cuentas lo que ocurre, no tienes que explicarnos primero cómo funciona tu negocio.",
      },
      {
        title: "Todo conectado bajo una misma gestión",
        description:
          "Voz fija y móvil, conectividad, WiFi, IPTV, IA e integraciones pueden trabajar bajo un mismo equipo. Menos interlocutores. Menos complejidad.",
      },
      {
        title: "Soporte con nombre propio",
        description:
          "Cuando surge un problema, no deberías empezar explicando qué tienes contratado. Hay personas detrás del servicio que conocen tu instalación y entienden el contexto.",
      },
      {
        title: "Integración con la operativa hotelera",
        description:
          "La tecnología no debería vivir aislada. La conectamos con los sistemas y procesos del hotel para que trabaje a favor de la operación.",
      },
      {
        title: "Mirar más allá del problema de hoy",
        description:
          "Resolver importa. Pero también detectar qué podría mejorar antes de que se convierta en un problema. Hoy resolvemos. Queremos ayudarte también a anticiparte.",
      },
    ] satisfies ValueItem[],
  },

  method: {
    /**
     * El titulo de seccion es la pregunta; la frase que antes hacia de titulo
     * baja a subtitulo. Va a `text-display-2` como TODOS los titulares de
     * seccion del sitio —regla explicita de cliente— y el subtitulo un escalon
     * por debajo, que es el mismo patron del bloque de Extension Dinamica.
     */
    title: "¿Cómo trabajamos?",
    subtitle: "Empezamos por entender tu hotel. No por venderte un paquete",
    steps: [
      {
        number: "1",
        title: "Hablamos",
        description:
          "Nos cuentas cómo funciona tu establecimiento o cadena, qué proveedores tienes y qué quieres mejorar.",
      },
      {
        number: "2",
        title: "Revisamos",
        description:
          "Analizamos los servicios contratados y, cuando procede, la factura y la instalación para detectar duplicidades, servicios innecesarios o puntos de mejora.",
      },
      {
        number: "3",
        title: "Diagnosticamos",
        description:
          "Revisamos la infraestructura que afecta al proyecto: conectividad, cobertura WiFi, voz fija y móvil, capacidad, integraciones o aquello que necesitemos conocer.",
      },
      {
        number: "4",
        title: "Proponemos",
        description:
          "Te presentamos una solución adaptada al problema detectado y un plan para llevarla a cabo.",
      },
      {
        number: "5",
        title: "Migramos",
        description:
          "Coordinamos la implantación buscando preservar la continuidad de la operación del hotel.",
      },
      {
        number: "6",
        title: "Nos quedamos",
        description:
          "Una vez implantada la solución, seguimos ahí. Soporte, seguimiento y revisión para seguir detectando oportunidades de mejora.",
      },
    ] satisfies ProcessStep[],
  },

  finalCta: {
    title:
      "¿Qué parte de la tecnología de tu hotel te está dando más trabajo del que debería?",
    body: [
      "Cuéntanoslo.",
      "No necesitas saber qué producto necesitas. Necesitas saber qué quieres resolver.",
    ],
    highlight: "Nosotros empezaremos por ahí.",
    ctas: [
      { label: "Habla con un especialista hotelero", href: routes.contacto, variant: "cyan" },
      {
        label: "Solicita una revisión de tu factura",
        href: `${routes.contacto}?intent=factura`,
        variant: "white",
      },
    ] satisfies Cta[],
  },
} as const;

/** Formula de la calculadora, literal de la demo: 18 % a 35 %. */
/**
 * Parametros de la calculadora. La formula esta en `lib/calculator/estimate.ts`;
 * aqui solo los numeros, para que se ajusten sin tocar codigo.
 *
 * Los rangos de los deslizadores cubren el publico real del sitio, del hotel
 * independiente de diez habitaciones al edificio grande de una cadena.
 */
export const calculator = {
  rooms: { min: 10, max: 300, step: 10, default: 60 },
  spend: { min: 200, max: 8000, step: 100, default: 1500 },
  floors: { min: 1, max: 20, step: 1, default: 4 },
  areas: { min: 0, max: 30, step: 1, default: 4 },
  extensions: { min: 0, max: 100, step: 5, default: 15 },

  /**
   * Coste mensual de REFERENCIA de un hotel bien resuelto: lo que deberia costar
   * su telefonia, conectividad, WiFi y TV con una sola gestion. Cada termino
   * es lo que anade una unidad de cada magnitud:
   * - `base`: nucleo que tiene cualquier hotel (linea principal, centralita,
   *   router y respaldo).
   * - `perRoom`: la parte de WiFi, IPTV y extension que corresponde a una
   *   habitacion.
   * - `perFloor`: puntos de acceso y electronica de red por planta.
   * - `perArea`: cobertura y lineas de un salon o area de servicio.
   * - `perExtension`: un puesto de centralita para personal.
   * Valores ORIENTATIVOS, pendientes de que Comunica los contraste con su
   * cartera real.
   */
  benchmark: {
    base: 180,
    perRoom: 3.5,
    perFloor: 15,
    perArea: 20,
    perExtension: 5,
  },

  /**
   * Horquilla de optimizacion de la demo aprobada (18 %-35 % del gasto). Los
   * nuevos datos no la amplian: deciden en que punto de ella cae cada hotel.
   */
  minRatio: 0.18,
  maxRatio: 0.35,
  /** Suelo cuando el gasto ya esta cerca de la referencia: algo de tarifa
   * siempre se puede ajustar, pero sin prometer de mas. */
  floorMinRatio: 0.06,
  floorMaxRatio: 0.12,
  /** Nunca se propone bajar del 85 % del coste de referencia. */
  benchmarkFloor: 0.85,
} as const;
