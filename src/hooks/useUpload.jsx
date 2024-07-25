import { useState } from 'react'
import { uploadFile } from '../api/UploadFile'
import { validateFileSize, validateFileType } from '../utils/fileValidation'

const useUpload = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [file, setFile] = useState(null)
	const [preview, setPreview] = useState(null)
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
		const fileUrl = URL.createObjectURL(selectedFile)
		setPreview(fileUrl)
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

		setIsLoading(true)

		try {
			const response = await uploadFile(file)

			setData({
				typeAlert: 'Success',
				message: 'Expect the result to be sent to your email',
				// or we can write response.success
				isActive: true,
			})

			setFile(null)
			setPreview(null)
		} catch (error) {
			console.error('Error uploading file:', error)
		} finally {
			setIsLoading(false)
		}
	}

	return {
		isLoading,
		file,
		preview,
		data,
		handleFileChange,
		handleSubmit,
		setData,
	}
}

export default useUpload
