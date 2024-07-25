import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<section className={styles.footer}>
			<h3>© 2024 Uploaders. All rights reserved.</h3>
			<div className={styles.links}>
				<h3>Terms of Service</h3>
				<h3>Privacy Policy</h3>
			</div>
		</section>
	)
}

export default Footer
