import React from 'react'

interface GradientButtonProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function GradientButton({ 
  href, 
  children, 
  className = ''
}: GradientButtonProps) {
  return (
    <a
      href={href}
      className={`inline-block rounded-[50px] bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] px-10 py-4 font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(99,102,241,0.4)] ${className}`}
    >
      {children}
    </a>
  )
}