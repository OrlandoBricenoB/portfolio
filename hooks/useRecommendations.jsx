import { useQuery } from 'react-query'

const useRecommendations = () => {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/recommendations`).then(res =>
      res.json()
    )
  )

  return {
    isLoading,
    error,
    data: data || []
  }
}

export default useRecommendations
