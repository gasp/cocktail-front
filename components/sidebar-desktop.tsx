import { Sidebar } from '@/components/sidebar'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle
} from '@/components/ui/sheet'

interface SidebarDesktopProps {
  children: React.ReactNode
  open: boolean
  onOpenChange: (b: boolean) => void
}

export async function SidebarDesktop({
  children,
  open,
  onOpenChange
}: SidebarDesktopProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        className="inset-y-0 flex h-auto w-full sm:w-[400px] flex-col p-0"
      >
        <SheetTitle className="px-6 pt-10"></SheetTitle>
        <SheetDescription className="px-6">
          Recent items and debug information
        </SheetDescription>
        <Sidebar className="flex">{children}</Sidebar>
      </SheetContent>
    </Sheet>
  )
}
