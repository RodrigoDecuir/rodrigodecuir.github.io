<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import './default.css';
	export let title;
</script>

<Seo title="Rodrigo Decuir &mdash; {title}" description="hola mundo" />

<main class="markdown-body">
	<slot />
</main>
