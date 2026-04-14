import { getAuth } from "@clerk/fastify";
import { FastifyReply, FastifyRequest } from "fastify";
import type { CustomJwtSessionClaims } from "@digitalocean/types";

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

export const shouldBeAdmin =  async (req: FastifyRequest, reply: FastifyReply) => {
  const auth = getAuth(req);
  
  if (!auth.userId) {
    return reply.status(401).send({ message: "You are not logged in" });
  }

  const claims = auth.sessionClaims as CustomJwtSessionClaims;

  if(claims.metadata?.role !== "admin") {
    return reply.status(403).send({ message: "Unauthorized" });
  }

  req.userId = auth.userId;
}