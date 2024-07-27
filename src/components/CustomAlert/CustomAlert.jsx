import classNames from 'classnames'
import { memo, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { IoClose } from 'react-icons/io5'
import { getIcon } from './Config'
import styles from './CustomAlert.module.scss'

const CustomAlert = memo(({ data, setData }) => {
	const handleClose = () => {
		setData({ isActive: false })
	}

	useEffect(() => {
		if (data.isActive) {
			const timer = setTimeout(() => {
				setData({ isActive: false })
			}, 5000)

			return () => clearTimeout(timer)
		}
	}, [data.isActive, setData])

	return createPortal(
		<section
			className={classNames(styles.modal, { [styles.active]: data.isActive })}
		>
			<div className={styles.content}>
				<i className={styles.info}>{getIcon(data.typeAlert)}</i>

				<div className={styles.message}>
					<span>{data.typeAlert}</span>
					<span>{data.message}</span>
				</div>
			</div>
			<i className={styles.close} onClick={handleClose}>
				<IoClose />
			</i>

			<div
				className={classNames(styles.progress, {
					[styles.active]: data.isActive,
				})}
			></div>
		</section>,
		document.body
	)
})

export default CustomAlert
