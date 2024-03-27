<script lang="ts">
  export let title: String;
  export let text: String;

  import Map from '$assets/svg/kaffa_map.svelte';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import SvelteMarkdown from 'svelte-markdown';

  let svgWidth: number;

  onMount(() => {
    svgWidth = window.innerWidth < 640 ? 200 : 550;

    window.addEventListener('resize', () => {
      svgWidth = window.innerWidth < 640 ? 200 : 550;
    });
  });
</script>

<section
  class="sectionPy relative"
  id="projects"
  style:background-color="var(--color-ter)"
>
  <div class="layout space-y-6 lg:space-y-12">
    <h1
      class="font-bold text-[#58271A]"
      id="statement-title"
      in:fade={{
        duration: 500,
        delay: 0,
        easing: cubicInOut,
      }}
    >
      {title}
    </h1>
    <h3
      class="projectsP lg:w-1/2 w-full"
      in:fade={{
        duration: 500,
        delay: 250,
        easing: cubicInOut,
      }}
    >
      <SvelteMarkdown source={text} />
    </h3>
    <div
      class="absolute bottom-16 right-16 2xl:right-24 opacity-0 lg:opacity-100 overflow-hidden"
    >
      <Map width={svgWidth} />
    </div>
  </div>
</section>
