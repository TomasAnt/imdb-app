import { ErrorContainer } from "."

interface ErrorMessageProps {
  message: string
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <ErrorContainer>
      <span>⛔️</span> {message}
    </ErrorContainer>
  )
}
