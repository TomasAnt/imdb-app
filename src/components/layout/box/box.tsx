import { useState } from "react"

import Button from "@components/core/button"
import { StyledBox } from "@styles/baseElements.styled"

type BoxProps = {
  children: React.ReactNode
}

export default function Box({ children }: BoxProps) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <StyledBox>
      <Button variant="toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </Button>
      {isOpen && children}
    </StyledBox>
  )
}
