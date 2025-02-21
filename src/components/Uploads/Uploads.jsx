import {
	UPLOAD_BUTTON,
	UPLOAD_DESCRIPTION,
	UPLOAD_TITLE,
} from '@/constants/Dashboard/uploadConstant'
import { PROCESS } from '@/constants/stringConstant'
import { useDashboardContext } from '@/context/UpadateContext'
import CustomAlert from '../CustomAlert/CustomAlert'
import Title from '../Title/Title'
import Button from '../UI/Button/Button'
import InputDrop from '../UI/InputDrop/InputDrop'
import LoaderButton from '../UI/Loader/Loader'
import Select from '../UI/Select/Select'
import styles from './Uploads.module.scss'

// TODO: Убрать в отдельн6ый файл
const options = [
	{ value: 'English', label: 'English' },
	{ value: 'Spanish', label: 'Spanish' },
	{ value: 'French', label: 'French' },
	{ value: 'Germany', label: 'Germany' },
]

const Uploads = () => {
	const {
		setLanguage,
		handleFileChange,
		data,
		setData,
		isLoading,
		handleSubmit,
	} = useDashboardContext()

	const handleSelect = option => {
		setLanguage(option)
	}

	return (
		<section className={styles.uploads}>
			<CustomAlert data={data} setData={setData} />

			<div className={styles.select}>
				<Title title={UPLOAD_TITLE} description={UPLOAD_DESCRIPTION} />

				<InputDrop onChange={handleFileChange} />

				<Select options={options} onSelect={handleSelect} />

				<Button
					text={isLoading ? `${PROCESS}` : `${UPLOAD_BUTTON}`}
					svg={isLoading ? <LoaderButton /> : ''}
					onClick={handleSubmit}
					disabled={isLoading}
				/>
			</div>
		</section>
	)
}

export default Uploads
