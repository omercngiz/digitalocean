import { Hono } from "hono";
import stripe from "../utils/stripe.js";
import { shouldBeUser } from "../middleware/auth";

const sessionRoute = new Hono();

sessionRoute.get("/create-checkout-session", shouldBeUser, (c) => {
    const session = stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: "T-shirt",
                },
                unit_amount: 2000,
            },
            quantity: 1,
        },
    ],
    mode: "payment",
    ui_mode: "embedded_page",
    return_url: "https://localhost:3001/success?session_id={CHECKOUT_SESSION_ID}"
    });
    return c.json(session);
});

export { sessionRoute };