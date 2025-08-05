/**
 * Hook for detecting mobile device and screen orientation
 * @param breakpoint - screen width in pixels at which the device is considered mobile (default: 1024px)
 * @returns {Object} - object with isMobile and isLandscape flags
 */
export const useIsMobile = (breakpoint = 1024) => {
  const isMobileByAgent =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const isMobileByMediaQuery = window.matchMedia(
    `(max-width: ${breakpoint}px)`
  ).matches;

  const isLowHeight = window.matchMedia(
    `(max-height: ${breakpoint}px)`
  ).matches;

  return {
    isMobile: isMobileByAgent || isMobileByMediaQuery || isLowHeight,
  };
};
