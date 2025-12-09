import type { PageLoad } from '../$types';
import { setLocale } from '$lib/i18n/i18n-svelte';
import { baseLocale } from '$lib/i18n/i18n-util';
import { loadLocale } from '$lib/i18n/i18n-util.sync';

export const load: PageLoad = async ({ url }) => {
   const lang = url.pathname.split('/').filter(Boolean)[0] ?? baseLocale

   loadLocale(lang);
   setLocale(lang);
};
