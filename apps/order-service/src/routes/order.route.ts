import { FastifyInstance } from "fastify";
import { shouldBeUser } from "../middleware/auth";
import { Order } from "@digitalocean/order-db";

export const orderRoutes = async (fastify: FastifyInstance) => {
    fastify.get('/user-orders', {preHandler: shouldBeUser}, async (request, reply) => {
        console.log("User ID from request:", request.userId);
        const orders = await Order.find({ userId: request.userId });
        return reply.send( {message: "userID", userId: request.userId, orders } );
    });

    // TODO: Change middleware to shouldBeAdmin
    fastify.get('/orders', async (request, reply) => {
        const orders = await Order.find();
        return reply.send( orders );
    });
};