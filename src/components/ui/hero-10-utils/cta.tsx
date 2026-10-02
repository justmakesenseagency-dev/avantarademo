'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'

export interface CtaProps {
  ctaEnabled: boolean
  text: string
  link?: string
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  onClick?: () => void
  className?: string
}

export function Cta({ cta, className }: { cta: CtaProps; className?: string }) {
  if (!cta?.ctaEnabled) return null

  if (cta.link) {
    return (
      <Button
        variant={cta.variant}
        size={cta.size}
        className={className || cta.className}
        asChild
      >
        <a href={cta.link}>{cta.text}</a>
      </Button>
    )
  }

  return (
    <Button
      variant={cta.variant}
      size={cta.size}
      className={className || cta.className}
      onClick={cta.onClick}
    >
      {cta.text}
    </Button>
  )
}
