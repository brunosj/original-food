<script lang="ts">
  export let item: Pillar;
  export let animation: any;

  import type { Pillar } from '$types/responseInterfaces';
</script>

<div class="relative rounded-xl h-full" transition:animation>
  <div
    class="absolute inset-0 bg-gradient-to-t rounded-b-xl from-sec via-gray-900/20"
  ></div>

  <div class="h-40 lg:h-full">
    <img
      src={item.attributes.bild2?.data.attributes.url}
      alt=""
      class="object-cover rounded-xl h-full w-full"
    />
  </div>
  <h3
    class={`absolute bottom-0 left-0 px-4 lg:px-8 py-2 lg:py-4 lg:uppercase tracking-wider text-ter`}
  >
    {item.attributes.titel}
  </h3>
</div>
