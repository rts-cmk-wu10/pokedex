fetch("https://pokeapi.co/api/v2/pokemon")
	.then(function(response) {
		if (response.status === 200) {
			return response.json()
		} else {
			document.body.innerText += "Ups, noget gik galt. Prøv igen senere."
		}
	})
	.then(function(data) {
		const UL = document.querySelector(".pokeList")
		data.results.forEach(function(result) {
			const LI = document.createElement("li")
			LI.innerHTML = `<a href="/pokemon.html?name=${result.name}">${result.name}</a>`
			UL.append(LI)
		})
	})
