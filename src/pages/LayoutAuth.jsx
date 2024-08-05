import Footer from '@/components/Footer/Footer'
import HeaderAuth from '@/components/Header/HeaderAuth'

const LayoutAuth = ({ children }) => {
	return (
		<main>
			<HeaderAuth />

			{children}

			<Footer />
		</main>
	)
}

export default LayoutAuth
