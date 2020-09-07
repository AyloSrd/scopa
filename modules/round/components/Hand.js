import { randomizer } from '../hooks/randomizer.js'

export const Hand = (roundData) => {
	let addends = [...roundData.housesValues]
	const tempArr = []
	const minNumberOfCards = randomizer(2, 7)
	for(let i = 0; i < minNumberOfCards; i++){
		const k = randomizer(0, addends.length - 1)
		tempArr.push(addends[k])
		addends.splice(k, 1)
	}
	roundData.playersHand = tempArr.reduce((acc, val) => acc + val, 0)
}