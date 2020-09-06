const HOUSES_CARDS = 10
const MAX_CARD_ABSOLUTE_VALUE = 20

let result = 0
const housesValues = []
let playersHand = 0

//funzione che crea le due mani (un solo array diviso a metà)
const cardsDealer = () => {
	for (let i = 0; i < HOUSES_CARDS*2; i++) {
		let cardValue = Math.round(Math.random()*MAX_CARD_ABSOLUTE_VALUE)
		housesValues.push(i < HOUSES_CARDS ? cardValue : -1*cardValue)
	}	

	housesValues.forEach(cardValue => Carta(cardValue, cardValue < 0 ? 'negative-house' : 'positive-house'))
}

//funzione che prende un numero x fra 3 e 8, e sommi x numeri in quell'array, per trovare il banco 
//funzione che crea un singolo bottone carta
const Carta = ( val, house ) => {
	let cardValue = val
	let bottone = document.createElement('button')
	let used = false

	bottone.innerHTML = val.toString()
	bottone.setAttribute('active', used)
	bottone.addEventListener('click', () => {
		result += cardValue
		document.getElementById('result').innerHTML = result
		cardValue *= -1 
		used = !used
		bottone.setAttribute('active', used)
	})
	
	document.getElementById(house).appendChild(bottone)
}

const startRound = () => {
	cardsDealer()
}
	
document.addEventListener('DOMContentLoaded', startRound(), false)