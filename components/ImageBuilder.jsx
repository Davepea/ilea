import Image from 'next/image'
import { urlFor } from '@/lib/sanityImage'

<Image
  src={urlFor(product.mainImage).width(800).url()}
  alt={product.mainImage.alt || product.name}
  width={800}
  height={600}
/>
