
let jugador=0
let pc=0
let vencer=0
let perder=0

const emojis = {
    1: "🥌",
    2: "🧻",
    3: "✂",
    4: "🦎",
    5: "🖖"
}

const victorias = {
    1: [3, 4], // piedra gana a tijera y lagarto
    2: [1, 5], // papel gana piedra y spock
    3: [2, 4], //tijera gana a papel y lagarto
    4: [2, 5], // lagarto gana a papel y spock
    5: [1, 3] // spock gana a piedra y papel
}

const btnPiedra = document.getElementById("btnPiedra");
btnPiedra.addEventListener("click", () => partida(1) )

const btnPapel = document.getElementById("btnPapel");
btnPapel.addEventListener("click", () => partida(2))

const btnTijera = document.getElementById("btnTijera");
btnTijera.addEventListener("click", () => partida(3))

const btnLagarto = document.getElementById("btnLagarto");
btnLagarto.addEventListener("click", () => partida(4))

const btnSpock = document.getElementById("btnSpock");
btnSpock.addEventListener("click", () => partida(5))



const eleccionJugador = document.getElementById("eleccionDelJugador");
const eleccionJugadorEmoji = document.getElementById("eleccionJugadorEmoji")

const eleccionPc = document.getElementById("eleccionDelPC");
const eleccionPCEmoji = document.getElementById("eleccionPCEmoji")

const resultado = document.getElementById("resultado");

const resultadoJugador = document.getElementById("resultadoJugador");
const resultadoPc = document.getElementById("resultadoPC");

function eleccion (jugada) {
    const opciones = {
        1:  "Piedra",
        2: "Papel",
        3: "Tijera",
        4: "Lagarto",
        5: "Spock"
    }
    return opciones [jugada] || "FALLASTE"
}


//funcion principal
const partida = (jugadaJugador) => {

    jugador = jugadaJugador
    pc=aleatorio (1,5)

    eleccionJugador.innerHTML = eleccion(jugador)
    eleccionJugadorEmoji.innerHTML = emojis[jugador]
    
    eleccionPc.innerHTML = eleccion(pc)
    eleccionPCEmoji.innerHTML = emojis[pc]

    if (pc=== jugador) {
        resultado.innerHTML = "¡EMPATE! 🤝"
        resultado.className = "empate"
    }else if (victorias[jugador].includes(pc)){
        resultado.innerHTML = "¡GANASTES! 🎉"
        resultado.className = "ganaste"
        vencer++
        resultadoJugador.innerHTML = vencer
    } else {
        resultado.innerHTML = " ¡PERDISTE! 😢"
        resultado.className = "perdiste"
        perder++
        resultadoPc.innerHTML = perder
    }

    if (vencer >= 3){
        setTimeout(() => {
            alert ("¡FELICADES! ¡ Has ganado el juego con " + vencer + " victorias!")
            reiniciarJuego()
        }, 500)
    }else if (perder >=3){
        setTimeout(() => {
            alert ("La PC ha ganado el juego con " + perder + " victorias, ¡Intentalo de nuevo!!")
            reiniciarJuego()
        }, 500)
    }
}

function reiniciarJuego () {
    vencer = 0
    perder = 0
    resultadoJugador.innerHTML ="0"
    resultadoPc.innerHTML = "0"
    resultado.innerHTML = ""
    resultado.className = ""
    eleccionDelJugador.innerHTML = "Esperando..."
    eleccionPc.innerHTML = "Esperando..."
    eleccionJugadorEmoji.innerHTML = "❓"
    eleccionPCEmoji.innerHTML = " ❓"
}

function aleatorio( min , max ) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
