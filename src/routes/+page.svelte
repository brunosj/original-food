<script lang="ts">
  import { PUBLIC_SHOP_URL } from '$env/static/public';
  import type { Homepage } from '$types/responseInterfaces';
  import { CTA } from '$components';
  import Header from '$components/Header/Header.svelte';
  import UniqueSellingProposition from '$components/USP/UniqueSellingProposition.svelte';
  import Hero from '$components/Hero/Hero.svelte';
  import Hero2 from '$components/Hero/Hero2.svelte';
  import SEO from '$lib/components/SEO/index.svelte';
  import Products from '$components/Product/Products.svelte';
  import Statement from '$components/Statement/Statement.svelte';
  import LogoCarousel from '$components/Logo/LogoCarousel.svelte';
  import MapBanner from '$components/Map/MapBanner.svelte';
  import Press from '$components/Press/Press.svelte';

  // SEO
  let title = '';
  let metadescription = '';
  const breadcrumbs = [
    {
      name: 'Home',
      slug: '',
    },
  ];
  const seoProps = {
    breadcrumbs,
    title,
    metadescription,
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
  height="h-[40vh] lg:h-[75vh]"
  headerTitle={pageData.attributes.heroText}
/>
<Statement
  items={pageData.attributes.produkte.data}
  statementTitle={pageData.attributes.statementTitle}
  statementText={pageData.attributes.statementText}
/>
<Hero2
  image={pageData.attributes.hero2Bild.data.attributes.url}
  height="h-48 lg:h-[75vh]"
/>
<LogoCarousel logos={pageData.attributes.logos} />
<UniqueSellingProposition
  title={pageData.attributes.nachhaltigkeitSaeulenTitel}
  subtitle={pageData.attributes.nachhaltigkeitSaeulenUntertitel}
  pillars={pageData.attributes.nachhaltigkeitSaeulen}
/>
<Press
  pressStatement={pageData.attributes.presseStatement}
  press={pageData.attributes.presse.data}
  products={pageData.attributes.produkte.data}
/>
<MapBanner
  image={pageData.attributes.karteBild.data.attributes.url}
  height="h-[35vh] lg:h-[85vh]"
/>
