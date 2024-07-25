const validFileTypes = [
	'video/mp4',
	'video/MKV',
	'video/mkv',
	'video/webm',
	'audio/mpeg',
	'audio/wav',
	'audio/ogg',
	'audio/mp3',
]
const maxSizeInBytes = 50 * 1024 * 1024 // 50MB

export const validateFileType = file => {
	if (!validFileTypes.includes(file.type)) {
		return {
			isValid: false,
			message: 'Invalid file type. Only video and audio files are allowed.',
		}
	}
	return { isValid: true }
}

export const validateFileSize = file => {
	if (file.size > maxSizeInBytes) {
		return {
			isValid: false,
			message: 'File size exceeds the 50MB limit.',
		}
	}
	return { isValid: true }
}
