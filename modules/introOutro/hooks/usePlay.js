import { Round } from '../../round/Round.js'
import { useClearRound } from '../../round/hooks/useClearRound.js'

export const usePlay = (roundData, HOUSES_CARDS, MAX_CARD_ABSOLUTE_VALUE, round, animateTutorial) => {
	useClearRound(roundData)
	round.style.display = 'block'
	round.scrollIntoView()
	
	setTimeout(() => {
		if (animateTutorial) clearInterval(animateTutorial)
		if (document.getElementById('intro-container')) document.getElementById('intro-container').style.display = 'none'
		if (!document.getElementById('intro-container')) {
			roundData.score = 0
			document.getElementById('outro-container').style.display = 'none'
			document.getElementById('outro-container').querySelector('span').innerHTML = '0'
		}
		Round(roundData, HOUSES_CARDS, MAX_CARD_ABSOLUTE_VALUE)
		if (document.getElementById('intro-container')) document.getElementById('intro-container').remove()
	}, 500)
}