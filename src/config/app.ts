const env = process.env.NODE_ENV;

export const BASE_URL =
  env === "development" ? "" : "/gerador-ficheiro-saf-t-ao";
