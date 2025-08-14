// components/PreloaderWrapper.tsx
'use client';

import { useEffect, useState, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Preloader from './Preloader';

interface PreloaderWrapperProps {
  children: ReactNode;
}

const PreloaderWrapper: React.FC<PreloaderWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') {
      // If not home page, skip preloader
      setIsLoading(false);
    }
  }, [pathname]);

  const handleComplete = () => {
    setIsLoading(false);
  };

  // If not home page, just show children
  if (pathname !== '/') return <>{children}</>;

  return (
    <>
      {isLoading && <Preloader onComplete={handleComplete} />}
      {!isLoading && children}
    </>
  );
};

export default PreloaderWrapper;
