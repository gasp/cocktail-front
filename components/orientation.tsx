'use client'

import { useEffect, useRef } from 'react'
import { useOrientation } from '@/lib/hooks/use-orientation'
type OrientationProps = {
  width: number
  height: number
}

export function Orientation({ width, height }: OrientationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ctx = useRef<CanvasRenderingContext2D | null>(null)
  const { beta, gamma } = useOrientation()

  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d')
    }
  }, [])

  useEffect(() => {
    if (ctx.current) {
      ctx.current.clearRect(0, 0, width, height)

      ctx.current.fillStyle = 'blue'
      ctx.current.strokeStyle = '#ccc'
      ctx.current.strokeRect(width / 2 - 50, height / 2 - 50, 100, 100)
      ctx.current.fillRect(width / 2 - 5, height / 2 - 5, 10, 10)

      const line = new Path2D()
      line.moveTo(width / 2, height / 2)
      line.lineTo(width / 2 + gamma, height / 2 + beta)
      ctx.current.strokeStyle = 'red'
      ctx.current.lineWidth = 2
      ctx.current.stroke(line)

      const dot = new Path2D()
      dot.arc(width / 2 + gamma, height / 2 + beta, 3, 0, Math.PI * 2)
      ctx.current.fillStyle = 'black'
      ctx.current.fill(dot)
    }
  }, [beta, gamma])

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{
          background: 'ivory',
          width: width,
          height: height,
          position: 'relative'
        }}
      ></canvas>

      <div style={{ position: 'absolute', top: 0 }}>
        Orientation: {beta} {gamma}
      </div>
    </div>
  )
}
