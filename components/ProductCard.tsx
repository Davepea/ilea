// components/ProductCard.tsx
import Image from 'next/image';
import Link from 'next/link';

import type { Product } from '@/sanity.types';
import { urlForImageWithDimensions } from '@/sanity/lib/image';
import {  BiShoppingBag } from 'react-icons/bi';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className = '' }: ProductCardProps) {
  return (
    <>
     <div>
       <Link href={`/product/${product.slug?.current || '#'}`} className={`group block overflow-hidden   border-gray-200 transition-all  ${className}`}>
      {/* Image with hover effect and status badges */}
      <div className="relative h-[350px]  overflow-hidden">
      {product.mainImage && (
       <div className='h-full'>
         <Image
            src={urlForImageWithDimensions(product.mainImage, 600, 600)}
            alt={product.mainImage.alt || product.name || 'Product image'}
            width={900}
            height={900}
            className="object-cover w-full h-full transition-transform group-hover:scale-105 "
        />
       </div>
        )}       
        {/* Status badges */}
        <div className="absolute left-2 top-2 flex flex-col gap-1 z-20 rotate-270">
          {product.isNew && (
            <span className=" bg-[#0095ff] px-5 pr-7  text-lg text-[#F2F0EF] fo">
              NEW
            </span>
          )}
         
        </div>
      </div>
      {/* Product details */}
      <div className="py-6 p-4">
        <p className="text-lg   font-semibold line-clamp-1 ">
          {product.name}
        </p>
        <div className='flex justify-between items-center'>
          {/* Price section */}
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {product.discountPrice ? (
                <>
                  <span className="text-sm text-gray-500 line-through">
                    ${product.price?.toFixed(2)}
                  </span>
                  <span className=" text-red-[]">
                    ${product.discountPrice.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className=" text-gray-900">
                  ${product.price?.toFixed(2)}
                </span>
              )}
            </div>
            
            {product.inventory?.quantity && product.inventory.quantity < 10 && (
              <span className="text-xs text-orange-600">
                Only {product.inventory.quantity} left
              </span>
            )}
          </div> 

          <div >
            <BiShoppingBag/>
          </div>

        </div>
      </div>

      
     </Link>
    
     </div>
    </>

  );
}