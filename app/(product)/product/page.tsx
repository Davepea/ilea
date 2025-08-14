import { client } from '@/sanity/lib/client';
import { Product } from '@/sanity.types';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS_QUERY } from '@/lib/queries';

export default async function ProductsPage() {
  // Fetch all products
  const products = await client.fetch<Product[]>(PRODUCTS_QUERY);



  return (
    <div className="container mx-auto px-10 py-8">
      <h1 className="mb-8 text-6xl font-bold mt-20 header">Our Collection</h1>

     

      {/* Products Grid */}
      {products.length === 0 ? (
        <p className="text-gray-500">No products found</p>
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
