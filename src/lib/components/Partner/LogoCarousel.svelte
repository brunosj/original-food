<script lang="ts">
	import type { Logo } from '$types/responseInterfaces';
	import Marquee from 'svelte-fast-marquee';
	import { getMediaUrl } from '$lib/utils/media';

	let { logos }: { logos: Logo[] } = $props();
</script>

<section class="relative bg-white" id="">
	<a href="/projekte#partners">
		<div class="flex">
			<Marquee speed={60} gradientWidth="10%" gap="2%">
				{#each logos as logo}
					{#if getMediaUrl(logo.attributes.bild)}
						<div class="h-32 lg:h-64">
							<img
								src={getMediaUrl(logo.attributes.bild)}
								alt={logo.attributes.titel}
								class="object-contain h-full"
							/>
						</div>
					{/if}
				{/each}
			</Marquee>
		</div>
	</a>
</section>

<style>
	section {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
</style>
