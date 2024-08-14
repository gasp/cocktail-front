'use client'

import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { Burger } from './burger'
import { SidebarContent } from './sidebar-content'
import { SidebarDesktop } from './sidebar-desktop'

export const Menu = () => {
  const [isOpen, toggleOpen] = useState(false)
  const close = useCallback(() => {
    toggleOpen(false)
  }, [toggleOpen])
  const open = useCallback(() => {
    toggleOpen(true)
  }, [toggleOpen])

  return (
    <div>
      <motion.nav animate={isOpen ? 'open' : 'closed'}>
        <Burger toggle={open} isOpen={isOpen} />
      </motion.nav>

      <SidebarDesktop open={isOpen} onOpenChange={close}>
        <SidebarContent close={close} />
      </SidebarDesktop>
    </div>
  )
}
