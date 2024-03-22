<script lang="ts">
  export let products: Product[];
  export let image: string;

  import type { Product } from '$types/responseInterfaces';
  import ProductCarousel from '$components/Carousel/ProductCarousel.svelte';
  import ImageHero from '$components/Hero/ImageHero.svelte';
  import Products from '$components/Product/Products.svelte';
  import { fade, fly, slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
</script>

<section class="relative">
  <div
    class="absolute hidden lg:block -top-[15vh] z-20 w-full"
    in:fly={{
      y: 50,
      duration: 500,
      delay: 250,
      easing: cubicInOut,
    }}
  >
    <Products items={products} />
  </div>

  <div class="block lg:hidden bg-pri pt-12 pb-6">
    <ProductCarousel slides={products} />
  </div>
  <div>
    <ImageHero {image} height="h-[40dvh] lg:h-[100dvh]" />
  </div>
</section>
