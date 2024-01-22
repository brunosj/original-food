export const prerender = true;
export const trailingSlash = 'always';

export const load = async ({ fetch, url }) => {
  const { pathname } = url;

  try {
    const res = await fetch(
      `${import.meta.env.VITE_CMS_API_URL}of-footer?populate=*`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    const footer = data.data;

    return {
      pathname,
      footer,
    };
  } catch (error) {
    console.error('Error while fetching data:', error);

    return {
      status: 500,
      error: 'Failed to fetch data',
    };
  }
};
