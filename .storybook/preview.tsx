import React from 'react'
import type { Preview } from '@storybook/react'
import '../app/globals.css'

const preview: Preview = {
  parameters: {
    options: {
      storySort: (a, b) =>
        a.id === b.id
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true })
    },
    layout: 'centered', // 'fullscreen' | 'centered' | 'padded'
    viewport: {
      viewports: {
        responsive: {
          name: 'Responsive',
          styles: {
            width: '100%',
            height: '100%'
          }
        },
        xs: {
          name: 'tailwind xs <640px',
          styles: {
            width: '480px',
            height: '100%'
          }
        },
        sm: {
          name: 'tailwind sm <7680px',
          styles: {
            width: '640px',
            height: '100%'
          }
        },
        md: {
          name: 'tailwind md <1024px',
          styles: {
            width: '768px',
            height: '100%'
          }
        },
        lg: {
          name: 'tailwind md <1280px',
          styles: {
            width: '1024px',
            height: '100%'
          }
        }
      }
    },
    visualViewport: {
      defaultViewport: 'xs'
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    Story => (
      <>
        <main
          // className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}
          className={`font-sans antialiased geistsans_81192321-module__keQz_a__className`}
          style={{ fontFamily: 'ui-sans-serif, Roboto, sans-serif' }}
        >
          <Story />
        </main>
      </>
    )
  ]
}

export default preview
