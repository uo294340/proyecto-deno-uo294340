//servidor
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const port = 8080;

const handler = (request: Request): Response => {
  const body = `¡Hola! Soy el alumno del UO294340. Este es mi stack Deno.`;
  return new Response(body, { status: 200 });
};

console.log(`Servidor ejecutándose en http://localhost:${port}`);
serve(handler, { port });