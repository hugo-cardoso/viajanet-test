import breakPoints from "@globalStyles/breakPoints";

const { innerWidth } = window;

const isMobile = () =>  innerWidth <= breakPoints.mobile;

const isTablet = () =>  !isMobile() && innerWidth <= breakPoints.tablet;

const isDesktop = () =>  innerWidth > breakPoints.desktop;

export {
  isMobile,
  isTablet,
  isDesktop
};