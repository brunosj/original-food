<script lang="ts">
  export let press: Press[];
  export let products: Product[];
  export let pressStatement: string;

  import { fade, fly, slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import IntersectionObserver from 'svelte-intersection-observer';
  import { background, font } from '$lib/stores/store';
  import type { Press, Product } from '$types/responseInterfaces';
  import Products from '$components/Product/Products.svelte';
  import PressCard from './PressCard.svelte';
  import PressCarousel from '$components/Carousel/PressCarousel.svelte';
  import Underline from '$assets/svg/Underline.svelte';

  let element;
  let intersecting = false;

  console.log(press);
</script>

<section
  class="sectionPt relative"
  id="press"
  style:background-color={$background}
>
  <div class="absolute hidden lg:block -top-[15vh] z-20 w-full">
    <Products items={products.slice().reverse()} />
  </div>

  <div
    class="pt-[0vh] lg:pt-[40vh] 2xl:pt-[30vh] pb-12 lg:pb-24 text-ter w-full z-20"
    bind:this={element}
  >
    <IntersectionObserver {element} bind:intersecting once threshold={0.2}>
      {#if intersecting}
        <div class="layout space-y-6 w-full lg:w-[60%]">
          <h2 class="relative inline-block">
            Die Spezialität aus dem Regenwald - für Viele der
            <span class="relative inline-block">
              <span
                class="absolute -bottom-6"
                in:fly={{
                  x: -100,
                  y: 10,
                  duration: 750,
                  delay: 1000,
                  easing: cubicInOut,
                }}
              >
                <Underline width={225} color="#467080" />
              </span>
              beste Kaffee
            </span> der Welt
          </h2>
        </div>
      {/if}
    </IntersectionObserver>
    <div class="sectionPt px-0 lg:px-24">
      <PressCarousel slides={press} />
    </div>
  </div>
</section>
