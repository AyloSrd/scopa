import { Card } from '../components/Card.js'

export const cardsDealer = (roundData) => {
	roundData.housesValues.forEach(cardValue => Card(cardValue, cardValue < 0 ? 'negative-house' : 'positive-house', roundData))
}