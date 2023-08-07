<script lang="ts">
	export let title: string;
	export let ogTitle: string | null = null;
	export let description: string;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={ogTitle ?? title} />
	<meta property="og:description" content={description} />
	<meta
		property="og:image"
		content="https://lightroom.adobe.com/v2c/spaces/c33fcb0b718946699d17a74d18ccb447/assets/fb19791b54690365cd14ddd6bf0440c1/revisions/67e7d54883898569e0bc70d9887682e0/renditions/c230e99ab63402ad6f62822fd487440a"
	/>
</svelte:head>
