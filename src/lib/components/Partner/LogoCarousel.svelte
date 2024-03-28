<script lang="ts">
  export let logos: Logo[];

  import type { Logo } from '$types/responseInterfaces';
  import Marquee from 'svelte-fast-marquee';
</script>

<section class="relative bg-white" id="">
  <a href="/projekte#partners">
    <div class="flex">
      <Marquee speed={60} gradient gap={'2%'}>
        {#each logos as logo}
          <div class="h-32 lg:h-64">
            <img
              src={logo.attributes.bild.data.attributes.url}
              alt={logo.attributes.titel}
              class="object-contain h-full"
            />
          </div>
        {/each}
      </Marquee>
    </div>
  </a>
</section>

<style>
  section {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
