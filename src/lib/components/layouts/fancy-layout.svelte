<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import './light.css';
	export let title;
	export let description;
</script>

<Seo title="Rodrigo Decuir &mdash; {title}" {description} />

<!--style="max-width: 60ch; margin: auto; padding-top: 2.5rem;"-->
<main class="markdown-body">
	<slot />
</main>
