// import { useQuery } from '@tanstack/react-query'

const useUsers = () => {
  // const { isLoading, error, data } = useQuery('users', () =>
  //   fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/users`).then(res =>
  //     res.json()
  //   )
  // )

  const data = []

  return {
    isLoading: false,
    error: null,
    data: data || []
  }
}

export default useUsers
