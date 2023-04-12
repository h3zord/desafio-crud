module.exports = {
  all: true,
  extends: '@istanbuljs/nyc-config-typescript',
  include: [
    'src/**/*.ts',
  ],
  exclude: [
    'src/tests/**',
    'src/Interfaces',
    'src/app.ts',
    'src/server.ts',
    'src/model/Connection.ts',
  ],
};