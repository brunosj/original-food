<script lang="ts">
  export let title: string;
  export let text: String;
  export let image: Picture;

  import SvelteMarkdown from 'svelte-markdown';
  import { onMount, afterUpdate } from 'svelte';
  import { processMarkdownLinks } from '$lib/utils/processMarkdownLinks';
  import type { Picture } from '$types/responseInterfaces';
  import { getMediaUrl } from '$lib/utils/media';

  let markdownRef: Element;
  $: imageUrl = getMediaUrl(image);

  onMount(() => processMarkdownLinks(markdownRef));
  afterUpdate(() => processMarkdownLinks(markdownRef));
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
        <img
          src={imageUrl}
          alt={title}
          class="w-full h-full object-cover"
        />
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
