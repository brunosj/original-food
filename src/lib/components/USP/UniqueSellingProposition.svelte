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
  import ArrowRight from 'virtual:icons/mdi-light/arrow-right';
  import ButtonRound from '$components/Button/ButtonRound.svelte';

  let expandedIndex = -1;

  function handleMouseOver(index: number) {
    expandedIndex = index;
  }

  const titles = ['Wirtschaft', 'Ökologie', 'Soziales'];

  const pillarsWithIndex: Pillar[] = titles.map((title, index) => {
    const pillar = pillars.find((pillar) => pillar.attributes.titel === title);

    if (pillar) {
      return {
        ...pillar,
        index: index,
      };
    } else {
      return {
        index: index,
        attributes: {
          titel: '',
          textKurz: '',
          textLang: '',
          bild: { data: { attributes: { url: '' } } },
        },
      };
    }
  });

  const wirtschaft = pillarsWithIndex[0];
  const ökologie = pillarsWithIndex[1];
  const soziales = pillarsWithIndex[2];
</script>

<section
  class="text-ter layout sectionPt lg:pb-24"
  id="usp"
  style:background-color={$uspBackground}
  style:color={$font}
>
  <div class="flex space-y-3 lg:space-y-6 flex-col lg:text-right">
    <h1
      in:fade={{
        duration: 500,
        delay: 0,
        easing: cubicInOut,
      }}
      class={$uspBackground === 'var(--color-pri)'
        ? 'text-ter font-bold'
        : 'text-sec font-bold'}
    >
      {title}
    </h1>
    <h3
      class="ml-auto w-full lg:w-[40%]"
      in:fade={{
        duration: 500,
        delay: 250,
        easing: cubicInOut,
      }}
    >
      {subtitle}
    </h3>
  </div>

  <div
    class="hidden xl:grid grid-cols-2 grid-rows-2 gap-x-4 sectionPt text-ter"
  >
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <a
      href="/projekte"
      class="rounded-xl row-span-2 h-[60vh] relative group cursor-pointer"
      on:mouseover={() => handleMouseOver(wirtschaft.index)}
      on:mouseleave={() => (expandedIndex = -1)}
    >
      <div
        class={`absolute ${
          $uspBackground === 'var(--color-pri)'
            ? 'bg-ter text-black'
            : 'bg-sec text-ter'
        } w-full h-[4rem] group-hover:h-full rounded-b-xl group-hover:rounded-xl duration-[400ms] ease-in-out overflow-hidden bg-opacity-95 bottom-0`}
      >
        {#if expandedIndex === wirtschaft.index}
          <div
            class="absolute bottom-top left-0 p-8"
            in:fly={{ duration: 500, delay: 300 }}
            out:fly={{ duration: 100, delay: 0 }}
          >
            <h4>
              {wirtschaft.attributes.textKurz}
            </h4>
          </div>
          <div
            class="absolute bottom-0 right-0 pr-8 pb-4 flex flex-col"
            in:fly={{ duration: 500, delay: 300 }}
            out:fly={{ duration: 100, delay: 0 }}
          >
            <ButtonRound path="/projekte">Mehr erfahren</ButtonRound>
          </div>
        {/if}
      </div>
      <img
        src={wirtschaft.attributes.bild?.data.attributes.url}
        alt=""
        class="object-cover h-40 lg:h-full w-full rounded-xl"
      />
      <div>
        <h3
          class={`absolute bottom-0 left-0 px-8 py-4 ${
            $uspBackground === 'var(--color-pri)' ? ' text-black' : ' text-ter'
          } uppercase tracking-wider`}
        >
          {wirtschaft.attributes.titel}
        </h3>
      </div>
    </a>

    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <a
      href="/projekte"
      class="w-full relative group cursor-pointer h-[29vh] row-span-1"
      on:mouseover={() => handleMouseOver(ökologie.index)}
      on:mouseleave={() => (expandedIndex = -1)}
    >
      <div
        class={`absolute ${
          $uspBackground === 'var(--color-pri)'
            ? 'bg-ter text-black'
            : 'bg-sec text-ter'
        } w-full h-[4rem] group-hover:h-full rounded-b-xl group-hover:rounded-xl duration-[400ms] ease-in-out overflow-hidden bg-opacity-95 bottom-0`}
      >
        {#if expandedIndex === ökologie.index}
          <div
            class="absolute bottom-top left-0 p-8"
            in:fly={{ duration: 500, delay: 300 }}
            out:fly={{ duration: 100, delay: 0 }}
          >
            <h4>
              {ökologie.attributes.textKurz}
            </h4>
          </div>
          <div
            class="absolute bottom-0 right-0 pr-8 pb-4 flex flex-col"
            in:fly={{ duration: 500, delay: 300 }}
            out:fly={{ duration: 100, delay: 0 }}
          >
            <ButtonRound path="/projekte">Mehr erfahren</ButtonRound>
          </div>
        {/if}
      </div>
      <img
        src={ökologie.attributes.bild?.data.attributes.url}
        alt=""
        class="object-cover h-40 lg:h-full w-full rounded-xl"
      />
      <div>
        <h3
          class={`absolute bottom-0 left-0 px-8 py-4 duration-700 uppercase tracking-wider ${
            $uspBackground === 'var(--color-pri)' ? ' text-black' : ' text-ter'
          }`}
        >
          {ökologie.attributes.titel}
        </h3>
      </div>
    </a>

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <a
      href="/projekte"
      class="w-full h-[29vh] relative group cursor-pointer mt-auto"
      on:mouseover={() => handleMouseOver(soziales.index)}
      on:mouseleave={() => (expandedIndex = -1)}
    >
      <div
        class={`absolute ${
          $uspBackground === 'var(--color-pri)'
            ? 'bg-ter text-black'
            : 'bg-sec text-ter'
        } w-full h-[4rem] group-hover:h-full rounded-b-xl group-hover:rounded-xl duration-[400ms] ease-in-out overflow-hidden bg-opacity-95 bottom-0`}
      >
        {#if expandedIndex === soziales.index}
          <div
            class="absolute bottom-top left-0 p-8 flex flex-col"
            in:fly={{ duration: 500, delay: 300 }}
            out:fly={{ duration: 100, delay: 0 }}
          >
            <h4>
              {soziales.attributes.textKurz}
            </h4>
          </div>
          <div
            class="absolute bottom-0 right-0 pr-8 pb-4 flex flex-col"
            in:fly={{ duration: 500, delay: 300 }}
            out:fly={{ duration: 100, delay: 0 }}
          >
            <ButtonRound path="/projekte">Mehr erfahren</ButtonRound>
          </div>
        {/if}
      </div>
      <img
        src={soziales.attributes.bild?.data.attributes.url}
        alt=""
        class="object-cover h-40 lg:h-full w-full rounded-xl"
      />
      <div>
        <h3
          class={`absolute bottom-0 left-0 px-8 py-4 duration-700 uppercase tracking-wider ${
            $uspBackground === 'var(--color-pri)' ? ' text-black' : ' text-ter'
          }`}
        >
          {soziales.attributes.titel}
        </h3>
      </div>
    </a>
  </div>

  <ul class="xl:hidden sectionPt space-y-6">
    {#each pillarsWithIndex as pillar, i}
      <PillarMobile item={pillar} />
    {/each}
  </ul>
</section>

<style>
  section {
    transition: all 1s cubic-bezier(0.07, 0.95, 0, 1);
  }

  h1 {
    transition: all 1s cubic-bezier(0.07, 0.95, 0, 1);
  }
</style>
