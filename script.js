arrayCartas = ["cartas/2Corazones.png","cartas/3Corazones.png","cartas/4Corazones.png","cartas/5Corazones.png","cartas/6Corazones.png","cartas/7Corazones.png","cartas/8Corazones.png","cartas/9Corazones.png","cartas/10Corazones.png","cartas/AsCorazones.png","cartas/JCorazones.png","cartas/KCorazones.png","cartas/QCorazones.png","cartas/2Picas.png","cartas/3Picas.png","cartas/4Picas.png","cartas/5Picas.png","cartas/6Picas.png","cartas/7Picas.png","cartas/8Picas.png","cartas/9Picas.png","cartas/10Picas.png","cartas/AsPicas.png","cartas/JPicas.png","cartas/KPicas.png","cartas/QPicas.png","cartas/2Diamantes.png","cartas/3Diamantes.png","cartas/4Diamantes.png","cartas/5Diamantes.png","cartas/6Diamantes.png","cartas/7Diamantes.png","cartas/8Diamantes.png","cartas/9Diamantes.png","cartas/10Diamantes.png","cartas/AsDiamantes.png","cartas/JDiamantes.png","cartas/KDiamantes.png","cartas/QDiamantes.png","cartas/2Treboles.png","cartas/3Treboles.png","cartas/4Treboles.png","cartas/5Treboles.png","cartas/6Treboles.png","cartas/7Treboles.png","cartas/8Treboles.png","cartas/9Treboles.png","cartas/10Treboles.png","cartas/AsTreboles.png","cartas/JTreboles.png","cartas/KTreboles.png","cartas/QTreboles.png"]

const imgfondo = document.getElementById("img2")


function generarCarta() {
    i = Math.trunc(Math.random()*52);
    if (arrayCartas[i] != false) {
        const divCarta = document.createElement("DIV");
        const imgCarta = document.createElement("IMG");
        imgCarta.setAttribute("src", arrayCartas[i]);
        divCarta.classList.add("carta-cont");
        divCarta.appendChild(imgCarta);
        arrayCartas[i] = false
        return divCarta
    }
    else {
        generarCarta()
    }
}
valorCartasJugador = [];
valorCartasGrupier = [];
iJ = 0
iG = 0

//c es el valor de la carta y ar el array donde se guarda
let plantarV;
mostrarCartasGrupier = () => {
    darCartaGrupier(true)
    if (sumarPuntos(valorCartasGrupier) == 21) var vG = "BJ"
    while (sumarPuntos(valorCartasGrupier) < sumarPuntos(valorCartasJugador) && sumarPuntos(valorCartasJugador)<= 21 && sumarPuntos(valorCartasGrupier)<= 21) {
        darCartaGrupier()
    }
    // do {
    //     if (sumarPuntos(valorCartasGrupier) < sumarPuntos(valorCartasJugador) && sumarPuntos(valorCartasJugador)<= 21) {
            
    //         plantarV = false
    //     }
    //     else plantarV = true
    // } while (!plantarV);

}

plantar = () => {
    document.getElementById("pedir-btn").removeEventListener("click", darCartaJugador);
    document.getElementById("plantar-btn").removeEventListener("click", plantar);
    mostrarCartasGrupier()
    if (vG != "BJ") var vG = sumarPuntos(valorCartasGrupier);
    if (vJ != "BJ") var vJ = sumarPuntos(valorCartasJugador);
var victoria;
if (vG == "BJ" && vJ != "BJ") victoria = false;
else if (vG != "BJ" && vJ == "BJ") victoria = true;
else if (vG == "BJ" && vJ == "BJ") victoria = "empate";
else {
    if (vG > 21) vG = 0;
    if (vJ > 21) vJ = 0;

    if (vJ > vG) victoria = true
    else if (vJ < vG) victoria = false
    else if (vJ == vG) victoria = "Empate"

}
if (victoria == true) victoria = "Ganaste"
else if  (victoria == false )victoria = "Perdiste"
const H1Res = document.createElement("H1")
const h1ResNode = document.createTextNode(victoria)
H1Res.appendChild(h1ResNode)

const botonRePlay = document.createElement("BUTTON");
const botonRePlayNode = document.createTextNode("Volver a jugar")
botonRePlay.appendChild(botonRePlayNode)
botonRePlay.classList.add("botonRePlay")
botonRePlay.addEventListener("click", reiniciar)

let finDelJuego = document.createElement("div")
finDelJuego.classList.add("fin")
finDelJuego.appendChild(H1Res)
finDelJuego.appendChild(botonRePlay)

setTimeout(()=>{
    if(document.querySelector("article").children.length == 2) document.querySelector("article").appendChild(finDelJuego)
},t+250)

}

reiniciar = () => {
    arrayCartas = ["cartas/2Corazones.png","cartas/3Corazones.png","cartas/4Corazones.png","cartas/5Corazones.png","cartas/6Corazones.png","cartas/7Corazones.png","cartas/8Corazones.png","cartas/9Corazones.png","cartas/10Corazones.png","cartas/AsCorazones.png","cartas/JCorazones.png","cartas/KCorazones.png","cartas/QCorazones.png","cartas/2Picas.png","cartas/3Picas.png","cartas/4Picas.png","cartas/5Picas.png","cartas/6Picas.png","cartas/7Picas.png","cartas/8Picas.png","cartas/9Picas.png","cartas/10Picas.png","cartas/AsPicas.png","cartas/JPicas.png","cartas/KPicas.png","cartas/QPicas.png","cartas/2Diamantes.png","cartas/3Diamantes.png","cartas/4Diamantes.png","cartas/5Diamantes.png","cartas/6Diamantes.png","cartas/7Diamantes.png","cartas/8Diamantes.png","cartas/9Diamantes.png","cartas/10Diamantes.png","cartas/AsDiamantes.png","cartas/JDiamantes.png","cartas/KDiamantes.png","cartas/QDiamantes.png","cartas/2Treboles.png","cartas/3Treboles.png","cartas/4Treboles.png","cartas/5Treboles.png","cartas/6Treboles.png","cartas/7Treboles.png","cartas/8Treboles.png","cartas/9Treboles.png","cartas/10Treboles.png","cartas/AsTreboles.png","cartas/JTreboles.png","cartas/KTreboles.png","cartas/QTreboles.png"]
    finDelJuego = document.querySelector(".fin")
    document.querySelector("article").removeChild(finDelJuego)
    valorCartasJugador = []
    valorCartasGrupier = []
    let listaCartas = document.querySelectorAll(".pos")
    // arrResul = arrResul.splice(0,arrResul.length);
    // arrOp = arrOp.splice(0,arrOp.length);

    for (const iterator of listaCartas) document.querySelector(".hand-grupier").removeChild(iterator)

    listaCartas = document.querySelectorAll(".posp")

    for (const iterator of listaCartas) document.querySelector(".hand-player").removeChild(iterator)

    document.getElementById("pedir-btn").addEventListener("click", darCartaJugador);
    document.getElementById("plantar-btn").addEventListener("click", () => {plantar()});

    document.querySelector(".hand-grupier").appendChild(imgfondo)
    console.log("eeeeeeee");
    console.log(valorCartasGrupier);
    console.log("eeeeeeee");
    console.log(valorCartasJugador);

    iJ = 0
    iG = 0
    prepararMesa()

}

contarPuntos = c => {
    if (c[0]>1 && c[0]<10)return c[0]
    else if (c[0] == "J" || c[0] == "Q" || c[0] == "K" || c == 10) return 10
    else if (c[0] == 1 ) return c[0]
    else if (c == "As") return 1
    else console.log("bro?");
}
let order = 1
var t = 0
darCartaJugador = () => {
    let carta = generarCarta()
    if (carta == undefined) {
        darCartaJugador()
    }
    else {
    let valCarta = carta.children[0].getAttribute("src").substring(7,9)
    console.log(valCarta);
    valorCartasJugador[iJ] = contarPuntos(valCarta)
    console.log(valorCartasJugador);
    carta.classList.add("posp")
    setTimeout(()=> {document.querySelector(".hand-player").appendChild(carta);},t)
    iJ++;
    t+= 500
    if (sumarPuntos(valorCartasJugador) == 21 && valorCartasJugador.length == 2) {
        var vJ = "BJ";
        plantar()
    }
    else if (sumarPuntos(valorCartasJugador) > 21) plantar()

    console.log(sumarPuntos(valorCartasJugador));
    document.querySelector(".points-player").innerHTML=sumarPuntos(valorCartasJugador)
    }
}

darCartaGrupier = (x) => {
    let carta = generarCarta()
    if (carta == undefined) {
        darCartaGrupier()
    }
    else {
        let valCarta = carta.children[0].getAttribute("src").substring(7,9)
        console.log(valCarta);
        valorCartasGrupier[iG] = contarPuntos(valCarta)
        console.log(valorCartasGrupier);
        carta.classList.add ("pos")
        carta.style.order = order.toString()
    setTimeout(() => {
        document.querySelector(".hand-grupier").appendChild(carta)
        if (x != undefined) document.querySelector(".hand-grupier").removeChild(document.getElementById("img2"))
        document.querySelector(".points-grupier").innerHTML=sumarPuntos(valorCartasGrupier)
    }, t);
        
    t+= 500
    iG++;
    order++
    }
}
length
sumarPuntos = (ar) => {
    let valor = 0
    ar.sort()
    ar.reverse()
    for (const v in ar) {
        if (parseFloat(ar[v]) != 1 ) valor += parseFloat(ar[v])
        else { 
                if( 11 + valor > 21) valor +=1
                else if (11 + valor <= 21) valor += 11
        }
    }
    return parseFloat(valor)
}

function prepararMesa() {  
    darCartaGrupier()
    darCartaJugador()
    darCartaJugador()

    t = 500


}

document.getElementById("pedir-btn").addEventListener("click", darCartaJugador)
prepararMesa()

document.getElementById("plantar-btn").addEventListener("click", plantar)

document.getElementById("articulo").style.display = "none"
const botonPlay = document.createElement("BUTTON")
const botonPlayNode = document.createTextNode("Jugar")
botonPlay.appendChild(botonPlayNode);
botonPlay.classList.add("play-btn");

const Blackjack = document.createElement("H2")
const BlackjackNode = document.createTextNode("BLACKJACK")
Blackjack.appendChild(BlackjackNode)

const img = document.createElement("IMG")
img.setAttribute("src", "https://oneidacasino.net/wp-content/uploads/2020/03/Blackjack.png")
img.classList.add("bl")

const divBL = document.createElement("DIV")
divBL.classList.add("div-bl")

divBL.appendChild(Blackjack)
divBL.appendChild(img)

botonPlay.addEventListener("click", ()=> {
    document.getElementById("articulo").style.display = "flex"
    document.body.removeChild(botonPlay)
    document.body.removeChild(divBL)
})

document.body.appendChild(botonPlay);
document.body.appendChild(divBL);

