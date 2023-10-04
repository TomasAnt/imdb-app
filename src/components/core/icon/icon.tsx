import React, { forwardRef } from "react"

import EmptyStar from "@assets/icons/empty-star.svg"
import FullStar from "@assets/icons/full-star.svg"

import { StyledIcon } from "./icon.styled"

const icons = {
  fullStar: FullStar,
  emptyStar: EmptyStar,
}

export type IconName = keyof typeof icons
export type IconSizes = "small" | "medium" | "large"

interface IconProps extends React.ComponentProps<typeof StyledIcon> {
  iconName: IconName
  size?: IconSizes
  color?: string
}

const Icon = forwardRef(
  ({ iconName, size, color, ...props }: IconProps, ref) => (
    <StyledIcon ref={ref} size={size} color={color} {...props}>
      {React.createElement(icons[iconName])}
    </StyledIcon>
  )
)

Icon.displayName = "Icon"

export default Icon
