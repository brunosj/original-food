<script lang="ts">
  import { onMount } from 'svelte';
  import { fly, slide, fade } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import { menu, additionalMenu } from '$data/menu';
  import Hamburger from '$components/Header/Hamburger.svelte';
  import Logo from '$assets/svg/OF-Logo.svelte';
  import { menuBackground } from '$lib/stores/store';

  let open = false;
  let animate = false;

  onMount(() => {
    animate = true;
  });

  function toggleMenu() {
    open = !open;
  }
</script>

<header>
  {#if animate}
    <nav
      class="w-full lg:w-[28%] fixed top-0 lg:bottom-[unset] lg:rounded-br-lg shadow-lg text-white z-50"
      style:background-color={$menuBackground}
      in:fly={{
        y: -100,
        duration: 500,
        easing: cubicInOut,
        opacity: 1,
      }}
    >
      <div class="flex px-8 py-4 items-center justify-between">
        <a href="/" aria-label="Homepage">
          <Logo width="8rem" textColor="" barColor="rgb(181,83,34)" />
        </a>
        <button class="relative" on:click={toggleMenu} aria-label="Menu">
          <Hamburger bind:open color="white" duoLine={false} />
        </button>
      </div>

      {#if open}
        <div
          class="lg:rounded-br-lg font-sec"
          style:background-color={$menuBackground}
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
                      rel={item.slug.includes('http')
                        ? 'noopener noreferrer'
                        : ''}
                      target={item.slug.includes('http') ? '_blank' : ''}
                      class="inline-block text-sm lg:text-base hover:translate-x-1 duration-300 textHover"
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
                    rel={item.slug.includes('http')
                      ? 'noopener noreferrer'
                      : ''}
                    target={item.slug.includes('http') ? '_blank' : ''}
                    class="inline-block text-sm lg:text-base hover:translate-x-1 duration-300 textHover"
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
  {/if}
</header>

<style>
  nav {
    transition: all 1s cubic-bezier(0.07, 0.95, 0, 1);
  }
</style>
