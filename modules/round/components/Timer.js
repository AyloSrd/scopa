import { useCalculateScore } from '../hooks/useCalculateScore.js'
import { useClearRound } from '../hooks/useClearRound.js'
import { Round } from '../Round.js'

export const Timer = roundData => {
	roundData.intervalId = setInterval(() => {
		if(roundData.hasFound) {
			alert('you won')
			useCalculateScore(roundData)
			useClearRound(roundData)
			Round()
			clearInterval(roundData.intervalId)
		}
		if (roundData.time > 1000) {
			alert('you lost')
			clearInterval(roundData.intervalId)
		}
		document.getElementById('hand').style.background = `linear-gradient(0deg, #FA9219 ${roundData.time/10}%, #FFF2DF 100%)`
		roundData.time ++
	}, 10)
}

