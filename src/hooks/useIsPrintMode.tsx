'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to detect print mode based on the URL query parameter.
 * Returns true if the 'print' parameter is present in the URL.
 * Useful for rendering components differently when printing or generating PDFs.
 */
export const useIsPrintMode = () => {
  const [isPrintMode, setIsPrintMode] = useState(false);

  useEffect(() => {
    const checkPrintMode = () => {
      return new URLSearchParams(window.location.search).has('print');
    };

    setIsPrintMode(checkPrintMode());

    // Listen for URL changes in case of client-side navigation
    const handlePopState = () => {
      setIsPrintMode(checkPrintMode());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return isPrintMode;
};
