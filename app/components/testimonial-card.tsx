import Gradient from './gradient'

interface TestimonialCardProps {
	avatar: string
	name: string
	position: string
	company: string
	rating: number
	testimonial: string
	index: number
}

export default function TestimonialCard({
	avatar,
	name,
	position,
	company,
	rating,
	testimonial,
	index,
}: TestimonialCardProps) {
	const animationDelay = `${index * 0.1}s`

	return (
		<div
			className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 transition-all duration-300 hover:scale-105"
			style={{ animationDelay }}
		>
			{/* Gradient border effect */}
			<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6366f1]/20 via-[#8b5cf6]/20 to-[#06b6d4]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

			<div className="relative z-10">
				{/* Rating stars */}
				<div className="mb-4 flex">
					{Array.from({ length: 5 }, (_, i) => (
						<span
							key={i}
							className={`text-xl ${
								i < rating ? 'text-yellow-400' : 'text-gray-600'
							}`}
						>
							★
						</span>
					))}
				</div>

				{/* Testimonial text */}
				<blockquote className="mb-6 text-lg leading-relaxed text-[#e2e8f0]">
					"{testimonial}"
				</blockquote>

				{/* Client info */}
				<div className="flex items-center">
					<div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
						<img
							src={avatar}
							alt={`${name} - ${company}`}
							className="h-full w-full object-cover"
							loading="lazy"
						/>
					</div>
					<div>
						<div className="font-semibold text-white">
							<Gradient>{name}</Gradient>
						</div>
						<div className="text-sm text-[#94a3b8]">
							{position} en <span className="font-medium">{company}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
