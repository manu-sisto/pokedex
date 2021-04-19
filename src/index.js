import { PokemonService } from "./pokemonService.js"

const pokemonService = new PokemonService();

const nombre = document.getElementById("name")
const numeroId = document.getElementById("numeroID")
const imagen = document.getElementById("imagen");

function inicializar(urlPasada) {
    pokemonService.traerPagina(urlPasada).then(function (data) {
        const pokemones = data.results
        const next = data.next
        const previous = data.previous
        mostrarPokemones(pokemones, next, previous);
    })
}

function mostrarPokemones(pokemones, next, previous) {
    const div = document.getElementById("lista-pokemones")
    const lista = document.createElement("div")

    lista.setAttribute("id", "lista");
    div.appendChild(lista)

    const atras = document.createElement("button")
    atras.setAttribute("id", "boton-atras");
    atras.textContent = "pagina anterior"
    div.appendChild(atras)
    atras.onclick = function () {
        document.getElementById("lista").remove()
        document.getElementById("boton-atras").remove()
        document.getElementById("boton-siguiente").remove()
        inicializar(previous)
    };

    const siguiente = document.createElement("button")
    siguiente.setAttribute("id", "boton-siguiente");
    siguiente.textContent = "Siguiente pagina"
    div.appendChild(siguiente)
    siguiente.onclick = function () {
        document.getElementById("lista").remove()
        document.getElementById("boton-atras").remove()
        document.getElementById("boton-siguiente").remove()
        inicializar(next)
    };

    for (let i = 0; i < pokemones.length; i++) {
        const item = document.createElement("li")
        const anchor = document.createElement("a")
        const nombrePokemon = pokemones[i].name
        const urlDelPokemon = pokemones[i].url
        

        anchor.textContent = nombrePokemon
        lista.appendChild(item)
        item.appendChild(anchor)
        anchor.setAttribute("id", nombrePokemon)
        anchor.onclick = mostrarUnPokemon
        anchor.onclick = verPokemon

        function mostrarUnPokemon() {
            console.log("hizo click en pokemon ", urlDelPokemon, "de nombre:", nombrePokemon, "con ID: ", IDpokemon )
        }

        const test = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}/`
        
        
        function verPokemon() {
            pokemonService.traerPokemon(test).then(function (data) {
                const pokemonData = data
                const idPokemon = data.id
                const imagenPokemon = data.sprites.front_default
                console.log(pokemonData)
                console.log(pokemonData.sprites.front_default)
                nombre.textContent = data.name
                numeroId.textContent = data.id
                imagen.src = `${imagenPokemon}`
            })
        }

        
        
    
    }
}


inicializar();

