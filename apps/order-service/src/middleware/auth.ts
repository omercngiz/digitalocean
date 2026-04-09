import { getAuth } from "@clerk/fastify";
import { FastifyReply, FastifyRequest } from "fastify";

declare module "fastify" {
  interface FastifyRequest {
    userId?: string;
  }
}

export const shouldBeUser =  async (req: FastifyRequest, reply: FastifyReply) => {
  const { userId } = getAuth(req);
  
  if (!userId) {
    reply.send({ message: "You are not logged in" });
    return;
  }

    req.userId = userId;
}