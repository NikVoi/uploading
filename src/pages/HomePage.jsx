import About from '@/components/About/About'
import Features from '@/components/Features/Features'
import GetStarted from '@/components/GetStarted/GetStarted'
import Price from '@/components/Price/Price'
import { HOME_PAGE } from '@/constants/navigateConstant'
import useNavigateAuth from '@/hooks/useNavigateAuth'
import styles from '../styles/HomePage.module.scss'

const HomePage = () => {
	useNavigateAuth('', HOME_PAGE)

	return (
		<section className={styles.home}>
			<About />
			<Features />
			<Price />
			<GetStarted />
		</section>
	)
}

export default HomePage
