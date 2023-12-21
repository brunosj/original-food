<script lang="ts">
  export let item: Pillar;
  export let i: number;

  import type { Pillar } from '$types/responseInterfaces';
  import SvelteMarkdown from 'svelte-markdown';
  import { fade, fly, slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import IntersectionObserver from 'svelte-intersection-observer';

  let element;
  let intersecting = false;

  const transitionEven = {
    easing: cubicInOut,
    x: -200,
    duration: 500,
    delay: 500,
  };
  const transitionOdd = {
    easing: cubicInOut,
    x: 200,
    duration: 500,
    delay: 0,
  };

  const getTransition = (index: number) => {
    return index % 2 === 0 ? transitionEven : transitionOdd;
  };
</script>

<li class={i % 2 === 0 ? 'bg-ter ' : 'bg-pri '}>
  <div class="lg:grid grid-cols-3" bind:this={element}>
    <div
      class={`h-full col-span-1 ${i % 2 === 0 ? 'order-first' : 'order-last'}`}
    >
      <IntersectionObserver {element} bind:intersecting once threshold={0.25}>
        {#if intersecting}
          <div class="relative h-full">
            <div
              class={`absolute inset-0  ${
                i % 2 === 0
                  ? 'bg-gradient-to-t lg:bg-gradient-to-l from-ter via-gray-100/20'
                  : 'bg-gradient-to-t lg:bg-gradient-to-r from-pri via-gray-100/20'
              }}`}
            />

            <div class="h-40 lg:h-full">
              <img
                src={item.attributes.bild2?.data.attributes.url}
                alt=""
                class="object-cover h-full w-full"
              />
            </div>
          </div>
        {/if}
      </IntersectionObserver>
    </div>
    <div
      class={`layout sectionPySub m-auto col-span-2 space-y-3 lg:space-y-6 ${
        i % 2 === 0 ? 'order-last' : 'order-first text-ter'
      }`}
    >
      <h2>
        {item.attributes.titel}
      </h2>
      <div class="markdown m-auto">
        <SvelteMarkdown source={item.attributes.textLang} />
      </div>
    </div>
  </div>
</li>
