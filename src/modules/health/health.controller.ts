export const healthController = async () => {
  return {
    status: "ok",
    timestamp: Date.now(),
  };
};
