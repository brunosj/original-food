<script lang="ts">
  export let data;

  import type { Homepage } from '$types/responseInterfaces';
  import UniqueSellingProposition from '$components/USP/UniqueSellingProposition.svelte';
  import Hero from '$components/Hero/Hero.svelte';
  import ImageHero from '$components/Hero/ImageHero.svelte';
  import SEO from '$lib/components/SEO/index.svelte';
  import Statement from '$components/Statement/Statement.svelte';
  import LogoCarousel from '$components/Partner/LogoCarousel.svelte';
  import MapBanner from '$components/Map/MapBanner.svelte';
  import Press from '$components/Press/Press.svelte';
  import ProductSection from '$components/Product/ProductSection.svelte';

  // Logic
  let pageData: Homepage = data.page;

  let title = pageData.attributes.SEO.Titel;
  let metaDescription = pageData.attributes.SEO.Beschreibung;

  const image = pageData.attributes.heroBild.data.attributes.url;

  // SEO
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
    image,
  };
</script>

<SEO {...seoProps} />
<article>
  <Hero
    image={pageData.attributes.heroBild.data.attributes.url}
    height="h-[40dvh] lg:h-[75dvh]"
    headerTitle={pageData.attributes.heroText}
    headerTitle2={pageData.attributes.heroText2}
  />
  <Statement
    items={pageData.attributes.produkte.data}
    statementTitle={pageData.attributes.statementTitle}
    statementText={pageData.attributes.statementText}
  />
  <ImageHero
    image={pageData.attributes.hero2Bild.data.attributes.url}
    height="h-[30dvh] lg:h-[75dvh]"
  />
  <LogoCarousel logos={pageData.attributes.logos.data} />
  <UniqueSellingProposition
    title={pageData.attributes.nachhaltigkeitSaeulenTitel}
    subtitle={pageData.attributes.nachhaltigkeitSaeulenUntertitel}
    pillars={pageData.attributes.nachhaltigkeitSaeulen.data}
  />
  <ProductSection
    items={pageData.attributes.produkte.data}
    bgTop="blue"
    padding={true}
    bgBottom="purple"
  />
  <Press
    press={pageData.attributes.presse.data}
    pressFooter={pageData.attributes.presseFooter}
  />
  <MapBanner image={pageData.attributes.karteBild.data.attributes.url} />
</article>
