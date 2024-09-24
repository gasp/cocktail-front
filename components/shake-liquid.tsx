'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Cocktail } from '@/app/types'
import { socket } from '@/app/socket'
import { Orientation } from './orientation'
import { Filter } from './filter'
import { Physics } from './physics'
type Size = { width: number; height: number } | null

export function ShakeLiquid() {
  const full = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState<Size>(null)
  const router = useRouter()

  useEffect(() => {
    if (full.current) {
      console.log('eresize')
      setSize({
        width: full.current.clientWidth,
        height: full.current.clientHeight
      })
    }
  }, [])

  socket.on('message-image', (cocktail: Cocktail) => {
    router.push(`/cocktail/${cocktail.slug}`)
  })
  return (
    <div ref={full} className="fixed bg-gray-900 size-full top-0 left-0 z-10">
      {/* {size ? <Orientation width={size.width} height={size.height} /> : '...'} */}
      {size ? (
        <>
          <Filter />
          <Physics width={size.width} height={size.height} />
          <div
            style={{
              fontFamily:
                'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
              textAlign: 'center',
              fontWeight: 'bolder',
              fontSize: 170,
              paddingTop: 280,
              color: '#fff'
            }}
          >
            MIX
          </div>
        </>
      ) : (
        '...'
      )}
    </div>
  )
}
