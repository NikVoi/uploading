import useTextProcessing from '@/hooks/useTextProcessing'
import useUpload from '@/hooks/useUpload'
import { createContext, useContext, useState } from 'react'

const DashboardContext = createContext()

export const DashboardProvider = ({ children }) => {
	const [language, setLanguage] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const { file, data, handleFileChange, handleSubmit, setData } = useUpload(
		language,
		setIsLoading
	)
	const { timeLeft, displayedText, charIndex } = useTextProcessing(
		language,
		isLoading,
		setIsLoading
	)

	return (
		<DashboardContext.Provider
			value={{
				language,
				setLanguage,
				isLoading,
				setIsLoading,
				file,
				data,
				handleFileChange,
				handleSubmit,
				setData,
				timeLeft,
				displayedText,
				charIndex,
			}}
		>
			{children}
		</DashboardContext.Provider>
	)
}

export const useDashboardContext = () => {
	const context = useContext(DashboardContext)
	if (!context) {
		throw new Error(
			'useDashboardContext must be used within a DashboardProvider'
		)
	}
	return context
}
