<script lang="ts">
  export let logos: Logo[];
  import Wave from '$assets/svg/Wave.svelte';
  import WaveSoft from '$assets/svg/WaveSoft.svelte';
  import type { Logo } from '$types/responseInterfaces';
</script>

<section class="relative bg-white" id="">
  <a href="/projekte#partners" class="marquee">
    <ul class="marquee__content">
      {#each logos as logo}
        <li>
          <img
            src={logo.attributes.bild.data.attributes.url}
            alt={logo.attributes.titel}
            class="marquee__img"
          />
        </li>
      {/each}
      {#each logos as logo}
        <li>
          <img
            src={logo.attributes.bild.data.attributes.url}
            alt={logo.attributes.titel}
            class="marquee__img"
          />
        </li>
      {/each}
    </ul>
  </a>
</section>

<style>
  section {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #marquee__container {
    background-color: #fff;
    min-height: 20vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .marquee {
    background-color: #fff;
    color: lightgrey;
    width: 100vw;
    overflow: hidden;
  }

  .marquee__content {
    list-style: none;
    height: 100%;
    display: flex;
    animation: scrolling 25s linear infinite;
  }

  .marquee__content li {
    width: 20vw;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .marquee__img {
    width: 10vw;
    padding: 1.5rem;
  }

  .marquee::before,
  .marquee::after {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: '';
    height: 100%;
    position: absolute;
    width: 5em;
    z-index: 2;
  }

  .marquee::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }
  .marquee::before {
    left: 0;
    top: 0;
  }

  @keyframes scrolling {
    0% {
      transform: translateX(-0vw);
    }
    100% {
      transform: translateX(-100vw);
    }
  }

  /*HOVER / PAUSED STATE*/
  /* .marquee__content:hover {
    animation-play-state: paused;
  }

  .marquee__img:hover {
    transition: all 0.4s ease;
    border-radius: 10px;
    box-shadow: 0 0 10px #e0e0e0;
  } */

  /*///////////////////////////////////////////////////////////////////////////*/

  /*TABLET VERSION*/
  @media screen and (max-width: 1100px) {
    .marquee__title {
      font-size: 2.5rem;
      padding: 0rem;
    }

    .marquee__content li {
      width: 25vw;
    }

    .marquee {
      width: 95vw;
      margin: 1rem 0;
    }

    .marquee__img {
      width: 20vw;
    }

    @keyframes scrolling {
      0% {
        transform: translateX(-0vw);
      }
      100% {
        transform: translateX(-200vw);
      }
    }
  }

  /*MOBILE VERSION*/
  @media screen and (max-width: 500px) {
    .marquee__img {
      width: 30vw;
    }

    .marquee__content {
      animation: scrolling 15s linear infinite;
    }

    .marquee__content li {
      width: 40%;
    }

    .marquee--invisible--mobile {
      display: none !important;
    }

    .marquee::before,
    .marquee::after {
      width: 1em;
    }
  }
</style>
