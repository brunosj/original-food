export async function load({ fetch }) {
  try {
    const res = await fetch(
      `${
        import.meta.env.VITE_CMS_API_URL
      }of-startseite?populate[produkte][populate]=*&populate[heroBild][populate]=*&populate[hero2Bild][populate]=*&populate[logos][populate]=*&populate[nachhaltigkeitSaeulen][populate]=*&populate[presse][populate]=*&populate[karteBild][populate]=*&populate[SEO][populate]=*`
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
