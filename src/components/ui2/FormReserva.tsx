import { Button } from "@/components/ui/button.tsx";
import React, { FC } from "react";

interface Props {}

export const FormReserva: FC<Props> = ({}): React.ReactNode => {
  return (
    <div className="container mx-auto px-4 py-10 bg-cyan-50 bg-opacity-10 rounded-lg shadow-lg w-full lg:w-1/3">
      <h2 className="mb-8 text-center text-3xl font-bold text-[#D4AF37]">
        Reserva tu lugar
      </h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="nombre" className="block mb-2 text-lg">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="w-full px-3 py-2 text-[#0A1A2A] bg-white border border-[#40E0D0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 text-[#0A1A2A] bg-white border border-[#40E0D0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="celular" className="block mb-2 text-lg">
            Celular
          </label>
          <input
            type="tel"
            id="celular"
            name="celular"
            className="w-full px-3 py-2 text-[#0A1A2A] bg-white border border-[#40E0D0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="cantidad" className="block mb-2 text-lg">
            Cantidad
          </label>
          <select
            id="cantidad"
            name="cantidad"
            className="w-full px-3 py-2 text-[#0A1A2A] bg-white border border-[#40E0D0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            required
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            className="bg-[#D4AF37] text-[#0A1A2A] hover:bg-[#40E0D0] py-4 px-8 text-xl"
          >
            Ir a pagar
          </Button>
        </div>
        <div className="flex justify-center">
          <script data-bold-button data-api-key="LLAVE_DE_IDENTIDAD"></script>
        </div>
      </form>
    </div>
  );
};
