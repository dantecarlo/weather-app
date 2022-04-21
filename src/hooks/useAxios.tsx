/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react'
import { useQuery } from 'react-query'

const useAxios = () => {
  let controller: AbortController

  const cancelEndpoint = () => {
    controller && controller.abort()
  }

  const getData = <T,>(key: string, axiosCall: any) => {
    if (axiosCall.controller) controller = axiosCall.controller
    const { data, error, isLoading, isError, refetch } = useQuery<T>(key, () => axiosCall)
    return { data, error, isLoading, isError, refetch }
  }

  useEffect(() => {
    return () => {
      cancelEndpoint()
    }
  }, [])

  return {
    getData
  }
}

export default useAxios
