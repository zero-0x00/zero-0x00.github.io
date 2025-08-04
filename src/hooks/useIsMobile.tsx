/**
 * Хук для определения мобильного устройства и ориентации экрана
 * @param breakpoint - ширина экрана в пикселях, при которой устройство считается мобильным (по умолчанию 1024px)
 * @returns {Object} - объект с флагами isMobile и isLandscape
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
