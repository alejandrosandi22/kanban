export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENV: 'test' | 'dev' | 'prod';
      JWT_SECRET: string;
      APP_URL: string;
      NEXT_PUBLIC_APP_URL: string;
    }
  }
}
