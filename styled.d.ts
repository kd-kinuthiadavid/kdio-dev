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
      bodyMargin: string;
      navMargin: string;
    };
    breakPoints: {
      isMobile: string;
      isTablet: string;
    };
  }
}
