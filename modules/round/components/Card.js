export const Card = ( val, house, roundData ) => {
	let cardValue = val
	let card = document.createElement('button')
	let used = false

	card.innerHTML = val.toString()
	card.setAttribute('active', used)
	card.classList.add('card')
	card.addEventListener('click', () => {
		used = !used
		card.setAttribute('value', used)
		roundData.result += cardValue
		document.getElementById('result').innerHTML = roundData.result
		cardValue *= -1 
		if (roundData.result === roundData.playersHand) roundData.hasFound = true
	})
	
	document.getElementById(house).appendChild(card)
}
