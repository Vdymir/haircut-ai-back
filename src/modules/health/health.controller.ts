import { HttpError } from "../../types/http-error";

export const healthController = async () => {
  const serviceUp = true;

  if (!serviceUp) {
    throw new HttpError("Service unavailable", 503);
  }
  return {
    status: "ok",
    timestamp: Date.now(),
  };
};
