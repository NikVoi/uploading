import { IoMdCheckmark } from 'react-icons/io'
import Button from '../UI/Button/Button'
import styles from './Price.module.scss'

const priceCards = [
	{
		title: 'Starter',
		description: 'Perfect for individuals and small teams.',
		price: 9,
		list: [
			'100 minutes of transcription per month',
			'Searchable transcripts',
			'Multiple output formats',
			'Basic team collaboration',
		],
	},
	{
		title: 'Pro',
		description: 'For teams and businesses with higher volume needs.',
		price: 49,
		list: [
			'1,000 minutes of transcription per month',
			'Searchable transcripts',
			'Multiple output formats',
			'Advanced team collaboration',
			'Enterprise-grade security and reliability',
		],
	},
	{
		title: 'Enterprise',
		description: 'Tailored solutions for large organizations.',
		price: 'Custom',
		list: [
			'Unlimited transcription volume',
			'Customizable workflows and integrations',
			'Advanced team management and controls',
			'Dedicated support and SLAs',
		],
	},
]

const Price = () => {
	return (
		<section className={styles.price}>
			<h2>Affordable pricing for every need</h2>
			<h3>
				Choose the plan that fits your budget and transcription requirements.
			</h3>

			<div className={styles.wrapper}>
				{priceCards.map((item, index) => (
					<div key={index} className={styles.item}>
						<div className={styles.title}>{item.title}</div>
						<div className={styles.description}>{item.description}</div>

						<div className={styles.priceItem}>
							{item.price === 'Custom' ? (
								'Custom Pricing'
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

						<Button text='Get started' />
					</div>
				))}
			</div>
		</section>
	)
}

export default Price
