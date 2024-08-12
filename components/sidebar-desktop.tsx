import { Sidebar } from '@/components/sidebar'
import { Sheet, SheetContent } from '@/components/ui/sheet'

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
        <Sidebar className="flex">{children}</Sidebar>
      </SheetContent>
    </Sheet>
  )
}
