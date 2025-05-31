import React, { use, useEffect, useRef } from 'react'

interface ServiceCardProps {
	icon: React.ReactNode
	title: string
	description: string
	index: number
}

export default function ServiceCard({
	icon,
	title,
	description,
	index,
}: ServiceCardProps) {
	const ref = useRef<HTMLDivElement>(null)
	useEffect(() => {
		const observerOptions = {
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px',
		} satisfies IntersectionObserverInit

		const observer = new IntersectionObserver(function (entries) {
			entries.forEach((entry) => {
				if (entry.isIntersecting && ref.current) {
					ref.current.style.opacity = '1'
					ref.current.style.transform = 'translateY(0)'
				}
			})
		}, observerOptions)

		if (ref.current) {
			ref.current.style.opacity = '0'
			ref.current.style.transform = 'translateY(30px)'
			ref.current.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
			observer.observe(ref.current)
		}
		return () => {
			if (ref.current) {
				observer.unobserve(ref.current)
			}
		}
	}, [])

	return (
		<div
			ref={ref}
			key={index}
			className="relative overflow-hidden rounded-[20px] border-[#6366f133] bg-[#0f172a] p-10 transition-all duration-300 ease-in before:absolute before:inset-0 before:h-[3px] before:scale-x-0 before:bg-gradient-to-br before:from-[#6366f1] before:via-[#8b5cf6] before:to-[#06b6d4] before:transition-transform before:duration-300 before:ease-in-out hover:-translate-y-[10px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:before:scale-x-100"
		>
			<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] text-2xl">
				{icon}
			</div>
			<h3 className="mb-4 text-2xl text-[#f8fafc]">{title}</h3>
			<p className="leading-6 text-[#94a3b8]">{description}</p>
		</div>
	)
}
