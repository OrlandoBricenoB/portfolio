// import { useQuery } from '@tanstack/react-query'

const useRecommendations = () => {
  // const { isLoading, error, data } = useQuery('recommendations', () =>
  //   fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/recommendations`).then(res =>
  //     res.json()
  //   )
  // )

  const data = [
    {
      createDate: new Date(),
    },
    {
      createDate: new Date(),
    },
    {
      createDate: new Date(),
    },
    {
      createDate: new Date(),
    }
  ]

  return {
    isLoading: false,
    error: null,
    data: data || []
  }
}

export default useRecommendations
