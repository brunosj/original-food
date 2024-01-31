<script lang="ts">
  import '../app.css';
  import '$styles/carousel.css';
  import '@fontsource-variable/comfortaa';
  import '@fontsource-variable/nunito';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import Footer from '$components/Footer/Footer.svelte';
  import Menu from '$components/Header/Menu.svelte';
  import { fly, fade } from 'svelte/transition';
  import {
    background,
    menuBackground,
    uspBackground,
    font,
  } from '$lib/stores/store';

  export let data;

  const footer = data.footer;

  if (browser) {
    const handleScroll = () => {
      const statementSection = document.getElementById('statement');
      const statementTitle = document.getElementById('statement-title');
      const uspSection = document.getElementById('usp');
      const pressSection = document.getElementById('press');
      const projectsSection = document.getElementById('projects');
      const uspExpandedSection = document.getElementById('usp-expanded');
      const partnersSection = document.getElementById('partners');

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
      } else if (projectsSection && isSectionAtTop(projectsSection, topRange)) {
        menuBackground.set('var(--color-pri)');
      } else if (
        uspExpandedSection &&
        isSectionAtTop(uspExpandedSection, topRange)
      ) {
        menuBackground.set('var(--color-sec)');
      } else if (partnersSection && isSectionAtTop(partnersSection, topRange)) {
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
<main class="relative z-10 overflow-hidden">
  <slot />
</main>
<footer>
  <Footer {footer} />
</footer>
