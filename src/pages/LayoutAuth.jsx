import Footer from '@/components/Footer/Footer'
import HeaderAuth from '@/components/Header/HeaderAuth'

const LayoutAuth = () => {
	return (
		<section className={styles.layout}>
			<HeaderAuth />

			{children}

			<Footer />
		</section>
	)
}

export default LayoutAuth
