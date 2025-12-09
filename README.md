# Sveltekit with [typesafe-i18n](https://github.com/codingcommons/typesafe-i18n)

A minimal setup demonstrating how to use **typesafe-i18n** for fully type-safe internationalization in **Svelte 5 + SvelteKit**, including locale loading, strongly typed translations, and seamless integration with the new runes-based Svelte API.

demo : [sveltekit-typesafe-i18n.pages.dev](https://sveltekit-typesafe-i18n.pages.dev)

## Technical Rationale

* Based on the code in file [index.mts](https://github.com/codingcommons/typesafe-i18n/blob/main/packages/adapter-svelte/src/index.mts), `typesafe-i18n` integration leverages **`svelte/store`** (Svelte’s built-in state management), allowing the use of native state mechanisms without adding complexity.
* According to the **[Svelte 5 Migration Guide](https://svelte.dev/docs/svelte/v5-migration-guide)**, there are no significant changes to state management (`svelte/store`), ensuring that the i18n code remains compatible with Svelte 5.
* Although `typesafe-i18n` has not received updates for two years, it remains stable, type-safe, and fully compatible with the latest versions of Svelte, as evidenced by the open issues in the repository that show no critical bugs or compatibility problems.

## Install typesafe-i18n

```sh
npm install typesafe-i18n
```

## Optional configuration (recommended)

Open file `.typesafe-i18n.json` and add this line

```json
   "outputPath": "./src/lib/i18n",
```

That line will automatically call `$lib` in Sveltekit.

Check code file [+page.svelte](https://github.com/aghussb/sveltekit-typesafe-i18n/blob/main/src/routes/+page.svelte) and [+page.ts](https://github.com/aghussb/sveltekit-typesafe-i18n/blob/main/src/routes/+page.ts) [^1]

[^1]: Reference implementation: [typesafe-i18n-demo-svelte](https://github.com/ivanhofer/typesafe-i18n-demo-svelte)

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
bun run dev #in bun

npm run dev
```

start typesafe-i18n
```sh
bun run typesafe-i18n #in bun

npm run typesafe-i18n
```

## Building

To create a production version of your app:

```sh
bun run build #in bun

npm run build
```
