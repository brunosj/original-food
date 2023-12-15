<script lang="ts">
  export let item: Product;

  import type { Product } from '$types/responseInterfaces';
  import ButtonRound from '$components/Button/ButtonRound.svelte';
  import Button from '$components/Button/Button.svelte';

  let { bild, link, titel, untertitel } = item.attributes;
</script>

<div
  class={`bg-[white] text-center w-full rounded-xl parent group overflow-hidden self-stretch `}
>
  <a href={link} class="flex flex-col relative card h-full">
    <div class="h-32 lg:h-48 p-3 lg:p-6">
      <img
        loading="lazy"
        src={bild.data.attributes.url}
        alt={titel}
        class=" h-full w-full object-contain"
      />
    </div>

    <div
      class="p-3 lg:p-6 space-y-3 lg:space-y-6 bg-ter group-hover:bg-white duration-300 rounded-b-xl h-full flex flex-col justify-around"
    >
      <div class="space-y-1">
        <h4 class="font-bold">{titel}</h4>
        <p class=" text-sm">{untertitel}</p>
      </div>

      <div class="parent">
        <ButtonRound path={link}>Jetzt probieren</ButtonRound>
      </div>
    </div>
  </a>
</div>

<style>
  .parent:hover :global(.button-round::before) {
    transform: translateY(0);
  }

  /* .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -9rem;
    width: 13rem;
    height: 4rem;
    background-color: var(--color-pri);
    transform: rotate(-45deg);
    z-index: 1;
  } */

  .parent:hover :global(.card::before) {
    background-color: var(--color-sec);
    transition: all 0.5s cubic-bezier(0.4, 0, 0, 1);
  }
</style>
