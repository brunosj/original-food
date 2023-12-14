<script lang="ts">
  export let item: Press;

  import type { Press } from '$types/responseInterfaces';

  let { bild, link, titel, untertitel } = item.attributes;
</script>

<div class="bg-pri rounded-xl group cursor-pointer">
  <a href={link} class=" h-80 lg:h-96 relative flex overflow-hidden">
    <div class="absolute h-full -right-3 -rotate-[20deg] -top-6">
      <img
        loading="lazy"
        src={bild.data.attributes.url}
        alt={titel}
        class="h-2/3 object-contain scale-105 group-hover:scale-100 duration-300"
      />
    </div>

    <div class="mt-auto space-y-2 w-2/3 p-6">
      <h4 class="font-bold">{titel}</h4>
    </div>
  </a>
</div>
