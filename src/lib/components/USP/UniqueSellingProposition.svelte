<script lang="ts">
  export let title: string;
  export let subtitle: string;
  export let pillars: Pillar[];

  import { uspBackground, background, font } from '$lib/stores/store';
  import type { Pillar } from '$types/responseInterfaces';
  import { fade, fly, slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import IntersectionObserver from 'svelte-intersection-observer';
  import PillarMobile from '$components/Pillar/PillarMobile.svelte';

  let expandedIndex = -1;

  function handleMouseOver(index: number) {
    expandedIndex = index;
  }

  let element;
  let intersecting = false;

  const titles = ['Wirtschaft', 'Ökologie', 'Soziales'];

  const pillarsWithIndex: Pillar[] = titles.map((title, index) => {
    const pillar = pillars.find((pillar) => pillar.titel === title);

    if (pillar) {
      return {
        ...pillar,
        index: index,
      };
    } else {
      return {
        index: index,
        titel: '',
        text: '',
        bild: { data: { attributes: { url: '' } } },
      };
    }
  });

  const wirtschaft = pillarsWithIndex[0];
  const ökologie = pillarsWithIndex[1];
  const soziales = pillarsWithIndex[2];
</script>

<section
  class="text-tertiary layout sectionPy"
  id="usp"
  style:background-color={$uspBackground}
  style:color={$font}
>
  <div class="flex space-y-6 flex-col lg:text-right" bind:this={element}>
    <IntersectionObserver {element} bind:intersecting once threshold={1}>
      {#if intersecting}
        <h1
          transition:fade={{
            duration: 500,
            delay: 0,
            easing: cubicInOut,
          }}
        >
          {title}
        </h1>
        <h3
          class="ml-auto w-full lg:w-[40%]"
          transition:fade={{
            duration: 500,
            delay: 250,
            easing: cubicInOut,
          }}
        >
          {subtitle}
        </h3>
      {/if}
    </IntersectionObserver>
  </div>

  <div
    class="hidden lg:grid grid-cols-2 grid-rows-2 gap-x-4 sectionPy text-tertiary"
  >
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div
      class="rounded-xl row-span-2 h-[60vh] relative group cursor-pointer"
      on:mouseover={() => handleMouseOver(wirtschaft.index)}
      on:mouseleave={() => (expandedIndex = -1)}
    >
      <div
        class="absolute bg-secondary w-full h-[5rem] group-hover:h-full rounded-b-xl group-hover:rounded-xl duration-[400ms] ease-in-out overflow-hidden bg-opacity-95 bottom-0"
      >
        {#if expandedIndex === wirtschaft.index}
          <h4
            class="absolute bottom-top left-0 p-8"
            in:fly={{ duration: 500, delay: 400 }}
            out:fly={{ duration: 100, delay: 0 }}
          >
            {wirtschaft.text}
          </h4>
        {/if}
      </div>
      <img
        src={wirtschaft.bild?.data.attributes.url}
        alt=""
        class="object-cover h-40 lg:h-full w-full rounded-xl"
      />
      <div>
        <h3
          class="absolute bottom-0 left-0 px-8 py-4 text-tertiary uppercase tracking-wider"
        >
          {wirtschaft.titel}
        </h3>
      </div>
    </div>

    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="w-full relative group cursor-pointer h-[29vh] row-span-1"
      on:mouseover={() => handleMouseOver(ökologie.index)}
      on:mouseleave={() => (expandedIndex = -1)}
    >
      <div
        class="absolute bg-secondary w-full h-[5rem] group-hover:h-full rounded-b-xl group-hover:rounded-xl duration-[400ms] ease-in-out overflow-hidden bg-opacity-95 bottom-0"
      >
        {#if expandedIndex === ökologie.index}
          <h4
            class="absolute bottom-top left-0 p-8"
            in:fly={{ duration: 500, delay: 300 }}
            out:fly={{ duration: 100, delay: 0 }}
          >
            {ökologie.text}
          </h4>
        {/if}
      </div>
      <img
        src={ökologie.bild?.data.attributes.url}
        alt=""
        class="object-cover h-40 lg:h-full w-full rounded-xl"
      />
      <div>
        <h3
          class="absolute bottom-0 left-0 px-8 py-4 duration-700 uppercase tracking-wider"
        >
          {ökologie.titel}
        </h3>
      </div>
    </div>

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div
      class="w-full h-[29vh] relative group cursor-pointer mt-auto"
      on:mouseover={() => handleMouseOver(soziales.index)}
      on:mouseleave={() => (expandedIndex = -1)}
    >
      <div
        class="absolute bg-secondary w-full h-[5rem] group-hover:h-full rounded-b-xl group-hover:rounded-xl duration-[400ms] ease-in-out overflow-hidden bg-opacity-95 bottom-0"
      >
        {#if expandedIndex === soziales.index}
          <h4
            class="absolute bottom-top left-0 p-8"
            in:fly={{ duration: 500, delay: 300 }}
            out:fly={{ duration: 100, delay: 0 }}
          >
            {soziales.text}
          </h4>
        {/if}
      </div>
      <img
        src={soziales.bild?.data.attributes.url}
        alt=""
        class="object-cover h-40 lg:h-full w-full rounded-xl"
      />
      <div>
        <h3
          class="absolute bottom-0 left-0 px-8 py-4 duration-700 uppercase tracking-wider"
        >
          {soziales.titel}
        </h3>
      </div>
    </div>

    <div class="sectionPb" />
  </div>

  <ul class="lg:hidden sectionPt space-y-12">
    {#each pillarsWithIndex as pillar (pillar.index)}
      <PillarMobile item={pillar} />
    {/each}
  </ul>
</section>

<style>
  section {
    transition: all 1s cubic-bezier(0.07, 0.95, 0, 1);
  }
</style>
