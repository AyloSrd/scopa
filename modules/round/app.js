import { Hand } from './components/Hand.js'
import { useCardCreator } from './hooks/useCardCreator.js'
import { House } from './components/House.js'
import { Timer } from './components/Timer.js'

const HOUSES_CARDS = 10
const MAX_CARD_ABSOLUTE_VALUE = 20

const roundData = {
	result: 0,
	housesValues: [],
	playersHand: 0,
	intervalId: 0,
	time: 0,
	hasFound: false
}

const initialize = () => {
	useCardCreator(HOUSES_CARDS, MAX_CARD_ABSOLUTE_VALUE, roundData)
	Hand(roundData)
	House(roundData)
	document.querySelector('#value h1').innerHTML = roundData.playersHand
	Timer(roundData)
}

initialize()