'use client'

import * as React from 'react'
import Textarea from 'react-textarea-autosize'

import { Button } from '@/components/ui/button'
import { IconPlus, IconSearch } from '@/components/ui/icons'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger
} from '@/components/ui/tooltip'
import { useEnterSubmit } from '@/lib/hooks/use-enter-submit'

export function PromptForm({
  input,
  setInput,
  setEnter,
}: {
  input: string
  setInput: (value: string) => void
  setEnter: () => void
}) {
  const { formRef, onKeyDown } = useEnterSubmit()
  const inputRef = React.useRef<HTMLTextAreaElement>(null)

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <form
      ref={formRef}
      onSubmit={async (e: any) => {
        e.preventDefault()

        // Blur focus on mobile
        if (window.innerWidth < 600) {
          e.target['message']?.blur()
        }

        setEnter()
        const value = input.trim()
        setInput('')
        if (!value) return
      }}
    >
      <div className="relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12">
        <div className="absolute left-0 top-[13px] sm:left-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button type="submit" size="icon" disabled={input === ''}>
                <IconSearch />
                <span className="sr-only">Filter ingredients</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Filter ingredients</TooltipContent>
          </Tooltip>
        </div>
        <Textarea
          ref={inputRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          placeholder="Filter"
          className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
          autoFocus
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          name="message"
          rows={1}
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="absolute right-0 top-[14px] size-8 rounded-full bg-background p-0 sm:right-4 hover:animate-spin"
              onClick={() => {
                setInput('')
              }}
            >
              <IconPlus className="rotate-45"/>
              <span className="sr-only">Clear</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Clear</TooltipContent>
        </Tooltip>
      </div>
    </form>
  )
}
