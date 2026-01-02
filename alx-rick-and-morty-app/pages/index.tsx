import { useQuery } from "@apollo/client/react"
import { GET_EPISODES } from "@/graphql/queries"
import { EpisodeProps } from "@/interfaces"
import EpisodeCard from "@/components/common/EpisodeCard"
import { useEffect, useState } from "react"
import ErrorBoundary from "@/components/ErrorBoundary"
import ErrorProneComponent from "@/components/ErrorProneComponent"

const Home: React.FC = () => {
  const [page, setPage] = useState<number>(1)
  const { loading, error, data, refetch } = useQuery(GET_EPISODES, {
    variables: {
      page: page
    }
  })

  useEffect(() => {
    refetch()
  }, [page, refetch])

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error</h1>

  const results = data?.episodes.results
  const info = data?.episodes.info

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#A3D5E0] to-[#F4F4F4] text-gray-800">
      {/* Header */}
      <header className="bg-[#4CA1AF] text-white py-6 text-center shadow-md">
        <h1 className="text-4xl font-bold tracking-wide">Rick and Morty Episodes</h1>
        <p className="mt-2 text-lg italic">Explore the multiverse of adventures!</p>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        
        {/* Error Boundary Test Section */}
        <div className="mb-8 p-4 border-2 border-red-500 rounded-lg bg-red-50">
          <h2 className="text-2xl font-bold text-red-700 mb-2">🧪 ErrorBoundary Test Section</h2>
          <p className="text-gray-700 mb-3">
            Below is a component that intentionally throws an error to test ErrorBoundary functionality.
            If ErrorBoundary is working, you'll see an error message instead of the app crashing.
          </p>
          
          <ErrorBoundary>
            <ErrorProneComponent />
          </ErrorBoundary>
          
          <p className="mt-3 text-green-600 font-medium">
            ✅ The rest of the page should work even if the component above throws an error!
          </p>
        </div>

        {/* Regular Episodes Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results && results.map(({ id, name, air_date, episode }: EpisodeProps, key: number) => (
            <EpisodeCard
              id={id}
              name={name}
              air_date={air_date}
              episode={episode}
              key={key}
            />
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-between mt-6">
          <button 
            onClick={() => setPage(prev => prev > 1 ? prev - 1 : 1)}
            className="bg-[#45B69C] text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-[#3D9B80] transition duration-200 transform hover:scale-105">
            Previous
          </button>
          <button 
            onClick={() => setPage(prev => prev < info.pages ? prev + 1 : prev)}
            className="bg-[#45B69C] text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-[#3D9B80] transition duration-200 transform hover:scale-105">
            Next
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#4CA1AF] text-white py-4 text-center shadow-md">
        <p>&copy; 2024 Rick and Morty Fan Page</p>
      </footer>
    </div>
  )
}

export default Home