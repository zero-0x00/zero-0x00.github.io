import { useMemo } from 'react';

export const useIsPrintMode = () => {
  return useMemo(() => {
    return new URLSearchParams(window.location.search).has('print');
  }, []);
};
