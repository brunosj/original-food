<script lang="ts">
  import '../app.css';
  import '$styles/carousel.css';
  import '@fontsource-variable/comfortaa';
  import { Footer } from '$components';
  import Menu from '$components/Header/Menu.svelte';
  import { fly, fade } from 'svelte/transition';
  import { cubicIn, cubicOut } from 'svelte/easing';

  export let data;
  $: pathname = data.pathname;

  const duration = 200;
  const delay = duration + 100;
  const y = 0;

  const transitionIn = { easing: cubicOut, y, duration, delay };
  const transitionOut = { easing: cubicIn, y: -20, duration, delay };

  function scrollToTop() {
    window.scrollTo({ top: 0 });
  }
</script>

{#key pathname}
  <Menu />
  <!-- <main
  in:fly={transitionIn}
  out:fly={transitionOut}
  on:outroend={scrollToTop}
  class="relative z-10"
> -->
  <main class="relative z-10">
    <slot />
  </main>
  <Footer />
{/key}
