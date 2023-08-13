<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex flex-col h-screen justify-between">
	<!-- Header -->
	<Header />

	<main>
		<!-- Black Hole for content -->
		<slot />
	</main>

	<!--<div class="layout-md">-->
	<!-- Footer -->
	<Footer />
	<!--</div>-->
</div>
