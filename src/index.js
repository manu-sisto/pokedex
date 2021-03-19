import {PokemonService} from "./pokemonService.js"

const pokemonService = new PokemonService();

function inicializar () {
    pokemonService.traerPagina().then(function(data){
        const pokemones = data.results
        const next = data.next
        const previous = data.previous
        mostrarPokemones(pokemones, next, previous);
    })
}

function mostrarPokemones (pokemones, next, previous) {
    const div = document.getElementById("lista-pokemones")
    const lista = document.createElement("ul")
    lista.setAttribute("id", "lista"); //ver para que era
    div.appendChild(lista)

    const siguiente = document.createElement("button")
    siguiente.textContent = next
    div.appendChild(siguiente)
    // hacer handler del button

    for (let i = 0; i < pokemones.length; i++) {
        const item = document.createElement("li")
        const anchor = document.createElement("a")
        anchor.textContent = pokemones[i].name 
        lista.appendChild(item)
        item.appendChild(anchor)
        anchor.href = pokemones[i].url
    }
}

const siguiente = document.getElementById("next")

function botonSiguiente () {
    console.log("apreto siguiente")
    //const ul= document.getElementById("lista")
    //ul.remove()
}


inicializar();

