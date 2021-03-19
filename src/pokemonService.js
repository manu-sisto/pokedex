export class PokemonService {
    cargarPokemones() {
        const url = 'https://pokeapi.co/api/v2/pokemon'
        const requestPromise = fetch(url);
        const jsonPromise = requestPromise.then(function (response) {
            return response.json()
        })
        return jsonPromise;
    }
}


// siguientees 20: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"

// siguientes 40: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
