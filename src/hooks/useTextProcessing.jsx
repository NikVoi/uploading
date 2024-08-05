import { DEMO_TEXTS } from '@/constants/Dashboard/textConstants'
import { useEffect, useState } from 'react'

const useTextProcessing = (language, isLoading, setIsLoading) => {
	const [timeLeft, setTimeLeft] = useState(30)
	const [displayedText, setDisplayedText] = useState('')
	const [charIndex, setCharIndex] = useState(0)

	useEffect(() => {
		let timer
		let textTimer

		if (isLoading) {
			const fullText = DEMO_TEXTS[language] || DEMO_TEXTS['English']
			setTimeLeft(30)
			setDisplayedText('')
			setCharIndex(0)

			timer = setInterval(() => {
				setTimeLeft(prevTime => {
					if (prevTime <= 1) {
						clearInterval(timer)
						setIsLoading(false)
						return 0
					}
					return prevTime - 1
				})
			}, 1000)

			textTimer = setInterval(() => {
				setCharIndex(prevIndex => {
					if (prevIndex < fullText.length - 1) {
						setDisplayedText(fullText.slice(0, prevIndex + 1))
						return prevIndex + 1
					} else {
						clearInterval(textTimer)
						return prevIndex
					}
				})
			}, (30 * 1000) / fullText.length)

			return () => {
				clearInterval(timer)
				clearInterval(textTimer)
			}
		}
	}, [language, isLoading])

	return {
		timeLeft,
		displayedText,
		charIndex,
	}
}

export default useTextProcessing
