import { DeviceMotionAccelerator } from './device-motion-accelerator'

type DeviceMotionFullprops = {
  enabled: boolean
}
export function DeviceMotionFull({ enabled }: DeviceMotionFullprops) {
  return (
    <div className="fixed bg-muted size-full top-0 left-0 z-10">
      <div style={{ height: '60px' }}></div>
      {enabled ? (
        <DeviceMotionAccelerator />
      ) : (
        <div className="bg-green-400 w-full p-6">
          your cocktail is getting ready
        </div>
      )}
    </div>
  )
}
