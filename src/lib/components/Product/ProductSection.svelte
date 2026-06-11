<script lang="ts">
	import type { Product } from '$types/responseInterfaces';

	let {
		items,
		bgTop,
		bgBottom,
		padding = false
	}: {
		items: Product[];
		bgTop: 'blue' | 'purple';
		bgBottom: 'blue' | 'purple';
		padding?: boolean;
	} = $props();
	import Products from './Products.svelte';
	import ProductCarousel from '$components/Carousel/ProductCarousel.svelte';
</script>

<section
	class={`relative ${bgTop === 'blue' ? 'bg-pri' : 'bg-sec'}  ${padding === true ? 'lg:py-24' : ''}`}
>
	<div class={`${bgBottom === 'blue' ? 'bg-pri' : 'bg-sec'} z-0 absolute bottom-0 h-1/2 w-full`} />
	<div class="hidden lg:block w-full">
		<Products {items} />
	</div>

	<div class="block lg:hidden bg-pri pt-12">
		<ProductCarousel slides={items} />
	</div>
</section>
