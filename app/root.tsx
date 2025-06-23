import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'react-router'

import type { Route } from './+types/root'
import './styles/app.css'
import Gradient from './components/gradient'

export const links: Route.LinksFunction = () => [
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
	},
]

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export default function App() {
	return (
		<>
			<header className="fixed top-0 z-[1000] flex h-16 w-full bg-slate-800/95 backdrop-blur-[20px] transition-all duration-300 ease-in-out">
				<nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-8 py-0">
					<div className="text-4xl font-bold">
						<Gradient>Xoftar</Gradient>
					</div>
					<ul className="hidden list-none gap-8 md:flex">
						<li>
							<a
								className="relative font-medium transition-colors duration-300 ease-in-out after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-br after:from-[#6366f1] after:via-[#8b5cf6] after:to-[#06b6d4] after:transition-all after:duration-300 after:ease-in-out hover:text-[#6366f1] hover:after:w-full"
								href="#inicio"
							>
								Inicio
							</a>
						</li>
						<li>
							<a
								className="relative font-medium transition-colors duration-300 ease-in-out after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-br after:from-[#6366f1] after:via-[#8b5cf6] after:to-[#06b6d4] after:transition-all after:duration-300 after:ease-in-out hover:text-[#6366f1] hover:after:w-full"
								href="#servicios"
							>
								Servicios
							</a>
						</li>
						<li>
							<a
								className="relative font-medium transition-colors duration-300 ease-in-out after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-br after:from-[#6366f1] after:via-[#8b5cf6] after:to-[#06b6d4] after:transition-all after:duration-300 after:ease-in-out hover:text-[#6366f1] hover:after:w-full"
								href="#nosotros"
							>
								Nosotros
							</a>
						</li>
						<li>
							<a
								className="relative font-medium transition-colors duration-300 ease-in-out after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-br after:from-[#6366f1] after:via-[#8b5cf6] after:to-[#06b6d4] after:transition-all after:duration-300 after:ease-in-out hover:text-[#6366f1] hover:after:w-full"
								href="#contacto"
							>
								Contacto
							</a>
						</li>
					</ul>
				</nav>
			</header>
			<Outlet />
		</>
	)
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = 'Oops!'
	let details = 'An unexpected error occurred.'
	let stack: string | undefined

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error'
		details =
			error.status === 404
				? 'The requested page could not be found.'
				: error.statusText || details
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message
		stack = error.stack
	}

	return (
		<main className="container mx-auto p-4 pt-16">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full overflow-x-auto p-4">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	)
}
