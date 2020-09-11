import { useClearRound } from "./useClearRound.js"
import { Score } from "../components/Score.js"

export const useOutro = roundData => {
	const outro = document.getElementById('outro-container')
	const round = document.getElementById('round-container')
	useClearRound(roundData)
	outro.style.display = 'block'
	outro.scrollIntoView()
	setTimeout(() => {
		round.style.display = 'none'
	}, 1000)
	round.querySelector('h1').innerHTML = 0
	outro.querySelector('span').innerHTML = 0
	Score(roundData, outro.querySelector('span'))	
}