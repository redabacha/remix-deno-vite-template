FROM denoland/deno:2.1.4 AS build-env
COPY . /app/
WORKDIR /app
RUN deno install
RUN deno task build
RUN deno compile -A --output ./server ./server.production.ts

FROM gcr.io/distroless/cc:nonroot
COPY --from=build-env /app/build/client/ /app/build/client/
COPY --from=build-env /app/server /app/server
WORKDIR /app
CMD ["/app/server"]
