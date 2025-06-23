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
					Transformamos ideas en <br />
					<Gradient>soluciones digitales</Gradient>
				</h1>
				<p className="mb-10 max-w-[600px] text-lg text-[#94a3b8] md:text-xl">
					Somos Xoftar, especialistas en desarrollo de software a medida y
					transformación digital. Convertimos tus ideas en aplicaciones web y
					móviles innovadoras que impulsan tu negocio.
				</p>
				<GradientButton href="#contacto">Comencemos tu proyecto</GradientButton>
			</div>
		</section>
	)
}
