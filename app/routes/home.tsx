import type { Route } from './+types/home'
import { Welcome } from '../welcome/welcome'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Xoftar' },
		{ name: 'description', content: 'Welcome to Xoftar!' },
	]
}

export default function Home() {
	return <Welcome />
}
