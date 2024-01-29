<script lang="ts">
  export let image: string;
  export let height: string;
  export let headerTitle: string;

  import { fade, fly, slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import IntersectionObserver from 'svelte-intersection-observer';

  let element;
  let intersecting = false;
</script>

<section class={height} id="hero" bind:this={element}>
  <div
    class={`${height} w-full top-0 -z-10 absolute gradient-overlay min-h-[50vh]`}
  >
    <img
      src={image}
      alt="Entlebuch Bild"
      class="object-cover h-full w-full saturate-[1]"
      loading="eager"
    />

    <IntersectionObserver {element} bind:intersecting once threshold={0.5}>
      {#if intersecting}
        <div
          class="absolute layout bottom-12 lg:bottom-[30%] lg:w-[60%] w-full"
        >
          <h1
            class="text-ter font-semibold"
            transition:fade={{
              duration: 500,
              delay: 250,
              easing: cubicInOut,
            }}
          >
            {headerTitle}
          </h1>
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
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0) 25%,
      rgba(0, 0, 0, 0)
    );
    z-index: 5;
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
