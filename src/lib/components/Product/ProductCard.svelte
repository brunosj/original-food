<script lang="ts">
  export let item: Product;

  import type { Product } from '$types/responseInterfaces';

  let { bild, link, titel, untertitel } = item.attributes;
</script>

<li class="bg-white p-4 text-center h-full space-y-6 flex flex-col rounded-lg">
  <div
    class="h-48 opacity-100 transition duration-300 ease-in-out group-hover:opacity-90"
  >
    <img
      loading="lazy"
      src={bild.data.attributes.url}
      alt={titel}
      class=" h-full w-full object-contain"
    />
  </div>

  <div class="space-y-2">
    <p>{titel}</p>
    <p>{untertitel}</p>
  </div>
</li>
