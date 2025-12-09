import type { LayoutLoad } from './$types';
import { setLocale } from '$lib/i18n/i18n-svelte';
import { baseLocale } from '$lib/i18n/i18n-util';
import { loadLocale } from '$lib/i18n/i18n-util.sync';
import type { Locales } from '$lib/i18n/i18n-types';

export const load: LayoutLoad = ({ url }) => {
   const lang = url.pathname.split('/').filter(Boolean)[0] as Locales ?? baseLocale

   loadLocale(lang);
   setLocale(lang);
};
