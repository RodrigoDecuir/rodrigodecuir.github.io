<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	export let title;
	export let description;
</script>

<Seo title="Rodrigo Decuir &mdash; {title}" {description} />

<main>
	<slot />
</main>
