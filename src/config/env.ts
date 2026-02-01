import "dotenv/config";

function getEnv(key: string, required = true): string {
  const value = process.env[key];

  if (!value && required) {
    throw new Error(`❌ Missing environment variable: ${key}`);
  }

  return value!;
}

export const env = {
  nodeEnv: getEnv("NODE_ENV"),
  port: Number(getEnv("PORT")),
  apiPrefix: getEnv("API_PREFIX"),
};
