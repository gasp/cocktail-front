import { ExternalLink } from '@/components/external-link'

export function EmptyScreen() {
  return (
    <div className="mx-auto my-5 max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">Cocktail generator</h1>
        <p className="leading-normal text-muted-foreground">
          This is an open source cocktail generator based on{' '}
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>and the{' '}
          <ExternalLink href="https://platform.openai.com/">
            OpenAi platform
          </ExternalLink>
          .
        </p>
      </div>
    </div>
  )
}
