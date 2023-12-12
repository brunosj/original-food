<script lang="ts">
  export let statementText: String;
  export let items: Product[];

  import type { Product } from '$types/responseInterfaces';
  import Products from '$components/Product/Products.svelte';
</script>

<section class="bg-secondary sectionPy relative min-h-[40vh]">
  <div class="absolute -top-24">
    <Products {items} />
  </div>

  <div class="layout pt-48 text-tertiary w-full lg:w-[60%]">
    <h3>{statementText}</h3>
  </div>
</section>
