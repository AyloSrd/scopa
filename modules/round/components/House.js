import { Card } from './Card.js'

export const House = roundData => {
	roundData.housesValues.forEach(cardValue => Card(cardValue, cardValue < 0 ? 'negative-house' : 'positive-house', roundData))
}