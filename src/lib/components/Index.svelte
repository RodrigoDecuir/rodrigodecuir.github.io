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
	<button class="index px-2" on:mouseenter={showDropdown}>Index</button>
{/if}

{#if isDropdownVisible}
	<!-- svelte-ignore a11y-no-static-element-interactions &#9776;-->
	<div class="index" on:mouseleave={hideDropdown}>
		<h1>Index</h1>
		<nav>
			<ul>
				<li>
					&nbsp;&nbsp;&nbsp;&#9900;<a href="">Integral</a>&nbsp;
				</li>
				<li>
					&nbsp;&nbsp;&nbsp;&#9900;<a href="">Diferencial</a>
				</li>
				<li>
					&nbsp;&nbsp;&nbsp;&#9900;<a href="">Writing</a>
				</li>
			</ul>
		</nav>
	</div>
{/if}

<style lang="postcss">
	a {
		@apply underline decoration-[#99e6ab] decoration-2 underline-offset-8;
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
