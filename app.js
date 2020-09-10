import { usePlay } from './modules/introOutro/hooks/usePlay.js'
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

const round = document.getElementById('round')

round.style.display = 'none'

const animateTutorial = setInterval(()=>{
	let fakeCard = document.getElementById('fake-card')
	let fakeRes = document.getElementById('fake-result')

	if(fakeCard.getAttribute('value') === 'true'){
		fakeCard.setAttribute('value', 'false')
	}else if (fakeCard.getAttribute('value') === 'false') {
		fakeCard.setAttribute('value', 'true')
	} 
	if(fakeRes.innerHTML ===  '0'){
		fakeRes.innerHTML = '2'
	}else if (fakeRes.innerHTML === '2'){
		fakeRes.innerHTML = '0'
	}

}, 3000)


document.getElementById('play').addEventListener('click', () => {
	usePlay(roundData, HOUSES_CARDS, MAX_CARD_ABSOLUTE_VALUE, round, animateTutorial)
})
