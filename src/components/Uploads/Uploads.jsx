import useUpload from '../../hooks/useUpload'
import CustomAlert from '../CustomAlert/CustomAlert'
import Button from '../UI/Button/Button'
import InputDrop from '../UI/InputDrop/InputDrop'
import LoaderButton from '../UI/Loader/Loader'
import styles from './Uploads.module.scss'

const Uploads = () => {
	const {
		isLoading,
		file,
		preview,
		data,
		handleFileChange,
		handleSubmit,
		setData,
	} = useUpload()

	return (
		<section className={styles.uploads}>
			<CustomAlert data={data} setData={setData} />

			<div className={styles.item}>
				<h2>Uploads Video or audio</h2>

				<InputDrop onChange={handleFileChange} />

				<Button
					text={isLoading ? `Process...` : 'Upload'}
					svg={isLoading ? <LoaderButton /> : ''}
					onClick={handleSubmit}
					disabled={isLoading}
				/>
			</div>
			<>
				{preview && (
					<div className={styles.item}>
						{file.type.startsWith('video') ? (
							<video className={styles.video} controls>
								<source src={preview} type={file.type} />
								Your browser does not support the video tag.
							</video>
						) : (
							<audio controls>
								<source src={preview} type={file.type} />
								Your browser does not support the audio element.
							</audio>
						)}
					</div>
				)}
			</>
		</section>
	)
}

export default Uploads
