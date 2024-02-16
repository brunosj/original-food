<script lang="ts">
  export let image: string;
  export let height: string;

  import Map from '$assets/svg/kaffa_map.svelte';
  import { onMount } from 'svelte';

  let svgWidth: number;

  onMount(() => {
    svgWidth = window.innerWidth < 640 ? 250 : 500;

    window.addEventListener('resize', () => {
      svgWidth = window.innerWidth < 640 ? 250 : 500;
    });
  });
</script>

<section class={`${height} w-full top-0 -z-10  relative`} id="map">
  <img
    src={image}
    alt="Entlebuch Bild"
    class="object-cover h-full w-full"
    loading="eager"
  />
  <div class="absolute top-6 lg:top-12 right-0 lg:right-12">
    <Map width={svgWidth} />
  </div>
</section>
