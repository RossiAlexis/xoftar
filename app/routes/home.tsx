import type { Route } from './+types/home'
import { data } from 'react-router'
import HomeSection from '~/components/sections/home-section'
import AboutUsSection from '~/components/sections/about-us-section'
import ServicesSection from '~/components/sections/services-section'
import ContactUsSection from '~/components/sections/contact-us-section'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Xoftar' },
		{ name: 'description', content: 'Welcome to Xoftar!' },
	]
}

export async function loader({ request }: Route.LoaderArgs) {
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

	return data({
		services,
	})
}

export async function action({ request }: Route.ActionArgs) {
	console.log('Action called')
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return (
		<main>
			<HomeSection />
			<ServicesSection services={loaderData.services} />
			<AboutUsSection />
			<ContactUsSection />
		</main>
	)
}
