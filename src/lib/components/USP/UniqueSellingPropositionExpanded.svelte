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
  import Underline from '$assets/svg/Underline.svelte';
</script>

<section id="usp-expanded" class=" bg-pri sectionPy">
  <div
    class="layout text-ter flex space-y-3 lg:space-y-6 flex-col lg:text-right"
  >
    <h1
      in:fade={{
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
      in:fade={{
        duration: 500,
        delay: 250,
        easing: cubicInOut,
      }}
    >
      {subtitle}
    </h3>
  </div>

  <ul class=" bg-pri sectionPy">
    {#each pillars as item, i}
      <!-- <PillarExpanded {item} {i} /> -->
      <PillarExpandedV2 {item} {i} />
    {/each}
  </ul>

  <div class="layout bg-pri text-ter relative">
    <h3
      class="w-full lg:w-2/3 ml-auto"
      in:fade={{
        duration: 500,
        delay: 250,
        easing: cubicInOut,
      }}
    >
      {bottomText}
    </h3>
    <span
      class="absolute -bottom-8 right-[50%]"
      in:fly={{
        x: -100,
        y: 10,
        duration: 750,
        delay: 1000,
        easing: cubicInOut,
      }}
    >
      <Underline width={225} color="#8a6d7c" />
    </span>
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
