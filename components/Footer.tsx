'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <footer ref={footerRef} className="bg-black text-gray-400 md:px-20 px-6 py-14">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Explore */}
        <div>
          <h3 className="font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            {[
              'Electric Bikes',
              'Adult Bikes',
              'Kids Bikes',
              'Company Electric',
              'Company Adult',
              'Electric Insurance',
              'Frame Size',
              'Payment Options',
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-4">About</h3>
          <ul className="space-y-2">
            {['About Us', 'Join Us', 'Reviews', 'Journal'].map((item) => (
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
              'FAQ',
              'Electric FAQ',
              'Shipping',
              'Returns',
              'Warranty',
              'Assembly',
              'Contact Us',
              'Privacy Policy',
              'Terms and Conditions',
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
          <p>+31(0)20-2611433</p>
          <Link href="#" className="underline">Customer Service Form</Link>
          <p>Mon - Fri: 10:00am - 3:00pm</p>
          <p>Email: info@veloretti.com</p>

          <h3 className="font-semibold mt-6 mb-2">Store Hours:</h3>
          <p>Mon - Fri: 9:30am - 6:00pm</p>
          <p>Saturday: 10:00am - 5:30pm</p>
          <p>Sunday: 12:00pm - 5:00pm</p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-xs text-gray-500 py-6 px-4 text-center flex justify-between flex-col md:flex-row">
        <p className="mb-2">
          <span className="font-bold text-[#00F0FF]">3.8/5 ★</span> Trustpilot BASED ON 2,070 REVIEWS
        </p>
        <div className="flex justify-center items-center gap-4 text-lg">
          <span>in3</span>
          <span>K.</span>
          <span>iDEAL</span>
          <span>PayPal</span>
          <span>Visa</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
