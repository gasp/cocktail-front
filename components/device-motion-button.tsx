import { motion } from 'framer-motion'
import { Button } from './ui/button'

const variants = {
  start: {
    rotate: [-1, 1.3, 0]
  },
  reset: {
    rotate: 0
  }
}

type DeviceMotionButtonProps = {
  onClick: () => void
  animate: boolean
  disabled: boolean
}

export function DeviceMotionButton({
  onClick,
  animate,
  disabled
}: DeviceMotionButtonProps) {
  return (
    <motion.div
      className="mt-2"
      animate={animate ? 'start' : 'reset'}
      variants={variants}
      initial={{ rotate: 0 }}
      transition={{
        delay: 1,
        ease: 'easeInOut',
        repeat: Infinity
      }}
      style={{ originX: -1, originY: -3 }}
    >
      <div>
        <Button onClick={onClick} disabled={disabled}>
          shake
        </Button>
      </div>
    </motion.div>
  )
}
