import breakPoints from "@globalStyles/breakPoints";

const isMobile = () =>  window.innerWidth <= breakPoints.mobile;

const isTablet = () =>  !isMobile() && window.innerWidth <= breakPoints.tablet;

const isDesktop = () =>  window.innerWidth > breakPoints.desktop;

export {
  isMobile,
  isTablet,
  isDesktop
};