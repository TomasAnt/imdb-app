import Logo from "@components/core/logo"

import { StyledNavbar } from "."

interface NavbarProps {
  children: React.ReactNode
}

export default function Navbar({ children }: NavbarProps) {
  return (
    <StyledNavbar>
      <Logo />
      {children}
    </StyledNavbar>
  )
}
