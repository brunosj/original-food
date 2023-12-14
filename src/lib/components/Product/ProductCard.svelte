<script lang="ts">
  export let item: Product;

  import type { Product } from '$types/responseInterfaces';
  import ButtonRound from '$components/Button/ButtonRound.svelte';
  import Button from '$components/Button/Button.svelte';

  let { bild, link, titel, untertitel } = item.attributes;
</script>

<div
  class={`bg-white text-center h-full rounded-xl parent group overflow-hidden`}
>
  <a href={link} class="flex flex-col relative card">
    <div class="h-24 lg:h-48 lg:p-6">
      <img
        loading="lazy"
        src={bild.data.attributes.url}
        alt={titel}
        class=" h-full w-full object-contain"
      />
    </div>

    <div
      class=" lg:p-6 space-y-3 lg:space-y-6 flex flex-col bg-ter group-hover:bg-white duration-300 rounded-b-xl"
    >
      <div class="space-y-1">
        <h4 class="font-bold">{titel}</h4>
        <p class="hidden lg:block text-sm">{untertitel}</p>
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

  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -9rem;
    width: 11rem;
    height: 4rem;
    background-color: var(--color-pri);
    /* transform: translateY(100%); */
    transform: rotate(-45deg);
    /* transition: transform 0.3s ease-in-out; */
    z-index: 1;
  }

  .parent:hover :global(.card::before) {
    background-color: var(--color-sec);
    transition: all 0.5s cubic-bezier(0.4, 0, 0, 1);
  }
</style>
