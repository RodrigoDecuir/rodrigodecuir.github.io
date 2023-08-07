<script lang="ts">
	let isDropdownVisible = false;

	function showDropdown() {
		isDropdownVisible = true;
	}

	function hideDropdown() {
		isDropdownVisible = false;
	}
</script>

<img src="./assets/images/ani.gif" alt="ojo" />
{#if !isDropdownVisible}
	<button class="nav fixed" on:mouseenter={showDropdown}>Table of Contents</button>
{/if}

{#if isDropdownVisible}
	<div class="nav fixed" on:mouseleave={hideDropdown}>
		<h1>Table of Contents</h1>
		<nav>
			<ul>
				<li><a href="/">About me</a></li>
				<li><a href="/projects">Projects</a></li>
				<li><a href="/writing">Writing</a></li>
			</ul>
		</nav>
	</div>
{/if}

<!--
Button menu
<img src="./assets/images/ani.gif" alt="ojo" />
<button id="top">Table of Contents</button>

 Dropdown menu 
<div class="absolute right-[10px] top-[10px] z-10 rounded border p-1 shadow-md backdrop-blur-md">
	<h1>Table of Contents</h1>
	<nav>
		<ul>
			<li><a href="/">About me</a></li>
			<li><a href="/projects">Projects</a></li>
			<li><a href="/writing">Writing</a></li>
		</ul>
	</nav>
</div>

<div id="dropdown" />

<div id="button" />

<style lang="postcss">
	button {
		@apply absolute right-[10px] top-[10px] z-10 rounded border p-1 shadow-md backdrop-blur-md;
	}
</style>
-->

<style lang="postcss">
	li {
		@apply hover:underline;
	}
</style>
