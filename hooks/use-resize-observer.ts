import * as React from 'react'

type ObserverRect = Omit<DOMRectReadOnly, 'toJSON'>

const defaultState: ObserverRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
}

export function useResizeObserver<T extends HTMLElement = HTMLElement>() {
  const frameID = React.useRef(0)
  const ref = React.useRef<T>(null)

  const [rect, setRect] = React.useState<ObserverRect>(defaultState)

  React.useEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    const resizeObserver = new ResizeObserver(entries => {
      if (!Array.isArray(entries)) {
        return
      }

      if (!entries.length) {
        return
      }

      const entry = entries[0]

      cancelAnimationFrame(frameID.current)

      frameID.current = requestAnimationFrame(() => {
        if (element) {
          setRect(entry.contentRect)
        }
      })
    })

    resizeObserver.observe(element)

    return () => {
      resizeObserver.disconnect()

      if (frameID.current) {
        cancelAnimationFrame(frameID.current)
      }
    }
  }, [])

  return [ref, rect] as const
}
