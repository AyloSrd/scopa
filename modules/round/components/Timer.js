import { useCalculateScore } from '../hooks/useCalculateScore.js'
import { useClearRound } from '../hooks/useClearRound.js'
import { Round } from '../Round.js'
import { Score } from './Score.js'

export const Timer = (roundData, HOUSES_CARDS, MAX_CARD_ABSOLUTE_VALUE) => {
	const id = setInterval(() => {
		if(roundData.hasFound) {
			console.log('you won')
			useCalculateScore(roundData)
			Score(roundData)
			useClearRound(roundData)
			Round(roundData, HOUSES_CARDS, MAX_CARD_ABSOLUTE_VALUE)
			clearInterval(id)
		}
		if (roundData.time > 1000) {
			console.log('you lost')
			clearInterval(id)
		}
		document.getElementById('hand').style.background = `linear-gradient(0deg, var(--secondary-main) ${roundData.time/10}%, white 100%)`
		roundData.time ++
		console.log(roundData.time)
	}, 10)
}

