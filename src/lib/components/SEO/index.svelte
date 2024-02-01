<script>
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
    siteImage,
  } = website;

  export let entityMeta = null;
  export let metaDescription = '';
  export let slug;
  export let title;
  export let entity = {};
  export let image = siteImage;

  const defaultAlt = 'a picture of coffee plants';

  export let featuredImage = {
    url: siteImage,
    alt: defaultAlt,
    width: 672,
    height: 448,
    caption: 'Homepage',
  };
  export let ogImage = image;

  export let ogSquareImage = image;

  const url = `${siteUrl}/${slug}`;
  const pageTitle = `${title ? `${title}` : siteTitle}`;
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
    entity,
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
  <meta name="description" content={siteDescription} />
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  />
</svelte:head>
<OpenGraph {...openGraphProps} />
<SchemaOrg {...schemaOrgProps} />
