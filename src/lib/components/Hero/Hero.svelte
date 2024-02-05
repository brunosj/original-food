<script lang="ts">
  export let image: string;
  export let height: string;
  export let headerTitle: string;
  export let headerTitle2: string;

  import { fade, fly, slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import IntersectionObserver from 'svelte-intersection-observer';

  let element;
  let intersecting = false;
</script>

<section class={height} id="hero" bind:this={element}>
  <div class={`${height} w-full top-0 -z-10 absolute gradient-overlay`}>
    <img
      src={image}
      alt="Entlebuch Bild"
      class="object-cover h-full w-full saturate-[1]"
      loading="eager"
    />

    <IntersectionObserver {element} bind:intersecting once threshold={0.5}>
      {#if intersecting}
        <div
          class="absolute layout bottom-[50%] lg:w-[60%] w-full z-10 space-y-3 lg:space-y-6 transform translate-y-1/2"
        >
          <div class="flex flex-col justify-center h-full space-y-6">
            <h1
              class="text-ter font-semibold z-10"
              in:fade={{
                duration: 500,
                delay: 250,
                easing: cubicInOut,
              }}
            >
              {headerTitle}
            </h1>
            <div
              in:fade={{
                duration: 500,
                delay: 250,
                easing: cubicInOut,
              }}
            >
              <span
                class="text-ter z-10 text-base font-sec font-semibold md:text-3xl"
              >
                {headerTitle2}
              </span>
            </div>
          </div>
        </div>
      {/if}
    </IntersectionObserver>
  </div>
</section>

<style>
  .gradient-overlay {
    position: relative;
    overflow: hidden;
  }

  .gradient-overlay::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0) 100%,
      rgba(0, 0, 0, 0)
    );
    z-index: 1;
  }

  .hero__title {
    --steps: 4;
    --typing-duration: 1.2s;
    --caret-blink-duration: 0.5s;
    display: inline-block;
    max-width: 0;
    font: bold 300% monospace;
    white-space: nowrap;
    border-right: 1px solid transparent;
    animation:
      typing var(--typing-duration) steps(var(--steps)) forwards,
      caret var(--caret-blink-duration) steps(1) infinite;
    overflow: hidden;
  }

  @keyframes typing {
    to {
      max-width: calc(var(--steps) * 1ch);
    }
  }

  @keyframes caret {
    50% {
      border-right-color: currentColor;
    }
  }
</style>
