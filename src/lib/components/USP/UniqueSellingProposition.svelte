<script lang="ts">
  export let title: string;
  export let subtitle: string;
  export let pillars: Pillar[];

  import IntersectionObserver from 'svelte-intersection-observer';
  import type { Pillar } from '$types/responseInterfaces';
  import { cubicInOut } from 'svelte/easing';
  import { fade, fly } from 'svelte/transition';
  import { slide } from 'svelte/transition';

  let expandedIndex = -1;

  function handleMouseOver(index: number) {
    expandedIndex = index;
  }

  const colors = ['#8A6D7C', '#CACAAA', '#C8AB83'];
  const titles = ['Wirtschaft', 'Ökologie', 'Soziales'];

  const pillarsWithColorsAndIndex = titles.map((title, index) => {
    const pillar = pillars.find((pillar) => pillar.titel === title);
    return {
      ...pillar,
      color: colors[index],
      index: index,
    };
  });

  const wirtschaft = pillarsWithColorsAndIndex[0];
  const ökologie = pillarsWithColorsAndIndex[1];
  const soziales = pillarsWithColorsAndIndex[2];
</script>

<section class="bg-primary text-tertiary layout sectionPy">
  <div class="flex space-y-6 flex-col lg:text-right">
    <h1>{title}</h1>
    <h3 class="ml-auto w-full lg:w-[45%]">{subtitle}</h3>
  </div>

  <div class="lg:grid grid-cols-2 gap-6 sectionPt space-y-6 lg:space-y-0">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div
      class="rounded-xl h-2/3 relative group cursor-pointer"
      on:mouseover={() => handleMouseOver(wirtschaft?.index)}
      on:mouseleave={() => (expandedIndex = -1)}
    >
      <div
        class="hidden lg:block absolute bg-secondary right-0 w-[40px] group-hover:w-full h-full rounded-r-xl group-hover:rounded-xl duration-[400ms] ease-in-out overflow-hidden bg-opacity-95"
      >
        {#if expandedIndex === wirtschaft?.index}
          <h4
            class="hidden lg:block absolute bottom-top left-0 p-8 text-tertiary"
            in:fly={{ duration: 500, delay: 400 }}
            out:fly={{ duration: 100, delay: 0 }}
          >
            {wirtschaft?.text}
          </h4>
        {/if}
      </div>
      <img
        src={wirtschaft?.bild?.data.attributes.url}
        alt=""
        class="object-cover h-40 lg:h-full w-full rounded-xl"
      />
      <div>
        <div
          class="block lg:hidden bg-secondary px-4 py-2 rounded-b-xl text-black"
        >
          <h2>
            {wirtschaft?.titel}
          </h2>
        </div>
        <h2
          class="hidden lg:block absolute bottom-0 left-0 p-8 text-tertiary uppercase"
        >
          {wirtschaft?.titel}
        </h2>
      </div>
    </div>
    <div class="block lg:hidden">
      <h4>{wirtschaft?.text}</h4>
    </div>

    <div class="flex flex-col space-y-6 lg:space-y-0">
      <!-- svelte-ignore a11y-mouse-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="w-full h-1/3 relative group cursor-pointer"
        on:mouseover={() => handleMouseOver(ökologie?.index)}
        on:mouseleave={() => (expandedIndex = -1)}
      >
        <div
          class="hidden lg:block absolute bg-[#CACAAA] right-0 w-[40px] group-hover:w-full h-full rounded-r-xl group-hover:rounded-xl duration-[400ms] ease-in-out overflow-hidden bg-opacity-95"
        >
          {#if expandedIndex === ökologie?.index}
            <h4
              class="hidden lg:block absolute bottom-top left-0 p-8 text-black"
              in:fly={{ duration: 500, delay: 300 }}
              out:fly={{ duration: 100, delay: 0 }}
            >
              {ökologie?.text}
            </h4>
          {/if}
        </div>
        <img
          src={ökologie?.bild?.data.attributes.url}
          alt=""
          class="object-cover h-40 lg:h-full w-full rounded-xl"
        />
        <div>
          <div
            class="block lg:hidden bg-[#CACAAA] px-4 py-2 rounded-b-xl text-black"
          >
            <h2>
              {ökologie?.titel}
            </h2>
          </div>
          <h2
            class="hidden lg:block absolute bottom-0 left-0 p-8 group-hover:text-black duration-700 uppercase"
          >
            {ökologie?.titel}
          </h2>
        </div>
      </div>
      <div class="block lg:hidden">
        <h4>{wirtschaft?.text}</h4>
      </div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-mouse-events-have-key-events -->
      <div
        class="w-full h-1/3 relative group cursor-pointer"
        on:mouseover={() => handleMouseOver(soziales?.index)}
        on:mouseleave={() => (expandedIndex = -1)}
      >
        <div
          class="hidden lg:block absolute bg-[#C8AB83] right-0 w-[40px] group-hover:w-full h-full rounded-r-xl group-hover:rounded-xl duration-[400ms] ease-in-out overflow-hidden bg-opacity-95"
        >
          {#if expandedIndex === soziales?.index}
            <h4
              class="hidden lg:block absolute bottom-top left-0 p-8 text-black"
              in:fly={{ duration: 500, delay: 300 }}
              out:fly={{ duration: 100, delay: 0 }}
            >
              {soziales?.text}
            </h4>
          {/if}
        </div>
        <img
          src={soziales?.bild?.data.attributes.url}
          alt=""
          class="object-cover h-40 lg:h-full w-full rounded-xl"
        />
        <div>
          <div
            class="block lg:hidden bg-[#C8AB83] px-4 py-2 rounded-b-xl text-black"
          >
            <h2>
              {soziales?.titel}
            </h2>
          </div>
          <h2
            class="hidden lg:block absolute bottom-0 left-0 p-8 group-hover:text-black duration-700 uppercase"
          >
            {soziales?.titel}
          </h2>
        </div>
      </div>
      <div class="block lg:hidden">
        <h4>{wirtschaft?.text}</h4>
      </div>
    </div>
  </div>
</section>
