import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function (req: VercelRequest, res: VercelResponse) {
  const { name = "World" } = req.query;
  return res.json({
    message: `Hello ${name}!`,
  });
}
