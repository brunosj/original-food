<script lang="ts">
	import SvelteMarkdown from '@humanspeak/svelte-markdown';
	import { onMount } from 'svelte';
	import { processMarkdownLinks } from '$lib/utils/processMarkdownLinks';
	import type { Picture } from '$types/responseInterfaces';
	import { getMediaUrl } from '$lib/utils/media';

	let { title, text, image }: { title: string; text: string; image: Picture } = $props();

	let markdownRef = $state<Element | undefined>(undefined);
	const imageUrl = $derived(getMediaUrl(image));

	onMount(() => {
		if (markdownRef) processMarkdownLinks(markdownRef);
	});
	$effect(() => {
		if (markdownRef) processMarkdownLinks(markdownRef);
	});
</script>

<article class="min-h-[100vh] bg-pri">
	<div class="py-12 lg:py-32 bg-sec">
		<h1 class="text-ter layout">
			{title}
		</h1>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-3">
		{#if imageUrl}
			<div class="order-2 lg:order-1">
				<img src={imageUrl} alt={title} class="w-full h-full object-cover" />
			</div>
		{/if}
		<div
			class="{imageUrl
				? 'col-span-2'
				: 'col-span-1 lg:col-span-3'} layout sectionPy markdown order-1 lg:order-2 bg-ter"
			bind:this={markdownRef}
		>
			<SvelteMarkdown source={text} />
		</div>
	</div>
</article>
