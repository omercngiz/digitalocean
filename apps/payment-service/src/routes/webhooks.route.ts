import { Hono } from "hono";
import stripe from "../utils/stripe";
import Stripe from "stripe";

const webhooksRoute = new Hono();

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

webhooksRoute.post("/stripe", async (c) => {
    const body = await c.req.text();
    const signature = c.req.header("stripe-signature") as string;

    let event : Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.log("Webhook signature verification failed.", message);
        return c.text("Webhook Error: " + message, 400);
    }

    switch (event.type) {
        case "checkout.session.completed":{
            const session = event.data.object as Stripe.Checkout.Session;
            const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
            // TODO: create order
            console.log("WEBHOOK RECEIVED: ", session, lineItems);
            break;
        }
        default:
            break;
    }

    return c.json({ received: true });
});

export { webhooksRoute };