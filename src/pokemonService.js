export class PokemonService {
   
    traerPagina(urlPasada) {
        const url = urlPasada || "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
        const requestPromise = fetch(url);
        const jsonPromise = requestPromise.then(function (response) {
            return response.json()
        })
        return jsonPromise;
    }

    traerPokemon(url) {
        const requestPromise = fetch(url);
        const jsonPromise = requestPromise.then(function (response) {
            return response.json()
        })
        return jsonPromise;
    }
}


// siguientees 20: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"

// anteriores 20: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"

// para ID: "https://pokeapi.co/api/v2/pokemon/41/"