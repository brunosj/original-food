<script lang="ts">
	let { image = undefined }: { image?: string } = $props();
</script>

<section class={`w-full top-0 -z-10  relative`} id="map">
	{#if image}
		<img src={image} alt="Entlebuch Bild" class="object-cover h-full w-full" loading="eager" />
	{/if}
</section>
