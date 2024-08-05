import { AUTH_PAGE, HOME_PAGE } from '@/constants/navigateConstant'
import { IoVideocamOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'

//TODO: Вынести в отдельный файл
const links = [
	{
		link: '#',
		name: 'Features',
	},
	{
		link: '#',
		name: 'Pricing',
	},
	{
		link: '#',
		name: 'About',
	},
	{
		link: '#',
		name: 'Contact',
	},
]

const HeaderNotAuth = () => {
	const navigate = useNavigate()

	return (
		<section className={styles.headerNotAuth}>
			<h1 className={styles.logo} onClick={() => navigate(HOME_PAGE)}>
				<IoVideocamOutline />
			</h1>

			<div className={styles.wrapper}>
				{links.map(item => (
					<a href={item.link} onClick={() => navigate(AUTH_PAGE)}>
						{item.name}
					</a>
				))}
			</div>
		</section>
	)
}

export default HeaderNotAuth
