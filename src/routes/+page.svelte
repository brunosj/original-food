<script lang="ts">
  import type { Homepage } from '$types/responseInterfaces';
  import UniqueSellingProposition from '$components/USP/UniqueSellingProposition.svelte';
  import Hero from '$components/Hero/Hero.svelte';
  import ImageHero from '$components/Hero/ImageHero.svelte';
  import SEO from '$lib/components/SEO/index.svelte';
  import Statement from '$components/Statement/Statement.svelte';
  import LogoCarousel from '$components/Partner/LogoCarousel.svelte';
  import MapBanner from '$components/Map/MapBanner.svelte';
  import Press from '$components/Press/Press.svelte';

  // SEO
  let title = '';
  let metaDescription = '';
  const breadcrumbs = [
    {
      name: 'Home',
      slug: '',
    },
  ];
  const seoProps = {
    breadcrumbs,
    title,
    metaDescription,
    slug: '',
    datePublished: '2023-12-05T14:19:33.000+0100',
    lastUpdated: '2021-12-05T14:19:33.000+0100',
  };

  // Logic
  export let data;
  let pageData: Homepage = data.page;
</script>

<SEO {...seoProps} />
<Hero
  image={pageData.attributes.heroBild.data.attributes.url}
  height="h-[40svh] lg:h-[75svh]"
  headerTitle={pageData.attributes.heroText}
/>
<Statement
  items={pageData.attributes.produkte.data}
  statementTitle={pageData.attributes.statementTitle}
  statementText={pageData.attributes.statementText}
/>
<ImageHero
  image={pageData.attributes.hero2Bild.data.attributes.url}
  height="h-48 lg:h-[75svh]"
/>
<LogoCarousel logos={pageData.attributes.logos.data} />
<UniqueSellingProposition
  title={pageData.attributes.nachhaltigkeitSaeulenTitel}
  subtitle={pageData.attributes.nachhaltigkeitSaeulenUntertitel}
  pillars={pageData.attributes.nachhaltigkeitSaeulen.data}
/>
<Press
  pressStatement={pageData.attributes.presseStatement}
  press={pageData.attributes.presse.data}
  products={pageData.attributes.produkte.data}
/>
<MapBanner
  image={pageData.attributes.karteBild.data.attributes.url}
  height="h-[45svh] lg:h-[85svh]"
/>
