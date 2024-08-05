export const downloadAsText = () => {
	const element = document.createElement('a')
	const file = new Blob([displayedText], { type: 'text/plain' })
	element.href = URL.createObjectURL(file)
	element.download = 'transcript.txt'
	document.body.appendChild(element)
	element.click()
	document.body.removeChild(element)
}

export const downloadAsPDF = () => {
	const doc = new jsPDF()
	const margin = 10
	const pageWidth = doc.internal.pageSize.getWidth() - 2 * margin
	const textLines = doc.splitTextToSize(displayedText, pageWidth)
	doc.text(textLines, margin, margin)
	doc.save('transcript.pdf')
}
