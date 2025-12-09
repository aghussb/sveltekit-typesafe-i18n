<script lang="ts">
	import type { Locales } from '$lib/i18n/i18n-types';
	import { locales } from '$lib/i18n/i18n-util';
	import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
	import LL, { setLocale, locale } from '$lib/i18n/i18n-svelte';
	import { baseLocale } from '$lib/i18n/i18n-util';

	// reference: https://github.com/ivanhofer/typesafe-i18n-demo-svelte
	const chooseLocale = async (locale: Locales) => {
		await loadLocaleAsync(locale);
		setLocale(locale);

		window.location.href = '/' + (baseLocale !== locale ? locale : '');
	};
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<hr />

<label>
	<select onchange={(e) => chooseLocale(e.currentTarget.value as Locales)}>
		{#each locales as lang, i (i)}
			<option value={lang} selected={lang === $locale}>{lang}</option>
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
