import { Round } from '../../round/Round.js'
import { useClearRound } from '../../round/hooks/useClearRound.js'

export const usePlay = (roundData, HOUSES_CARDS, MAX_CARD_ABSOLUTE_VALUE, round, animateTutorial) => {
	useClearRound(roundData)
	round.style.display = 'grid'
	setTimeout(() => round.scrollIntoView(), 500)
	if (animateTutorial) clearInterval(animateTutorial)
	if (document.getElementById('intro')) document.getElementById('intro').style.display = 'none'
	if (!document.getElementById('intro')) {
		roundData.score = 0
		document.getElementById('outro').style.display = 'none'
		document.getElementById('outro').querySelector('span').innerHTML = '0'
	}
	setTimeout(() => {
		Round(roundData, HOUSES_CARDS, MAX_CARD_ABSOLUTE_VALUE)
		if (document.getElementById('intro')) document.getElementById('intro').remove()
	}, 1000)
}