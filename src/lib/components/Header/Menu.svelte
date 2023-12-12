<script lang="ts">
  import { onMount } from 'svelte';
  import { menu, additionalMenu } from '$data/menu';
  import Menu from 'virtual:icons/material-symbols/menu-rounded';
  import Close from 'virtual:icons/material-symbols/close-rounded';
  import Button from '$components/Button/Button.svelte';
  import { PUBLIC_SHOP_URL } from '$env/static/public';
  import { fly, slide, fade } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import Hamburger from '$components/Header/Hamburger.svelte';
  import Logo from '$assets/svg/OF-Logo.svelte';

  let open = false;

  function toggleMenu() {
    open = !open;
  }
</script>

<nav
  class="w-full lg:w-1/4 fixed bottom-0 lg:top-0 lg:bottom-[unset] bg-primary rounded-br-lg shadow-lg text-white z-50"
>
  <div class="flex px-8 py-4 items-center justify-between">
    <div class="">
      <Logo width="6rem" textColor="white" barColor="white" />
    </div>
    <button class=" relative" on:click={toggleMenu}>
      <Hamburger bind:open color="white" duoLine={false} />
    </button>
  </div>

  {#if open}
    <div
      class=" bg-primary rounded-br-lg shadow-lg font-secondary"
      in:slide={{
        duration: 400,
        easing: cubicInOut,
      }}
      out:slide={{
        duration: 400,
        easing: cubicInOut,
      }}
    >
      <div class="py-4 px-8 flex flex-col h-full space-y-3 relative">
        <ul
          in:fly={{ y: 20, delay: 200, duration: 400, opacity: 1 }}
          out:fade={{ delay: 0, duration: 400 }}
        >
          {#each menu as item, i}
            {#key i}
              <li class="py-1">
                <a
                  href={item.slug}
                  rel={item.slug.includes('http') ? 'noopener noreferrer' : ''}
                  target={item.slug.includes('http') ? '_blank' : ''}
                  class="inline-block text-sm hover:translate-x-1 duration-300 textHover"
                  on:click={() => toggleMenu()}
                >
                  {item.name}
                </a>
              </li>
            {/key}
          {/each}
        </ul>

        <ul
          class="border-t border-neutral-300 pt-3"
          in:fly={{ y: 20, delay: 200, duration: 600, opacity: 1 }}
          out:fade={{ delay: 0, duration: 200 }}
        >
          {#each additionalMenu as item, i}
            <li class="py-1">
              <a
                href={item.slug}
                rel={item.slug.includes('http') ? 'noopener noreferrer' : ''}
                target={item.slug.includes('http') ? '_blank' : ''}
                class="inline-block text-sm hover:translate-x-1 duration-300 textHover"
                on:click={() => toggleMenu()}
              >
                <span>
                  {item.name}
                </span>
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  {/if}
</nav>

<style>
  .icon {
    transition: transform 0.3s ease;
  }

  .open .bar1 {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  .open .bar2 {
    opacity: 0;
  }

  .open .bar3 {
    transform: rotate(45deg) translate(-5px, -6px);
  }
</style>
