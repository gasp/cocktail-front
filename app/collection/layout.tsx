interface CollectionLayoutProps {
  children: React.ReactNode
}

export default async function CollectionLayout({
  children
}: CollectionLayoutProps) {
  return (
    <div className="relative flex flex-col h-[calc(100vh_-_theme(spacing.16))]">
      {children}
    </div>
  )
}
