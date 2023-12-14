<script lang="ts">
  export let open: Boolean;
  export let duoLine: Boolean;

  const EASING = `cubic-bezier(0.4, 0, 0.2, 1)`;
  $: lineTransition = open
    ? `top 150ms 50ms ${EASING}, transform 150ms 200ms ${EASING}`
    : `top 150ms 200ms ${EASING}, transform 150ms 50ms ${EASING}`;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="hamburger {$$props.class || ''}"
  class:open
  on:click
  on:keydown
  on:keypress
>
  <span
    class="line line--first"
    style="transition: {lineTransition}; {open
      ? 'transform: rotate(45deg)'
      : ''}"
  />
  {#if !duoLine}
    <span
      class="line line--middle"
      style="transition: {lineTransition}; {open
        ? 'transform: rotate(45deg)'
        : ''}"
    />
  {/if}
  <span
    class="line line--bottom"
    style="transition: {lineTransition}; {open
      ? 'transform: rotate(-45deg)'
      : ''}"
  />
</div>

<style>
  .hamburger {
    position: relative;
    cursor: pointer;
    height: 0.8rem;
    width: 1.3rem;
    outline: none !important;
  }

  .line {
    position: absolute;
    left: 0;
    background: currentColor;
    width: 100%;
    height: var(--line-width, 2px);
    border-radius: var(--line-width, 2px);
  }

  .line--first {
    top: 0;
  }
  .line--middle {
    top: 50%;
  }
  .line--bottom {
    top: 100%;
  }

  .open .line {
    top: 50% !important;
  }
</style>
