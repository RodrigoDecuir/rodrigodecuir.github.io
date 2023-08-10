<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	export let title;
</script>

<Seo title="Rodrigo Decuir &mdash; {title}" description="hola mundo" />

<main>
	<slot />
</main>
