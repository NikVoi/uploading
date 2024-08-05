import { useDashboardContext } from '@/context/UpadateContext'
import { downloadAsPDF, downloadAsText } from '@/utils/DownlodFile'
import { IoLanguage } from 'react-icons/io5'
import { MdAccessTime } from 'react-icons/md'
import Title from '../Title/Title'
import Button from '../UI/Button/Button'
import styles from './Transcript.module.scss'

const Transcript = () => {
	const { language, isLoading, timeLeft, displayedText } = useDashboardContext()

	return (
		<section className={styles.transcript}>
			<Title
				title={'Transcript Preview'}
				description={'Your transcript will be displayed here.'}
			/>

			{isLoading && (
				<>
					<div className={styles.selectLang}>
						<IoLanguage />
						<span>{language}</span>
					</div>

					<div className={styles.time}>
						<MdAccessTime />
						<span>{timeLeft} seconds left</span>
					</div>

					<div className={styles.loader}>
						<div style={{ width: `${((30 - timeLeft) / 30) * 100}%` }}></div>
					</div>
				</>
			)}

			<div className={styles.preview}>{displayedText}</div>

			<div className={styles.wrapper}>
				<Button
					text={'Download as Text'}
					onClick={downloadAsText}
					disabled={isLoading}
				/>
				<Button
					text={'Download as PDF'}
					onClick={downloadAsPDF}
					disabled={isLoading}
				/>
			</div>
		</section>
	)
}

export default Transcript
