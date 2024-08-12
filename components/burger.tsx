'use client'

import { motion } from 'framer-motion'

// type PathProps = React.ComponentProps<'path'> & MotionProps
const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
)

export const Burger = ({
  toggle,
  isOpen
}: {
  toggle: () => void
  isOpen: boolean
}) => (
  <div style={{ width: 50 }} className="flex items-center justify-center">
    <motion.button
      onClick={toggle}
      className="rounded-full bg-white flex items-center justify-center pt-1"
      style={{ width: 40, height: 40 }}
      whileHover={{
        width: 50,
        height: 50,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 1.2 }}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' }
          }}
          animate={isOpen ? 'open' : 'closed'}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
          animate={isOpen ? 'open' : 'closed'}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' }
          }}
          animate={isOpen ? 'open' : 'closed'}
        />
      </svg>
    </motion.button>
  </div>
)
