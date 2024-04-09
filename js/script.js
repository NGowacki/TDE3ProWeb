// API
function chosePokemon() {
    const pokemon = document.getElementById('pokemon').value
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const imgPokemon = document.getElementById('imgPokemon')
    const namePokemon = document.getElementById('namePokemon')
    const description = document.getElementById('description')

    fetch(URL).then(response=>{console.log(response)
        return response.json()
    }) .then((pokemon)=>{
        imgPokemon.src = pokemon.sprites.front_default
        namePokemon.innerText = pokemon.name
        description.innerText = `Espécie: ${pokemon.species.name}\nPeso: ${pokemon.weight} kg\nHabilidades: ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}`;
    })
        .catch(error=>{console.log(error)})
}