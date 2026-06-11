<script lang="ts">
	import type { ProjectPage } from '$types/responseInterfaces';
	import ImageHero from '$components/Hero/ImageHero.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	import ProjectsTopSection from '$components/Header/ProjectsTopSection.svelte';
	import UniqueSellingPropositionExpanded from '$components/USP/UniqueSellingPropositionExpanded.svelte';
	import ProjectsPartnerSection from '$components/Partner/ProjectsPartnerSection.svelte';
	import ProductSection from '$components/Product/ProductSection.svelte';
	import { getMediaUrl } from '$lib/utils/media';
	import { website } from '$lib/data/config';

	let { data } = $props();

	const pageData = $derived(data.page as ProjectPage);
	const title = $derived(pageData.attributes.SEO?.Titel ?? website.siteTitle);
	const metaDescription = $derived(
		pageData.attributes.SEO?.Beschreibung ?? website.siteDescription
	);
	const image = $derived(getMediaUrl(pageData.attributes.heroBild) || website.siteImage);
	const logos = $derived(pageData.attributes.logos?.data ?? []);
	const midpoint = $derived(Math.ceil(logos.length / 2));
	const firstHalf = $derived(logos.slice(0, midpoint));
	const secondHalf = $derived(logos.slice(midpoint));

	// SEO
	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		},
		{
			name: 'Projekte',
			slug: '/projekte'
		}
	];
	const seoProps = $derived({
		breadcrumbs,
		title,
		metaDescription,
		slug: '/projekte',
		image
	});
</script>

<SEO {...seoProps} />
<article class="sectionPb">
	<ImageHero image={getMediaUrl(pageData.attributes.heroBild)} height="h-56 lg:h-[65dvh]" />
	<ProjectsTopSection
		title={pageData.attributes.sektionTopTitel}
		text={pageData.attributes.sektionTopText}
	/>
	<ImageHero image={getMediaUrl(pageData.attributes.zieleBild)} height="h-56 lg:h-[65dvh]" />
	<UniqueSellingPropositionExpanded
		title={pageData.attributes.zieleTop.titel}
		subtitle={pageData.attributes.zieleTop.untertitel}
		pillars={pageData.attributes.ziele?.data ?? []}
		bottomText={pageData.attributes.zieleBottom?.untertitel}
	/>

	<ProjectsPartnerSection
		logos={firstHalf}
		title={pageData.attributes.partnerTop.titel}
		subtitle={pageData.attributes.partnerTop.untertitel}
	/>
	<ImageHero image={getMediaUrl(pageData.attributes.partnerBild)} height="h-56 lg:h-[65dvh]" />
	<ProjectsPartnerSection
		logos={secondHalf}
		title={pageData.attributes.partnerTop.titel}
		subtitle={pageData.attributes.partnerTop.untertitel}
		displayHeader={false}
	/>
	<ProductSection
		items={pageData.attributes.produkte?.data ?? []}
		bgTop="purple"
		bgBottom="blue"
		padding={true}
	/>
</article>
