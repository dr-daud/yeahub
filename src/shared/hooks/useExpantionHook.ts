import { useEffect, useState } from 'react'

import { useWindowWidth } from './useWindowWidth'

export const useExpantionHook = (pixels: number) => {
  const [isExpanded, setIsExpanded] = useState(true)
  const width = useWindowWidth()

  useEffect(() => {
    const mobileExpantion = () => {
      if (width <= pixels) {
        setIsExpanded(false)
      }
    }
    mobileExpantion()
  }, [width, pixels])

  return {
    isExpanded,
    setIsExpanded,
    width,
  }
}
