import { createBrowserRouter } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import HomePage from './pages/HomePage'
import LayoutNotAuth from './pages/LayoutNotAuth'

export const routes = [
	{
		path: '/',
		element: <LayoutNotAuth children={<HomePage />} />,
	},
	{
		path: '/dashboard',
		element: <Dashboard />,
	},
]

export const router = createBrowserRouter(routes)
