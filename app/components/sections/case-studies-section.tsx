import Gradient from '../gradient'

export default function CaseStudiesSection() {
	const cases = [
		{
			company: 'TechStartup SRL',
			industry: 'Fintech',
			challenge: 'Procesos manuales lentos',
			solution: 'Sistema automatizado',
			results: {
				metric1: { value: '65%', label: 'Reducción de tiempos' },
				metric2: { value: '$50K', label: 'Ahorro anual' },
				metric3: { value: '3 meses', label: 'ROI alcanzado' },
			},
			testimonial:
				'En 3 meses recuperamos toda la inversión gracias a la automatización.',
		},
		{
			company: 'Logística Moderna',
			industry: 'Logística',
			challenge: 'Control de inventario ineficiente',
			solution: 'App móvil con GPS tracking',
			results: {
				metric1: { value: '40%', label: 'Más entregas diarias' },
				metric2: { value: '95%', label: 'Precisión inventario' },
				metric3: { value: '2 meses', label: 'Payback period' },
			},
			testimonial:
				'Duplicamos nuestra capacidad operativa sin contratar más personal.',
		},
		{
			company: 'Fashion Forward',
			industry: 'Retail',
			challenge: 'Baja conversión online',
			solution: 'E-commerce optimizado + App',
			results: {
				metric1: { value: '280%', label: 'Aumento en ventas' },
				metric2: { value: '50%', label: 'Más engagement' },
				metric3: { value: '6 semanas', label: 'Time to market' },
			},
			testimonial:
				'Las ventas online se triplicaron en solo 2 meses después del lanzamiento.',
		},
	]

	return (
		<section id="casos-exito" className="w-full bg-[#0f172a] px-8 py-32">
			<div className="mx-auto max-w-7xl">
				<div className="mb-16 text-center">
					<h2 className="mb-4 text-4xl font-bold md:text-5xl">
						Casos Reales, <Gradient>Resultados Comprobados</Gradient>
					</h2>
					<p className="mx-auto max-w-3xl text-xl text-[#94a3b8]">
						Estas son solo algunas empresas que confiaron en nosotros y ahora
						dominan su mercado.
						<span className="mt-2 block font-semibold text-[#6366f1]">
							Tu empresa podría ser la próxima case study.
						</span>
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{cases.map((case_, index) => (
						<div
							key={index}
							className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 transition-all duration-300 hover:scale-105"
						>
							{/* Gradient border effect */}
							<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6366f1]/20 via-[#8b5cf6]/20 to-[#06b6d4]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

							<div className="relative z-10">
								{/* Header */}
								<div className="mb-6">
									<h3 className="mb-1 text-xl font-bold text-white">
										{case_.company}
									</h3>
									<span className="text-sm font-medium text-[#6366f1]">
										{case_.industry}
									</span>
								</div>

								{/* Challenge & Solution */}
								<div className="mb-6 space-y-3">
									<div>
										<span className="font-medium text-red-400">Problema: </span>
										<span className="text-[#94a3b8]">{case_.challenge}</span>
									</div>
									<div>
										<span className="font-medium text-green-400">
											Solución:{' '}
										</span>
										<span className="text-[#94a3b8]">{case_.solution}</span>
									</div>
								</div>

								{/* Results */}
								<div className="mb-6 grid grid-cols-3 gap-3">
									<div className="text-center">
										<div className="text-2xl font-bold">
											<Gradient>{case_.results.metric1.value}</Gradient>
										</div>
										<div className="text-xs text-[#94a3b8]">
											{case_.results.metric1.label}
										</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold">
											<Gradient>{case_.results.metric2.value}</Gradient>
										</div>
										<div className="text-xs text-[#94a3b8]">
											{case_.results.metric2.label}
										</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold">
											<Gradient>{case_.results.metric3.value}</Gradient>
										</div>
										<div className="text-xs text-[#94a3b8]">
											{case_.results.metric3.label}
										</div>
									</div>
								</div>

								{/* Testimonial */}
								<blockquote className="border-l-2 border-[#6366f1] pl-4 text-sm italic text-[#e2e8f0]">
									"{case_.testimonial}"
								</blockquote>
							</div>
						</div>
					))}
				</div>

				{/* CTA */}
				<div className="mt-16 text-center">
					<div className="mb-6">
						<p className="text-lg text-[#94a3b8]">
							<strong className="text-white mr-1">
								¿Te inspiran estos resultados?
							</strong>
							Conversemos sobre cómo podemos ayudar a tu empresa a alcanzar
							objetivos similares.
						</p>
					</div>
					<a
						href="#contacto"
						className="inline-block rounded-xl bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
					>
						Conversemos sobre tu proyecto →
					</a>
				</div>
			</div>
		</section>
	)
}
