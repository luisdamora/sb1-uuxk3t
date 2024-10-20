import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import imagenLogoSirio from "@assets/images/logo.png";
import { Mail } from "lucide-react";

function PageGracias() {
  return (
    <div className="min-h-screen bg-[#0A1A2A] text-[#F5DEB3] px-1">
      <header className="relative pt-20 pb-20 w-full overflow-hidden text-center">
        <div className="relative z-10 bg-[#0A1A2A] bg-opacity-80 py-8">
          <img
            src={imagenLogoSirio}
            alt="Logo"
            className="mx-auto mb-6 h-56 w-56"
          />
          <h1 className="mb-3 text-5xl font-bold text-[#D4AF37]">
            SIRIO LIVE SESSIONS
          </h1>
          <h2 className="mb-6 text-3xl font-light">Confirmación de Compra</h2>
        </div>
      </header>

      <section className="container mx-auto mt-2 mb-5 px-4">
        <Card className="bg-[#0A1A2A] border-[#40E0D0]">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-[#D4AF37]">
              ¡Gracias por tu compra!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl text-center mb-6">
              Tu reserva para SIRIO LIVE SESSION ha sido confirmada.
            </p>
            <div className="flex items-center justify-center text-lg mb-6">
              <Mail className="mr-2 text-[#40E0D0]" />
              <p>
                El comprobante de pago será enviado a tu correo electrónico.
              </p>
            </div>
            <p className="text-center mb-6">
              Por favor, revisa tu bandeja de entrada (y la carpeta de spam por
              si acaso).
            </p>
            <div className="flex justify-center">
              <Button
                className="bg-[#D4AF37] text-[#0A1A2A] hover:bg-[#40E0D0] py-4 px-8 text-xl"
                onClick={() => (window.location.href = "/")}
              >
                Volver a la página principal
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="bg-[#0A1A2A] py-12 border-t border-[#40E0D0]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="mb-3 text-2xl font-bold text-[#D4AF37]">
              Sirio Live Sessions
            </h3>
            <p className="text-lg">
              La Senda del Sonido, vive la experiencia de la música medicinal
            </p>
          </div>
          <Separator className="my-8 bg-[#40E0D0]" />
          <p className="text-center">
            © Sirio Live Sessions © 2024. All rights reserved. Moreno
          </p>
        </div>
      </footer>
    </div>
  );
}

export default PageGracias;
