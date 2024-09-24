'use client'

import { useEffect, useRef, useState } from 'react'

const particlesStdDeviation = [2, 2, 3, 4, 5, 6, 6, 8, 11]
const particlesMatrix = [
  '7 -2',
  '7 -3',
  '9 -3',
  '12 -3',
  '15 -4',
  '18 -6',
  '18 -6',
  '22 -9',
  '25 -12'
]

export function Filter() {
  const particlesFilterBlur = useRef<SVGFEGaussianBlurElement>(null)
  const particlesFilterMatrix = useRef<SVGFEColorMatrixElement>(null)

  const [filterIndex, setFilterIndex] = useState(4)

  // apply filter
  useEffect(() => {
    if (particlesFilterBlur.current && particlesFilterMatrix.current) {
      particlesFilterBlur.current!.setAttribute(
        'stdDeviation',
        String(particlesStdDeviation[filterIndex])
      )
      particlesFilterMatrix.current!.setAttribute(
        'values',
        '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 ' + particlesMatrix[filterIndex]
      )
      console.log(`update filters to ${filterIndex}`)
    }
  }, [filterIndex])

  return (
    <div style={{ height: 0 }}>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ width: 0, height: 0 }}>
        <defs>
          <filter id="particles-filter">
            <feGaussianBlur
              ref={particlesFilterBlur}
              in="SourceGraphic"
              stdDeviation="5"
              result="blur"
            />
            <feColorMatrix
              ref={particlesFilterMatrix}
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 15 -4"
              result="goo"
            />
          </filter>
        </defs>
      </svg>
      <div style={{ visibility: 'hidden' }}>
        <input
          type="range"
          min="0"
          max="8"
          value={filterIndex}
          style={{ width: '100%' }}
          onChange={e => setFilterIndex(Number(e.target.value))}
        />
      </div>
    </div>
  )
}
