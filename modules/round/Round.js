import { Hand } from './components/Hand.js'
import { useCardCreator } from './hooks/useCardCreator.js'
import { House } from './components/House.js'
import { Timer } from './components/Timer.js'
import { Score } from './components/Score.js'

export const Round = roundData => {
	const HOUSES_CARDS = 10
	const MAX_CARD_ABSOLUTE_VALUE = 20

	const initialize = roundData => {
		useCardCreator(HOUSES_CARDS, MAX_CARD_ABSOLUTE_VALUE, roundData)
		Hand(roundData)
		House(roundData)
		document.querySelector('#value h1').innerHTML = roundData.playersHand
		document.getElementById('result').innerHTML = roundData.result
		Score(roundData)
		Timer(roundData)
	}

	initialize(roundData)
}

