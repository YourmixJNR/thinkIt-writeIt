import { useState, useEffect } from 'react';

export function useScreenSize() {
 // Initialize state with undefined to indicate that the screen size is not yet known
 const [isMobile, setIsMobile] = useState(undefined);
 const [isDesktop, setIsDesktop] = useState(undefined);

 useEffect(() => {
    // Check if window is defined (i.e., we're in the browser)
    if (typeof window !== 'undefined') {
      // Update state based on the initial window size
      setIsMobile(window.innerWidth <= 768);
      setIsDesktop(window.innerWidth > 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        setIsDesktop(window.innerWidth > 768);
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
 }, []);

 return { isMobile, isDesktop };
}
