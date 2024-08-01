import { IoVideocamOutline } from 'react-icons/io5'
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
	return (
		<section className={styles.headerNotAuth}>
			<h1 className={styles.logo}>
				<IoVideocamOutline />
			</h1>

			<div className={styles.wrapper}>
				{links.map(item => (
					<a href={item.link}>{item.name}</a>
				))}
			</div>
		</section>
	)
}

export default HeaderNotAuth
