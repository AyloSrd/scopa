import { randomizer } from './randomizer.js'

export const cardCreator = (HOUSES_CARDS, MAX_CARD_ABSOLUTE_VALUE, roundData) => {
	for (let i = 0; i < HOUSES_CARDS*2; i++) {
		let cardValue = randomizer(1, MAX_CARD_ABSOLUTE_VALUE)
		roundData.housesValues.push(i < HOUSES_CARDS ? cardValue : -1*cardValue)
		console.log(cardValue)
	}

	console.log(roundData.housesValues)
}