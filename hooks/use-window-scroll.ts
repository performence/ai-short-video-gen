import * as React from 'react'

export function useWindowScroll() {
  const [scroll, setScroll] = React.useState({
    x: typeof window !== 'undefined' ? window.pageXOffset : 0,
    y: typeof window !== 'undefined' ? window.pageYOffset : 0
  })

  React.useEffect(() => {
    const onScroll = () => {
      setScroll({
        x: window.pageXOffset,
        y: window.pageYOffset
      })
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scroll
}
