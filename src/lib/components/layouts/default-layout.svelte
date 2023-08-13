<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	export let title;
	import './default.css';
</script>

<Seo title="Rodrigo Decuir &mdash; {title}" description="hola mundo" />

<main class="markdown-body">
	<slot />
</main>
