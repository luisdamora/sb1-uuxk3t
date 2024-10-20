import useDebounce from "@/hooks/useDebounce.ts";
import { IProducto } from "@/interfaces/IProducto.ts";
import {
  useGenerarHashMutation,
} from "@/services/apiGenerarHash.ts";
import { useRegistroComprador } from "@/services/apiRegistroComprador.ts";
import { VAR_BOLD_DEV } from "@/shared/constants.ts";
import { obtenerPrecioActual } from "@/shared/obtenerPrecioActual.ts";
import { generateUUID } from "@/utils/generateUUID.ts";
import React, { FC, useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormInputs {
  nombre: string;
  email: string;
  celular: string;
  cantidad: number;
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
  const identificadorUUID = useMemo(() => generateUUID(), []);
  const precioActual = obtenerPrecioActual();

  const {
    mutate: mutateRegistro,
    isSuccess: isSuccessRegistro,
    isError: isErrorRegistro,
    isPending: isPendingRegistro,
  } = useRegistroComprador(identificadorUUID);

  const isOkAll = useMemo(
    () =>
      isValid && isSuccessRegistro && !isErrorRegistro && !isPendingRegistro,
    [isValid, isSuccessRegistro, isErrorRegistro, isPendingRegistro],
  );

  const [data, setData] = useState<IProducto>({
    identificador: identificadorUUID,
    nombre: "",
    email: "",
    celular: "",
    precio_unidad: precioActual.valor,
    cantidad: 1,
    precio_total: precioActual.valor,
  });
  const dataDebounce = useDebounce(data, 1000);

  useEffect(() => {
    console.log(dataDebounce);
    mutateRegistro(dataDebounce);
  }, [dataDebounce]);

  const [precioTotal, setPrecioTotal] = useState<number>(0);
  const { data: dataHash, mutate: mutateHash } = useGenerarHashMutation();

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      // console.log(value, name, type);
      const total = value.cantidad
        ? value.cantidad * precioActual.valor
        : precioActual.valor;
      setPrecioTotal(total);
      setData((prevData) => ({
        ...prevData,
        identificador: identificadorUUID,
        [name as keyof IProducto]: value[name as keyof FormInputs],
        precio_total: value.cantidad
          ? value.cantidad * precioActual.valor
          : precioActual.valor,
      }));
    });
    return () => subscription.unsubscribe();
  }, [watch, precioActual.valor]);

  useEffect(() => {
    mutateHash({ i: identificadorUUID, m: precioTotal });
  }, [identificadorUUID, precioTotal]);

  const checkout = useMemo(
    () =>
      new BoldCheckout({
        orderId: identificadorUUID,
        currency: "COP",
        amount: precioTotal.toFixed(0),
        apiKey: VAR_BOLD_DEV,
        integritySignature: dataHash?.text().toString() || "",
        description: "Entrada Live Session | 9 Nov",
        redirectionUrl: "https://live.siriocasaestudio.com/gracias",
      }),
    [data.precio_total],
  );

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    checkout.open();
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
            className={`flex justify-center  ${!isOkAll ? "disabled:cursor-not-allowed opacity-50" : ""}`}
          >
            {/*<div style={{ display: isValidDebounce ? "block" : "none" }}>*/}
            {/*  <script*/}
            {/*    data-bold-button="dark-L"*/}
            {/*    data-api-key="LLAVE_DE_IDENTIDAD"*/}
            {/*  ></script>*/}
            {/*</div>*/}
            {/*<div style={{ display: isValidDebounce ? "none" : "block" }}>*/}
            {/*  <button className="bg-gradient-to-r from-blue-600 to-red-500 hover:from-blue-700 hover:to-red-600 text-white font-bold py-3 px-8 rounded-full">*/}
            {/*    Pagar con <span className="font-black">Bold</span>*/}
            {/*  </button>*/}
            {/*</div>*/}

            <button className="bg-gradient-to-r from-blue-600 to-red-500 hover:from-blue-700 hover:to-red-600 text-white font-bold py-3 px-8 rounded-full">
              Pagar con <span className="font-black">Bold</span>
            </button>
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
