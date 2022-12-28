import { useQuery } from 'react-query'

const useUsers = () => {
  const { isLoading, error, data } = useQuery('users', () =>
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/users`).then(res =>
      res.json()
    )
  )

  return {
    isLoading,
    error,
    data: data || []
  }
}

export default useUsers
