import { useCalculateScore } from '../hooks/useCalculateScore.js'
import { useClearRound } from '../hooks/useClearRound.js'
import { Round } from '../Round.js'
import { Score } from './Score.js'

export const Timer = roundData => {
	const id = setInterval(() => {
		if(roundData.hasFound) {
			console.log('you won')
			useCalculateScore(roundData)
			Score(roundData)
			useClearRound(roundData)
			Round(roundData)
			clearInterval(id)
		}
		if (roundData.time > 1000) {
			console.log('you lost')
			clearInterval(id)
		}
		document.getElementById('hand').style.background = `linear-gradient(0deg, #FA9219 ${roundData.time/10}%, #FFF2DF 100%)`
		roundData.time ++
		console.log(roundData.time)
	}, 10)
}

