<script lang="ts">
  export let data;

  import type { Page } from '$types/responseInterfaces';
  import GenericPage from '$components/Page/GenericPage.svelte';
  import SEO from '$lib/components/SEO/index.svelte';
  import { getMediaUrl } from '$lib/utils/media';
  import { website } from '$lib/data/config';

  // Logic
  let pageData: Page = data.page?.[0];

  const title = pageData?.attributes.titel ?? 'Datenschutzerklärung';
  const metaDescription = 'Datenschutzerklärung';
  const image = getMediaUrl(pageData?.attributes.bild) || website.siteImage;

  // SEO
  const breadcrumbs = [
    {
      name: 'Home',
      slug: '',
    },
    {
      name: 'Datenschutzerklärung',
      slug: 'datenschutz',
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

{#if pageData}
  <SEO {...seoProps} />
  <GenericPage
    title={pageData.attributes.titel}
    text={pageData.attributes.text}
    image={pageData.attributes.bild}
  />
{/if}
