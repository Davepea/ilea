'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { client } from '@/sanity/lib/client';

const Footer = () => {
  const footerRef = useRef(null);
  const [categories, setCategories] = useState<{ title: string; slug: { current: string }; _id: string }[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  useEffect(() => {
    async function fetchCategories() {
      const data = await client.fetch(`*[_type == "category"]{ _id, title, slug }`);
      setCategories(data);
    }
    fetchCategories();
  }, []);

  if (pathname.startsWith("/studio")) {
    return null;
  }

  return (
    <footer ref={footerRef} className="bg-black text-gray-400 md:px-20 px-6 py-14">
      <div className=" mx-auto  py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">

        {/* Shop */}
        <div>
          <h3 className="font-semibold mb-4">Shop</h3>
          <ul className="space-y-2">
            {categories.slice(0, 9).map((cat) => (
              <li key={cat._id}>
                <Link href={`/${cat.slug.current}`} className="hover:underline">
                  {cat.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-4">About</h3>
          <ul className="space-y-2">
            {['Our Story', 'Mission', 'Careers', 'Journal'].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-4">Help</h3>
          <ul className="space-y-2">
            {[
              'FAQs',
              'Shipping Info',
              'Returns & Exchanges',
              'Contact Us',
              'Privacy Policy',
              'Terms of Service',
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-xl">
            <Link href="#"><FaLinkedinIn /></Link>
            <Link href="#"><FaFacebookF /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaInstagram /></Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us:</h3>
          <p>+1 (800) 123-4567</p>
          <Link href="#" className="underline">Support Form</Link>
          <p>Mon - Fri: 9:00am - 6:00pm</p>
          <p>Email: support@roguewear.com</p>

          <h3 className="font-semibold mt-6 mb-2">Flagship Store:</h3>
          <p>123 Rogue St, Brooklyn, NY</p>
          <p>Mon - Sat: 11:00am - 7:00pm</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-xs text-gray-500 py-6 px-4 text-center flex justify-between flex-col md:flex-row">
        <p className="mb-2">
          <span className="font-bold text-[#00F0FF]">#WearYourTruth</span> – All rights reserved © 2025
        </p>
        <div className="flex justify-center items-center gap-4 text-sm">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>Apple Pay</span>
          <span>PayPal</span>
          <span>ShopPay</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
