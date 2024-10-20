import { isBoldEnvProdDev } from "../src/shared/constants";
import { BoldCheckoutEnvironment } from "../src/types/BoldCheckout";

/**
 * Configures the runtime for the Edge Function.
 */
export const config = {
  runtime: "edge",
};

// Función asincrónica para generar el hash SHA-256
async function generateHash(cadena) {
  // Codificar la cadena en UTF-8
  const encodedText = new TextEncoder().encode(cadena);

  // Generar el hash SHA-256
  const hashBuffer = await crypto.subtle.digest("SHA-256", encodedText);

  // Convertir el buffer del hash en un array de bytes
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // Convertir cada byte en una representación hexadecimal y unirlos en una sola cadena
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
}

export interface Transaction {
  i: string; // Identificador: string;
  m: number; // Monto: number;
  // d: string; // Divisa: string;
}

const Key: string = "";
const divisa: string = "COP";

const VAR_BOL_API_KEY_PROD = "Nbs5IVsJhT1e5m3wxgfT2g";
const VAR_BOL_API_KEY_DEV = "Gh1EX3S9A6ePTXoyuKOjQA";

function getKeyEnv(env: BoldCheckoutEnvironment): string {
  if (env === BoldCheckoutEnvironment.PRODUCTION) {
    return VAR_BOL_API_KEY_PROD;
  }
  return VAR_BOL_API_KEY_DEV;
}

/**
 * Handles the incoming request and returns a response with a greeting message.
 *  {Identificador}{Monto}{Divisa}{LlaveSecreta}
 *
 * @param request - The incoming HTTP request.
 * @returns A Response object with the greeting message.
 */
export default async (request: Request) => {
  if (request.method === "GET") {
    return new Response("Hello, World!");
  }

  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const { i: identificador, m: monto } = (await request.json()) as Transaction;
  const cadenaConcatenada = `${identificador}${monto}${divisa}${getKeyEnv(isBoldEnvProdDev)}`;
  const hashHex = await generateHash(cadenaConcatenada);

  return new Response(hashHex);
};
