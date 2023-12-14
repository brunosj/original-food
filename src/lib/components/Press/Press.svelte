<script lang="ts">
  export let press: Press[];
  export let products: Product[];
  export let pressStatement: string;

  import type { Press, Product } from '$types/responseInterfaces';
  import Products from '$components/Product/Products.svelte';
  import PressCard from './PressCard.svelte';
  import Carousel from '$components/Carousel/Carousel.svelte';

  function shuffleArray(array: Product[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
</script>

<section class="bg-secondary sectionPy relative">
  <div class="absolute hidden lg:block -top-[30vh] z-20">
    <Products items={shuffleArray(products)} />
  </div>
  <div class="block lg:hidden">
    <Carousel slides={products} type="Product" />
  </div>

  <div class="pt-[5vh] lg:pt-[15vh] pb-12 lg:pb-24 text-tertiary w-full z-20">
    <div class="layout space-y-6 w-full lg:w-[60%]">
      <h2>{pressStatement}</h2>
    </div>
    <div class="sectionPt px-0 lg:px-24">
      <Carousel slides={press} type="Press" />
    </div>
  </div>
</section>
