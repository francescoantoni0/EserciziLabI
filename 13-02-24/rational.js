"use strict"

class ZeroDenError extends Error{}
class Rational {
    #num
    #den
    constructor(numeratore, denominatore) {
        if (denominatore === 0){
            throw new ZeroDenError("Il denominatore non può essere 0")
        }
        if (typeof numeratore != "number" || typeof denominatore != "number")
            throw "Parametri non interi"
        this.#num = numeratore
        this.#den = denominatore

        this.#simplify()
    }

    static MCD(a,b){
        let x = Math.abs(a)
        let y = Math.abs(b)

        while (y)
            [x, y] = [y, x % y]

        return x
    }

    #simplify(){
        let m = Rational.MCD(this.#num, this.#den)

        const s = this.#den < 0 ? -1 : 1

        this.#num = this.#num / m * s
        this.#den = this.#den / m * s
    }

    toString(){
        return `${this.#num}/${this.#den}`
    }

}

let n = new Rational(2,6)
console.log(`${n}`)