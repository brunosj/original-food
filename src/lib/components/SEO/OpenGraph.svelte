<script lang="ts">
  export let image: string;
  export let squareImage: string;
  export let metaDescription: string;
  export let ogLanguage: string;
  export let pageTitle: string;
  export let siteTitle: string;
  export let url: string;
</script>

<svelte:head>
  <meta property="og:site_name" content={siteTitle} />
  <meta property="og:locale" content={ogLanguage} />
  <meta property="og:url" content={url} />
  <meta property="og:type" content={'website'} />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={metaDescription} />
  {#if image}
    <meta property="og:image" content={image} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content={''} />
  {/if}
  {#if squareImage}
    <meta property="og:image" content={squareImage} />
    <meta property="og:image:width" content="500" />
    <meta property="og:image:height" content="500" />
    <meta property="og:image:alt" content={''} />
  {/if}
</svelte:head>
