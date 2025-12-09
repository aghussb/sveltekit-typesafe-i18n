<script lang="ts">
	import { locales } from '$lib/i18n/i18n-util';
	import LL, { locale } from '$lib/i18n/i18n-svelte';
	import { baseLocale } from '$lib/i18n/i18n-util';
	import { resolve } from '$app/paths';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<hr />

{#each locales as lang, i (i)}
	<a
		data-sveltekit-preload-data="tap"
		style="margin: 10px;"
		href={resolve('/' + (baseLocale !== lang ? lang : ''))}
	>
		{lang}
	</a>
{/each}

<h3>
	{$LL.HI({ name: 'Aghus' })}
	<a href="https://github.com/ivanhofer/typesafe-i18n" target="_blank">
		https://github.com/ivanhofer/typesafe-i18n
	</a>
</h3>

<a href={resolve(`/${$locale}/about`)}>{$LL.about()}</a>

<hr />

<h3>
	{$LL.RIP({ name: 'Ivan Hover' })}
</h3>
