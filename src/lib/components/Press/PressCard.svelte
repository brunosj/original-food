<script lang="ts">
  export let item: Press;

  import type { Press } from '$types/responseInterfaces';

  let { bild, link, titel, untertitel = '' } = item.attributes;
</script>

<div class="bg-pri rounded-xl group">
  {#if link !== null}
    <a href={link} class=" h-96 md:h-[30rem] relative flex overflow-hidden">
      <div class="absolute h-full -right-3 -rotate-[20deg] -top-6">
        <img
          loading="lazy"
          src={bild.data.attributes.url}
          alt={titel}
          class="h-2/3 object-contain scale-105 group-hover:scale-100 duration-300"
        />
      </div>

      <div class="mt-auto space-y-2 w-3/4 p-8">
        <h3 class="font-bold">{titel}</h3>
        {#if untertitel}
          <p>{untertitel}</p>
        {/if}
      </div>
    </a>
  {:else}
    <div class=" h-96 md:h-[30rem] relative flex overflow-hidden">
      <div class="absolute h-full -right-3 -rotate-[20deg] -top-6">
        <img
          loading="lazy"
          src={bild.data.attributes.url}
          alt={titel}
          class="h-[30%] lg:h-1/2 object-contain"
        />
      </div>

      <div class="mt-auto space-y-2 w-full lg:w-3/4 p-8">
        <h3 class="font-bold">{titel}</h3>
        {#if untertitel}
          <p class="text-base lg:text-lg">{untertitel}</p>
        {/if}
      </div>
    </div>
  {/if}
</div>
