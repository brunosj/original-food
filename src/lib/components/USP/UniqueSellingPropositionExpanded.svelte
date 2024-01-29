<script lang="ts">
  export let title: string;
  export let subtitle: string;
  export let bottomText: string;
  export let pillars: Pillar[];
  import Products from '$components/Product/Products.svelte';

  import type { Pillar, Product } from '$types/responseInterfaces';
  import { fade, fly, slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import IntersectionObserver from 'svelte-intersection-observer';
  import PillarExpanded from '$components/Pillar/PillarExpanded.svelte';
  import PillarExpandedV2 from '$components/Pillar/PillarExpandedV2.svelte';

  let element;
  let intersecting = false;
</script>

<section id="usp-expanded">
  <div
    class="layout sectionPt bg-pri text-ter flex space-y-3 lg:space-y-6 flex-col lg:text-right pb-12"
    bind:this={element}
  >
    <h1
      transition:fade={{
        duration: 500,
        delay: 0,
        easing: cubicInOut,
      }}
      class="font-bold"
    >
      {title}
    </h1>
    <h3
      class="ml-auto w-full lg:w-[40%]"
      transition:fade={{
        duration: 500,
        delay: 250,
        easing: cubicInOut,
      }}
    >
      {subtitle}
    </h3>
  </div>

  <ul class="sectionPb bg-pri space-y-6 lg:space-y-0">
    {#each pillars as item, i}
      <!-- <PillarExpanded {item} {i} /> -->
      <PillarExpandedV2 {item} {i} />
    {/each}
  </ul>

  <div class="layout pb-0 lg:pb-64 bg-pri text-ter">
    <h3
      class="w-full lg:w-2/3 ml-auto"
      transition:fade={{
        duration: 500,
        delay: 250,
        easing: cubicInOut,
      }}
    >
      {bottomText}
    </h3>
  </div>
</section>

<style>
  section {
    transition: all 1s cubic-bezier(0.07, 0.95, 0, 1);
  }

  h1 {
    transition: all 1s cubic-bezier(0.07, 0.95, 0, 1);
  }
</style>
