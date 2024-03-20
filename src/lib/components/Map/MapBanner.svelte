<script lang="ts">
  export let image: string;
</script>

<section class={`w-full top-0 -z-10  relative`} id="map">
  <img
    src={image}
    alt="Entlebuch Bild"
    class="object-cover h-full w-full"
    loading="eager"
  />
</section>
