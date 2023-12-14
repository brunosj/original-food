<script lang="ts">
  import '../app.css';
  import '$styles/carousel.css';
  import '@fontsource-variable/comfortaa';
  import '@fontsource-variable/open-sans';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { Footer } from '$components';
  import Menu from '$components/Header/Menu.svelte';
  import { fly, fade } from 'svelte/transition';
  import {
    background,
    menuBackground,
    uspBackground,
    font,
  } from '$lib/stores/store';
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

  if (browser) {
    const handleScroll = () => {
      const statementSection = document.getElementById('statement');
      const statementTitle = document.getElementById('statement-title');
      const uspSection = document.getElementById('usp');
      const pressSection = document.getElementById('press');

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const isSectionAtTop = (element: HTMLElement, range = 50) => {
        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top;
        return elementTop >= 0 && elementTop <= range;
      };

      const topRange = 20;

      if (uspSection && isSectionAtTop(uspSection, topRange)) {
        uspBackground.set('var(--color-ter)');
        menuBackground.set('var(--color-sec)');
        font.set('var(--color-black)');
      } else if (pressSection && isSectionAtTop(pressSection, topRange)) {
        menuBackground.set('var(--color-pri)');
      }
    };

    onMount(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  }
</script>

<Menu />
{#key pathname}
  <!-- <main
  in:fly={transitionIn}
  out:fly={transitionOut}
  on:outroend={scrollToTop}
  class="relative z-10"
> -->
  <main class="relative z-10">
    <slot />
  </main>
{/key}
<Footer />
