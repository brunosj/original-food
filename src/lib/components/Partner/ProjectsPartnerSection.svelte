<script lang="ts">
  export let logos: Logo[];
  export let title: string;
  export let subtitle: string;
  export let displayHeader = true;

  import type { Logo } from '$types/responseInterfaces';
  import type { Pillar } from '$types/responseInterfaces';
  import { fade, fly, slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import IntersectionObserver from 'svelte-intersection-observer';
  import PillarExpanded from '$components/Pillar/PillarExpanded.svelte';
  import ProjectsPartnerChild from './ProjectsPartnerChild.svelte';

  let element;
  let intersecting = false;
</script>

<section id="partners">
  {#if displayHeader}
    <div
      class="layout sectionPy bg-sec text-ter flex space-y-3 lg:space-y-6 flex-col"
      bind:this={element}
    >
      <IntersectionObserver {element} bind:intersecting once threshold={1}>
        {#if intersecting}
          <h1
            transition:fade={{
              duration: 500,
              delay: 0,
              easing: cubicInOut,
            }}
            class="font-bold"
          >
            {title}
          </h1>
          <h3
            class="lg:w-1/2 w-full"
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
  {/if}
  <ul>
    {#each logos as item, i}
      <ProjectsPartnerChild {item} i={i + (displayHeader ? 0 : 1)} />
    {/each}
  </ul>

  {#if !displayHeader}
    <div class="bg-sec sectionPy hidden lg:block"></div>
  {/if}
</section>
