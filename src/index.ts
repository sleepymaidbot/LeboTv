import staticPlugin from '@elysiajs/static';
import { Elysia } from 'elysia';

const app = new Elysia()
  .use(staticPlugin())
  .get('/', () => Bun.file('public/index.html'))
  .get('/index', ({ set }) => (set.redirect = '/'))
  .get('/games', () => Bun.file('public/games.html'))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
