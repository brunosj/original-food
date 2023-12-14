<script>
  import Logo from '$assets/svg/OF-Logo.svelte';
  import { menu, additionalMenu } from '$data/menu';
</script>

<section
  class="hidden lg:block h-[550px] pointer-events-none box-border"
></section>
<footer class="hidden lg:block bg-primary h-[550px] fixed bottom-0 w-full">
  <div class="layout text-tertiary sectionPy lg:grid grid-cols-2">
    <div class="space-y-12">
      <Logo width="8rem" textColor="white" barColor="white" />
      <ul class="flex flex-col font-secondary space-y-2">
        {#each menu as item, i}
          {#key i}
            <li class="">
              <a
                href={item.slug}
                rel={item.slug.includes('http') ? 'noopener noreferrer' : ''}
                target={item.slug.includes('http') ? '_blank' : ''}
                class="inline-block hover:translate-x-1 duration-300 textHover"
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
                class="inline-block hover:translate-x-1 duration-300 textHover"
              >
                {item.name}
              </a>
            </li>
          {/key}
        {/each}
      </ul>
    </div>
    <div class="space-y-12">
      <h4 class="font-secondary">
        ORIGINAL FOOD unterstützt seit 2003 durch ein integriertes und
        nachhaltig wirkendes Entwicklungsprojekt die Regionen Kaffa und seit
        2016 auch Sheka im Südwesten Äthiopiens.
      </h4>
      <div>
        <p class="font-semibold mb-3 font-secondary">Original Food GmbH</p>
        <p class="text-base">
          Kartäuserstr. 61 <br />
          79104 Freiburg <br />
          Deutschland
        </p>
        <p class="mt-3 text-base">
          Tel.: +49 (0)761 28 28 90 <br />
          Fax: +49 (0)761 28 28 950 <br />
          Email: post(at)originalfood.de
        </p>
      </div>
    </div>
    <div class="col-span-2 text-xs flex text-beige-600 pt-12">
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
</footer>
