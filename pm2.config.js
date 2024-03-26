import { join } from 'node:path'

export default {
  apps: [
    {
      name: 'scdb',
      script: './build/server.js',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      env: {
        ENV_PATH: join(import.meta.url, '.env'),
      },
    },
  ],
}
