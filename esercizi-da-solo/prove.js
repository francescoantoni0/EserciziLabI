"use strict"

// function Persona(n, e) {
//     return {
//         nome: n,
//         eta: e,
//         compleanno(){
//             this.eta++
//         }
//     }
// }
//
// p1 = Persona("Calogero", 16)
// console.log(p1)
// p1.compleanno()
// console.log(p1)

// function Persona(n, e) {
//     this.nome = n
//     this.eta = e
//     this.compleanno = function() {
//         this.eta++
//     }
// }
//
// p = new Persona("Calogero", 16)

// let v = [1, 2, 3]
// for (let k in v){
//     console.log(k)
// }

// console.log(v.__proto__)
// console.log(Object.getPrototypeOf(v))

function Persona(n, e) {
    this.nome = n
    this.età = e
}

Persona.prototype.compleanno = function () {
    this.età++
}

let pippo = new Persona("Pippo", 35)
pippo.compleanno()
console.log(pippo)