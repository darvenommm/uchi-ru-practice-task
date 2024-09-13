export interface IRawConfig {
  DB_HOST: string;
  DB_PORT: number;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_DATABASE: string;
  DB_SCHEMA: string;
}

export interface IConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  schema: string;
}
