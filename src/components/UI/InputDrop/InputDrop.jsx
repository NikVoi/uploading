import React, { useEffect, useRef } from 'react'
import { MdOutlineFileUpload } from 'react-icons/md'
import styles from './InputDrop.module.scss'

const InputDrop = ({ onChange, value, name, placeholder }) => {
	const dropContainerRef = useRef(null)
	const fileInputRef = useRef(null)

	useEffect(() => {
		const dropContainer = dropContainerRef.current
		const fileInput = fileInputRef.current

		const handleDragOver = e => {
			e.preventDefault()
			dropContainer.classList.add(styles.dragActive)
		}

		const handleDragEnter = () => {
			dropContainer.classList.add(styles.dragActive)
		}

		const handleDragLeave = () => {
			dropContainer.classList.remove(styles.dragActive)
		}

		const handleDrop = e => {
			e.preventDefault()
			dropContainer.classList.remove(styles.dragActive)
			fileInput.files = e.dataTransfer.files
			const event = new Event('change', { bubbles: true })
			fileInput.dispatchEvent(event)
		}

		dropContainer.addEventListener('dragover', handleDragOver)
		dropContainer.addEventListener('dragenter', handleDragEnter)
		dropContainer.addEventListener('dragleave', handleDragLeave)
		dropContainer.addEventListener('drop', handleDrop)

		return () => {
			dropContainer.removeEventListener('dragover', handleDragOver)
			dropContainer.removeEventListener('dragenter', handleDragEnter)
			dropContainer.removeEventListener('dragleave', handleDragLeave)
			dropContainer.removeEventListener('drop', handleDrop)
		}
	}, [])

	return (
		<div className={styles.inputDrop} ref={dropContainerRef}>
			<label
				htmlFor='images'
				className={styles.wrapper}
				onClick={() => fileInputRef.current.click()}
			>
				<MdOutlineFileUpload />
				<span className={styles.title}>
					Drag and drop a video file or click to upload
				</span>
				<input
					className={styles.input}
					type='file'
					name={name}
					value={value}
					placeholder={placeholder}
					onChange={onChange}
					ref={fileInputRef}
				/>
			</label>
		</div>
	)
}

export default InputDrop
