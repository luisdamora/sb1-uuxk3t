import { IconYoutube } from "@/components/mine/IconYoutube.tsx";
import WhatsAppBubble from "@/components/mine/WhatsAppBubble.tsx";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  VAR_WHATSAPP_PHONE,
  VAR_WHATSAPP_PHONE_TEXT,
} from "@/shared/constants.ts";
import imagenLivePost from "@assets/images/live_9_nov_.jpg";
import imagenLogoSirio from "@assets/images/logo.png";
import imagenCancionArbol from "@assets/images/musicos/cancion_arbol.jpg";
import imagenCancionClaridad from "@assets/images/musicos/cancion_claridad.jpg";
import imagenCancionSelva from "@assets/images/musicos/cancion_la_selva.jpg";
import imagenCancionSemilla from "@assets/images/musicos/cancion_la_semilla.jpg";

import { FormReserva } from "@/components/ui2/FormReserva.tsx";
import { obtenerPrecioActual } from "@/shared/obtenerPrecioActual.ts";
import { EEtapa, IEtapa } from "@/types/IEtapa.ts";
import videoHeader from "@assets/videos/1926295-hd_1920_1080_25fps_tiny.mp4";
import { Instagram, MapPin, Youtube } from "lucide-react";
import { useCallback, useMemo, useRef, useState } from "react";

/**
 * The main App component that renders the entire application.
 * It includes the header, next session details, music and conscious music sections, YouTube channel, and footer.
 * The component is responsible for the overall layout and structure of the application.
 */
function PageHome() {
  const sectionReservaRef = useRef<HTMLDivElement>(null);

  const [openSectionReserva, setOpenSectionReserva] = useState<boolean>(false);
  const handleReserva = useCallback(() => {
    setOpenSectionReserva(true);

    // set timeout focus
    setTimeout(() => {
      if (sectionReservaRef.current) {
        sectionReservaRef.current.scrollIntoView({ behavior: "smooth" });

        sectionReservaRef.current.focus();
      }
    }, 450);
  }, [sectionReservaRef]);

  const musicaMedicinaCards = useMemo(
    () => [
      {
        title: "Colaboraciones entre Artistas",
        content:
          "Unimos artistas y comunidad para manifestar la Banda Sonora del Nuevo Tiempo y la nueva Humanidad.",
      },
      {
        title: "Sesiones en Vivo",
        content:
          "Disfruta de nuestras sesiones de grabación en vivo con bandas de música medicina y consciente de la magia que creamos juntos al grabar en vivo.",
      },
      {
        title: "Conexión Interior",
        content:
          "Vive experiencias sensoriales que propagan la conexión con el interior y la sanación profunda a través de la vibración y el sonido.",
      },
    ],
    [],
  );

  const pricingData = useMemo<IEtapa[]>(
    () => [
      {
        etapa: EEtapa.ETAPA_1,
        title: "Lanzamiento",
        deadline: "31 de octubre",
        price: "$120.000",
        mount: 120000,
      },
      {
        etapa: EEtapa.ETAPA_2,
        title: "Fans",
        deadline: "8 de noviembre",
        price: "$160.000",
        mount: 160000,
      },
      {
        etapa: EEtapa.ETAPA_3,
        title: "Puerta",
        deadline: "9 de noviembre",
        price: "$180.000",
        mount: 180000,
      },
    ],
    [],
  );

  const precioActual = useMemo(() => obtenerPrecioActual(), []);

  return (
    <div className="min-h-screen bg-[#0A1A2A] text-[#F5DEB3] px-1">
      {/* Header */}
      {/*<header className="bg-[url('https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center pt-12 pb-32 text-center">*/}
      <header className="relative pt-20 pb-20 w-full overflow-hidden text-center">
        <video
          className="absolute top-0 left-0 min-h-full min-w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoHeader} type="video/mp4" />
          {/*<source src="" type="video/mp4" />*/}
        </video>
        <div className="relative z-10 bg-[#0A1A2A] bg-opacity-80 py-8 px-2">
          {/* <Sun className="mx-auto mb-6 h-24 w-24 text-[#D4AF37]" /> */}
          <img
            // src="https://lives.siriocasaestudio.com/wp-content/uploads/2024/07/logo.png"
            src={imagenLogoSirio}
            alt="Logo"
            className="mx-auto mb-6 h-56 w-56"
          />
          <h1 className="mb-3 text-5xl font-bold text-[#D4AF37]">
            SIRIO LIVE SESSIONS
          </h1>
          <h2 className="mb-6 text-3xl font-light">La Senda del Sonido</h2>
          <p className="mb-10 text-xl">
            Somos la Banda Sonora del Nuevo Tiempo y la Nueva Humanidad
          </p>
          <p className="text-2xl font-semibold text-[#40E0D0]">
            PRÓXIMA EXPERIENCIA EN VIVO | 9 Noviembre
          </p>
        </div>
      </header>

      {/* Next Session */}
      <section className="container mx-auto my-10 flex flex-wrap items-center justify-between px-4">
        <div className="w-full lg:w-1/2">
          <h2 className="mb-6 text-4xl font-bold text-[#D4AF37]">
            PRÓXIMO SIRIO LIVE SESSION | 9 Nov
          </h2>

          {/* <p className="mb-6 text-lg">
            Grabación en Vivo de Música de Sanación y otras experiencias
            musicales extraordinarias, que también involucran el diseño y la
            vibración para una transformación colectiva a través de la Medicina
            facilitada por el Sonido.
          </p> */}
          <p className="mb-6 text-lg">
            ¡Prepárate para una experiencia transformadora de sonido y vibración
            en Sirio Live Sessions! 🎶✨
          </p>
          <p className="mb-6 text-lg">
            Este 9 de noviembre, sumérgete en una jornada de conexión interior
            con la grabación en vivo de <em>6 bandas de Música Medicina</em>,
            cuyas melodías sanadoras resonarán en el Domo Sirio de Santa Elena,
            Antioquia. Acompaña a{" "}
            <strong>
              La Senda del Sonido, Aramara, Caro OS, Dabeiba, Kuna Yala
            </strong>{" "}
            y <em>TAMA</em> en este viaje sonoro que quedará plasmado en nuestro
            canal de YouTube.
          </p>
          <p className="mb-6 text-lg">
            Además de la grabación, te espera una <em>ceremonia de cacao</em>{" "}
            para abrir el corazón y un <em>viaje sonoro / sound healing</em> que
            te guiará hacia las profundidades de tu ser.
          </p>

          <p className="mb-6 text-lg">
            ¡No te pierdas esta oportunidad única de vibrar alto y conectar con
            tu esencia a través de la música y la energía! 🪘🌿
          </p>
          <p className="flex items-center text-lg px-4">
            <MapPin className="mr-2 text-[#40E0D0]" />
            LUGAR: Domo Sirio, Carrera 24 este #1 BB 376, Santa Elena, Antioquia
          </p>
          <p className="flex items-center text-lg pl-12 my-2">
            <strong className="pr-2">CONTACTO: </strong>{" "}
            <a
              href={`https://wa.me/${VAR_WHATSAPP_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              +57 300 123 4567
            </a>
          </p>
          <div className="flex justify-center">
            <Button
              className="mt-9 bg-[#D4AF37] text-[#0A1A2A] hover:bg-[#40E0D0] py-8 px-16 text-2xl"
              onClick={handleReserva}
            >
              Reserva tu lugar
            </Button>
          </div>
        </div>
        <div className="mt-8 w-full lg:mt-0 lg:w-5/12">
          <img
            src={imagenLivePost}
            alt="Event Poster"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="bg-[#0A1A2A] py-10">
        <div className="container mx-auto px-12">
          <h2 className="mb-10 text-center text-4xl font-bold text-[#D4AF37]">
            Fechas de Lanzamiento y Precios
          </h2>
          <div className="flex flex-wrap justify-center">
            {pricingData.map((item, index) => (
              <div key={index} className="w-full sm:w-1/3 px-4 mb-8">
                <div
                  className={`bg-[#0A1A2A] border border-[#40E0D0] rounded-lg p-6 text-center ${item.etapa !== precioActual.tipo ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <h3 className="text-xl font-bold text-[#D4AF37] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg mb-2">Fecha límite: {item.deadline}</p>
                  <p className="text-2xl font-bold text-[#40E0D0]">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button
              className="mt-9 bg-[#D4AF37] text-[#0A1A2A] hover:bg-[#40E0D0] py-8 px-12 text-2xl mx-2"
              onClick={handleReserva}
            >
              COMPRA TUS BOLETAS
            </Button>
          </div>
        </div>
      </section>

      {/* Reserva de lugar */}
      <section
        ref={sectionReservaRef}
        id="section-reserva"
        style={{ display: openSectionReserva ? "block" : "none" }}
      >
        <FormReserva />
      </section>

      {/* Música Medicina y Consciente */}
      <section className="bg-[#0A1A2A] py-10">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-4xl font-bold text-[#D4AF37]">
            Música Medicina y Consciente
          </h2>
          <p className="mb-12 text-center text-xl">
            Haz parte de esta transformación colectiva que estamos viviendo a
            través de la Música Medicina, la vibración y el Sonido.
          </p>

          <div className="flex flex-wrap justify-center">
            {musicaMedicinaCards.map((card, index) => (
              <Card
                key={index}
                className="m-4 w-full max-w-sm bg-[#0A1A2A] border-[#40E0D0] transition-transform hover:scale-110"
              >
                <CardHeader>
                  <CardTitle className="text-[#D4AF37]">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{card.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Channel */}
      <section className="container mx-auto my-10 px-4">
        <h2 className="mb-10 text-center text-4xl font-bold text-[#D4AF37]">
          NUESTRO CANAL EN YOUTUBE
        </h2>

        <p className="mb-12 text-center text-xl">
          En este espacio encontrarás Música Medicina y los Artistas que
          sostienen esta transformación que estamos viviendo a través de la
          Medicina de la Música
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 px-2">
          {[
            {
              title: "ARBOL",
              image: imagenCancionArbol,
              // "https://lives.siriocasaestudio.com/wp-content/uploads/2024/07/IMG_20240726_182348.jpg",
              link: "https://youtu.be/IWihRGNvdnI?si=PKryC7doRK8qB3ob",
            },
            {
              title: "LA SEMILLA",
              image: imagenCancionSemilla,
              // "https://lives.siriocasaestudio.com/wp-content/uploads/2024/07/IMG_20240726_182323.jpg",
              link: "https://youtu.be/J-83VdGcWyc?si=8hA-Rt22zWQQAW4k",
            },
            {
              title: "CLARIDAD",
              image: imagenCancionClaridad,
              // "https://lives.siriocasaestudio.com/wp-content/uploads/2024/07/IMG_20240726_182300.jpg",
              link: "https://youtu.be/ffS2YzjZY8Q?si=d4FoDiqEHevQalNj",
            },
            {
              title: "LA SELVA SE LEVANTA",
              image: imagenCancionSelva,
              // "https://lives.siriocasaestudio.com/wp-content/uploads/2024/07/IMG_20240726_182159.jpg",
              link: "https://youtu.be/pDwNu_eZbLk?si=QfWGe_XQipa3tVjU",
            },
          ].map(({ title, image, link }, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-transform hover:scale-110 bg-[#0A1A2A] border-[#40E0D0]"
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="relative">
                  <img
                    src={image}
                    alt={title}
                    className="h-76 w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconYoutube />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-[#D4AF37]">
                    {title}
                  </h3>
                  {/*<p className="text-sm text-[#F5DEB3]">Artist Name</p>*/}
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </section>
      <WhatsAppBubble />

      {/* Footer */}
      <footer className="bg-[#0A1A2A] py-12 border-t border-[#40E0D0]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div>
              <h3 className="mb-3 text-2xl font-bold text-[#D4AF37]">
                Sirio Live Sessions
              </h3>
              <p className="text-lg">
                La Senda del Sonido, vive la experiencia de la música medicinal
              </p>
            </div>
            <div className="mt-6 lg:mt-0">
              <h4 className="mb-3 text-xl font-semibold text-[#D4AF37]">
                Contacto
              </h4>

              <p className="text-lg">{VAR_WHATSAPP_PHONE_TEXT}</p>

              <p className="text-lg">info@siriolivesessions.com</p>
            </div>
          </div>
          <Separator className="my-8 bg-[#40E0D0]" />
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <p>© Sirio Live Sessions © 2024. All rights reserved. Moreno</p>
            <div className="flex space-x-8">
              <a
                href="https://www.youtube.com/@siriolivesessions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-10 w-10 text-[#D4AF37] hover:text-[#40E0D0]" />
              </a>
              <a
                href="https://www.instagram.com/siriocasaestudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-10 w-10 text-[#D4AF37] hover:text-[#40E0D0]" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PageHome;
