import useNavigateAuth from '../../hooks/useNavigateAuth'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Uploads from '../Uploads/Uploads'
import styles from './Dashboard.module.scss'

const Dashboard = () => {
	useNavigateAuth()

	return (
		<section className={styles.dashboard}>
			<Header />

			<Uploads />

			<Footer />
		</section>
	)
}

export default Dashboard
