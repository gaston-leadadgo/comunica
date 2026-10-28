import { routes } from "./site";
import type { Cta } from "./schema";

/**
 * Copy de Soluciones. Transcripcion literal de la demo aprobada
 * (Copys/src/components/SolutionsSection.tsx), con la ortografia corregida.
 *
 * Las cuatro fichas de perfil y las capacidades NO estan aqui: viven en
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
      "Por eso combinamos conectividad, voz fija y centralita virtual, móvil, WiFi, IPTV, inteligencia artificial e integraciones según tu tamaño, tu infraestructura y tu forma de operar.",
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

  /**
   * Simulador interactivo de iAndrea.
   *
   * Adaptado de la version de Marcos (`comunica-version-marcos`,
   * `src/components/AndreaVoiceDemo.tsx`), que es de donde viene la idea y la
   * estructura de la conversacion.
   *
   * DOS CAMBIOS DE FONDO respecto a aquel original, los dos deliberados:
   *
   * 1. Los establecimientos son FICTICIOS. El original usaba "Asador Guria",
   *    "Hotel Plaza Condal" y "Clinica Medico Dental Sanitas", ademas de citar
   *    Mapfre, Adeslas, Sanitas, DKV y Asisa por su nombre. Son marcas de
   *    terceros y no hay autorizacion para publicarlas (§18.2 del plan). Aqui se
   *    sustituyen por nombres inventados y por "las principales mutuas".
   * 2. Se retira el escenario de clinica. Esta web posiciona a Comunica como
   *    especialista en hoteles y nada mas; un caso de clinica dental en la
   *    pagina de Soluciones contradice el posicionamiento entero. Quedan los dos
   *    escenarios hoteleros, que es donde el simulador demuestra lo que vende.
   */
  demo: {
    eyebrow: "Pruébalo",
    title: "Escucha cómo responde iAndrea",
    lead: "Elige un escenario y una pregunta. Verás la conversación tal y como la resolvería en tu hotel, sin pasar por recepción.",
    disclaimer:
      "Simulación con respuestas guionizadas. En producción, iAndrea consulta tus sistemas reales.",
    statusIdle: "Canal listo para simular",
    statusThinking: "iAndrea está pensando…",
    statusLive: "Llamada conectada",
    optionsLabel: "Elige qué preguntarle:",
    resetLabel: "Reiniciar la llamada",
    scenarioLabel: "Escenario",

    /**
     * Etiquetas del modo llamada, el de los escenarios con `voice: true`.
     *
     * Ahi el simulador no se presenta como un chat sino como una llamada: hay
     * que descolgar, iAndrea saluda en voz alta y el hilo de burbujas pasa a ser
     * la transcripcion de lo que suena. El vocabulario acompaña ese cambio
     * ("Colgar", no "Reiniciar").
     */
    callLabel: "Llamar a iAndrea",
    hangUpLabel: "Colgar",
    statusRingingCall: "Llamando…",
    statusIdleCall: "Descuelga para escucharla",
    speakingLabel: "iAndrea está hablando",
    muteLabel: "Silenciar la voz",
    unmuteLabel: "Activar la voz",
    lockedHint: "Llama primero: iAndrea responde en voz alta.",
    /**
     * La aclaracion mas importante de todo el bloque, y va deliberadamente junto
     * al reproductor. La voz que suena es la que trae instalada el navegador de
     * quien visita, no la voz del producto: si no se dice, un director de hotel
     * juzga a iAndrea por el timbre del sintetizador de su portatil.
     */
    voiceDisclaimer:
      "Simulación con respuestas guionizadas. La voz es la que trae tu navegador, no la de iAndrea en producción, donde además consulta tus sistemas reales.",
    voiceUnavailable:
      "Tu navegador no tiene instalada ninguna voz en español, así que la llamada continúa solo en texto.",
    footerNote:
      "Se integra con tu centralita actual. La puesta en marcha se mide en días, no en meses.",
    scenarios: [
      {
        id: "recepcion",
        name: "Recepción del hotel",
        icon: "hotel",
        /**
         * Este escenario tambien es una llamada (el huesped marca desde la 304),
         * asi que podria ir con voz. Se deja en texto porque la peticion de
         * cliente fue habilitar la voz solo en "Llamada de reserva"; cambiar esto
         * a `true` es todo lo que hace falta para que suene tambien aqui.
         */
        voice: false,
        subtitle: "Integrada con el PMS",
        description:
          "iAndrea atiende al huésped alojado: horarios, servicios y peticiones sencillas que hoy interrumpen a recepción.",
        greeting:
          "Buenos días, ha llamado al Hotel Miramar. Soy iAndrea, la asistente de voz del hotel. Veo que llama desde la habitación 304. ¿En qué puedo ayudarle?",
        options: [
          {
            label: "Pedir salida tardía",
            question:
              "Hola, ¿sería posible retrasar unas horas el check-out de la habitación 304?",
            answer:
              "Déjeme comprobarlo en el sistema del hotel. Con la ocupación de hoy puedo confirmarle el check-out hasta las 14:00 sin coste. Lo dejo anotado en su reserva y aviso a recepción, así no tendrá que repetirlo al bajar.",
          },
          {
            label: "Preguntar por el WiFi",
            question: "¿Cuál es la clave del WiFi? ¿Tiene algún coste?",
            answer:
              "El WiFi es gratuito para huéspedes. La red se llama Miramar_Guest y no necesita contraseña: al conectarse se abre una página donde solo tiene que indicar su número de habitación y su apellido.",
          },
          {
            label: "Reservar spa y parking",
            question:
              "Me gustaría una plaza de parking y una sesión de spa para las seis de la tarde.",
            answer:
              "Consulto la agenda. Tengo libre el circuito termal a las 18:30 y queda plaza en el parking cubierto. ¿Le cargo ambos servicios a la cuenta de la habitación?",
          },
        ],
      },
      {
        id: "reservas",
        name: "Llamada de reserva",
        icon: "calendar-range",
        /** Con voz: es la llamada que hoy se pierde, y suena. */
        voice: true,
        subtitle: "En hora punta",
        description:
          "La llamada que hoy se pierde porque recepción está atendiendo a alguien delante. iAndrea la coge y la deja cerrada.",
        greeting:
          "Hotel Miramar, le atiende iAndrea. ¿Desea consultar disponibilidad, hacer una reserva o que le pase con recepción?",
        options: [
          {
            label: "Consultar disponibilidad",
            question:
              "Buenas, ¿tenéis una habitación doble libre para el próximo fin de semana?",
            answer:
              "Sí, para el viernes y el sábado me quedan habitaciones dobles con vistas exteriores. La tarifa incluye desayuno y cancelación gratuita hasta 48 horas antes. ¿Quiere que se la reserve?",
          },
          {
            label: "Preguntar por el desayuno",
            question: "¿A qué hora servís el desayuno y está incluido?",
            answer:
              "El desayuno se sirve de 7:00 a 10:30, y hasta las 11:00 los fines de semana. Está incluido en su tarifa. Si necesita salir antes, podemos prepararle un desayuno para llevar avisando la noche anterior.",
          },
          {
            label: "Hablar con una persona",
            question:
              "Quiero organizar un grupo de veinte personas, prefiero hablarlo con alguien.",
            answer:
              "Por supuesto. Para grupos a partir de diez habitaciones tenemos condiciones concertadas. Le paso ahora mismo con el equipo de reservas y les adelanto que llama por un grupo de veinte, para que no tenga que explicarlo de nuevo.",
          },
        ],
      },
    ],
  },

  /**
   * Extension Dinamica, version de Soluciones.
   *
   * NO es la de la home. Aqui el lector ya sabe que vende Comunica y esta
   * comparando soluciones, asi que el copy de cliente cambia el enfoque: se
   * salta la escena del telefono de la habitacion —que en la home hace de
   * enganche— y va directo a las tres razones para plantearlo, cada una con su
   * explicacion. De ahi que este bloque use `features` (titular + desarrollo) y
   * el de la home `benefits` (etiquetas sueltas): no es un capricho de formato,
   * es que el texto que dio el cliente para cada pagina tiene otra forma.
   *
   * Sin `eyebrow`: en la home hace falta anunciar de que va la seccion, aqui el
   * propio titulo ya es el nombre del producto.
   */
  extension: {
    title: "Extensión Dinámica",
    subtitle: "La extensión de la habitación, en el móvil del huésped",
    body: [
      "Con la Extensión Dinámica de Comunica, el huésped escanea un código QR y puede utilizar su propio móvil como extensión de la habitación durante su estancia.",
      "Una forma más flexible de plantear la telefonía hotelera, especialmente interesante en reformas, ampliaciones y nuevos proyectos.",
    ],
    features: [
      {
        title: "Menos hardware. Menos mantenimiento.",
        description:
          "Reduce la dependencia de terminales físicos, cableado específico y equipos que instalar, reparar o sustituir.",
      },
      {
        title: "Una experiencia más mobile-first.",
        description:
          "El huésped utiliza el dispositivo que ya conoce y lleva consigo, sin necesidad de depender del teléfono de sobremesa de la habitación.",
      },
      {
        title: "Integrada en el ecosistema del hotel.",
        description:
          "Puede formar parte de una arquitectura conjunta con WiFi, voz fija y centralita virtual, móvil, iAndrea e integraciones, bajo un mismo proveedor.",
      },
    ],
    closing:
      "Menos infraestructura que gestionar. Más flexibilidad para comunicar.",
    cta: {
      label: "Quiero conocer la Extensión Dinámica",
      href: `${routes.contacto}?intent=extension`,
    } satisfies Cta,
    /**
     * El flujo QR es el mismo producto, asi que los rotulos del mockup no
     * cambian entre paginas. Se repiten aqui a proposito y no se importan de
     * `home`: este fichero es el copy de esta pagina, y un dia el cliente puede
     * querer tocarlos solo aqui.
     */
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
   * WiFi hotelero, version Soluciones. Texto literal de cliente.
   *
   * Aqui el bloque desarrolla lo que la home solo anuncia: las cuatro razones
   * con su explicacion (`features`) y el proceso en tres pasos (`steps`).
   */
  wifi: {
    eyebrow: "WiFi hotelero",
    title: "WiFi seguro y gestionado, diseñado para tu hotel",
    body: [
      "Para el huésped, el WiFi forma parte de la experiencia de su estancia. Cuando falla, no piensa que existe un problema de red: responsabiliza al hotel.",
      "Y un buen WiFi hotelero no se improvisa.",
      "Cada edificio es diferente. Cambian la distribución, los materiales, las zonas de mayor uso y el número de dispositivos conectados en las horas punta.",
      "Por eso empezamos midiendo antes de instalar.",
    ],
    highlightIndex: 3,
    features: [
      {
        title: "Cobertura medida",
        description:
          "Analizamos la cobertura in situ para definir cuántos puntos de acceso necesita el hotel y dónde deben colocarse.",
      },
      {
        title: "El equipamiento adecuado para cada proyecto",
        description:
          "Trabajamos con fabricantes especializados y seleccionamos la tecnología que mejor se adapta al edificio y a la operativa del hotel.",
      },
      {
        title: "Portal cautivo integrado",
        description:
          "Portal personalizado con la marca del hotel, disponible en varios idiomas y con posibilidad de integración con el PMS. Además, permite gestionar consentimientos y datos del huésped conforme al RGPD.",
      },
      {
        title: "Y si quieres, también nos encargamos de gestionarlo",
        description:
          "No tenemos por qué desaparecer cuando termina la instalación. Podemos gestionar la red para ayudar a mantenerla operativa y disponible y convertirnos en un único interlocutor para el proyecto.",
      },
    ],
    steps: [
      {
        number: "01",
        title: "Medimos",
        description: "Analizamos la cobertura y las necesidades reales del hotel.",
      },
      {
        number: "02",
        title: "Diseñamos e implantamos",
        description: "Ponemos en marcha equipamiento, red, portal y registro.",
      },
      {
        number: "03",
        title: "Gestionamos",
        description: "Si lo necesitas, nos hacemos cargo de la operativa de la red.",
      },
    ],
    closing: "Menos preocupación por el WiFi. Más atención a tus huéspedes.",
    cta: {
      label: "Quiero mejorar el WiFi de mi hotel",
      href: `${routes.contacto}?intent=wifi`,
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
