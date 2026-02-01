import Fastify from "fastify";
import { healthPlugin } from "./plugins/health.plugin";

export const app = Fastify({
  logger: true,
});

app.register(healthPlugin);
