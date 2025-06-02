export default function Gradient({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<span
			className={`bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent ${className || ''}`}
		>
			{children}
		</span>
	)
}
