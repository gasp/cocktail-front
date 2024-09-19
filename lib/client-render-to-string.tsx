import { createRoot } from 'react-dom/client'

export const clientRenderToString = (
  element: React.ReactElement
): Promise<string> =>
  new Promise(resolve => {
    const container = document.createElement('div')
    const renderCallback = () => {
      resolve(container.firstElementChild?.innerHTML || '')
    }

    createRoot(container).render(<div ref={renderCallback}>{element}</div>)
  })
