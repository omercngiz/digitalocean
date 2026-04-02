import { timeStamp } from "console";
import Fastify from "fastify";
import { uptime } from "process";

const fastify = Fastify({
  logger: true,
});

fastify.get("/health", async (request, reply) => {
  return reply.status(200).send({
    status: "success",
    uptime: process.uptime(),
    timeStamp: new Date().toISOString(),
  });
});

const start = async () => {
  try {
    await fastify.listen({ port: 8001 });
    console.log("Order service is running on port 8001");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
