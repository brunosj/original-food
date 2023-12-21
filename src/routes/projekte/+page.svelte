<script lang="ts">
  import type { ProjectPage } from '$types/responseInterfaces';

  import ImageHero from '$components/Hero/ImageHero.svelte';
  import SEO from '$lib/components/SEO/index.svelte';
  import ProjectsTopSection from '$components/Header/ProjectsTopSection.svelte';
  import UniqueSellingPropositionExpanded from '$components/USP/UniqueSellingPropositionExpanded.svelte';
  import ProjectsBottomSection from '$components/Footer/ProjectsBottomSection.svelte';
  import ProjectsPartnerSection from '$components/Partner/ProjectsPartnerSection.svelte';

  // SEO
  let title = 'Projekte';
  let metaDescription = 'Unsere Projekte';
  const breadcrumbs = [
    {
      name: 'Home',
      slug: '',
    },
    {
      name: 'Projekte',
      slug: '/projekte',
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
  let pageData: ProjectPage = data.page;

  const logos = pageData.attributes.logos.data;

  const midpoint = Math.ceil(logos.length / 2);

  const firstHalf = logos.slice(0, midpoint);
  const secondHalf = logos.slice(midpoint);
</script>

<SEO {...seoProps} />
<ImageHero
  image={pageData.attributes.heroBild.data.attributes.url}
  height="h-48 lg:h-[65svh]"
/>
<ProjectsTopSection
  title={pageData.attributes.sektionTopTitel}
  text={pageData.attributes.sektionTopText}
/>
<ImageHero
  image={pageData.attributes.zieleBild.data.attributes.url}
  height="h-48 lg:h-[65svh]"
/>
<UniqueSellingPropositionExpanded
  title={pageData.attributes.zieleTop.titel}
  subtitle={pageData.attributes.zieleTop.untertitel}
  pillars={pageData.attributes.ziele.data}
/>
<ProjectsPartnerSection
  logos={firstHalf}
  title={pageData.attributes.partnerTop.titel}
  subtitle={pageData.attributes.partnerTop.untertitel}
/>
<ImageHero
  image={pageData.attributes.partnerBild.data.attributes.url}
  height="h-48 lg:h-[65svh]"
/>
<ProjectsPartnerSection
  logos={secondHalf}
  title={pageData.attributes.partnerTop.titel}
  subtitle={pageData.attributes.partnerTop.untertitel}
  displayHeader={false}
/>
<ProjectsBottomSection
  products={pageData.attributes.produkte.data}
  image={pageData.attributes.footerBild.data.attributes.url}
/>
