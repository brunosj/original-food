<script lang="ts">
  export let logos: Logo[];
  import Wave from '$assets/svg/Wave.svelte';
  import WaveSoft from '$assets/svg/WaveSoft.svelte';
  import type { Logo } from '$types/responseInterfaces';
  import Marquee from 'svelte-fast-marquee';
</script>

<section class="relative bg-white" id="">
  <a href="/projekte#partners">
    <ul class="py-3 lg:py-6">
      <Marquee speed={50} gradient gap={'10%'}>
        {#each logos as logo}
          <li class="h-16 lg:h-20">
            <img
              src={logo.attributes.bild.data.attributes.url}
              alt={logo.attributes.titel}
              class="object-contain h-full w-full"
            />
          </li>
        {/each}
      </Marquee>
    </ul>
  </a>
</section>

<style>
  section {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
