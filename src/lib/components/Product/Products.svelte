<script lang="ts">
  export let items: Product[];

  import type { Product } from '$types/responseInterfaces';
  import ProductCard from '$components/Product/ProductCard.svelte';
</script>

<ul class="layout grid grid-cols-4 gap-6">
  {#each items as item (item.attributes.link)}
    <ProductCard {item} />
  {/each}
</ul>
