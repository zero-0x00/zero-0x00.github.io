import { useMemo } from 'react';

/**
 * Hook to detect print mode based on the URL query parameter.
 * Returns true if the 'print' parameter is present in the URL.
 * Useful for rendering components differently when printing or generating PDFs.
 */

export const useIsPrintMode = () => {
  return useMemo(() => {
    return new URLSearchParams(window.location.search).has('print');
  }, []);
};
