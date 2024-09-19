import { useEffect, useState } from 'react'
import { clientRenderToString } from '@/lib/client-render-to-string'

type UseClientRenderToString = (
  input: React.ReactElement | React.ReactElement[],
  deps?: any[]
) => string[]

export const useClientRenderToString: UseClientRenderToString = (
  input,
  deps = []
) => {
  const [htmlStringList, setHtmlStringList] = useState<string[]>([])
  const elementList = Array.isArray(input) ? input : [input]

  useEffect(() => {
    ;(async () => {
      const markupPromises = elementList.map(clientRenderToString)
      const markup: string[] = await Promise.all(markupPromises)

      if (!setHtmlStringList) {
        return
      }

      setHtmlStringList(markup)
    })()
  }, deps)

  return htmlStringList
}
