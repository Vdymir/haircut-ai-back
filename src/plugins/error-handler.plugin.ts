import { FastifyInstance, FastifyError } from "fastify";
import { HttpError } from "../types/http-error";

export async function errorHandlerPlugin(app: FastifyInstance) {
  app.setErrorHandler((error: FastifyError | Error, _, reply) => {
    // Known errors
    if (error instanceof HttpError) {
      return reply.status(error.statusCode).send({
        error: error.message,
      });
    }

    // Fastify errors (schemas, validation, etc.)
    if ("validation" in error) {
      return reply.status(400).send({
        error: "Validation error",
        details: error.validation,
      });
    }

    // Unexpected error
    app.log.error(error);

    return reply.status(500).send({
      error: "Internal server error",
    });
  });
}
