<script lang="ts">
	let {
		open = $bindable(false),
		duoLine,
		class: className,
		color,
		onclick,
		onkeydown,
		onkeypress
	}: {
		open?: boolean;
		duoLine: boolean;
		class?: string;
		color?: string;
		onclick?: (event: MouseEvent) => void;
		onkeydown?: (event: KeyboardEvent) => void;
		onkeypress?: (event: KeyboardEvent) => void;
	} = $props();

	const EASING = `cubic-bezier(0.4, 0, 0.2, 1)`;
	const lineTransition = $derived(
		open
			? `top 150ms 50ms ${EASING}, transform 150ms 200ms ${EASING}`
			: `top 150ms 200ms ${EASING}, transform 150ms 50ms ${EASING}`
	);
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="hamburger {className || ''}" class:open style:color {onclick} {onkeydown} {onkeypress}>
	<span
		class="line line--first"
		style="transition: {lineTransition}; {open ? 'transform: rotate(45deg)' : ''}"
	/>
	{#if !duoLine}
		<span
			class="line line--middle"
			style="transition: {lineTransition}; {open ? 'transform: rotate(45deg)' : ''}"
		/>
	{/if}
	<span
		class="line line--bottom"
		style="transition: {lineTransition}; {open ? 'transform: rotate(-45deg)' : ''}"
	/>
</div>

<style>
	.hamburger {
		position: relative;
		cursor: pointer;
		height: 0.8rem;
		width: 1.3rem;
		outline: none !important;
	}

	.line {
		position: absolute;
		left: 0;
		background: currentColor;
		width: 100%;
		height: var(--line-width, 2px);
		border-radius: var(--line-width, 2px);
	}

	.line--first {
		top: 0;
	}
	.line--middle {
		top: 50%;
	}
	.line--bottom {
		top: 100%;
	}

	.open .line {
		top: 50% !important;
	}
</style>
