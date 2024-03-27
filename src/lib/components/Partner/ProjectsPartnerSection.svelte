<script lang="ts">
  export let logos: Logo[];
  export let title: string;
  export let subtitle: string;
  export let displayHeader = true;

  import type { Logo } from '$types/responseInterfaces';
  import { fade } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import ProjectsPartnerChild from './ProjectsPartnerChild.svelte';
</script>

<section id="partners" class="relative bg-sec">
  {#if displayHeader}
    <div class="layout text-ter flex space-y-3 lg:space-y-6 flex-col sectionPy">
      <h1
        in:fade={{
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
        in:fade={{
          duration: 500,
          delay: 250,
          easing: cubicInOut,
        }}
      >
        {subtitle}
      </h3>
    </div>
  {/if}
  <ul>
    {#each logos as item, i}
      <ProjectsPartnerChild {item} i={i + (displayHeader ? 0 : 1)} />
    {/each}
  </ul>
</section>
