import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Youtube,
  MapPin,
  Instagram,
  Facebook,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0A1A2A] text-[#F5DEB3]">
      {/* Header */}
      <header className="bg-[url('https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center py-32 text-center">
        <div className="bg-[#0A1A2A] bg-opacity-80 py-16">
          {/* <Sun className="mx-auto mb-6 h-24 w-24 text-[#D4AF37]" /> */}
          <img
            src="https://lives.siriocasaestudio.com/wp-content/uploads/2024/07/logo.png"
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
            PRÓXIMA GRABACIÓN EN VIVO | 9 noviembre
          </p>
        </div>
      </header>

      {/* Next Session */}
      <section className="container mx-auto my-20 flex flex-wrap items-center justify-between px-4">
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
          <p className="mb-6 text-lg">¡Prepárate para una experiencia transformadora de sonido y vibración en Sirio Live Sessions! 🎶✨</p>
<p className="mb-6 text-lg">Este 9 de noviembre, sumérgete en una jornada de conexión interior con la grabación en vivo de <em>6 bandas de Música Medicina</em>, cuyas melodías sanadoras resonarán en el Domo Sirio de Santa Elena, Antioquia.  Acompaña a <strong>La Senda del Sonido, Aramara, Caro OS, Dabeiba, Kuna Yala</strong> y <em>TAMA</em> en este viaje sonoro que quedará plasmado en nuestro canal de YouTube.</p>
<p className="mb-6 text-lg">Además de la grabación, te espera una <em>ceremonia de cacao</em> para abrir el corazón y un <em>viaje sonoro / sound healing</em> que te guiará hacia las profundidades de tu ser.</p>

<p className="mb-6 text-lg">¡No te pierdas esta oportunidad única de vibrar alto y conectar con tu esencia a través de la música y la energía! 🪘🌿</p>
          <p className="flex items-center text-lg">
            <MapPin className="mr-2 text-[#40E0D0]" />
            LUGAR: Domo Sirio, Carrera 24 este #1 BB 376, Santa Elena, Antioquia
          </p>
          <Button className="mt-6 bg-[#D4AF37] text-[#0A1A2A] hover:bg-[#40E0D0]">
            Reserva tu lugar
          </Button>
        </div>
        <div className="mt-8 w-full lg:mt-0 lg:w-5/12">
          <img
            src="https://lives.siriocasaestudio.com/wp-content/uploads/2024/10/live_9_nov_.jpg"
            alt="Event Poster"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Música Medicina y Consciente */}
      <section className="bg-[#0A1A2A] py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-4xl font-bold text-[#D4AF37]">
            Música Medicina y Consciente
          </h2>
          <p className="mb-12 text-center text-xl">
            Haz parte de esta transformación colectiva que estamos viviendo a
            través de la Música Medicina, la vibración y el Sonido.
          </p>

          <div className="flex flex-wrap justify-center">
            <Card className="m-4 w-full max-w-sm bg-[#0A1A2A] border-[#40E0D0] transition-transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-[#D4AF37]">
                  Colaboraciones entre Artistas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Unimos artistas y comunidad para manifestar la Banda Sonora
                  del Nuevo Tiempo y la nueva Humanidad.
                </p>
              </CardContent>
            </Card>
            <Card className="m-4 w-full max-w-sm bg-[#0A1A2A] border-[#40E0D0] transition-transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-[#D4AF37]">
                  Sesiones en Vivo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Disfruta de nuestras sesiones de grabación en vivo con bandas
                  de música medicina y consciente de la magia que creamos juntos
                  al grabar en vivo.
                </p>
              </CardContent>
            </Card>
            <Card className="m-4 w-full max-w-sm bg-[#0A1A2A] border-[#40E0D0] transition-transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-[#D4AF37]">
                  Conexión Interior
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Vive experiencias sensoriales que propagan la conexión con el
                  interior y la sanación profunda a través de la vibración y el
                  sonido.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* YouTube Channel */}
      <section className="container mx-auto my-20 px-4">
        <h2 className="mb-10 text-center text-4xl font-bold text-[#D4AF37]">
          NUESTRO CANAL EN YouTube
        </h2>
        <p className="mb-12 text-center text-xl">
          En este espacio encontrarás Música Medicina y los Artistas que
          sostienen esta transformación que estamos viviendo a través de la
          Medicina de la Música
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'LARBOL',
              image:
                'https://lives.siriocasaestudio.com/wp-content/uploads/2024/07/IMG_20240726_182348.jpg',
            },
            {
              title: 'LA SEMILLA',
              image:
                'https://lives.siriocasaestudio.com/wp-content/uploads/2024/07/IMG_20240726_182323.jpg',
            },
            {
              title: 'CLARIDAD',
              image:
                'https://lives.siriocasaestudio.com/wp-content/uploads/2024/07/IMG_20240726_182300.jpg',
            },
            {
              title: 'LA SELVA SE LEVANTA',
              image:
                'https://lives.siriocasaestudio.com/wp-content/uploads/2024/07/IMG_20240726_182159.jpg',
            },
          ].map(({ title, image }, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-transform hover:scale-105 bg-[#0A1A2A] border-[#40E0D0]"
            >
              <img
                src={image}
                alt={title}
                className="h-76 w-full object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-[#D4AF37]">
                  {title}
                </h3>
                <p className="text-sm text-[#F5DEB3]">Artist Name</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

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
              <p className="text-lg">+57 305 939 2670</p>
              <p className="text-lg">info@siriolivesessions.com</p>
            </div>
          </div>
          <Separator className="my-8 bg-[#40E0D0]" />
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <p>&copy; Sirio Live Sessions © 2024. All rights reserved.</p>
            <div className="flex space-x-6">
              <Youtube className="h-6 w-6 text-[#D4AF37] hover:text-[#40E0D0]" />
              <Instagram className="h-6 w-6 text-[#D4AF37] hover:text-[#40E0D0]" />
              <Facebook className="h-6 w-6 text-[#D4AF37] hover:text-[#40E0D0]" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
