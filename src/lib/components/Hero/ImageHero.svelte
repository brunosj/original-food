<script lang="ts">
  export let image: string;
  export let height: string;
</script>

<div class={`${height} w-full top-0 -z-10  relative`} id="hero2">
  <img src={image} alt="Entlebuch Bild" class="object-cover h-full w-full" />
  <!-- <div class="absolute layout bottom-12 right-0 w-[65%]">
    <div class="bg-pri p-4 bg-opacity-50 rounded-xl">
      <h1 class="text-ter font-semibold text-right">
        {headerTitle}
      </h1>
    </div>
  </div> -->
</div>

<style>
  .gradient-overlay {
    position: relative;
    overflow: hidden;
  }

  .gradient-overlay::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0) 25%,
      rgba(0, 0, 0, 0)
    );
    z-index: 5;
  }
</style>
