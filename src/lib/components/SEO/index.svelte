<script>
  import ogSquareImageSrc from '$lib/assets/images/entlebuch_coffee.jpg';
  import ogImageSrc from '$lib/assets/images/entlebuch_coffee.jpg';
  import featuredImageSrc from '$lib/assets/images/entlebuch_coffee.jpg';
  import { website } from '$lib/data/config';
  import OpenGraph from './OpenGraph.svelte';
  import SchemaOrg from './SchemaOrg.svelte';

  const {
    author,
    ogLanguage,
    siteLanguage,
    siteShortTitle,
    siteTitle,
    siteDescription,
    siteUrl,
    githubPage,
  } = website;

  export let entityMeta = null;
  export let lastUpdated;
  export let metaDescription = '';
  export let slug;
  export let title;
  export let datePublished = '2023-12-05';
  export let entity = {};

  const defaultAlt = 'a picture of coffee plants';

  export let featuredImage = {
    url: featuredImageSrc,
    alt: defaultAlt,
    width: 672,
    height: 448,
    caption: 'Homepage',
  };
  export let ogImage = {
    url: ogImageSrc,
    alt: defaultAlt,
  };
  export let ogSquareImage = {
    url: ogSquareImageSrc,
    alt: defaultAlt,
  };

  const url = `${siteUrl}/${slug}`;
  const pageTitle = `${siteTitle} ${title ? `| ${title}` : ''}`;
  const openGraphProps = {
    image: ogImage,
    squareImage: ogSquareImage,
    metaDescription,
    ogLanguage,
    pageTitle,
    siteTitle,
    url,
  };
  const schemaOrgProps = {
    author,
    breadcrumbs: [
      {
        name: 'Home',
        slug: '',
      },
    ],
    datePublished,
    entity,
    lastUpdated,
    entityMeta,
    featuredImage,
    metaDescription: siteDescription,
    siteLanguage,
    siteTitle,
    siteTitleAlt: siteShortTitle,
    siteUrl,
    title: pageTitle,
    url,
    githubPage,
  };
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={metaDescription} />
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  />
</svelte:head>
<OpenGraph {...openGraphProps} />
<SchemaOrg {...schemaOrgProps} />
