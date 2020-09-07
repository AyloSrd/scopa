export const Timer = () => {
	let time = 0
	const id = setInterval(() => {
		if (time > 1000) {
			clearInterval(id)
		}
		document.getElementById('hand').style.background = `linear-gradient(0deg, #FA9219 ${time/10}%, #FFF2DF 100%)`
		time ++
	}, 10)

	return id
}
