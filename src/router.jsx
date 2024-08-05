import { createBrowserRouter } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'
import {
	AUTH_PAGE,
	DASHBOARD_PAGE,
	HOME_PAGE,
} from './constants/navigateConstant'
import HomePage from './pages/HomePage'
import LayoutAuth from './pages/LayoutAuth'
import LayoutNotAuth from './pages/LayoutNotAuth'

export const routes = [
	{
		path: HOME_PAGE,
		element: <LayoutNotAuth children={<HomePage />} />,
	},
	{
		path: AUTH_PAGE,
		element: <LayoutNotAuth children={<Auth />} />,
	},
	{
		path: DASHBOARD_PAGE,
		element: <LayoutAuth children={<Dashboard />} />,
	},
]

export const router = createBrowserRouter(routes)
