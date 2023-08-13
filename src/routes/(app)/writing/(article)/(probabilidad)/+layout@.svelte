<script lang="ts">
	import Index from '$lib/components/Index.svelte';
</script>

<div class="lg:invisible md:invisible">
	<a href="https://pixel-me.tokyo/en/"
		><img class="image" src="./../assets/images/manik-32.png" alt="ojo" /></a
	>
</div>

<Index />

<div class="layout-md pt-14">
	<slot />
</div>
