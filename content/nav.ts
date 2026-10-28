import { routes, site } from "./site";
import type { NavLink } from "./schema";

/**
 * Navegacion. Cuatro secciones, como la demo aprobada: Inicio, Soluciones,
 * Nosotros y Partners. Contacto no esta en el menu: se llega por los CTA.
 */
export const headerNav = [
  { label: "Inicio", href: routes.home },
  { label: "Soluciones", href: routes.soluciones },
  { label: "Nosotros", href: routes.nosotros },
  { label: "Partners", href: routes.partners },
] satisfies readonly NavLink[];

/**
 * Indicador de credibilidad del header.
 *
 * Va partido en cifra y unidad a proposito: la peticion de cliente es que "350"
 * gane protagonismo, y para eso la cifra necesita su propio tamano y su propia
 * tipografia. Con la cadena entera ("350 hoteles") no se puede jerarquizar.
 */
export const headerClaim = {
  count: site.claims.hotels,
  unit: "hoteles",
  countries: `${site.claims.countries} países`,
  /** Version en una linea, para el panel movil y sitios sin espacio. */
  inline: `${site.claims.hotels} hoteles · ${site.claims.countries} países`,
} as const;

export const headerCtas = {
  secondary: {
    label: "Revisar factura",
    href: `${routes.contacto}?intent=factura`,
  },
  primary: {
    label: "Cuéntanos qué necesitas resolver",
    href: routes.contacto,
  },
  mobileSecondary: {
    label: "Solicita revisión de factura",
    href: `${routes.contacto}?intent=factura`,
  },
} as const;

/**
 * CTA flotante movil. No estaba en la demo, pero en captacion B2B la barra fija
 * es lo que sostiene la conversion en movil, donde el CTA del header queda muy
 * arriba. Reutiliza el copy del CTA primario para no inventar mensaje nuevo.
 */
export const stickyCta = {
  label: "Cuéntanos qué necesitas resolver",
  href: routes.contacto,
} as const;

export const footer = {
  tagline:
    "Tecnología y telecomunicaciones para hoteles. Conectividad, voz fija y móvil, WiFi, IPTV e inteligencia artificial integradas y gestionadas por un equipo que entiende la operativa hotelera.",
  facts: [
    `Experiencia en ${site.claims.hotels} hoteles`,
    `${site.claims.countries} países con soporte especializado`,
  ],
  navTitle: "Navegación",
  nav: [
    { label: "Inicio", href: routes.home },
    { label: "Soluciones por hotel", href: routes.soluciones },
    { label: "Nosotros y especialización", href: routes.nosotros },
    { label: "Canal de partners", href: routes.partners },
  ],
  partnersTitle: "Partners y contacto",
  partnerPrompt: "¿Ya eres partner de Comunica?",
  partnerLink: { label: "Acceder al portal de partners", href: `${routes.partners}#portal` },
  legal: [
    { label: "Aviso legal", href: routes.avisoLegal },
    { label: "Política de privacidad", href: routes.privacidad },
  ],
  motto: "Un solo interlocutor. Menos gestión. Más tranquilidad.",
  phone: site.phone,
} as const;
