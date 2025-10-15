import Gradient from '../gradient'
import GradientButton from '../gradient-button'

export default function HomeSection() {
	return (
		<section
			id="inicio"
			className="relative flex min-h-screen w-full items-center overflow-hidden"
		>
			{/* ToDo las burbujitas <div className="floating-elements">...</div> */}
			<div className="z-10 mx-auto max-w-7xl px-8">
				<h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
					Desarrollamos el software que <br />
					<Gradient>impulsa tu negocio</Gradient>
				</h1>
				<p className="mb-8 max-w-[600px] text-lg text-[#94a3b8] md:text-xl">
					<strong className="text-white">
						Transformamos ideas en soluciones digitales reales.
					</strong>{' '}
					Creamos aplicaciones web y móviles que optimizan procesos, mejoran la
					experiencia del usuario y generan resultados medibles para tu empresa.
				</p>

				{/* Elementos de prueba social */}
				<div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-[#94a3b8]">
					<div className="flex items-center">
						<span className="mr-2 text-green-400">✓</span>
						<span>7+ años de experiencia</span>
					</div>
					<div className="flex items-center">
						<span className="mr-2 text-green-400">✓</span>
						<span>50+ proyectos entregados</span>
					</div>
					<div className="flex items-center">
						<span className="mr-2 text-green-400">✓</span>
						<span>Metodología ágil probada</span>
					</div>
				</div>

				<div className="flex flex-col gap-4 sm:flex-row">
					<GradientButton href="#contacto">
						Reservar consultoría estratégica GRATUITA
					</GradientButton>
					<a
						href="#casos-exito"
						className="inline-flex items-center justify-center rounded-xl border border-[#6366f1] px-6 py-3 font-medium text-[#6366f1] transition-colors hover:bg-[#6366f1]/10"
					>
						Ver casos de éxito →
					</a>
				</div>
			</div>
		</section>
	)
}
