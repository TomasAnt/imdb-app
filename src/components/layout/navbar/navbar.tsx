import { StyledNavbar } from "./navbar.styled"

type NavbarProps = {
  children: React.ReactNode
}

export default function Navbar({ children }: NavbarProps) {
  return <StyledNavbar>{children}</StyledNavbar>
}
