import { clerkMiddleware } from "@hono/clerk-auth";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { shouldBeAdmin, shouldBeUser } from "./middleware/auth.js";
import { sessionRoute } from "./routes/session.route.js";
import { cors } from "hono/cors";

const app = new Hono();

app.use("*", clerkMiddleware());
app.use("*", cors({
  origin: ["http://localhost:3001"]
}));

app.route("/session", sessionRoute);

app.get("/health", (c) => {
  return c.json({
    status: "success",
    uptime: process.uptime(),
    timeStamp: new Date().toISOString(),
  });
});

app.get("/test", shouldBeUser, shouldBeAdmin, (c) => {
  return c.json({
    message: `Authenticated and authorized!`, userId: c.get("userId"),
  });
});

const start = async () => {
  try {
    serve(
      {
        fetch: app.fetch,
        port: 8002,
      },
      (info) => {
        console.log(
          `Payment service is running on http://localhost:${info.port}`,
        );
      },
    );
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
};
start();
