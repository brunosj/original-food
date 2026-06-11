<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
	import PrevButton from './PrevButton.svelte';
	import NextButton from './NextButton.svelte';
	import type { Press } from '$types/responseInterfaces';
	import PressCard from '$components/Press/PressCard.svelte';

	let { slides, pressFooter }: { slides: Press[]; pressFooter: string } = $props();

	let emblaApi = $state<EmblaCarouselType | undefined>(undefined);
	const options: EmblaOptionsType = {
		slidesToScroll: 'auto',
		containScroll: 'trimSnaps',
		startIndex: 0
	};
	let prevBtnEnabled = $state(false);
	let nextBtnEnabled = $state(false);

	const onInit = (event: CustomEvent<EmblaCarouselType>) => {
		emblaApi = event.detail;

		const onSelect = () => {
			if (!emblaApi) return;
			prevBtnEnabled = emblaApi.canScrollPrev();
			nextBtnEnabled = emblaApi.canScrollNext();
		};

		emblaApi.on('select', onSelect);
		emblaApi.on('reInit', onSelect);
		onSelect();
	};

	const scrollPrev = () => {
		if (emblaApi) {
			emblaApi.scrollPrev();
		}
	};

	const scrollNext = () => {
		if (emblaApi) {
			emblaApi.scrollNext();
		}
	};
</script>

<div class="embla relative">
	<div
		class="embla__viewport"
		use:emblaCarouselSvelte={{ options, plugins: [] }}
		onemblaInit={onInit}
	>
		<ul class="embla__container__press">
			{#each slides as slide (slide.id)}
				<li class="embla__slide__press">
					<div class="">
						<PressCard item={slide} />
					</div>
				</li>
			{/each}
		</ul>
	</div>
</div>
<div class="flex items-center mt-3">
	<h3 class="px-8 lg:px-2">{pressFooter}</h3>

	{#if slides.length >= 2}
		<div class="ml-auto flex h-full items-center justify-center gap-6 lg:gap-0">
			<PrevButton {scrollPrev} enabled={prevBtnEnabled} />
			<NextButton {scrollNext} enabled={nextBtnEnabled} />
		</div>
	{/if}
</div>
