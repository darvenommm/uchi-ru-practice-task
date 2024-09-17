export type IRawConfig = Readonly<{
  DB_HOST: string;
  DB_PORT: number;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_DATABASE: string;
  CATS_API_KEY: string;
  FRONTEND_ORIGIN: string;
}>;

export type IConfig = Readonly<{
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  catsApiKey: string;
  frontendOrigin: string;
}>;
