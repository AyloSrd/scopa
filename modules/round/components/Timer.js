import { useCalculateScore } from '../hooks/useCalculateScore.js'
import { useClearRound } from '../hooks/useClearRound.js'
import { Round } from '../Round.js'
import { Score } from './Score.js'
import { useOutro } from '../hooks/useOutro.js'

export const Timer = (roundData, HOUSES_CARDS, MAX_CARD_ABSOLUTE_VALUE) => {
	const id = setInterval(() => {
		if(roundData.hasFound) {
			console.log('you won')
			useCalculateScore(roundData)
			Score(roundData, document.getElementById('score'))
			useClearRound(roundData)
			Round(roundData, HOUSES_CARDS, MAX_CARD_ABSOLUTE_VALUE)
			clearInterval(id)
		}
		if (roundData.time > 1000) {
			clearInterval(id)
			useOutro(roundData)
		}
		document.getElementById('hand').style.background = `linear-gradient(0deg, var(--secondary-main) ${roundData.time/10}%, white 100%)`
		roundData.time ++
	}, 10)
}

