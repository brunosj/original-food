<script lang="ts">
  export let footer: Footer;

  import type { Footer } from '$types/responseInterfaces';
  import Logo from '$assets/svg/OF-Logo.svelte';
  import { menu, additionalMenu } from '$data/menu';
  import SvelteMarkdown from 'svelte-markdown';

  let { anschrift, statement, copyright } = footer.attributes;
</script>

<section class="block h-[575px] pointer-events-none box-border"></section>
<section class="block bg-quar h-[575px] fixed bottom-0 w-full sectionPy">
  <div class="layout lg:grid grid-cols-2">
    <div class="space-y-6 lg:space-y-12">
      <Logo width="8rem" textColor="" barColor="rgb(181,83,34)" />
      <ul class="flex flex-col font-sec space-y-2">
        {#each menu as item, i}
          {#key i}
            <li class="">
              <a
                href={item.slug}
                rel={item.slug.includes('http') ? 'noopener noreferrer' : ''}
                target={item.slug.includes('http') ? '_blank' : ''}
                class="inline-block hover:translate-x-1 duration-300 hover:text-orange text-sm lg:text-base"
              >
                {item.name}
              </a>
            </li>
          {/key}
        {/each}

        {#each additionalMenu as item, i}
          {#key i}
            <li class="">
              <a
                href={item.slug}
                rel={item.slug.includes('http') ? 'noopener noreferrer' : ''}
                target={item.slug.includes('http') ? '_blank' : ''}
                class="inline-block hover:translate-x-1 duration-300 hover:text-orange text-sm lg:text-base"
              >
                {item.name}
              </a>
            </li>
          {/key}
        {/each}
      </ul>
    </div>
    <div class="space-y-3 lg:space-y-6 pt-6 lg:pt-0">
      <span class="font-sec text-xs lg:text-lg">
        {statement}
      </span>
      <div class="markdown">
        <SvelteMarkdown source={copyright} />
      </div>
      <div class="markdown hidden lg:block">
        <SvelteMarkdown source={anschrift} />
      </div>
    </div>
    <div class="col-span-2 text-xs flex text-beige-800 pt-6">
      <span class="ml-auto">
        Webentwicklung von
        <a
          href="https://www.landozone.net/"
          class="textHover underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          landozone
        </a>
      </span>
    </div>
  </div>
</section>
