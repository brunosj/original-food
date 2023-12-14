<script lang="ts">
  export let statementTitle: String;
  export let statementText: String;
  export let items: Product[];

  import { onMount } from 'svelte';
  import type { Product } from '$types/responseInterfaces';
  import Products from '$components/Product/Products.svelte';
  import Tree from '$assets/svg/svg_tree.svelte';
  import Carousel from '$components/Carousel/Carousel.svelte';
  import Wave1 from '$assets/svg/Wave1.svelte';
  import Wave2 from '$assets/svg/Wave2.svelte';
  import Wave from '$assets/svg/Wave.svelte';
  import WaveSoft from '$assets/svg/WaveSoft.svelte';

  let svgWidth: number;

  onMount(() => {
    svgWidth = window.innerWidth < 640 ? 400 : 700;

    window.addEventListener('resize', () => {
      svgWidth = window.innerWidth < 640 ? 400 : 700;
    });
  });
</script>

<section class="bg-secondary sectionPy relative">
  <div class="absolute hidden lg:block -top-[5vh] lg:-top-[10vh] z-20">
    <Products {items} />
  </div>
  <div class="block lg:hidden">
    <Carousel slides={items} type="Product" />
  </div>

  <div
    class="layout pt-[5vh] lg:pt-[45vh] pb-12 lg:pb-24 text-tertiary w-full lg:w-[55%] z-20 space-y-6 lg:space-y-12"
  >
    <h2>{statementTitle}</h2>
    <h3>{statementText}</h3>
  </div>
  <div class="absolute bottom-0 right-0 opacity-30">
    <Tree width={svgWidth} color="#467080" />
  </div>
</section>
