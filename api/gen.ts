export const config = {
  runtime: "edge",
};

export default (request: Request) => {
  return new Response(`Hello, from ${request.url} I'm now an Edge Function!`);
};

// import type { VercelRequest, VercelResponse } from "@vercel/node";
//
// export default function handler(req: VercelRequest, res: VercelResponse) {
//   const { name = "World" } = req.query;
//   return res.json({
//     message: `Hello ${name}!`,
//   });
// }
