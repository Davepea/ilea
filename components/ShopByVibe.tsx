import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProductCard from './ProductCard';
import { client } from '@/sanity/lib/client';
import { PRODUCTS_QUERY } from '@/lib/queries';
import { Product } from '@/sanity.types';
import AnimatedTitle2 from './AnimatedTitle2';

gsap.registerPlugin(ScrollTrigger);



export default async function ShopByVibe() {

 const products = await client.fetch<Product[]>(PRODUCTS_QUERY);
    
 

  return (
    <section  className="py-25 px-4" id="shop-by-vibe">
      <div className="max-w-7xl mx-auto text-center">
        <AnimatedTitle2 className="text-start" text='Your Style, Your Story.'/>

        <div className=" text-start grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
             {products.slice(0, 4).map((product) => (
                      <ProductCard 
                        key={product._id} 
                        product={product} 
                        className="hover:border-gray-300" 
                      />
                    ))}
        </div>
      </div>
    </section>
  );
}
