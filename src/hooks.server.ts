import type { Handle } from '@sveltejs/kit';
import { baseLocale } from '$lib/i18n/i18n-util';

export const handle: Handle = async ({ event, resolve }) => {
   const lang = event.url.pathname.split('/').filter(Boolean)[0] ?? baseLocale
   return resolve(event, {
      // then you can read this local here bc SvelteKit will run this function after the +page.server.ts
      transformPageChunk: ({ html }) => html.replace('%lang%', lang)
   });
};
