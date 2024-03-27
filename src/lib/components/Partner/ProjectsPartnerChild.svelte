<script lang="ts">
  export let item: Logo;
  export let i: number;

  import type { Logo } from '$types/responseInterfaces';
  import SvelteMarkdown from 'svelte-markdown';
</script>

<li class={i % 2 === 0 ? 'bg-ter layout' : 'bg-sec layout'}>
  <div class="lg:grid grid-cols-3 gap-24 pt-6 lg:pt-0">
    <div
      class={`h-full col-span-1  ${i % 2 === 0 ? 'order-first' : 'order-last'}`}
    >
      <div class="relative h-full lg:bg-white w-32 lg:w-48 m-auto flex">
        <div class=" m-auto p-4">
          <img
            src={item.attributes.bild.data.attributes.url}
            alt=""
            class="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
    <div
      class={`sectionPySub m-auto col-span-2 space-y-3 lg:space-y-6 ${
        i % 2 === 0 ? 'order-last' : 'order-first text-ter'
      }`}
    >
      <h3>{item.attributes.titel}</h3>
      <div class="markdown">
        <SvelteMarkdown source={item.attributes.beschreibung} />
      </div>
    </div>
  </div>
</li>
