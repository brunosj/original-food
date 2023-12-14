<script lang="ts">
  export let item: Product;

  import type { Product } from '$types/responseInterfaces';
  import ButtonRound from '$components/Button/ButtonRound.svelte';
  import Button from '$components/Button/Button.svelte';

  let { bild, link, titel, untertitel } = item.attributes;
</script>

<div class={`bg-white py-3 lg:p-6 text-center h-full rounded-xl parent group`}>
  <a href={link} class="space-y-3 lg:space-y-6 flex flex-col">
    <div class="h-24 lg:h-48">
      <img
        loading="lazy"
        src={bild.data.attributes.url}
        alt={titel}
        class=" h-full w-full object-contain scale-100 group-hover:scale-95 duration-300"
      />
    </div>

    <div class="space-y-1">
      <h4 class="font-bold">{titel}</h4>
      <p class="hidden lg:block text-base">{untertitel}</p>
    </div>

    <div class="parent">
      <ButtonRound path={link}>Jetzt probieren</ButtonRound>
    </div>
  </a>
</div>

<style>
  .parent:hover :global(.button-round::before) {
    transform: translateY(0);
  }
</style>
