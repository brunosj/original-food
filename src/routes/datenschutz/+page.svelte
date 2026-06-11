<script lang="ts">
	import type { Page } from '$types/responseInterfaces';
	import GenericPage from '$components/Page/GenericPage.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	import { getMediaUrl } from '$lib/utils/media';
	import { website } from '$lib/data/config';

	let { data } = $props();

	const pageData = $derived(data.page?.[0] as Page | undefined);
	const title = $derived(pageData?.attributes.titel ?? 'Datenschutzerklärung');
	const metaDescription = 'Datenschutzerklärung';
	const image = $derived(getMediaUrl(pageData?.attributes.bild) || website.siteImage);

	// SEO
	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		},
		{
			name: 'Datenschutzerklärung',
			slug: 'datenschutz'
		}
	];

	const seoProps = $derived({
		breadcrumbs,
		title,
		metaDescription,
		slug: '',
		image
	});
</script>

{#if pageData}
	<SEO {...seoProps} />
	<GenericPage
		title={pageData.attributes.titel}
		text={pageData.attributes.text}
		image={pageData.attributes.bild}
	/>
{/if}
