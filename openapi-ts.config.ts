import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'http://localhost:3000/api-json',
  output: 'src/shared/api',
  plugins: [
    '@hey-api/typescript',
    '@hey-api/sdk',
    {
      name: '@hey-api/client-fetch',
      exportFromIndex: true,
    },
    {
      name: '@tanstack/react-query',
      exportFromIndex: true,
    },
    {
      name: 'zod',
      exportFromIndex: true,
    },
  ],
});