'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

interface CategoriesProps {
  setIsDropdownOpen: (isOpen: boolean) => void;
}

interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

const Categories = ({ setIsDropdownOpen }: CategoriesProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetch categories client-side
        const fetchedCategories = await client.fetch<{ _id: string; title: string; slug: { current: string } }[]>(`
          *[_type == "category" && defined(slug.current)]{
            _id,
            title,
            "slug": slug.current
          }
        `);
        
        // Transform to the format we need
        const formattedCategories = fetchedCategories.map(cat => ({
          _id: cat._id,
          title: cat.title,
          slug: cat.slug
        }));
        
        setCategories(formattedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div className="px-4 py-2 text-sm">Loading categories...</div>;
  }

  return (
    <>
      {categories.map((category) => (
        <Link
          key={category._id}
          href={`/${category.slug}`}
          className="bg-[#202124] text-sm font-medium px-4 py-4 hover:bg-gray-200 hover:text-[#FD5E53] transition"
          onClick={() => setIsDropdownOpen(false)}
        >
          {category.title}
        </Link>
      ))}
    </>
  );
};

export default Categories;