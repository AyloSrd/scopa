import { useRandomizer } from '../hooks/useRandomizer.js'

export const Hand = (roundData) => {
	let addends = [...roundData.housesValues]
	let tempArr = []
	const minNumberOfCards = useRandomizer(2, 7)
	for(let i = 0; i < minNumberOfCards; i++){
		const k = useRandomizer(0, addends.length - 1)
		tempArr.push(addends[k])
		addends.splice(k, 1)
	}
	roundData.playersHand = tempArr.reduce((acc, val) => acc + val, 0)
	tempArr = []
}