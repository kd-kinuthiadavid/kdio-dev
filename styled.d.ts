import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
    };
    fonts: {
      heading: string;
      text: string;
    };
    spacing: {
      borderRadius: string;
      borderRadiusNav: string;
      bodyXMargin: string;
      desktopBodyXMargin: string;
      tabletBodyXMargin: string;
      mobileBodyXMargin: string;
      navMargin: string;
    };
    breakPoints: {
      isSmallMobile: string;
      isMobile: string;
      isTablet: string;
      isDesktop: string;
    };
  }
}
