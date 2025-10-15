import type { Route } from './+types/home'
import { data } from 'react-router'
import HomeSection from '~/components/sections/home-section'
import ServicesSection from '~/components/sections/services-section'
import CaseStudiesSection from '~/components/sections/case-studies-section'
import TestimonialsSection from '~/components/sections/testimonials-section'
import AboutUsSection from '~/components/sections/about-us-section'
import FAQSection from '~/components/sections/faq-section'
import ContactUsSection from '~/components/sections/contact-us-section'

export function meta({}: Route.MetaArgs) {
	return [
		{
			title:
				'Xoftar - Desarrollo de Software a Medida | Aplicaciones Web y Móviles',
		},
		{
			name: 'description',
			content:
				'Xoftar transforma ideas en soluciones digitales. Desarrollo de aplicaciones web, móviles y software a medida. 7+ años de experiencia. ¡Comienza tu proyecto hoy!',
		},
		{
			name: 'keywords',
			content:
				'desarrollo software, aplicaciones web, desarrollo móvil, software a medida, transformación digital, React, Node.js, Buenos Aires, Argentina',
		},
		{ name: 'author', content: 'Xoftar' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1.0' },

		// Open Graph meta tags para redes sociales
		{ property: 'og:type', content: 'website' },
		{
			property: 'og:title',
			content:
				'Xoftar - Desarrollo de Software a Medida | Transformamos Ideas en Soluciones Digitales',
		},
		{
			property: 'og:description',
			content:
				'Especialistas en desarrollo de aplicaciones web y móviles. Más de 7 años de experiencia creando soluciones tecnológicas innovadoras para empresas.',
		},
		{ property: 'og:image', content: 'https://xoftar.com/og-image.jpg' },
		{ property: 'og:url', content: 'https://xoftar.com' },
		{ property: 'og:site_name', content: 'Xoftar' },
		{ property: 'og:locale', content: 'es_AR' },

		// Twitter Card meta tags
		{ name: 'twitter:card', content: 'summary_large_image' },
		{
			name: 'twitter:title',
			content: 'Xoftar - Desarrollo de Software a Medida',
		},
		{
			name: 'twitter:description',
			content:
				'Transformamos ideas en soluciones digitales. Desarrollo web, móvil y software a medida con 7+ años de experiencia.',
		},
		{ name: 'twitter:image', content: 'https://xoftar.com/twitter-image.jpg' },

		// Meta tags adicionales para SEO
		{ name: 'robots', content: 'index, follow' },
		{ name: 'language', content: 'Spanish' },
		{ name: 'geo.region', content: 'AR-C' },
		{ name: 'geo.placename', content: 'Buenos Aires' },
		{ name: 'geo.position', content: '-34.6037;-58.3816' },
		{ name: 'ICBM', content: '-34.6037, -58.3816' },
	]
}

export async function loader({ request }: Route.LoaderArgs) {
	const services = [
		{
			icon: '💻',
			title: 'Desarrollo Web Avanzado',
			description:
				'Aplicaciones web de alto rendimiento con React, Next.js y Node.js. Diseño responsive, SEO optimizado y tiempos de carga ultra-rápidos que aumentan tus conversiones hasta un 40%.',
		},
		{
			icon: '📱',
			title: 'Apps Móviles Nativas',
			description:
				'Desarrollo nativo iOS/Android y React Native. Apps que funcionan offline, notificaciones push inteligentes y UX diseñada para maximizar la retención de usuarios.',
		},
		{
			icon: '⚙️',
			title: 'Software Empresarial',
			description:
				'Sistemas ERP, CRM y automatización de procesos con integración de APIs. Reducimos costos operativos hasta 60% y eliminamos tareas manuales repetitivas.',
		},
		{
			icon: '🔄',
			title: 'Evolución y Escalabilidad',
			description:
				'Modernizamos código legacy y migramos sistemas obsoletos. Implementamos arquitecturas cloud que soportan 10x más usuarios sin perder performance.',
		},
		{
			icon: '🚀',
			title: 'Transformación Digital',
			description:
				'Digitalización completa de procesos con IA, automatización y analytics. Dashboards ejecutivos en tiempo real y reportes que impulsan decisiones estratégicas.',
		},
		{
			icon: '💡',
			title: 'Consultoría Técnica Especializada',
			description:
				'Auditoría de arquitectura, selección de tecnologías y roadmap técnico. Te ayudamos a evitar costosos errores y acelerar el time-to-market de tus productos.',
		},
	]

	const testimonials = [
		{
			avatar:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format',
			name: 'Carlos Mendoza',
			position: 'CTO',
			company: 'TechStartup SRL',
			rating: 5,
			testimonial:
				'Xoftar revolucionó nuestros procesos. La app que desarrollaron aumentó nuestra productividad un 65% y redujo errores manuales casi a cero. Excelente comunicación durante todo el proyecto.',
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format',
			name: 'Maria Elena Rodriguez',
			position: 'Directora de Operaciones',
			company: 'Logística Moderna SA',
			rating: 5,
			testimonial:
				'El sistema de gestión que nos entregaron superó todas nuestras expectativas. En 3 meses recuperamos la inversión gracias a la optimización de rutas y control de inventario en tiempo real.',
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format',
			name: 'Juan Pablo Fernandez',
			position: 'Founder & CEO',
			company: 'EcoSolutions',
			rating: 5,
			testimonial:
				'Profesionales excepcionales. Nos ayudaron a migrar de sistemas legacy a una arquitectura moderna en AWS. El resultado: 10x más velocidad y 40% menos costos de infraestructura.',
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face&auto=format',
			name: 'Ana Sofia Martinez',
			position: 'Marketing Director',
			company: 'Fashion Forward',
			rating: 5,
			testimonial:
				'La app móvil que desarrollaron tiene una UX increíble. Nuestros clientes la aman y hemos visto un 50% más engagement. El equipo entendió perfectamente nuestra visión de marca.',
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face&auto=format',
			name: 'Roberto Silva',
			position: 'Operations Manager',
			company: 'Industrial Pro',
			rating: 5,
			testimonial:
				'El dashboard ejecutivo que nos crearon nos da visibilidad total del negocio. Tomamos decisiones más rápidas y precisas. ROI del proyecto se pagó solo en 4 meses.',
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face&auto=format',
			name: 'Lucia Gonzalez',
			position: 'Product Manager',
			company: 'FinTech Solutions',
			rating: 5,
			testimonial:
				'Increíble atención al detalle y conocimiento técnico. Nos ayudaron a implementar funcionalidades complejas de manera elegante. El código es limpio y la documentación excelente.',
		},
	]

	return data({
		services,
		testimonials,
	})
}

export async function action({ request }: Route.ActionArgs) {
	try {
		const formData = await request.formData()

		// Extract form fields
		const name = formData.get('name')?.toString()
		const email = formData.get('email')?.toString()
		const company = formData.get('company')?.toString()
		const message = formData.get('message')?.toString()

		// Validate required fields
		if (!name?.trim()) {
			return data({ error: 'El nombre es requerido' }, { status: 400 })
		}

		if (!email?.trim()) {
			return data({ error: 'El email es requerido' }, { status: 400 })
		}

		if (!message?.trim()) {
			return data({ error: 'El mensaje es requerido' }, { status: 400 })
		}

		// Basic email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(email)) {
			return data(
				{ error: 'Por favor ingresa un email válido' },
				{ status: 400 },
			)
		}

		// Here you would typically:
		// 1. Send an email notification
		// 2. Save to database
		// 3. Send to a CRM system
		// etc.

		console.log('Contact form submission:', {
			name: name.trim(),
			email: email.trim(),
			company: company?.trim() || 'No especificada',
			message: message.trim(),
			timestamp: new Date().toISOString(),
		})

		// For now, we'll just log and return success
		// TODO: Implement actual email sending or database storage

		return data(
			{
				status: 'success',
				message: 'Mensaje enviado exitosamente',
			},
			{ status: 200 },
		)
	} catch (error) {
		console.error('Error processing contact form:', error)
		return data(
			{ error: 'Ha ocurrido un error. Por favor intenta nuevamente.' },
			{ status: 500 },
		)
	}
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return (
		<main>
			<HomeSection />
			<ServicesSection services={loaderData.services} />
			<CaseStudiesSection />
			<TestimonialsSection testimonials={loaderData.testimonials} />
			<AboutUsSection />
			<FAQSection />
			<ContactUsSection />
		</main>
	)
}
