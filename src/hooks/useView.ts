import { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'

const useView = (path: string) => {
  const { pathname } = useLocation()
  const [isOnPage, setIsOnPage] = useState<boolean>(false)

  useEffect(() => {
    const match = pathname === path
    if (match !== isOnPage) setIsOnPage(match)
  }, [isOnPage, path, pathname])

  return { isOnPage }
}

export default useView
