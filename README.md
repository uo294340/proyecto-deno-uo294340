# proyecto-deno-uo294340
pipeline con DenoJS (Back&amp;Front) + Github Actions

# INTEGRANTES
María Prado Bellón: uo294340

# ARCHIVOS

Deno permite crear aplicaciones web de forma rápida y segura con herramientas integradas para revisar la calidad del código (Linter) y hacer pruebas (Tests) sin necesidad de instalar nada extra.

GitHub Actions detecta cuando subimos cambios al repositorio y activa un pipeline cada vez que se hace un push:

1. Análisis Estático (Lint): Revisa que el código esté escrito de forma limpia y profesional.
2. Tests: Ejecuta pruebas automáticas para confirmar que la lógica es correcta.
3. Reporte: Genera un informe con los resultados de las pruebas.
4. Crear contenedor (Docker): Empaqueta la aplicación en una "caja virtual" (contenedor) para que funcione en cualquier ordenador sin errores de configuración.


**- main.ts :**
Un servidor web muy simple que dice "¡Hola! ..."


**-main_test.ts**
Comprueba que la web funciona preguntándole al código Cuánto es 1+2 y comprueba que la respuesta sea 3.


**-Dockerfile**
El contenedor para que la app funcione en cualquier sistema, coge la versión de Deno, mete el archivo main.ts y escucha en el puerto 8080.


**-.github/workflows/main.yml**
Le dice a GitHub Actions qué pasos seguir y en qué orden.


