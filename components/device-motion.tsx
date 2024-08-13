import { useCallback, useEffect, useState } from 'react'
import { DeviceMotionButton } from './device-motion-button'
import { DeviceMotionFull } from './device-motion-full'
import { DeviceMotionFullDesktopFallback } from './device-motion-full-desktop-fallback'
import { Button } from './ui/button'

interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
  requestPermission?: () => Promise<'granted' | 'denied'>
}
const requestPermission = (
  DeviceOrientationEvent as unknown as DeviceOrientationEventiOS
).requestPermission

type DeviceMotionProps = {
  onClick: () => void
  disabled: boolean
}

export function DeviceMotion({ onClick, disabled }: DeviceMotionProps) {
  const [hasMotion, setHasMotion] = useState(false)
  const [hasMotionAuthorized, setHasMotionAuthorized] = useState(false)
  const [open, setOpen] = useState(false)
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    if (window.DeviceMotionEvent) setHasMotion(true)
    // requestPermission is ios safari only, others enable it by default
    if (window.DeviceMotionEvent && typeof requestPermission !== 'function')
      setHasMotionAuthorized(true)
  }, [])

  const handleStart = useCallback(async () => {
    if (window.DeviceMotionEvent && typeof requestPermission === 'function') {
      const response = await requestPermission()
      if (response === 'granted') {
        setHasMotionAuthorized(true)
      }
    }
    setOpen(true)
    setAnimate(false)
    onClick()
  }, [onClick])

  const handleSimpleClick = useCallback(() => {
    setOpen(true)
    setAnimate(false)
    onClick()
  }, [onClick])

  return (
    <>
      <div className="block sm:hidden">
        <DeviceMotionButton
          disabled={disabled}
          onClick={handleStart}
          animate={animate}
        />

        <div className="text-xs">
          ({hasMotion ? 'has motion' : 'does not have motion'})
        </div>
        {open && <DeviceMotionFull enabled={hasMotionAuthorized} />}
      </div>
      <div className="hidden sm:block">
        <Button onClick={handleSimpleClick} disabled={disabled}>
          generate
        </Button>

        {/* this is not displayed because parent component is reloaded */}
        {open && <DeviceMotionFullDesktopFallback />}
      </div>
    </>
  )
}
