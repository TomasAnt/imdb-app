import { useState } from "react"

import Star from "@components/core/starRating/star"
import { FlexContainer } from "@styles/baseElements.styled"
import { StarRatingProps } from "@typings/globalTypes"

import { StarContainer, StarText } from "./starRating.styled"

/**
 * StarRating Component
 *
 * @param color - The color of the star (default is "#fcc419").
 * @param size - The size of the star (default is 48).
 * @param messages - An array of messages corresponding to each rating value.
 * @param maxRating - The maximum number of stars (default is 5).
 * @param defaultRating - The initial rating value (default is 0).
 * @param onSetRating - Function to execute when a star rating is set.
 *
 * This component renders a star rating system.
 * Users can hover over stars to preview their rating, and click to set it.
 * The component also supports custom color, size, and maximum rating.
 * Messages corresponding to rating values can be displayed next to the stars.
 */

export default function StarRating({
  color = "#fcc419",
  size = 48,
  messages = [],
  maxRating = 5,
  defaultRating = 0,
  onSetRating,
}: StarRatingProps) {
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
