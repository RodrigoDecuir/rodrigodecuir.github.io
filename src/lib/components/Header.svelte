<script lang="ts">
	let isDropdownVisible = false;

	function showDropdown() {
		isDropdownVisible = true;
	}

	function hideDropdown() {
		isDropdownVisible = false;
	}
</script>

{#if !isDropdownVisible}
	<button class="nav px-2" on:mouseenter={showDropdown}>Table of Contents</button>
{/if}

{#if isDropdownVisible}
	<!-- svelte-ignore a11y-no-static-element-interactions &#9776;-->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="nav" on:mouseleave={hideDropdown}>
		<h1>Table of Contents</h1>
		<nav>
			<ul>
				<li>
					&nbsp;&nbsp;&nbsp;&#9900;&nbsp;<a class="decoration-[#A6B3DF]" href="/">Home</a>
				</li>
				<li>
					&nbsp;&nbsp;&nbsp;&#9900;&nbsp;<a class="decoration-[#99e6ab]" href="/notes">Notes</a>
				</li>
                <li>
					&nbsp;&nbsp;&nbsp;&#9900;&nbsp;<a class="decoration-[#e099e6]" href="/projects">Projects</a>
				</li>
			</ul>
		</nav>
	</div>
{/if}

<style lang="postcss">
	a {
		@apply decoration-2 underline-offset-8 hover:underline;
	}
	h1 {
		@apply px-1 py-2 font-semibold;
	}
	ul {
		@apply overflow-hidden rounded-xl;
	}
	li {
		@apply py-2;
	}
</style>
