<script lang="ts">
  export let path: string;

  const isExternal = path.includes('http');
</script>

<button
  class={`
		text-ter text-xs rounded-xl button-round shadow-lg `}
  aria-label={`Go to ${path}`}
>
  <div class="flex flex-row h-8 group items-center">
    {#if isExternal}
      <a
        href={path}
        rel="noopener noreferrer"
        target="_blank"
        class="flex items-center px-4 leading-none"
      >
        <slot>Fallback</slot>
      </a>{:else}
      <a href={path} class="flex items-center px-4 leading-none">
        <slot>Fallback</slot>
      </a>
    {/if}
  </div>
</button>

<style>
  .button-round {
    display: inline-flex;
    align-items: center;
    padding: 0.2rem 0.4rem;
    background-color: var(--color-pri);
    border-radius: 1rem;
    color: #fff;
    line-height: 1;
    letter-spacing: normal;
    vertical-align: middle;
    position: relative;
    z-index: 1;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    transition: color 0.5s cubic-bezier(0.4, 0, 0, 1);
  }

  .button-round::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: -1px;
    top: -1.5em;
    height: calc(100% + 3em);
    width: calc(100% + 2px);
    border-radius: 50%;
    transform: translateX(100%);
    z-index: -1;
    background-color: var(--color-sec);
    pointer-events: none;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0, 1);
  }

  .button-round:hover::before {
    transform: translateY(0);
  }
</style>
