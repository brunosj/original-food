<script lang="ts">
  export let slides: Press[];
  export let pressFooter: string;

  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
  import PrevButton from './PrevButton.svelte';
  import NextButton from './NextButton.svelte';
  import type { Press } from '$types/responseInterfaces';
  import PressCard from '$components/Press/PressCard.svelte';

  let emblaApi: EmblaCarouselType;
  let options: EmblaOptionsType = {
    slidesToScroll: 'auto',
    containScroll: 'trimSnaps',
    startIndex: 0,
  };
  let prevBtnEnabled = false;
  let nextBtnEnabled = false;
  let selectedIndex = 0;
  let scrollSnaps: number[] = [];

  const onInit = (event: CustomEvent<EmblaCarouselType>) => {
    emblaApi = event.detail;

    const onSelect = () => {
      prevBtnEnabled = emblaApi.canScrollPrev();
      nextBtnEnabled = emblaApi.canScrollNext();
      selectedIndex = emblaApi.selectedScrollSnap();
      scrollSnaps = emblaApi.scrollSnapList();
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
    on:emblaInit={onInit}
  >
    <ul class="embla__container__press">
      {#each slides as slide, i (slide.id)}
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
