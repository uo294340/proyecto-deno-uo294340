FROM denoland/deno:alpine-1.31.1

WORKDIR /app

# Copiamos los archivos
COPY . .

# Cacheamos las dependencias
RUN deno cache main.ts

EXPOSE 8080

CMD ["run", "--allow-net", "main.ts"]