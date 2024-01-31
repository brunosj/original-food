<script lang="ts">
  export let data;

  import type { Page } from '$types/responseInterfaces';
  import GenericPage from '$components/Page/GenericPage.svelte';
  import ContactForm from '$components/Form/ContactForm.svelte';
  import SEO from '$lib/components/SEO/index.svelte';

  // Logic
  let pageData: Page = data.page[0];

  const title = pageData.attributes.titel;
  const metaDescription = '';
  const image = pageData.attributes.bild.data.attributes.url;

  // SEO
  const breadcrumbs = [
    {
      name: 'Home',
      slug: '',
    },
    {
      name: 'Kontakt',
      slug: 'kontakt',
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
<GenericPage
  title={pageData.attributes.titel}
  text={pageData.attributes.text}
  image={pageData.attributes.bild}
/>
<!-- <ContactForm /> -->
