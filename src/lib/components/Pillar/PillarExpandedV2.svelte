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

<li class="px-0 md:px-12 xl:px-24 2xl:px-40 bg-pri" bind:this={element}>
  <div
    class=" lg:grid grid-cols-2"
    in:fly={{
      y: 50,
      duration: 500,
      delay: 500,
      easing: cubicInOut,
    }}
  >
    <div class={`h-full ${i % 2 === 0 ? 'order-first' : 'order-last'}`}>
      <img
        src={item.attributes.bild2?.data.attributes.url}
        alt=""
        class={`object-cover h-56 lg:h-full w-full ${
          i === 0 ? 'lg:rounded-tl-xl ' : ''
        } ${i === 2 ? 'rounded-bl-xl' : ''}`}
      />
    </div>
    <div
      class={`bg-ter h-full flex flex-col justify-center py-6 lg:py-12 px-8 lg:px-16 m-auto space-y-3 lg:space-y-6 ${
        i === 0 ? 'lg:rounded-tr-xl' : ''
      } ${i === 2 ? 'rounded-br-xl' : ''}`}
    >
      <h2 class="mt-3">
        {item.attributes.titel}
      </h2>

      <div class="markdown m-auto">
        <SvelteMarkdown source={item.attributes.textLang} />
      </div>
    </div>
  </div>
</li>
