interface ChatLayoutProps {
  children: React.ReactNode
}

export default async function CocktailLayout({ children }: ChatLayoutProps) {
  return (
    <div className="relative flex flex-col h-[calc(100vh_-_theme(spacing.16))]">
      {children}
    </div>
  )
}
