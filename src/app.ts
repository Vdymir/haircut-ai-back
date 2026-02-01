import Fastify from "fastify";
import { healthPlugin } from "./plugins/health.plugin";
import { env } from "./config/env";
import { errorHandlerPlugin } from "./plugins/error-handler.plugin";

export const app = Fastify({
  logger: env.nodeEnv !== "test",
});

// register plugins (error handler, health)
app.register(errorHandlerPlugin);

// register routes
app.register(healthPlugin, {
  prefix: env.apiPrefix,
});
