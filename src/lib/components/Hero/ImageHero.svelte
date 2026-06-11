<script lang="ts">
	let { image = undefined, height }: { image?: string; height: string } = $props();
</script>

<div class={`${height} w-full top-0 -z-10  relative`} id="hero2">
	{#if image}
		<img src={image} alt="Entlebuch Bild" class="object-cover h-full w-full" />
	{/if}
</div>

<style>
	.gradient-overlay {
		position: relative;
		overflow: hidden;
	}

	.gradient-overlay::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.5),
			rgba(0, 0, 0, 0) 25%,
			rgba(0, 0, 0, 0)
		);
		z-index: 5;
	}
</style>
