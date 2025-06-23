import React from 'react'

interface GradientIconProps {
  children: React.ReactNode
}

export default function GradientIcon({ children }: GradientIconProps) {
  return (
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] text-2xl">
      {children}
    </div>
  )
}