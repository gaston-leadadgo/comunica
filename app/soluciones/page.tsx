import type { Metadata } from "next";

import { ClosingCta } from "@/components/sections/shared/closing-cta";
import { ExtensionBlock } from "@/components/sections/shared/extension-block";
import { WifiBlock } from "@/components/sections/shared/wifi-block";
import { SolucionesCapabilities } from "@/components/sections/soluciones/capabilities";
import { SolucionesHero } from "@/components/sections/soluciones/hero";
import { SolucionesIandreaDemo } from "@/components/sections/soluciones/iandrea-demo";
import { SolucionesIandrea } from "@/components/sections/soluciones/iandrea-deep";
import { SolucionesProfileTabs } from "@/components/sections/soluciones/profile-tabs";
import { soluciones } from "@/content/soluciones";

export const metadata: Metadata = {
  title: "Soluciones para hoteles",
  description:
    "Conectividad, voz fija y centralita virtual, móvil, WiFi, IPTV, iAndrea e integraciones combinadas según el tamaño y la operativa de tu hotel. Cuatro perfiles: independiente, grupo, cadena y proyecto a medida.",
  alternates: { canonical: "/soluciones" },
};

/**
 * Soluciones.
 *
 * Orden de cliente: tras perfiles y capacidades viene "¿No sabes que solucion
 * necesitas?" —para quien ya tiene dudas al terminar el catalogo— y despues los
 * tres productos: Extension Dinamica, WiFi e iAndrea. iAndrea cierra la pagina
 * porque lleva el simulador, que es el momento mas interactivo.
 *
 * Ritmo: claro - claro(warm) - claro - DEGRADADO - claro - claro(warm) -
 * OSCURO - OSCURO. Las dos ultimas son la ficha de iAndrea y su simulador, que
 * se leen como un solo bloque.
 *
 * Las cuatro fichas de perfil y las capacidades salen de
 * `content/perfiles.ts`, el mismo fichero que alimenta la home: una sola fuente
 * de verdad, sin una segunda lista que se desincronice.
 */
export default function SolucionesPage() {
  return (
    <main id="main" className="w-full max-w-full overflow-x-clip">
      <SolucionesHero />
      <SolucionesProfileTabs />
      <SolucionesCapabilities />
      <ClosingCta
        title={soluciones.closing.title}
        body={soluciones.closing.body}
        cta={soluciones.closing.cta}
      />
      {/* Copy propio: en la home este bloque contaba otra cosa. */}
      <ExtensionBlock
        content={soluciones.extension}
        image="soluciones-extension-desk-sin-telefono"
      />
      <WifiBlock content={soluciones.wifi} image="soluciones-wifi-medicion" />
      <SolucionesIandrea />
      {/* El simulador va justo detras de la ficha de iAndrea: primero se explica
          que hace, y acto seguido se prueba. Separarlos obligaria a leer la
          ficha entera de memoria antes de llegar a la demo. */}
      <SolucionesIandreaDemo />
    </main>
  );
}
