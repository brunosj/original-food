<script lang="ts">
  export let logos: Logo[];
  import Wave from '$assets/svg/Wave.svelte';
  import WaveSoft from '$assets/svg/WaveSoft.svelte';
  import type { Logo } from '$types/responseInterfaces';
</script>

<section class="relative" id="logo-carousel">
  <div class="logos">
    <div class="logos-slide">
      {#each logos as logo, i}
        <a
          href={logo.attributes.link}
          class="logo w-16 lg:w-24 h-auto"
          target="_blank"
        >
          <img
            src={logo.attributes.bild.data.attributes.url}
            alt={logo.attributes.titel}
            class="object-contain h-full w-full"
          />
        </a>
      {/each}
    </div>
    <div class="logos-slide">
      {#each logos as logo, i}
        <a href={logo.attributes.link} class="logo w-16 lg:w-24 h-auto">
          <img
            src={logo.attributes.bild.data.attributes.url}
            alt={logo.attributes.titel}
            class="object-contain h-full w-full"
          />
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  a {
    cursor: pointer;
  }

  .logos {
    overflow: hidden;
    padding: 25px 0;
    background: white;
    white-space: nowrap;
    position: relative;
    /* width: 100%; */
    /* display: flex; */
    padding: 25px 30px;
  }

  .logos:before,
  .logos:after {
    position: absolute;
    top: 0;
    width: 2.5rem;
    height: 100%;
    content: '';
    z-index: 2;
  }

  .logos:before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
  }

  .logos:after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
  }

  /* .logos:hover .logos-slide {
    animation-play-state: paused;
  } */

  .logos-slide {
    display: inline-flex;
    animation: 15s slide infinite linear;
    flex-direction: row;
    width: 100%;
    gap: 60px;
  }

  @media (min-width: 768px) {
    .logos {
      padding: 60px 0;
      padding: 25px 175px;
    }

    .logos-slide {
      gap: 200px;
    }

    .logos:before,
    .logos:after {
      width: 7rem;
    }
  }
</style>
