<script lang="ts">
	import type { Product } from '$types/responseInterfaces';

	let { items }: { items: Product[] } = $props();
	import ProductCard from '$components/Product/ProductCard.svelte';
</script>

<ul class="layout lg:grid grid-cols-4 gap-3 2xl:gap-6">
	{#each items as item (item.id)}
		<li>
			<ProductCard {item} />
		</li>
	{/each}
</ul>
