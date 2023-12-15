<script lang="ts">
  export let item: Pillar;

  import type { Pillar } from '$types/responseInterfaces';
</script>

<li class="flex space-y-6 flex-col">
  <div>
    <img
      src={item.attributes.bild.data.attributes.url}
      alt=""
      class="object-cover h-40 w-full rounded-t-xl"
    />
    <div class=" bg-sec px-4 py-2 rounded-b-xl text-ter">
      <h3>
        {item.attributes.titel}
      </h3>
    </div>
  </div>
  <div class="">
    <p>{item.attributes.textKurz}</p>
  </div>
</li>
