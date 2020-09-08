export const useClearRound = dataRound => {
	dataRound.result = 0
	dataRound.housesValues = []
	dataRound.playersHand = 0
	dataRound.time = 0
	dataRound.hasFound = false
	document.querySelectorAll('.card').forEach(card => {
		card.remove()
	})
}