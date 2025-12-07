<script lang="ts">
	import type { Locales } from '$lib/i18n/i18n-types';
	import { detectLocale, locales } from '$lib/i18n/i18n-util';
	import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
	import { onMount } from 'svelte';
	import { localStorageDetector } from 'typesafe-i18n/detectors';
	import LL, { setLocale } from '$lib/i18n/i18n-svelte';

   // reference: https://github.com/ivanhofer/typesafe-i18n-demo-svelte
	onMount(async () => {
		const lang = localStorage.getItem('lang');
		let detectedLocale: Locales;
		if (lang !== null) {
			detectedLocale = lang as Locales;
		} else {
			detectedLocale = detectLocale(localStorageDetector);
		}
		await chooseLocale(detectedLocale);
	});

	const chooseLocale = async (locale: Locales) => {
		await loadLocaleAsync(locale);
		setLocale(locale);
		document.documentElement.lang = locale;
		localStorage.setItem('lang', locale);
	};
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<hr />

<label>
	<select onchange={(e) => chooseLocale(e.currentTarget.value as Locales)}>
		{#each locales as locale, i (i)}
			<option value={locale}>{locale}</option>
		{/each}
	</select>
</label>

<h3>
	{$LL.HI({ name: 'Aghus' })}
	<a href="https://github.com/ivanhofer/typesafe-i18n" target="_blank">
		https://github.com/ivanhofer/typesafe-i18n
	</a>
</h3>

<hr />

<h3>
	{$LL.RIP({ name: 'Ivan Hover' })}
</h3>
