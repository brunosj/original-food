<script lang="ts">
  import { PUBLIC_SHOP_URL } from '$env/static/public';
  import type { Homepage } from '$types/responseInterfaces';
  import { CTA } from '$components';
  import Header from '$components/Header/Header.svelte';
  import UniqueSellingProposition from '$components/USP/UniqueSellingProposition.svelte';
  import Hero from '$components/Hero/Hero.svelte';
  import SEO from '$lib/components/SEO/index.svelte';
  import Products from '$components/Product/Products.svelte';
  import Statement from '$components/Statement/Statement.svelte';

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

  console.log(pageData);
</script>

<SEO {...seoProps} />

<Hero
  headerImage={pageData.attributes.heroBild.data.attributes.url}
  headerHeight="h-48 lg:h-[75vh]"
  headerTitle={pageData.attributes.heroText}
/>

<Statement
  items={pageData.attributes.produkte.data}
  statementText={pageData.attributes.statementText}
/>
