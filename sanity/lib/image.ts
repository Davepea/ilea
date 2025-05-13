// sanity/lib/image.ts
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from './client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}

export function urlForImageWithDimensions(
  source: SanityImageSource,
  width: number,
  height: number
) {
  return builder.image(source).width(width).height(height).url();
}