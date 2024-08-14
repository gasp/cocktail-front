'use client'

import { ErrorBoundary } from '@/components/error-boundary'
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
    <ErrorBoundary fallback={<div>crashed 💀</div>}>
      <nav>
        <Burger toggle={open} isOpen={isOpen} />
      </nav>

      <SidebarDesktop open={isOpen} onOpenChange={close}>
        <SidebarContent close={close} />
      </SidebarDesktop>
    </ErrorBoundary>
  )
}
