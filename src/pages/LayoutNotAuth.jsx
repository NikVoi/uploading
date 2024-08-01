import Footer from '@/components/Footer/Footer'
import HeaderNotAuth from '@/components/Header/HeaderNotAuth'

const LayoutNotAuth = ({ children }) => {
	return (
		<main>
			<HeaderNotAuth />

			{children}

			<Footer />
		</main>
	)
}

export default LayoutNotAuth
