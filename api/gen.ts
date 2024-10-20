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
  d: string; // Divisa: string;
}

const Key: string = "";

// Mi función para manejar la llamada asincrónica
(async () => {
  const cadenaConcatenada = "{Identificador}{Monto}{Divisa}{LlaveSecreta}";
  const hashHex = await generateHash(cadenaConcatenada);
  console.log(hashHex);
})();

/**
 * Handles the incoming request and returns a response with a greeting message.
 * @param request - The incoming HTTP request.
 * @returns A Response object with the greeting message.
 */
export default async (request: Request) => {
  const cadenaConcatenada = "{Identificador}{Monto}{Divisa}{LlaveSecreta}";
  const hashHex = await generateHash(cadenaConcatenada);

  return new Response(hashHex);
};
