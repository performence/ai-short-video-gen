import * as React from 'react'

export function useCopyToClipboard(timeout = 2000) {
  const [isCopied, setIsCopied] = React.useState<boolean>(false)

  const copyToClipboard = React.useCallback(
    (value: string) => {
      if (typeof window === 'undefined' || !navigator.clipboard?.writeText) {
        return
      }

      if (!value) {
        return
      }

      navigator.clipboard.writeText(value).then(() => {
        setIsCopied(true)

        setTimeout(() => {
          setIsCopied(false)
        }, timeout)
      })
    },
    [timeout]
  )

  return { isCopied, copyToClipboard }
}
