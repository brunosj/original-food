<script lang="ts">
  import { fade } from 'svelte/transition';

  export let image: string;
  export let height: string;
  export let headerTitle: string = '';
</script>

<div class={`${height} w-full top-0 -z-10  relative`}>
  <img src={image} alt="Entlebuch Bild" class="object-cover h-full w-full" />
  <!-- <div class="absolute layout bottom-12 right-0 w-[65%]">
    <div class="bg-primary p-4 bg-opacity-50 rounded-xl">
      <h1 class="text-tertiary font-semibold text-right">
        {headerTitle}
      </h1>
    </div>
  </div> -->
</div>
