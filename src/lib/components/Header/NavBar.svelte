<script lang="ts">
  import { menu } from '$data/menu';
  import { PUBLIC_SHOP_URL } from '$env/static/public';
  import Button from '$components/Button/Button.svelte';
  import MobileMenu from './Menu.svelte';
</script>

<nav
  class=" flex items-center justify-between bg-transparent h-12 relative z-10 text-ter font-semibold font-sec"
>
  <a href="/">
    <h4 class="font-bold tracking-widest textHover">ENTLEBUCH</h4>
  </a>
  <MobileMenu />
</nav>
