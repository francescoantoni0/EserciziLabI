"use strict"

class formaGeometrica {
    area() {
        return undefined
    }

    perimetro() {
        return undefined
    }
}

class triangolo extends formaGeometrica {
    constructor(base, altezza) {
        super()
        this.base = base
        this.altezza = altezza
    }

    #ipotenusa() {
        return Math.sqrt(this.base ** 2 + this.altezza ** 2)
    }

    perimetro() {
        return this.base + this.altezza + this.#ipotenusa()
    }

    area() {
        return this.base * this.altezza / 2
    }

}

class rettangolo extends formaGeometrica {
    constructor(base, altezza) {
        super()
        this.base = base
        this.altezza = altezza
    }

    perimetro() {
        return 2 * this.base + 2 * this.altezza
    }

    area() {
        return this.base * this.altezza
    }
}

class quadrato extends rettangolo{
    constructor(l) {
        super(l, l);
        this.lato = l;
    }
    get base(){
        return this.lato
    }

    get altezza(){
        return this.lato
    }

    set base(b){
        this.lato = b
    }

    set altezza(a){
        this.lato = a
    }
}

let gigio = new triangolo(3, 4)

console.log("Perimetro: ", gigio.perimetro(), ", area: ", gigio.area())

