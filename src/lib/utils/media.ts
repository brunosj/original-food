import type { Picture } from '$types/responseInterfaces';

type MediaLike = Picture | null | undefined;

export function getMediaUrl(
  media: MediaLike,
  fallback = ''
): string {
  return media?.data?.attributes?.url ?? fallback;
}
