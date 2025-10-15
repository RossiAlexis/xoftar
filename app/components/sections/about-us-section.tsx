import Gradient from '../gradient'

export default function AboutUsSection() {
	return (
		<section className="px-0 py-32" id="nosotros">
			<div className="mx-auto max-w-7xl px-8">
				<div className="grid grid-cols-1 items-center gap-16">
					<div className="about-text">
						<h2 className="mb-8 text-4xl">
							La diferencia <span className="gradient-text">Xoftar</span>
						</h2>
						<p className="mb-6 text-lg text-[#94a3b8]">
							<strong>
								7+ años desarrollando software que genera ROI real.
							</strong>{' '}
							Hemos ayudado a más de 50 empresas a digitalizar sus procesos,
							aumentar ventas y reducir costos operativos mediante soluciones
							tecnológicas inteligentes.
						</p>
						<p className="mb-6 text-lg text-[#94a3b8]">
							Nuestro enfoque combina{' '}
							<strong>expertise técnico avanzado</strong> (React, Node.js, Cloud
							AWS/Azure) con <strong>visión de negocio</strong>. Como
							ex-Engineering Team Lead, entendemos que la tecnología debe
							resolver problemas reales y generar valor medible.
						</p>
						<p className="mb-6 text-lg text-[#94a3b8]">
							<strong>Metodología probada:</strong> Sprints de 2 semanas,
							entregas incrementales, comunicación diaria y métricas de
							performance. Garantizamos transparencia total y proyectos
							entregados en tiempo y presupuesto.
						</p>
					</div>
					<div className="mt-12 grid grid-cols-2 gap-8">
						<div className="rounded-2xl bg-[#1e293b] p-6 text-center">
							<Gradient className="block text-4xl font-bold">7+</Gradient>
							<span className="mt-2 text-sm text-[#94a3b8]">
								Años Perfeccionando el Craft
							</span>
						</div>
						<div className="rounded-2xl bg-[#1e293b] p-6 text-center">
							<Gradient className="block text-4xl font-bold">50+</Gradient>
							<span className="mt-2 text-sm text-[#94a3b8]">
								Proyectos Transformadores
							</span>
						</div>
						<div className="rounded-2xl bg-[#1e293b] p-6 text-center">
							<Gradient className="block text-4xl font-bold">95%</Gradient>
							<span className="mt-2 text-sm text-[#94a3b8]">
								Clientes nos Recomiendan
							</span>
						</div>
						<div className="rounded-2xl bg-[#1e293b] p-6 text-center">
							<Gradient className="block text-4xl font-bold">48h</Gradient>
							<span className="mt-2 text-sm text-[#94a3b8]">
								Tiempo de Respuesta Max
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
