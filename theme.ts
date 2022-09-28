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
    bodyMargin: "0 1.5rem",
  },
  breakPoints: {
    isMobile: "650px",
    isTablet: "900px",
  },
};

export { defaultTheme };
