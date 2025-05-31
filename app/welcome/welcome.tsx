import React from 'react'
import Gradient from '~/components/gradient'
import ServiceCard from '~/components/service-card'
import GradientButton from '~/components/gradient-button'
import SectionHeader from '~/components/section-header'
import SectionContainer from '~/components/section-container'

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
			<SectionContainer
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
			</SectionContainer>

			<SectionContainer
				id="servicios"
				className="w-full bg-[#1e293b] px-8 py-32"
			>
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
			</SectionContainer>
		</main>
	)
}
