export const Score = (roundData, el) => {
	let oldScore = parseInt(el.innerHTML)

	const id = setInterval(() => {
		console.log(oldScore, roundData.score)
		if (oldScore >= roundData.score -60) {
			clearInterval(id)
			el.innerHTML = roundData.score
		} else {
			oldScore += 60
			el.innerHTML = oldScore
			console.log(oldScore)
		}
	}, 100)
}