'use client';

import { useState, useEffect } from 'react';

/**
 * Hook for detecting mobile device and screen orientation
 * @returns {boolean} - flag indicating if device is mobile
 */
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileByAgent =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      const isMobileByMediaQuery = window.matchMedia(
        `(max-width: ${1024}px)`
      ).matches;

      const isLowHeight = window.matchMedia(`(max-height: ${512}px)`).matches;

      return isMobileByAgent || isMobileByMediaQuery || isLowHeight;
    };

    setIsMobile(checkIsMobile());

    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};
