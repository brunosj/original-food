<script lang="ts">
  export let items: Product[];
  export let bgTop: 'blue' | 'purple';
  export let bgBottom: 'blue' | 'purple';
  export let padding: boolean = false;

  import type { Product } from '$types/responseInterfaces';
  import Products from './Products.svelte';
  import ProductCarousel from '$components/Carousel/ProductCarousel.svelte';
</script>

<section
  class={`relative ${bgTop === 'blue' ? 'bg-pri' : 'bg-sec'}  ${padding === true ? 'sectionPy' : ''}`}
>
  <div
    class={`${bgBottom === 'blue' ? 'bg-pri' : 'bg-sec'} z-0 absolute bottom-0 h-1/2 w-full`}
  />
  <div class="hidden lg:block w-full">
    <Products {items} />
  </div>

  <div class="block lg:hidden bg-pri pt-12">
    <ProductCarousel slides={items} />
  </div>
</section>
