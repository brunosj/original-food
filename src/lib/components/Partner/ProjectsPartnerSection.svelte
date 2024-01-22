<script lang="ts">
  export let logos: Logo[];
  export let title: string;
  export let subtitle: string;
  export let displayHeader = true;
  export let products: Product[];

  import type { Logo, Product } from '$types/responseInterfaces';
  import { fade, fly, slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import IntersectionObserver from 'svelte-intersection-observer';
  import PillarExpanded from '$components/Pillar/PillarExpanded.svelte';
  import ProjectsPartnerChild from './ProjectsPartnerChild.svelte';
  import Products from '$components/Product/Products.svelte';
  import Carousel from '$components/Carousel/Carousel.svelte';

  let element;
  let intersecting = false;
</script>

<section id="partners" bind:this={element} class="relative bg-sec">
  <IntersectionObserver {element} bind:intersecting once threshold={1}>
    {#if intersecting}
      {#if displayHeader}
        <div
          class="absolute hidden lg:block -top-[15vh] z-20 w-full"
          transition:fly={{
            y: 50,
            duration: 500,
            delay: 250,
            easing: cubicInOut,
          }}
        >
          <Products items={products} />
        </div>

        <div class="block lg:hidden bg-pri pt-12 pb-6">
          <Carousel slides={products} type="Product" />
        </div>
        <div
          class="layout sectionPy text-ter flex space-y-3 lg:space-y-6 flex-col lg:pt-[50vh]"
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
            class="lg:w-1/2 w-full"
            transition:fade={{
              duration: 500,
              delay: 250,
              easing: cubicInOut,
            }}
          >
            {subtitle}
          </h3>
        </div>
      {/if}
      <ul>
        {#each logos as item, i}
          <ProjectsPartnerChild {item} i={i + (displayHeader ? 0 : 1)} />
        {/each}
      </ul>

      {#if !displayHeader}
        <div class="bg-sec sectionPy hidden lg:block"></div>
      {/if}
    {/if}
  </IntersectionObserver>
</section>
