<script lang="ts">
  export let title: String;
  export let text: String;

  import Map from '$assets/svg/kaffa_map.svelte';
  import { onMount } from 'svelte';
  import { fade, fly, slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import IntersectionObserver from 'svelte-intersection-observer';
  import SvelteMarkdown from 'svelte-markdown';

  let svgWidth: number;

  onMount(() => {
    svgWidth = window.innerWidth < 640 ? 200 : 600;

    window.addEventListener('resize', () => {
      svgWidth = window.innerWidth < 640 ? 200 : 600;
    });
  });

  let element;
  let intersecting = false;
</script>

<section
  class="sectionPy relative"
  id="projects"
  style:background-color="var(--color-ter)"
  bind:this={element}
>
  <IntersectionObserver {element} bind:intersecting once threshold={0}>
    {#if intersecting}
      <div class="layout space-y-6 lg:space-y-12">
        <h1
          class="font-bold text-[#58271A]"
          id="statement-title"
          transition:fade={{
            duration: 500,
            delay: 0,
            easing: cubicInOut,
          }}
        >
          {title}
        </h1>
        <h3
          class="projectsP lg:w-1/2 w-full"
          transition:fade={{
            duration: 500,
            delay: 250,
            easing: cubicInOut,
          }}
        >
          <SvelteMarkdown source={text} />
        </h3>
        <div
          class="absolute bottom-12 right-12 opacity-0 lg:opacity-100 overflow-hidden"
          transition:fade={{
            duration: 500,
            delay: 500,
            easing: cubicInOut,
          }}
        >
          <Map width={svgWidth} color="#f5f3f5" />
        </div>
      </div>
    {/if}
  </IntersectionObserver>
</section>
