import { assertEquals } from "https://deno.land/std@0.177.0/testing/asserts.ts";

Deno.test("Test de prueba vacío", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
});