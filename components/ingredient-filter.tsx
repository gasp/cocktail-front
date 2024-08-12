'use client'
import { PromptForm } from '@/components/prompt-form'

type IngredientFilterProps = {
  input: string
  setInput: (value: string) => void
  setEnter: () => void
}

export function IngredientFilter({
  input,
  setInput,
  setEnter
}: IngredientFilterProps) {
  return (
    <div className="space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4">
      <PromptForm input={input} setInput={setInput} setEnter={setEnter} />
    </div>
  )
}
