import { useState } from 'react'
import Gradient from '../gradient'

interface FAQItem {
	question: string
	answer: string
}

export default function FAQSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const faqs: FAQItem[] = [
		{
			question: '¿Qué pasa si no estoy satisfecho con el resultado?',
			answer:
				'Trabajamos de manera iterativa y colaborativa para asegurar que el resultado final cumpla con tus expectativas. Realizamos entregas regulares para que puedas revisar y solicitar ajustes durante el desarrollo. Nuestro objetivo es siempre la satisfacción total del cliente.',
		},
		{
			question: '¿Cuánto tiempo toma desarrollar mi aplicación?',
			answer:
				'Los tiempos varían según la complejidad del proyecto. Típicamente, un MVP toma entre 8-12 semanas, mientras que aplicaciones más complejas pueden tomar 16-20 semanas. Durante la consultoría inicial evaluamos tu proyecto específico y te proporcionamos un cronograma detallado.',
		},
		{
			question: '¿Cómo sé que mi proyecto no se va a atrasar?',
			answer:
				'Utilizamos metodología ágil con entregas incrementales cada 2 semanas. Tienes visibilidad completa del progreso a través de reportes regulares y comunicación directa con el equipo. Esta metodología nos permite identificar y resolver cualquier desafío de manera temprana.',
		},
		{
			question: '¿Qué incluye exactamente el servicio?',
			answer:
				'Incluye: análisis completo de requerimientos, diseño UX/UI, desarrollo completo, testing, deployment, capacitación de tu equipo, documentación técnica y 3 meses de soporte técnico gratuito post-lanzamiento.',
		},
		{
			question: '¿Trabajan con empresas de mi tamaño/industria?',
			answer:
				'Hemos trabajado con startups de 2 personas hasta corporaciones de 500+ empleados. Industrias: fintech, e-commerce, logística, salud, educación, manufacturing. Si tienes un proceso que automatizar, podemos ayudarte.',
		},
		{
			question: '¿Qué pasa si necesito cambios después del lanzamiento?',
			answer:
				'Los primeros 3 meses de soporte están incluidos. Después ofrecemos planes de mantenimiento desde $500/mes que incluyen actualizaciones, nuevas funcionalidades y soporte prioritario. Tu aplicación nunca quedará obsoleta.',
		},
		{
			question: '¿Cómo garantizan la seguridad de mis datos?',
			answer:
				'Implementamos las mejores prácticas de seguridad: encriptación end-to-end, autenticación multifactor, backups automáticos, cumplimiento GDPR, auditorías de seguridad regulares. Tu data está más segura que en bancos tradicionales.',
		},
		{
			question: '¿Por qué elegir Xoftar sobre una agencia más grande?',
			answer:
				'Agencias grandes = burocracia + costos inflados + equipos junior. Nosotros = acceso directo al CTO + metodología probada + precio justo + resultados garantizados. Nuestros clientes obtienen mejor ROI y servicio personalizado.',
		},
	]

	return (
		<section className="w-full bg-[#1e293b] px-8 py-32">
			<div className="mx-auto max-w-4xl">
				<div className="mb-16 text-center">
					<h2 className="mb-4 text-4xl font-bold md:text-5xl">
						Preguntas <Gradient>Frecuentes</Gradient>
					</h2>
					<p className="text-xl text-[#94a3b8]">
						Resolvemos todas tus dudas para que puedas tomar la mejor decisión
					</p>
				</div>

				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className="rounded-2xl border border-[#6366f1]/20 bg-[#0f172a] transition-all duration-300 hover:border-[#6366f1]/40"
						>
							<button
								className="flex w-full items-center justify-between p-6 text-left"
								onClick={() => setOpenIndex(openIndex === index ? null : index)}
							>
								<span className="pr-4 text-lg font-semibold text-white">
									{faq.question}
								</span>
								<span
									className={`text-2xl text-[#6366f1] transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
								>
									+
								</span>
							</button>
							{openIndex === index && (
								<div className="px-6 pb-6">
									<p className="leading-relaxed text-[#94a3b8]">{faq.answer}</p>
								</div>
							)}
						</div>
					))}
				</div>

				{/* CTA después de FAQ */}
				<div className="mt-16 text-center">
					<div className="mb-6 rounded-2xl border border-[#6366f1]/20 bg-gradient-to-r from-[#6366f1]/10 to-[#8b5cf6]/10 p-8">
						<h3 className="mb-4 text-2xl font-bold">
							¿Aún tienes dudas? <Gradient>Hablemos directamente</Gradient>
						</h3>
						<p className="mb-6 text-[#94a3b8]">
							Agenda una videollamada de 30 minutos donde analizamos tu proyecto
							específico, te damos una estimación exacta y resolvemos todas tus
							preguntas técnicas.
						</p>
						<a
							href="#contacto"
							className="inline-block rounded-xl bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
						>
							Agendar llamada estratégica GRATIS →
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
