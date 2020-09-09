export const useCalculateScore = roundData => {
	roundData.score += (1000 - roundData.time)
	document.querySelectorAll('.card').forEach(card => {
		if(card.value) roundData.score += 500
	});
	console.log(roundData.score)
}