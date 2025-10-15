import { useFetcher } from 'react-router'
import Gradient from '../gradient'

export default function ContactUsSection() {
	const fetcher = useFetcher()
	const isSubmitting = fetcher.state === 'submitting'
	const isSuccess = fetcher.data?.status === 'success'

	return (
		<section className="bg-[#1e293b] px-0 py-32" id="contacto">
			<div className="mx-auto max-w-7xl px-8">
				<div className="mb-16 text-center">
					<h2 className="mb-4 text-5xl font-bold">
						¿Listo para comenzar tu <Gradient>proyecto</Gradient>?
					</h2>
					<p className="mw-[700px] mx-auto text-xl text-[#94a3b8]">
						<strong className="text-white">Conversemos sobre tu idea.</strong>{' '}
						Te ayudamos a analizar tus necesidades, definir el alcance del
						proyecto y crear una propuesta técnica y económica personalizada.
					</p>

					{/* Benefits */}
					<div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
						<div className="flex items-center text-green-400">
							<span className="mr-2">✓</span>
							<span>Análisis gratuito de tu negocio</span>
						</div>
						<div className="flex items-center text-green-400">
							<span className="mr-2">✓</span>
							<span>Estimación de costos y tiempos</span>
						</div>
						<div className="flex items-center text-green-400">
							<span className="mr-2">✓</span>
							<span>Sin compromiso ni presión de venta</span>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
					<div className="rounded-[20px] border-[#6366f133] bg-[#0f172a] p-12">
						<fetcher.Form method="post">
							{isSuccess && (
								<div className="mb-6 rounded-xl border border-green-500/30 bg-green-500/20 p-4 text-green-300">
									¡Mensaje enviado exitosamente! Te contactaremos pronto.
								</div>
							)}

							{fetcher.data?.error && (
								<div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/20 p-4 text-red-300">
									{fetcher.data.error}
								</div>
							)}

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
									disabled={isSubmitting}
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
									disabled={isSubmitting}
								/>
							</div>
							<div className="mb-8">
								<label
									className="mb-2 block font-medium text-[#f8fafc]"
									htmlFor="company"
								>
									Empresa
								</label>
								<input
									type="text"
									id="company"
									name="company"
									className="w-full rounded-xl border border-[#6366f14d] p-4 text-lg text-[#f8fafc] transition-colors duration-300 ease-in focus:border-[#6366f1] focus:outline-none"
									disabled={isSubmitting}
								/>
							</div>
							<div className="mb-8">
								<label
									className="mb-2 block font-medium text-[#f8fafc]"
									htmlFor="message"
								>
									Describe tu desafío o idea de proyecto
								</label>
								<textarea
									className="w-full rounded-xl border border-[#6366f14d] p-4 text-lg text-[#f8fafc] transition-colors duration-300 ease-in focus:border-[#6366f1] focus:outline-none"
									id="message"
									name="message"
									rows={5}
									placeholder="Ejemplo: Necesito una app móvil para gestionar inventario en tiempo real, o quiero automatizar el proceso de ventas de mi negocio..."
									required
									disabled={isSubmitting}
								></textarea>
							</div>
							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full cursor-pointer rounded-xl border-none bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] p-4 text-lg font-semibold text-white transition-all duration-300 ease-in disabled:cursor-not-allowed disabled:opacity-50"
							>
								{isSubmitting
									? 'Enviando...'
									: 'Solicitar consultoría gratuita →'}
							</button>
						</fetcher.Form>
					</div>
					<div>
						<h3 className="mb-8 text-3xl">Conectemos</h3>
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
	)
}
