<script lang="ts">
  export let products: Product[];
  export let image: string;

  import type { Product } from '$types/responseInterfaces';
  import Carousel from '$components/Carousel/Carousel.svelte';
  import ImageHero from '$components/Hero/ImageHero.svelte';
  import Products from '$components/Product/Products.svelte';
  import { fade, fly, slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import IntersectionObserver from 'svelte-intersection-observer';

  let element;
  let intersecting = false;
</script>

<section class="relative" bind:this={element}>
  <IntersectionObserver {element} bind:intersecting once threshold={0}>
    {#if intersecting}
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
    {/if}
  </IntersectionObserver>
  <div class="block lg:hidden bg-pri pt-12 pb-6">
    <Carousel slides={products} type="Product" />
  </div>
  <div>
    <ImageHero {image} height="h-[40svh] lg:h-[75svh]" />
  </div>
</section>
