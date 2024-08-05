import {
	TRANSCRIPT_BUTTON_PDF,
	TRANSCRIPT_BUTTON_TEXT,
	TRANSCRIPT_DESCRIPTION,
	TRANSCRIPT_TITLE,
} from '@/constants/Dashboard/transcriptConstant'
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
			<Title title={TRANSCRIPT_TITLE} description={TRANSCRIPT_DESCRIPTION} />

			{isLoading && (
				<>
					<div className={styles.selectLang}>
						<IoLanguage />
						<span>{language}</span>
					</div>

					<div className={styles.time}>
						<MdAccessTime />
						<span>{timeLeft} </span>
					</div>

					<div className={styles.loader}>
						<div style={{ width: `${((30 - timeLeft) / 30) * 100}%` }}></div>
					</div>
				</>
			)}

			<div className={styles.preview}>{displayedText}</div>

			{displayedText && (
				<div className={styles.wrapper}>
					<Button
						text={TRANSCRIPT_BUTTON_TEXT}
						onClick={() => downloadAsText(displayedText)}
						disabled={isLoading}
					/>
					<Button
						text={TRANSCRIPT_BUTTON_PDF}
						onClick={() => downloadAsPDF(displayedText)}
						disabled={isLoading}
					/>
				</div>
			)}
		</section>
	)
}

export default Transcript
