<script lang="ts">
	import { asset } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={asset('/favicon.svg')} />
</svelte:head>
{@render children()}
