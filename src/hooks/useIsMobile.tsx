/**
 * Hook for detecting mobile device and screen orientation
 * @returns {Object} - object with isMobile and isLandscape flags
 */
export const useIsMobile = () => {
  const isMobileByAgent =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const isMobileByMediaQuery = window.matchMedia(
    `(max-width: ${1024}px)`
  ).matches;

  const isLowHeight = window.matchMedia(`(max-height: ${512}px)`).matches;

  return {
    isMobile: isMobileByAgent || isMobileByMediaQuery || isLowHeight,
  };
};
