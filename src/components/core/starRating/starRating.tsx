import React, { useState } from "react"

import Star from "@components/core/starRating/star"
import { FlexContainer } from "@styles/baseElements.styled"
import { StarRatingProps } from "@typings/globalTypes"

import { StarContainer, StarText } from "./starRating.styled"

const StarRating: React.FC<StarRatingProps> = ({
  color = "#fcc419",
  size = 48,
  messages = [],
  maxRating = 5,
  defaultRating = 0,
  onSetRating,
}) => {
  const [rating, setRating] = useState(defaultRating)
  const [tempRating, setTempRating] = useState(0)

  const handleRating = (rating: number) => {
    setRating(rating)
    onSetRating?.(rating)
  }

  return (
    <FlexContainer>
      <StarContainer>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            isStarFilled={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </StarContainer>
      <StarText color={color} size={size}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </StarText>
    </FlexContainer>
  )
}

export default StarRating
