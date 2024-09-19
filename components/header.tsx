import { buttonVariants } from '@/components/ui/button'
import {
  IconGitHub,
  IconLogo,
  IconNextChat,
  IconSeparator
} from '@/components/ui/icons'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import * as React from 'react'
import { Menu } from './menu'

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        <Link href="/new" rel="nofollow">
          <IconLogo className="size-6 mr-2 dark:hidden" inverted />
          <IconLogo className="hidden size-6 mr-2 dark:block" />
        </Link>
        <IconSeparator className="size-6 text-muted-foreground/50" />
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <h1 className="font-bold">cocktail.ai</h1>
        </React.Suspense>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <a
          target="_blank"
          href="https://github.com/gasp"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          <IconGitHub />
          <span className="hidden ml-2 md:flex">GitHub</span>
        </a>
        {/*
        This is a workaround to mitigate rendering of <Sheet>
        TODO: replace with real implementation when the bug is fixed.
        */}
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <Menu />
        </React.Suspense>
      </div>
    </header>
  )
}
