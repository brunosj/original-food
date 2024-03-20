<script lang="ts">
  export let item: Product;

  import type { Product } from '$types/responseInterfaces';
  import ButtonRound from '$components/Button/ButtonRound.svelte';
  import { fade } from 'svelte/transition';
  import { sineInOut } from 'svelte/easing';

  let {
    bild,
    hoverBild,
    link,
    titel,
    untertitel,
    beschreibung,
    preis,
    siegel,
    istNeu,
  } = item.attributes;

  let isHovered = false;

  function handleMouseOver() {
    isHovered = true;
  }

  function handleMouseOut() {
    isHovered = false;
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
  class={`bg-[white] text-center w-full rounded-xl h-full parent group overflow-hidden `}
  on:mouseenter={handleMouseOver}
  on:mouseleave={handleMouseOut}
>
  <a href={link} class="flex flex-col relative card h-full" target="_blank">
    <div class="relative">
      {#if isHovered && hoverBild.data}
        <div class="h-32 lg:h-48 relative">
          <!-- <div class="absolute bg-secondary z-50 h-full w-full top-0"></div> -->
          <img
            loading="lazy"
            in:fade={{ duration: 350, delay: 0, easing: sineInOut }}
            src={hoverBild.data.attributes.url}
            alt={titel}
            class="h-full w-full object-cover"
          />
        </div>
      {:else}
        <div class="h-32 lg:h-48 p-3 lg:p-6">
          <img
            in:fade={{ duration: 350, delay: 0, easing: sineInOut }}
            loading="lazy"
            src={bild.data.attributes.url}
            alt={titel}
            class="h-full w-full object-contain"
          />
        </div>
      {/if}
      {#if siegel.data}
        <div
          class={`hidden lg:block absolute -bottom-6 left-3 bg-white rounded-lg p-2 z-20 w-24 border-[0.5px] duration-300 ${
            isHovered ? 'border-sec' : 'border-pri'
          }`}
        >
          <img
            loading="lazy"
            src={siegel.data?.attributes.url}
            alt={titel}
            class=" h-6 w-full object-contain"
          />
        </div>
      {/if}
    </div>
    <div
      class="p-3 lg:pt-12 lg:pb-6 lg:px-6 space-y-3 lg:space-y-3 bg-ter group-hover:bg-white duration-500 rounded-b-xl h-full flex flex-col justify-between relative"
    >
      <div class="space-y-1">
        <h4 class="font-bold">{titel}</h4>
        <h4>{untertitel}</h4>
      </div>
      <p class=" text-sm">{beschreibung}</p>
      <div class="space-y-2">
        <p class=" text-sm font-bold">ab {preis.toFixed(2)} €</p>
        <div class="parent">
          <ButtonRound path={link}>Jetzt probieren</ButtonRound>
        </div>
      </div>
    </div>
  </a>
</div>

<style>
  .parent:hover :global(.button-round::before) {
    transform: translateY(0);
  }

  /* .card img {
    opacity: 1;
  }

  .card img:hover {
    opacity: 0;
  } */

  h4 {
    line-height: 1.5rem;
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
