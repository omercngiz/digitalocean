import { clerkMiddleware } from "@hono/clerk-auth";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { shouldBeUser } from "./middleware/auth.js";

const app = new Hono();

app.use("*", clerkMiddleware());

app.get("/health", (c) => {
  return c.json({
    status: "success",
    uptime: process.uptime(),
    timeStamp: new Date().toISOString(),
  });
});

app.get("/test", shouldBeUser, (c) => {
  return c.json({
    message: `Authenticated!`, userId: c.get("userId"),
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
