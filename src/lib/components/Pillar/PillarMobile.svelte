<script lang="ts">
  export let item: Pillar;

  import type { Pillar } from '$types/responseInterfaces';
</script>

<li class="flex space-y-6 flex-col">
  <div>
    <img
      src={item.bild.data.attributes.url}
      alt=""
      class="object-cover h-40 w-full rounded-t-xl"
    />
    <div class=" bg-sec px-4 py-2 rounded-b-xl text-ter">
      <h3>
        {item.titel}
      </h3>
    </div>
  </div>
  <div class="">
    <p>{item.text}</p>
  </div>
</li>
