import React from 'react'
import { Hero10, type Hero10Props } from '@/components/ui/hero-10'

const values = {
  title: 'Build faster interfaces',
  titleLine2Prefix: 'with',
  titleHighlight: 'Ready-Made Blocks',
  description:
    'Compose beautiful products from accessible, production-ready UI blocks that drop straight into your codebase.',
  socialProof: 'Trusted by 2k+ product teams',
  images: [
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80',
  ],
  imageAlts: ['Design detail', 'Product interface', 'Layout composition'],
  animation: 'subtle',
  primaryCTA: {
    ctaEnabled: true,
    text: 'Get Started',
    link: '',
    variant: 'default',
    size: 'default',
  },
  secondaryCTA: {
    ctaEnabled: true,
    text: 'How it works',
    link: '',
    variant: 'outline',
    size: 'default',
  },
} satisfies Hero10Props

export default function Hero10Example() {
  return <Hero10 {...values} />
}
