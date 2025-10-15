import SectionHeader from '../section-header'
import ServiceCard from '../service-card'
type ServiceProps = {
	services: {
		icon: string
		title: string
		description: string
	}[]
}

export default function ServicesSection({ services }: ServiceProps) {
	return (
		<section id="servicios" className="w-full bg-[#1e293b] px-8 py-32">
			<div className="mx-auto max-w-7xl">
				<SectionHeader
					title="Soluciones"
					highlightedText="Tecnológicas"
					description="Servicios especializados que generan resultados medibles y ROI comprobado para tu empresa"
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
	)
}
