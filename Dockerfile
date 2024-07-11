FROM oven/bun

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install

COPY src src
COPY postcss.config.js svelte.config.js tailwind.config.ts tsconfig.json vite.config.ts ./
COPY static static

RUN bun run build

ENV NODE_ENV production
CMD ["bun", "build/index.js"]
