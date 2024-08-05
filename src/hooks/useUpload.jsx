import { useState } from 'react'
import { uploadFile } from '../api/UploadFile'
import { validateFileSize, validateFileType } from '../utils/fileValidation'

const useUpload = (language, setIsLoading) => {
	const [file, setFile] = useState(null)
	const [data, setData] = useState({})

	const handleFileChange = event => {
		const selectedFile = event.target.files[0]

		const validFileType = validateFileType(selectedFile)
		if (!validFileType.isValid) {
			setData({
				typeAlert: 'Error',
				message: validFileType.message,
				isActive: true,
			})
			return
		}

		const validFileSize = validateFileSize(selectedFile)
		if (!validFileSize.isValid) {
			setData({
				typeAlert: 'Error',
				message: validFileSize.message,
				isActive: true,
			})
			return
		}

		setFile(selectedFile)
	}

	const handleSubmit = async event => {
		event.preventDefault()
		if (!file) {
			setData({
				typeAlert: 'Error',
				message: 'No file selected for upload.',
				isActive: true,
			})
			return
		}

		if (!language) {
			setData({
				typeAlert: 'Error',
				message: 'Please select a language.',
				isActive: true,
			})
			return
		}

		setIsLoading(true)

		try {
			const response = await uploadFile(file)

			setData({
				typeAlert: 'Success',
				message: 'Expect the result to be sent to your email',
				isActive: true,
			})

			setFile(null)
		} catch (error) {
			console.error('Error uploading file:', error)
			setData({
				typeAlert: 'Error',
				message: 'Error uploading file.',
				isActive: true,
			})
		}
	}

	return {
		file,
		data,
		handleFileChange,
		handleSubmit,
		setData,
	}
}

export default useUpload
