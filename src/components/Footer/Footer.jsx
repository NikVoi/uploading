import {
	FOOTER_LINK_1,
	FOOTER_LINK_2,
	FOOTER_TITLE,
} from '@/constants/Home/footerContstant'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<section className={styles.footer}>
			<h3>{FOOTER_TITLE}</h3>
			<div className={styles.links}>
				<h3>{FOOTER_LINK_1}</h3>
				<h3>{FOOTER_LINK_2}</h3>
			</div>
		</section>
	)
}

export default Footer
