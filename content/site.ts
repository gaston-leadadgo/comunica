/**
 * Datos corporativos. Una sola fuente de verdad.
 *
 * El NAP (nombre, direccion, telefono) sale del MANUAL DE MARCA, no de los
 * wireframes: entre ellos habia cuatro direcciones distintas (Alcobendas,
 * Pozuelo, C/ Orense, C/ Innovacion) y tres dominios de correo. Manda el manual.
 *
 * Pendiente de confirmacion del cliente (ver plan, seccion 18):
 * - `email`: alex@comunica.com parece un buzon personal, no corporativo.
 * - `sla`: el copy dice 99,99 % en la home y 99,9 % en la ficha de partner.
 *   Se fija 99,9 % porque es el dato contractual de la ficha tecnica; 99,99 %
 *   (52 min/ano) no se sostiene sin redundancia certificada.
 * - `support247`: el pack "Hotel Gestionado" promete soporte 24/7 mientras que
 *   Contacto dice L-V 9:00-18:30. Se marca como exclusivo de SLA premium.
 */

export const site = {
  name: "Comunica",
  legalName: "Comunistone S.L.",
  url: "https://www.comunica.com",
  description:
    "Tecnología y telecomunicaciones para hoteles. Conectividad, voz fija y móvil, WiFi, IPTV e inteligencia artificial integradas y gestionadas.",
  tagline:
    "Tecnología y telecomunicaciones para hoteles. Conectividad, voz fija y móvil, WiFi, IPTV e inteligencia artificial integradas y gestionadas por un equipo que entiende la operativa hotelera.",

  address: {
    /**
     * Solo calle y numero, por indicacion de cliente: el bloque y la planta
     * salen de lo que se muestra. Codigo postal y ciudad se conservan porque
     * los necesitan el aviso legal y los datos estructurados, aunque el pie
     * ya no los pinte.
     */
    street: "Avda. Manoteras, 24",
    postalCode: "28050",
    city: "Madrid",
    country: "España",
    countryCode: "ES",
  },

  phone: {
    display: "910 600 600",
    international: "+34 910 600 600",
    href: "tel:+34910600600",
  },

  /**
   * Buzon comercial facilitado por el cliente. Sustituye a alex@comunica.com,
   * que estaba marcado como pendiente precisamente por parecer personal.
   */
  email: "comercial@comunica.com",

  hours: {
    display: "Lunes a Viernes de 9:00 a 18:30",
    opens: "09:00",
    closes: "18:30",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },

  social: {
    linkedin: {
      label: "linkedin.com/company/comunica",
      href: "https://www.linkedin.com/company/comunica-telecomunicaciones",
    },
  },

  claims: {
    // Cifras facilitadas por el cliente. Van en portada, cabecera, pie,
    // Nosotros y el JSON-LD: cambiarlas aqui las cambia en todos esos sitios.
    hotels: "482",
    countries: "17",
    // Horquilla de la calculadora de la demo aprobada (18 % - 35 %),
    // no el 25-60 % del material anterior.
    savingsMin: 18,
    savingsMax: 35,
    interlocutors: "1",
  },
} as const;

/** Rutas internas. Centralizadas para que ningun href se escriba a mano. */
export const routes = {
  home: "/",
  soluciones: "/soluciones",
  partners: "/partners",
  nosotros: "/nosotros",
  contacto: "/contacto",
  avisoLegal: "/legal/aviso-legal",
  privacidad: "/legal/privacidad",
  cookies: "/legal/cookies",
} as const;

/**
 * Rutas cuya PRIMERA seccion es oscura a sangre.
 *
 * La cabecera flota sin fondo hasta que se hace scroll, asi que en estas rutas
 * cae directamente sobre navy: el logotipo en Process Black y los enlaces en
 * tinta quedarian ilegibles. `Header` lee esta lista para invertirse.
 *
 * Vive aqui, junto a las rutas, y no dentro del componente, para que quede a la
 * vista de quien anada o cambie una pagina. Si algun dia otro hero pasa a
 * oscuro, este es el sitio donde hay que decirlo.
 */
export const darkHeroRoutes: readonly string[] = [routes.partners];
