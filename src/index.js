import {PokemonService} from "./pokemonService.js"

const pokemonService = new PokemonService();

function inicializar (urlPasada) {
    pokemonService.traerPagina(urlPasada).then(function(data){
        const pokemones = data.results
        const next = data.next
        const previous = data.previous
        mostrarPokemones(pokemones, next, previous);
    })
}

function mostrarPokemones (pokemones, next, previous) {
    const div = document.getElementById("lista-pokemones")
    const lista = document.createElement("ul")
    lista.setAttribute("id", "lista");
    div.appendChild(lista)

    const atras = document.createElement("button")
    atras.setAttribute("id", "boton-atras");
    atras.textContent = "pagina anterior"
    div.appendChild(atras)
    atras.onclick = function(){
        console.log("mandar a link")
        document.getElementById("lista").remove()
        document.getElementById("boton-atras").remove()
        document.getElementById("boton-siguiente").remove()
        inicializar(previous)
    };

    const siguiente = document.createElement("button")
    siguiente.setAttribute("id", "boton-siguiente");
    siguiente.textContent = "Siguiente pagina"
    div.appendChild(siguiente)
    siguiente.onclick = function(){
        console.log("mandar a link")
        document.getElementById("lista").remove()
        document.getElementById("boton-atras").remove()
        document.getElementById("boton-siguiente").remove()
        inicializar(next)
    };

    for (let i = 0; i < pokemones.length; i++) {
        const item = document.createElement("li")
        const anchor = document.createElement("a")
        anchor.textContent = pokemones[i].name 
        lista.appendChild(item)
        item.appendChild(anchor)
        anchor.href = pokemones[i].url
    }
}

inicializar();

