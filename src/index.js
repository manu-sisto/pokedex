import {PokemonService} from "./pokemonService.js"

const pokemonService = new PokemonService();

function inicializar () {
    pokemonService.cargarPokemones().then(function(data){
        mostrarPokemones(data.results);
    })
}

function mostrarPokemones (pokemones) {
    const lista = document.createElement("ul")
    const body = document.body
    body.appendChild(lista)
    for (let i = 0; i < pokemones.length; i++) {
        const item = document.createElement("li")
        item.textContent = pokemones[i].name 
        lista.appendChild(item)
    }
}

inicializar();

