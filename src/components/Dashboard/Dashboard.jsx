import { DashboardProvider } from '@/context/UpadateContext'
import useNavigateAuth from '../../hooks/useNavigateAuth'
import Transcript from '../Transcript/Transcript'
import Uploads from '../Uploads/Uploads'
import styles from './Dashboard.module.scss'

const Dashboard = () => {
	useNavigateAuth()

	return (
		<DashboardProvider>
			<section className={styles.dashboard}>
				<Uploads />

				<Transcript />
			</section>
		</DashboardProvider>
	)
}

export default Dashboard
