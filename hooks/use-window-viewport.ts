import * as React from 'react'

export function useWindowViewport() {
  const [viewport, setViewport] = React.useState({
    width: typeof window !== 'undefined' ? window.visualViewport?.width || window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.visualViewport?.height || window.innerHeight : 0
  })

  React.useEffect(() => {
    const onResize = () => {
      setViewport({
        width: window.visualViewport?.width || window.innerWidth,
        height: window.visualViewport?.height || window.innerHeight
      })
    }

    window.visualViewport?.addEventListener('resize', onResize)
    return () => window.visualViewport?.removeEventListener('resize', onResize)
  }, [])

  return viewport
}
