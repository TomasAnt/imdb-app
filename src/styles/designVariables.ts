export const colors = {
  white: "#fff",
  primary: "#6741d9",
  primaryLight: "#7950f2",
  textLight: "#dee2e6",
  textDark: "#adb5bd",
  background100: "#343a40",
  background500: "#2b3035",
  background900: "#212529",
  red: "#fa5252",
  redDark: "#e03131",
}

export type AppColorsType = typeof colors

export const responsiveBreakPoints = {
  maxSmallPhone: "(max-width: 360px)",
  maxPhone: "(max-width: 480px)",
  maxTablet: "(max-width: 770px)",
  maxSmallDesktop: "(max-width: 1020px)",
  maxMediumDesktop: "(max-width: 1200px)",
  maxLargeDesktop: "(max-width: 1360px)",
}

export type AppBreakpointsType = typeof responsiveBreakPoints

export const fontSizes = {
  xxs: "0.9rem", // 9px
  xs: "1.2rem", // 12px
  sm: "1.4rem", // 14px
  default: "1.6rem", // 16px
  lg: "1.8rem", // 18px
  bg: "2rem", // 20px
  h1: "3.2rem", // 32px
  h2: "2.4rem", // 24px
  h3: "2rem", // 20px
  h4: "1.8rem", // 18px
}

export type AppFSType = typeof fontSizes

export const lineHeights = {
  xs: "1.2rem", // 12px
  sm: "1.6rem", // 16px
  default: "2rem", // 20px
  lg: "2.4rem", // 24px
  bg: "2.8rem", // 28px
  xl: "4.56rem", // 45.6px
  h1: "4rem", // 40px
  h2: "3.2rem", // 32px
  h3: "2.8rem", // 28px
  h4: "2.4rem", // 24px
}



export type AppLineHeightsType = typeof lineHeights

export const spacings = {

  xxs: "0.6rem", // 6px
  xs: "0.8rem", // 8px
  sm: "1.6rem", // 16px
  md: "1.8rem", // 18px
  default: "2.4rem", // 24px
  lg: "3.2rem", // 32px
  bg: "4.8rem", // 48px
  xl: "6.4rem", // 64px
  xxl: "9.6rem", // 96px
}

export type AppSpacingType = typeof spacings


export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
}

export type AppFontWeightType = typeof fontWeights
