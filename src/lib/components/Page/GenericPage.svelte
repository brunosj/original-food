<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';
  import { onMount, afterUpdate } from 'svelte';
  import { processMarkdownLinks } from '$lib/utils/processMarkdownLinks';
  import type { Picture } from '$types/responseInterfaces';
  export let title: string;
  export let text: String;
  export let image: Picture;

  let markdownRef: Element;

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
    <div class="order-2 lg:order-1">
      <img
        src={image.data.attributes.url}
        alt={title}
        class="w-full h-full object-cover"
      />
    </div>
    <div
      class="col-span-2 layout sectionPy markdown order-1 lg:order-2 bg-ter"
      bind:this={markdownRef}
    >
      <SvelteMarkdown source={text} />
    </div>
  </div>
</article>
