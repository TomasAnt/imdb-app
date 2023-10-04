import React from "react"

import Icon from "@components/core/icon"
import { StarProps } from "@typings/globalTypes"

import { StarStyle } from "./star.styled"

const Star: React.FC<StarProps> = ({
  onRate,
  isStarFilled,
  onHoverIn,
  onHoverOut,
  color,
  size,
}) => (
  <div>
    <StarStyle
      role="button"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      size={size}
    >
      {isStarFilled ? (
        <Icon iconName="fullStar" color={color} />
      ) : (
        <Icon iconName="emptyStar" color={color} />
      )}
    </StarStyle>
  </div>
)

export default Star
