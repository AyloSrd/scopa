import { useClearRound } from "./useClearRound.js"
import { Score } from "../components/Score.js"

export const useOutro = roundData => {
	const outro = document.getElementById('outro')
	const round = document.getElementById('round')
	useClearRound(roundData)
	outro.style.display = 'block'
	outro.scrollIntoView()
	round.style.display = 'none'
	round.querySelector('h1').innerHTML = 0
	outro.querySelector('span').innerHTML = 0
	Score(roundData, outro.querySelector('span'))	
}