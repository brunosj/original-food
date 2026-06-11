<script lang="ts">
  export let item: Pillar;

  import type { Pillar } from '$types/responseInterfaces';
  import ButtonRound from '$components/Button/ButtonRound.svelte';
  import { getMediaUrl } from '$lib/utils/media';
</script>

<li class="w-full lg:w-3/4 m-auto">
  <a href="/projekte" class="flex flex-col">
    <div>
      {#if getMediaUrl(item.attributes.bild)}
        <img
          src={getMediaUrl(item.attributes.bild)}
          alt=""
          class="object-cover h-56 w-full rounded-t-xl"
        />
      {/if}
      <div class=" bg-sec px-4 py-2 text-ter">
        <h3>
          {item.attributes.titel}
        </h3>
      </div>
    </div>
    <div class="p-4 bg-sec bg-opacity-10 rounded-b-xl space-y-3">
      <p>{item.attributes.textKurz}</p>
      <div class="ml-auto">
        <ButtonRound path="/projekte">Mehr erfahren</ButtonRound>
      </div>
    </div>
  </a>
</li>
