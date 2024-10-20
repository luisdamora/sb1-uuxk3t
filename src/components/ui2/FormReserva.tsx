import { Button } from "@/components/ui/button.tsx";
import { obtenerPrecioActual } from "@/shared/obtenerPrecioActual.ts";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormInputs {
  nombre: string;
  email: string;
  celular: string;
  cantidad: string;
}

export const FormReserva: FC = (): React.ReactNode => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<FormInputs>({
    defaultValues: { cantidad: 1, celular: "", email: "", nombre: "" },
  });

  const precioActual = obtenerPrecioActual();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="container mx-auto px-4 py-10 bg-cyan-50 bg-opacity-10 rounded-lg shadow-lg w-full lg:w-1/3">
      <h2 className="mb-8 text-center text-3xl font-bold text-[#D4AF37]">
        Reserva tu lugar
      </h2>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="nombre" className="block mb-2 text-lg">
            Nombre
          </label>
          <input
            {...register("nombre", { required: "Este campo es requerido" })}
            type="text"
            id="nombre"
            className="w-full px-3 py-2 text-[#0A1A2A] bg-white border border-[#40E0D0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />
          {errors.nombre && (
            <p className="text-red-500">{errors.nombre.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-lg">
            Email
          </label>
          <input
            {...register("email", {
              required: "Este campo es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Dirección de email inválida",
              },
            })}
            type="email"
            id="email"
            className="w-full px-3 py-2 text-[#0A1A2A] bg-white border border-[#40E0D0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="celular" className="block mb-2 text-lg">
            Celular
          </label>
          <input
            {...register("celular", {
              required: "Este campo es requerido",
              minLength: 6,
              maxLength: 12,
            })}
            type="tel"
            id="celular"
            className="w-full px-3 py-2 text-[#0A1A2A] bg-white border border-[#40E0D0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />
          {errors.celular && (
            <p className="text-red-500">{errors.celular.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="cantidad" className="block mb-2 text-lg">
            Cantidad
          </label>
          <select
            {...register("cantidad", { required: "Este campo es requerido" })}
            id="cantidad"
            className="w-full px-3 py-2 text-[#0A1A2A] bg-white border border-[#40E0D0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          {errors.cantidad && (
            <p className="text-red-500">{errors.cantidad.message}</p>
          )}
        </div>

        <div className="flex justify-center">
          <div
            className={`flex justify-center  ${!isValid ? "disabled:cursor-not-allowed opacity-50" : ""}`}
          >
            <div style={{ display: isValid ? "block" : "none" }}>
              <script
                data-bold-button="dark-L"
                data-api-key="LLAVE_DE_IDENTIDAD"
              ></script>
            </div>
            <div style={{ display: isValid ? "none" : "block" }}>
              {/*<Button*/}
              {/*  type="submit"*/}
              {/*  className="bg-[#D4AF37] text-[#0A1A2A] hover:bg-[#40E0D0] py-4 px-8 text-xl"*/}
              {/*>*/}
              {/*  Ir a pagar*/}
              {/*</Button>*/}
              <button className="bg-gradient-to-r from-blue-600 to-red-500 hover:from-blue-700 hover:to-red-600 text-white font-bold py-3 px-8 rounded-full">
                Pagar con <span className="font-black">Bold</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-lg">Precio Total</label>
          <table className="w-full text-[#0A1A2A] bg-white border border-[#40E0D0] rounded-md">
            <tbody>
              <tr>
                <td className="px-3 py-2 border-b">Valor boleta</td>
                <td className="px-3 py-2 border-b text-right">
                  ${precioActual.valor.toLocaleString("es-CO")}
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2">Valor total por cantidad</td>
                <td className="px-3 py-2 text-right">
                  {watch("cantidad") && (
                    <span>
                      $
                      {(
                        Number(watch("cantidad")) * precioActual.valor
                      ).toLocaleString("es-CO")}
                    </span>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};
