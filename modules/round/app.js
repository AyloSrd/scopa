import { Hand } from './components/Hand.js'
import { cardCreator } from './hooks/cardCreator.js'
import { cardsDealer } from './hooks/cardsDealer.js'

const HOUSES_CARDS = 10
const MAX_CARD_ABSOLUTE_VALUE = 20

const roundData = {
	result: 0,
	housesValues: [],
	playersHand: 0
}

const initialize = () => {
	cardCreator(HOUSES_CARDS, MAX_CARD_ABSOLUTE_VALUE, roundData)
	Hand(roundData)
	cardsDealer(roundData)
	document.querySelector('#value h1').innerHTML = roundData.playersHand
}

initialize()