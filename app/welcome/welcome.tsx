import Gradient from '~/components/gradient'
import ServiceCard from '~/components/service-card'
import GradientButton from '~/components/gradient-button'
import SectionHeader from '~/components/section-header'

// Define service data
const services = [
	{
		icon: '💻',
		title: 'Desarrollo Web',
		description:
			'Creamos aplicaciones web modernas, responsive y optimizadas utilizando las últimas tecnologías para garantizar la mejor experiencia de usuario.',
	},
	{
		icon: '📱',
		title: 'Desarrollo Móvil',
		description:
			'Desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android que conectan tu negocio con tus clientes de manera efectiva.',
	},
	{
		icon: '⚙️',
		title: 'Software a Medida',
		description:
			'Diseñamos y desarrollamos soluciones de software personalizadas que se adaptan perfectamente a las necesidades específicas de tu empresa.',
	},
	{
		icon: '🔄',
		title: 'Mantenimiento Evolutivo',
		description:
			'Mantenemos y evolucionamos tus aplicaciones existentes, añadiendo nuevas funcionalidades y optimizando el rendimiento continuamente.',
	},
	{
		icon: '🚀',
		title: 'Transformación Digital',
		description:
			'Te acompañamos en el proceso de digitalización de tu empresa, optimizando procesos y implementando tecnologías innovadoras.',
	},
	{
		icon: '💡',
		title: 'Consultoría Tecnológica',
		description:
			'Brindamos asesoramiento experto en tecnología para ayudarte a tomar las mejores decisiones estratégicas para tu negocio.',
	},
]

export function Welcome() {
	return (
		<main>
			<section
				id="inicio"
				className="relative flex min-h-screen w-full items-center overflow-hidden"
			>
				{/* ToDo las burbujitas <div className="floating-elements">...</div> */}
				<div className="z-10 mx-auto max-w-7xl px-8">
					<h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
						Transformamos ideas en <br />
						<Gradient>soluciones digitales</Gradient>
					</h1>
					<p className="mb-10 max-w-[600px] text-lg text-[#94a3b8] md:text-xl">
						Somos Xoftar, especialistas en desarrollo de software a medida y
						transformación digital. Convertimos tus ideas en aplicaciones web y
						móviles innovadoras que impulsan tu negocio.
					</p>
					<GradientButton href="#contacto">
						Comencemos tu proyecto
					</GradientButton>
				</div>
			</section>

			<section id="servicios" className="w-full bg-[#1e293b] px-8 py-32">
				<div className="mx-auto max-w-7xl">
					<SectionHeader
						title="Nuestros"
						highlightedText="Servicios"
						description="Ofrecemos soluciones tecnológicas completas para llevar tu negocio al siguiente nivel"
					/>

					<div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-[repeat(auto-fit,minmax(21rem,1fr))]">
						{services.map((service, index) => (
							<ServiceCard
								key={index}
								icon={service.icon}
								title={service.title}
								index={index}
								description={service.description}
							/>
						))}
					</div>
				</div>
			</section>
			<section className="px-0 py-32" id="nosotros">
				<div className="mx-auto max-w-7xl px-8">
					<div className="grid grid-cols-1 items-center gap-16">
						<div className="about-text">
							<h2 className="mb-8 text-4xl">
								¿Por qué elegir <span className="gradient-text">Xoftar</span>?
							</h2>
							<p className="mb-6 text-lg text-[#94a3b8]">
								Somos un equipo de desarrolladores apasionados con más de 7 años
								de experiencia en la industria del software. Nos especializamos
								en crear soluciones tecnológicas que realmente impactan en el
								crecimiento de nuestros clientes.
							</p>
							<p className="mb-6 text-lg text-[#94a3b8]">
								Nuestra experiencia como Engineering Team Lead y desarrollador
								nos permite entender tanto los aspectos técnicos como los
								desafíos de gestión de proyectos, garantizando entregas exitosas
								y de alta calidad.
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
			<section className="bg-[#1e293b] px-0 py-32" id="contacto">
				<div className="mx-auto max-w-7xl px-8">
					<div className="mb-16 text-center">
						<h2 className="mb-4 text-5xl font-bold">
							¿Listo para comenzar tu <Gradient>proyecto</Gradient>?
						</h2>
						<p className="mw-[600px] mx-auto text-xl text-[#94a3b8]">
							Contáctanos y conversemos sobre cómo podemos ayudarte a
							materializar tus ideas
						</p>
					</div>
					<div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
						<div className="rounded-[20px] border-[#6366f133] bg-[#0f172a] p-12">
							<form id="contactForm">
								<div className="mb-8">
									<label
										className="mb-2 block font-medium text-[#f8fafc]"
										htmlFor="name"
									>
										Nombre completo
									</label>
									<input
										className="w-full rounded-xl border border-[#6366f14d] p-4 text-lg text-[#f8fafc] transition-colors duration-300 ease-in focus:border-[#6366f1] focus:outline-none"
										type="text"
										id="name"
										name="name"
										required
									/>
								</div>
								<div className="mb-8">
									<label
										className="mb-2 block font-medium text-[#f8fafc]"
										htmlFor="email"
									>
										Email
									</label>
									<input
										className="w-full rounded-xl border border-[#6366f14d] p-4 text-lg text-[#f8fafc] transition-colors duration-300 ease-in focus:border-[#6366f1] focus:outline-none"
										type="email"
										id="email"
										name="email"
										required
									/>
								</div>
								<div className="mb-8">
									<label
										className="mb-2 block font-medium text-[#f8fafc]"
										htmlFor="company"
									>
										Empresa
									</label>
									<input type="text" id="company" name="company" />
								</div>
								<div className="mb-8">
									<label
										className="mb-2 block font-medium text-[#f8fafc]"
										htmlFor="message"
									>
										Cuéntanos sobre tu proyecto
									</label>
									<textarea
										className="w-full rounded-xl border border-[#6366f14d] p-4 text-lg text-[#f8fafc] transition-colors duration-300 ease-in focus:border-[#6366f1] focus:outline-none"
										id="message"
										name="message"
										rows={5}
										required
									></textarea>
								</div>
								<button
									type="submit"
									className="w-full cursor-pointer rounded-xl border-none bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] p-4 text-lg font-semibold text-white transition-all duration-300 ease-in"
								>
									Enviar mensaje
								</button>
							</form>
						</div>
						<div>
							<h3 className="mb-8 text-3xl">Hablemos</h3>
							<div className="mb-6 flex items-center rounded-xl bg-[#0f172a] p-4">
								<div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#06b6d4]">
									📧
								</div>
								<div>
									<h4 className="font-bold">Email</h4>
									<p>contacto@xoftar.com</p>
								</div>
							</div>
							<div className="mb-6 flex items-center rounded-xl bg-[#0f172a] p-4">
								<div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#06b6d4]">
									📱
								</div>
								<div>
									<h4 className="font-bold">WhatsApp</h4>
									<p>+54 9 11 XXXX-XXXX</p>
								</div>
							</div>
							<div className="mb-6 flex items-center rounded-xl bg-[#0f172a] p-4">
								<div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#06b6d4]">
									💼
								</div>
								<div>
									<h4 className="font-bold">LinkedIn</h4>
									<p>linkedin.com/company/xoftar</p>
								</div>
							</div>
							<div className="mb-6 flex items-center rounded-xl bg-[#0f172a] p-4">
								<div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#06b6d4]">
									🌐
								</div>
								<div>
									<h4 className="font-bold">Ubicación</h4>
									<p>Buenos Aires, Argentina</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
