import { Round } from './modules/round/Round.js'

const HOUSES_CARDS = 10
const MAX_CARD_ABSOLUTE_VALUE = 20

const roundData = {
	result: 0,
	housesValues: [],
	playersHand: 0,
	time: 0,
	hasFound: false,
	score: 0
}

Round(roundData, HOUSES_CARDS, MAX_CARD_ABSOLUTE_VALUE)