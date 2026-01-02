import ErrorBoundary from "@/components/ErrorBoundary"
import ErrorProneComponent from "@/components/ErrorProneComponent"

export default function TestPage() {
  return (
    <div>
      <h1>Test 2: With ErrorBoundary</h1>
      <ErrorBoundary>
        <ErrorProneComponent /> {/* This will show error message but not crash */}
      </ErrorBoundary>
      <p>This text should still be visible!</p>
    </div>
  )
}