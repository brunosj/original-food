<script lang="ts">
  export let slides: Press[] | Product[];
  export let type: 'Press' | 'Product';

  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import type {
    EmblaCarouselType,
    EmblaOptionsType,
  } from 'embla-carousel-svelte';
  import PrevButton from './PrevButton.svelte';
  import NextButton from './NextButton.svelte';
  import type { Press, Product } from '$types/responseInterfaces';
  import PressCard from '$components/Press/PressCard.svelte';
  import ProductCard from '$components/Product/ProductCard.svelte';

  let emblaRef: HTMLDivElement;
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
    <div class="embla__container">
      {#if type === 'Press'}
        {#each slides as slide, i (slide.id)}
          <ul class="embla__slide">
            <li
              class={`${i === 0 ? 'pl-6 lg:pl-0' : ''} ${
                i === slides.length - 1 ? 'pr-6 lg:pr-0' : ''
              }`}
            >
              <PressCard item={slide} />
            </li>
          </ul>
        {/each}
        {#each slides as slide, i (slide.id)}
          <ul class="embla__slide">
            <li
              class={`${i === 0 ? 'pl-6 lg:pl-0' : ''} ${
                i === slides.length - 1 ? 'pr-6 lg:pr-0' : ''
              }`}
            >
              <PressCard item={slide} />
            </li>
          </ul>
        {/each}
        {#each slides as slide, i (slide.id)}
          <ul class="embla__slide">
            <li
              class={`${i === 0 ? 'pl-6 lg:pl-0' : ''} ${
                i === slides.length - 1 ? 'pr-6 lg:pr-0' : ''
              }`}
            >
              <PressCard item={slide} />
            </li>
          </ul>
        {/each}
      {/if}
      {#if type === 'Product'}
        {#each slides as slide, i (slide.id)}
          <ul class="embla__slide">
            <li
              class={`${i === 0 ? 'pl-6 lg:pl-0' : ''} ${
                i === slides.length - 1 ? 'pr-6 lg:pr-0' : ''
              }`}
            >
              <ProductCard item={slide} />
            </li>
          </ul>
        {/each}
      {/if}
    </div>
  </div>
</div>
<div class="flex items-center mt-3">
  {#if type === 'Press'}
    <h3 class="px-8 lg:px-2">In der Presse</h3>
  {/if}
  <div class="ml-auto flex h-full items-center justify-center gap-6 lg:gap-0">
    <PrevButton {scrollPrev} enabled={prevBtnEnabled} />
    <NextButton {scrollNext} enabled={nextBtnEnabled} />
  </div>
</div>
