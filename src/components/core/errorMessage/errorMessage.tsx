export default function ErrorMessage({ message }: { message: any }) {
  return (
    <p className="error">
      <span>⛔️</span> {message}
    </p>
  )
}
