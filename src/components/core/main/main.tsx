import { StyledMain } from "."

type MainProps = {
  children: React.ReactNode
}

export default function Main({ children }: MainProps) {
  return <StyledMain>{children}</StyledMain>
}
