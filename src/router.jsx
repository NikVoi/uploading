import { createBrowserRouter } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'

export const routes = [
	{
		path: '/',
		element: <Auth />,
	},
	{
		path: '/dashboard',
		element: <Dashboard />,
	},
]

export const router = createBrowserRouter(routes)
