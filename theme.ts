import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  colors: {
    primary: "#32174D",
    text: "#FF007C",
    secondary: "#FFEBD6",
  },
  fonts: {
    heading: "'JetBrains Mono', monospace",
    text: "'Space Grotesk', sans-serif",
  },
  spacing: {
    borderRadius: "5px",
    borderRadiusNav: "15px",
    navMargin: "0 1.5rem",
    bodyXMargin: "10rem",
    desktopBodyXMargin: "8rem",
    tabletBodyXMargin: "5rem",
    mobileBodyXMargin: "2rem",
  },
  breakPoints: {
    isMobile: "650px",
    isSmallMobile: "500px",
    isTablet: "900px",
    isDesktop: "1280px",
    isXlDesktop: "1500px",
  },
};

export { defaultTheme };
