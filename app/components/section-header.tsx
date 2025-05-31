import React from 'react'
import Gradient from './gradient'

interface SectionHeaderProps {
  title: string
  highlightedText: string
  description: string
}

export default function SectionHeader({ title, highlightedText, description }: SectionHeaderProps) {
  return (
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-5xl">
        {title} <Gradient>{highlightedText}</Gradient>
      </h2>
      <p className="mx-auto max-w-[600px] text-lg text-[#94a3b8]">
        {description}
      </p>
    </div>
  )
}