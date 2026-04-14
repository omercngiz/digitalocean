import { FastifyInstance } from "fastify";
import { shouldBeAdmin, shouldBeUser } from "../middleware/auth";
import { Order } from "@digitalocean/order-db";

export const orderRoutes = async (fastify: FastifyInstance) => {
    fastify.get('/user-orders', {preHandler: shouldBeUser}, async (request, reply) => {
        console.log("User ID from request:", request.userId);
        const orders = await Order.find({ userId: request.userId });
        return reply.send( {message: "userID", userId: request.userId, orders } );
    });

    fastify.get('/orders', {preHandler: shouldBeAdmin}, async (request, reply) => {
        const orders = await Order.find();
        return reply.send( orders );
    });
};