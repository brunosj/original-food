export async function load({ fetch }) {
  try {
    const res = await fetch(
      `${
        import.meta.env.VITE_CMS_API_URL
      }of-projekte?populate[zieleBild][populate]=*&populate[ziele][populate]=*&populate[heroBild][populate]=*&populate[partnerTop][populate]=*&populate[zieleTop][populate]=*&populate[zieleBottom][populate]=*&populate[produkte][populate]=*&populate[partnerBild][populate]=*&populate[footerBild][populate]=*&populate[logos][populate]=*&populate[SEO][populate]=*`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    const page = data.data;

    return {
      page,
    };
  } catch (error) {
    console.error('Error while fetching data:', error);

    return {
      status: 500,
      error: 'Failed to fetch data',
    };
  }
}
