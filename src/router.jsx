import { createBrowserRouter } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'
import HomePage from './pages/HomePage'
import LayoutAuth from './pages/LayoutAuth'
import LayoutNotAuth from './pages/LayoutNotAuth'

export const routes = [
	{
		path: '/',
		element: <LayoutNotAuth children={<HomePage />} />,
	},
	{
		path: '/auth',
		element: <LayoutNotAuth children={<Auth />} />,
	},
	{
		path: '/dashboard',
		element: <LayoutAuth children={<Dashboard />} />,
	},
]

export const router = createBrowserRouter(routes)
