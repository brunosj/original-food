<script lang="ts">
  export let press: Press[];
  export let pressFooter: string;

  import { fly } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import IntersectionObserver from 'svelte-intersection-observer';
  import { background } from '$lib/stores/store';
  import type { Press } from '$types/responseInterfaces';
  import PressCarousel from '$components/Carousel/PressCarousel.svelte';
  import Underline from '$assets/svg/Underline.svelte';
  let element;
  let intersecting = false;
</script>

<section
  class="sectionPy relative"
  id="press"
  style:background-color={$background}
>
  <div class=" text-ter w-full z-20" bind:this={element}>
    <div class="layout space-y-6 w-full lg:w-[60%]">
      <IntersectionObserver {element} bind:intersecting once threshold={0.2}>
        {#if intersecting}
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
        {/if}
      </IntersectionObserver>
    </div>
    <div class="sectionPt px-0 md:px-12 xl:px-24 2xl:px-40">
      <PressCarousel slides={press} {pressFooter} />
    </div>
  </div>
</section>
