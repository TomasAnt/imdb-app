import { DefaultTheme } from "styled-components"

import {
  colors,
  fontWeights,
  fontSizes,
  lineHeights,
  responsiveBreakPoints,
  spacings
} from "./designVariables"

export const appTheme: DefaultTheme = {
  theme: "appTheme",
  colors: colors,
  media: responsiveBreakPoints,
  fontSizes: fontSizes,
  spacings: spacings,
  lineHeights: lineHeights,
  fontWeights: fontWeights,
}
