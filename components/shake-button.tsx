// https://codesandbox.io/s/framer-motion-shaking-9ovl4?file=/src/App.tsx:141-339

import { Cocktail } from '@/app/types'
import { DeviceMotion } from './device-motion'
import { Button } from './ui/button'

type ShakeButtonProps = {
  onClear: () => void
  onClick: () => void
  disabled: boolean
  cocktail: Cocktail | null
}

export function ShakeButton({
  onClear,
  onClick,
  disabled,
  cocktail
}: ShakeButtonProps) {
  // animate if cocktail but no image
  const shouldGenerate = !cocktail?.image && !disabled
  return (
    <div className="ml-auto ml-top-0 mr-6">
      {shouldGenerate ? (
        <DeviceMotion onClick={onClick} disabled={disabled} />
      ) : (
        <Button onClick={onClick} disabled={disabled}>
          view
        </Button>
      )}

      <div className="mt-2">
        <Button onClick={onClear} variant="secondary">
          clear
        </Button>
      </div>
    </div>
  )
}
