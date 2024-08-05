import { HEADER_LINKS } from '@/constants/Home/headersConstant'
import { AUTH_PAGE, HOME_PAGE } from '@/constants/navigateConstant'
import { IoVideocamOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'

const HeaderNotAuth = () => {
	const navigate = useNavigate()

	return (
		<section className={styles.headerNotAuth}>
			<h1 className={styles.logo} onClick={() => navigate(HOME_PAGE)}>
				<IoVideocamOutline />
			</h1>

			<div className={styles.wrapper}>
				{HEADER_LINKS.map(item => (
					<a href={item.link} onClick={() => navigate(AUTH_PAGE)}>
						{item.name}
					</a>
				))}
			</div>
		</section>
	)
}

export default HeaderNotAuth
