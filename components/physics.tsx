'use client'

import { useEffect, useRef } from 'react'
import { Engine, Render, Bodies, Composite, Runner } from 'matter-js'
import { useOrientation } from '@/lib/hooks/use-orientation'
import '@/app/shake/filter.css'

const Config = {
  particleRadius: 3,
  particleCount: 300,
  particlesStreamInitialWidth: 50,
  width: 400,
  height: 700
}

type PhysicsProps = { width: number; height: number }

export function Physics({ width, height }: PhysicsProps) {
  const scene = useRef<HTMLDivElement>(null)
  const canvas = useRef<HTMLCanvasElement>(null)
  const engine = useRef(Engine.create())
  const { beta, gamma } = useOrientation()

  useEffect(() => {
    if (engine.current) {
      engine.current.gravity = {
        y: beta / 100,
        x: gamma / 100,
        scale: 0.001
      }
    }
  }, [beta, gamma])

  useEffect(() => {
    const debug = false
    const render = Render.create({
      element: scene.current!,
      canvas: canvas.current!,
      engine: engine.current,
      options: {
        // pixelRatio: 1,
        showAngleIndicator: debug,
        showPositions: debug,
        showVelocity: debug,
        showDebug: debug,
        wireframes: debug,
        width: width,
        height: height,
        background: 'transaparent'
      }
    })

    Composite.add(engine.current.world, [
      // around the MIX text
      // m
      Bodies.rectangle(70, 405, 30, 120, {
        render: {
          visible: false,
          strokeStyle: 'pink',
          fillStyle: 'red'
          // fillStyle: 'transparent'
        },
        isStatic: true
      }),
      Bodies.rectangle(170, 405, 30, 120, {
        render: {
          visible: false,
          strokeStyle: 'pink',
          fillStyle: 'red'
          // fillStyle: 'transparent'
        },
        isStatic: true
      }),
      Bodies.rectangle(100, 405, 30, 120, {
        angle: -(Math.PI / 180) * 20,
        render: {
          visible: false,
          strokeStyle: 'pink',
          fillStyle: 'blue'
          // fillStyle: 'transparent'
        },
        isStatic: true
      }),
      Bodies.rectangle(130, 405, 30, 120, {
        angle: (Math.PI / 180) * 20,
        render: {
          visible: false,
          strokeStyle: 'pink',
          fillStyle: 'blue'
          // fillStyle: 'transparent'
        },
        isStatic: true
      }),

      // i
      Bodies.rectangle(220, 405, 30, 120, {
        render: {
          visible: false,
          strokeStyle: 'pink',
          fillStyle: 'red'
          // fillStyle: 'transparent'
        },
        isStatic: true
      }),

      // x
      Bodies.rectangle(290, 405, 30, 130, {
        angle: (Math.PI / 180) * 30,
        render: {
          visible: false,
          strokeStyle: 'pink',
          fillStyle: 'yellow'
          // fillStyle: 'transparent'
        },
        isStatic: true
      }),
      Bodies.rectangle(290, 405, 30, 130, {
        angle: -(Math.PI / 180) * 30,
        render: {
          visible: false,
          strokeStyle: 'pink',
          fillStyle: 'yellow'
          // fillStyle: 'transparent'
        },
        isStatic: true
      }),
      // center wall
      // Bodies.rectangle(250, 350, width - 50, 60, {
      //   isStatic: true,
      //   angle: (Math.PI / 180) * 24,
      //   render: {
      //     visible: true
      //   }
      // }),
      Bodies.rectangle(width / 2, -10, width, 20, {
        isStatic: true
      }),
      Bodies.rectangle(-10, height / 2, 20, height, {
        isStatic: true
      }),
      Bodies.rectangle(width / 2, height + 10, width, 20, {
        isStatic: true
      }),
      Bodies.rectangle(width + 10, height / 2, 20, height, {
        isStatic: true
      })
    ])

    const balls = [...Array(Config.particleCount)].map(
      (_: number, i: number) => {
        const x = 100 + (Math.random() * i) / Config.particleCount
        const y = 100 + i / Config.particleCount

        return Bodies.circle(x, y, Config.particleRadius, {
          restitution: 0.2,
          friction: 0,
          render: {
            fillStyle: i < Config.particleCount / 2 ? '#fcc' : '#f39'
          }
        })
      }
    )

    Composite.add(engine.current.world, balls)

    Render.run(render)
    const runner = Runner.create()

    // run the engine
    Runner.run(runner, engine.current)

    return () => {
      Render.stop(render)
      Composite.clear(engine.current.world, false)

      // eslint-disable-next-line react-hooks/exhaustive-deps
      Engine.clear(engine.current)
      render.canvas.remove()
      // render.canvas = null
      // render.context = null
      render.textures = {}
    }
  }, [])

  return (
    <div style={{ position: 'fixed' }}>
      <div ref={scene} style={{ width: '100%', height: '100%' }} />
      <canvas
        style={{ filter: "url('#particles-filter')", zIndex: 1 }}
        key="particles"
        id="particles"
        ref={canvas}
        // width={width}
        // height={height}
        // style={{ width: 250, height: 250 }}
      ></canvas>
    </div>
  )
}
