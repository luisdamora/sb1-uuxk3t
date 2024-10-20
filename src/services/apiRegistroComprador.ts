import { IProducto } from "@/interfaces/IProducto";
import { useMutation } from "@tanstack/react-query";

/**
 * Sends a POST request to the specified webhook URL with the provided `IProducto` object as the request body.
 *
 * @param producto - The `IProducto` object to be sent in the request body.
 * @returns A Promise that resolves to the response object from the API.
 * @throws An error if the response is not successful (status code is not in the 2xx range).
 */
export const apiRegistroComprador = async (
  producto: IProducto,
): Promise<Response> => {
  const response = await fetch(
    "https://sirio-8.caprinosrv.com/webhook/29b6a435-c298-46d3-bbca-8ee4e19c5ac9",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response;
};

/**
 * Provides a React Query hook that sends a POST request to the specified webhook URL with the provided `IProducto` object as the request body.
 *
 * @param comprador - The `IProducto` object to be sent in the request body.
 * @returns A React Query hook that fetches the response from the API.
 */
export const useRegistroComprador = (identificador: string) =>
  useMutation({
    mutationKey: ["registro-comprador", identificador],
    mutationFn: (data: IProducto) => apiRegistroComprador(data),
  });
