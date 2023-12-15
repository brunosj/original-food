<script lang="ts">
  export let statementTitle: String;
  export let statementText: String;
  export let items: Product[];

  import { onMount } from 'svelte';
  import { fade, fly, slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import IntersectionObserver from 'svelte-intersection-observer';
  import type { Product } from '$types/responseInterfaces';
  import Products from '$components/Product/Products.svelte';
  import Tree from '$assets/svg/svg_tree.svelte';
  import Carousel from '$components/Carousel/Carousel.svelte';
  import Wave1 from '$assets/svg/Wave1.svelte';
  import Wave2 from '$assets/svg/Wave2.svelte';
  import Wave from '$assets/svg/Wave.svelte';
  import WaveSoft from '$assets/svg/WaveSoft.svelte';

  let element;
  let intersecting = false;
  let intersectingBottom = false;
  let svgWidth: number;

  onMount(() => {
    svgWidth = window.innerWidth < 640 ? 400 : 1100;

    window.addEventListener('resize', () => {
      svgWidth = window.innerWidth < 640 ? 400 : 1100;
    });
  });
</script>

<section
  class="bg-sec sectionPy relative"
  id="statement"
  style:background-color="var(--color-pri)"
  bind:this={element}
>
  <IntersectionObserver {element} bind:intersecting once threshold={0}>
    {#if intersecting}
      <div
        class="absolute hidden lg:block -top-[5vh] lg:-top-[10vh] z-20 w-full"
        transition:fly={{
          y: 20,
          duration: 500,
          delay: 500,
          easing: cubicInOut,
        }}
      >
        <Products {items} />
      </div>
      <div class="block lg:hidden">
        <Carousel slides={items} type="Product" />
      </div>
    {/if}
  </IntersectionObserver>

  <div
    class="layout pt-[5vh] lg:pt-[35vh] pb-6 lg:pb-12 text-ter w-full lg:w-[55%] z-20"
  >
    <div class="space-y-6 lg:space-y-12">
      <IntersectionObserver {element} bind:intersecting once threshold={0}>
        {#if intersecting}
          <h1
            class="font-bold"
            id="statement-title"
            transition:fade={{
              duration: 500,
              delay: 0,
              easing: cubicInOut,
            }}
          >
            {statementTitle}
          </h1>
          <h3
            transition:fade={{
              duration: 500,
              delay: 250,
              easing: cubicInOut,
            }}
          >
            {statementText}
          </h3>
          <div
            class="absolute bottom-0 -right-0 lg:-right-24 opacity-10 overflow-hidden"
            transition:fade={{
              duration: 500,
              delay: 500,
              easing: cubicInOut,
            }}
          >
            <Tree width={svgWidth} color="#f5f3f5" />
          </div>
        {/if}
      </IntersectionObserver>
    </div>
  </div>
</section>
