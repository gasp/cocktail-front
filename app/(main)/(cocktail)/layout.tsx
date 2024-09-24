interface CocktailLayoutProps {
  children: React.ReactNode
}

export default async function CocktailLayout({
  children
}: CocktailLayoutProps) {
  return (
    <div className="relative flex flex-col h-[calc(100vh_-_theme(spacing.16))]">
      {children}
    </div>
  )
}
