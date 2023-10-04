export type Locales = "en" | "lt"

// Props for the StarRating component
export interface StarRatingProps {
  maxRating: number // Maximum rating value
  color?: string // Color of the stars
  size?: number // Size of the stars
  messages?: string[] // Messages to display based on the rating
  defaultRating?: number // Initial rating value
  onSetRating?: (rating: number) => void // Function when the rating changes to display rating in parent component (if needed)
}

// Props for the Star component
export interface StarProps {
  isStarFilled: boolean // Whether the star should be filled or not
  onRate: () => void // Handler when the star is clicked
  onHoverIn: () => void // Handler when mouse enters the star
  onHoverOut: () => void // Handler when mouse leaves the star
  color: string // Color of the star
  size: number // Size of the star
}
