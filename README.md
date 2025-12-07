# Sveltekit with [typesafe-i18n](https://github.com/codingcommons/typesafe-i18n)

A minimal setup demonstrating how to use **typesafe-i18n** for fully type-safe internationalization in **Svelte 5 + SvelteKit**, including locale loading, strongly typed translations, and seamless integration with the new runes-based Svelte API.

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

Check code file [+page.svelte](https://github.com/aghussb/sveltekit-typesafe-i18n/blob/main/src/routes/+page.svelte)[^1]

[^1]: Reference implementation: [typesafe-i18n-demo-svelte](https://github.com/ivanhofer/typesafe-i18n-demo-svelte)

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev
```

## Building

To create a production version of your app:

```sh
npm run build
```
