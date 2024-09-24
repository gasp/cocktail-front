// Usage: const orientation = useOrientation();
import { useState, useEffect } from 'react'

const THRESOLD = 2

export function useOrientation() {
  const [orientation, setOrientation] = useState({ beta: 0, gamma: 1 })

  const handleOrientation = (event: DeviceOrientationEvent) => {
    let beta = ~~(event.beta ?? 0) // In degree in the range [-180,180)
    const gamma = ~~(event.gamma ?? 0) // In degree in the range [-90,90)

    // Because we don't want to have the device upside down
    // We constrain the x value to the range [-90,90]
    if (beta > 90) {
      beta = 90
    }
    if (beta < -90) {
      beta = -90
    }

    // setDelta({ x: x - orientation.x, y: y - orientation.y })
    if (
      Math.abs(beta - orientation.beta) > THRESOLD ||
      Math.abs(gamma - orientation.gamma) > THRESOLD
    ) {
      setOrientation({ beta, gamma })
    }
  }
  useEffect(() => {
    window.addEventListener('deviceorientation', handleOrientation)
    return () =>
      window.removeEventListener('deviceorientation', handleOrientation)
  })
  return orientation
}
