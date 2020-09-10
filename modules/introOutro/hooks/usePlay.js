import { Round } from '../../round/Round.js'

export const usePlay = (roundData, HOUSES_CARDS, MAX_CARD_ABSOLUTE_VALUE, round, animateTutorial) => {
	round.style.display = 'block'
	setTimeout(() => round.scrollIntoView(), 500)
	clearInterval(animateTutorial)
	document.getElementById('intro').style.display = 'none'
	setTimeout(() => {
		Round(roundData, HOUSES_CARDS, MAX_CARD_ABSOLUTE_VALUE)
		document.getElementById('intro').remove()
	}, 1000)
}