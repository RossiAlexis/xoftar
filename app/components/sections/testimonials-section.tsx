import SectionHeader from '../section-header'
import TestimonialCard from '../testimonial-card'

type TestimonialProps = {
	testimonials: {
		avatar: string
		name: string
		position: string
		company: string
		rating: number
		testimonial: string
	}[]
}

export default function TestimonialsSection({
	testimonials,
}: TestimonialProps) {
	return (
		<section className="w-full bg-[#0f172a] px-8 py-32">
			<div className="mx-auto max-w-7xl">
				<SectionHeader
					title="Lo que dicen"
					highlightedText="Nuestros Clientes"
					description="Testimonios reales de empresas que han transformado su negocio con nuestras soluciones tecnológicas"
				/>

				<div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{testimonials.map((testimonial, index) => (
						<TestimonialCard
							key={index}
							avatar={testimonial.avatar}
							name={testimonial.name}
							position={testimonial.position}
							company={testimonial.company}
							rating={testimonial.rating}
							testimonial={testimonial.testimonial}
							index={index}
						/>
					))}
				</div>

				{/* Call to action */}
				<div className="mt-16 text-center">
					<p className="mb-6 text-xl text-[#94a3b8]">
						¿Quieres ser el próximo caso de éxito?
					</p>
					<a
						href="#contacto"
						className="inline-block rounded-xl bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
					>
						Empezar mi proyecto →
					</a>
				</div>
			</div>
		</section>
	)
}
