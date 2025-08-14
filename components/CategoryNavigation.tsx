import Link from 'next/link';

interface CategoryNavigationProps {
  className?: string;
}

export default function CategoryNavigation({ className = '' }: CategoryNavigationProps) {
  const categories = [
    { name: 'New Arrivals', path: '/products/new-arrivals' },
    { name: 'Menswear', path: '/products/menswear' },
    { name: 'Womenswear', path: '/products/womenswear' },
    { name: 'Outerwear', path: '/products/outerwear' },
    { name: 'SweatShirt', path: '/products/sweatshirt' },
    { name: 'Jeans', path: '/products/jeans' },
    { name: 'Trouser', path: '/products/trouser' },
    { name: 'Jersey', path: '/products/jersey' },
    { name: 'Complete Set', path: '/products/complete-set' },
    { name: 'Cap', path: '/products/cap' },
  ];

  return (
    <nav className={`${className} py-4`}>
      <ul className="flex flex-wrap gap-6 justify-center">
        {categories.map((category) => (
          <li key={category.path}>
            <Link 
              href={category.path}
              className="text-gray-700 hover:text-black hover:underline font-medium transition-colors"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

