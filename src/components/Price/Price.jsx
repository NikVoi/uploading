import {
	PRICE_BUTTON,
	PRICE_CARDS,
	PRICE_CUSTOM,
	PRICE_CUSTOM_PRICE,
	PRICE_DESCRIPTION,
	PRICE_TITLE,
} from '@/constants/Home/PriceConstant'
import { AUTH_PAGE } from '@/constants/navigateConstant'
import { IoMdCheckmark } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import Title from '../Title/Title'
import Button from '../UI/Button/Button'
import styles from './Price.module.scss'

const Price = () => {
	const navigate = useNavigate()

	return (
		<section className={styles.price}>
			<Title title={PRICE_TITLE} description={PRICE_DESCRIPTION} />

			<div className={styles.wrapper}>
				{PRICE_CARDS.map((item, index) => (
					<div key={index} className={styles.item}>
						<div className={styles.title}>{item.title}</div>
						<div className={styles.description}>{item.description}</div>

						<div className={styles.priceItem}>
							{item.price === `${PRICE_CUSTOM}` ? (
								`${PRICE_CUSTOM_PRICE}`
							) : (
								<>
									${item.price} <span>/ month</span>
								</>
							)}
						</div>

						<div className={styles.options}>
							{item.list.map((option, idx) => (
								<div key={idx} className={styles.option}>
									<IoMdCheckmark /> {option}
								</div>
							))}
						</div>

						<Button text={PRICE_BUTTON} onClick={() => navigate(AUTH_PAGE)} />
					</div>
				))}
			</div>
		</section>
	)
}

export default Price
