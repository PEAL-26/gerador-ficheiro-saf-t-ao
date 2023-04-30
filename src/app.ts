import Fastify, { FastifyInstance } from "fastify";

const app: FastifyInstance = Fastify({ logger: true });

app.get("/", async (request, reply) => {
  reply.send({ hello: "world" });
});

export default app;
