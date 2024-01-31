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

<li class="bg-pri layout" bind:this={element}>
  <div
    class="p-0 lg:p-12 lg:grid grid-cols-2"
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
        class={`object-cover h-32 lg:h-full w-full  ${
          i % 2 === 0
            ? 'rounded-tl-xl rounded-tr-xl lg:rounded-tr-none lg:rounded-bl-xl '
            : 'rounded-tr-xl rounded-tl-xl lg:rounded-br-xl lg:rounded-tl-none'
        }`}
      />
    </div>
    <div
      class={`bg-ter h-full flex flex-col justify-center py-6 lg:py-12 px-8 lg:px-16 m-auto space-y-3 lg:space-y-6   ${
        i % 2 === 0
          ? 'order-last rounded-bl-xl rounded-br-xl lg:rounded-tr-xl lg:rounded-bl-none'
          : 'order-first rounded-bl-xl rounded-br-xl lg:rounded-tl-xl lg:rounded-br-none'
      }`}
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
