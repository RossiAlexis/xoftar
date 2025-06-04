import Gradient from '../gradient'

export default function AboutUsSection() {
	return (
		<section className="px-0 py-32" id="nosotros">
			<div className="mx-auto max-w-7xl px-8">
				<div className="grid grid-cols-1 items-center gap-16">
					<div className="about-text">
						<h2 className="mb-8 text-4xl">
							¿Por qué elegir <span className="gradient-text">Xoftar</span>?
						</h2>
						<p className="mb-6 text-lg text-[#94a3b8]">
							Somos un equipo de desarrolladores apasionados con más de 7 años
							de experiencia en la industria del software. Nos especializamos en
							crear soluciones tecnológicas que realmente impactan en el
							crecimiento de nuestros clientes.
						</p>
						<p className="mb-6 text-lg text-[#94a3b8]">
							Nuestra experiencia como Engineering Team Lead y desarrollador nos
							permite entender tanto los aspectos técnicos como los desafíos de
							gestión de proyectos, garantizando entregas exitosas y de alta
							calidad.
						</p>
						<p className="mb-6 text-lg text-[#94a3b8]">
							Trabajamos con metodologías ágiles, las últimas tecnologías y
							mantenemos una comunicación constante para asegurar que cada
							proyecto supere las expectativas.
						</p>
					</div>
					<div className="mt-12 grid grid-cols-2 gap-8">
						<div className="rounded-2xl bg-[#1e293b] p-6 text-center">
							<Gradient className="block text-4xl font-bold">7+</Gradient>
							<span className="mt-2 text-sm text-[#94a3b8]">
								Años de Experiencia
							</span>
						</div>
						<div className="rounded-2xl bg-[#1e293b] p-6 text-center">
							<Gradient className="block text-4xl font-bold">50+</Gradient>
							<span className="mt-2 text-sm text-[#94a3b8]">
								Proyectos Exitosos
							</span>
						</div>
						<div className="rounded-2xl bg-[#1e293b] p-6 text-center">
							<Gradient className="block text-4xl font-bold">100%</Gradient>
							<span className="mt-2 text-sm text-[#94a3b8]">
								Clientes Satisfechos
							</span>
						</div>
						<div className="rounded-2xl bg-[#1e293b] p-6 text-center">
							<Gradient className="block text-4xl font-bold">24/7</Gradient>
							<span className="mt-2 text-sm text-[#94a3b8]">
								Soporte Técnico
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
