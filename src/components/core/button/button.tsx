import { forwardRef } from "react"

import { ButtonVariants, StyledButton } from "."

interface ButtonProps extends React.ComponentProps<typeof StyledButton> {
  variant: ButtonVariants
  children: React.ReactNode
  onClick?: () => void
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, children, onClick, ...props }, ref) => (
    <StyledButton ref={ref} {...props} variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  )
)

Button.displayName = "Button"

export default Button
