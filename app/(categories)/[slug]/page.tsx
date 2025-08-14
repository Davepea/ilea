// app/(categories)/[slug]/page.tsx

import { client } from '@/sanity/lib/client';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/sanity.types';
import { notFound } from 'next/navigation';
import { PRODUCTS_WITH_CATEGORY_QUERY } from '@/lib/queries';

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;


  const category = await client.fetch<{ title: string } | null>(
    `*[_type == "category" && slug.current == $slug][0]`,
    { slug }
  );

  if (!category) return notFound();


  const products = await client.fetch<Product[]>(
    PRODUCTS_WITH_CATEGORY_QUERY,
    { slug }
  );

  return (
    <div className="container mx-auto px-10 py-8">
      <h1 className="mb-8 text-6xl font-bold mt-20 header">{category.title}</h1>

      {products.length === 0 ? (
        <p className="text-gray-500">No products found in this category</p>
      ) : (
        <div className="grid grid-cols-1 gap-1 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              className="hover:border-gray-300"
            />
          ))}
        </div>
      )}
    </div>
  );
}
