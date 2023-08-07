<script>
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<!-- Header -->
<Header />

<div class="layout-md">
	<main>
		<!-- Black Hole for content -->
		<slot />
	</main>

	<!-- Footer -->
	<Footer />
</div>
