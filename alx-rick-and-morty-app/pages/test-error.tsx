import ErrorBoundary from "@/components/ErrorBoundary"
import ErrorProneComponent from "@/components/ErrorProneComponent"

export default function TestPage() {
  return (
    <div>
      <h1>Test 1: Without ErrorBoundary</h1>
      <ErrorProneComponent /> {/* This will crash the page */}
    </div>
  )
}