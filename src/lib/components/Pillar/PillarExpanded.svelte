<script lang="ts">
	import type { Pillar } from '$types/responseInterfaces';
	import SvelteMarkdown from '@humanspeak/svelte-markdown';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { getMediaUrl } from '$lib/utils/media';

	let { item, i }: { item: Pillar; i: number } = $props();

	let element = $state<HTMLElement | undefined>(undefined);
	let intersecting = $state(false);
</script>

<li class={i % 2 === 0 ? 'bg-ter ' : 'bg-pri '}>
	<div class="lg:grid grid-cols-3" bind:this={element}>
		<div class={`h-full col-span-1 ${i % 2 === 0 ? 'order-first' : 'order-last'}`}>
			<IntersectionObserver {element} bind:intersecting once threshold={0.25}>
				{#if intersecting}
					<div class="relative h-full">
						<div
							class={`absolute inset-0  ${
								i % 2 === 0
									? 'bg-gradient-to-t lg:bg-gradient-to-l from-ter via-gray-100/20'
									: 'bg-gradient-to-t lg:bg-gradient-to-r from-pri via-gray-100/20'
							}}`}
						/>

						{#if getMediaUrl(item.attributes.bild2)}
							<div class="h-40 lg:h-full">
								<img
									src={getMediaUrl(item.attributes.bild2)}
									alt=""
									class="object-cover h-full w-full"
								/>
							</div>
						{/if}
					</div>
				{/if}
			</IntersectionObserver>
		</div>
		<div
			class={`layout sectionPySub m-auto col-span-2 space-y-3 lg:space-y-6 ${
				i % 2 === 0 ? 'order-last' : 'order-first text-ter'
			}`}
		>
			<h2>
				{item.attributes.titel}
			</h2>
			<div class="markdown m-auto">
				<SvelteMarkdown source={item.attributes.textLang ?? ''} />
			</div>
		</div>
	</div>
</li>
