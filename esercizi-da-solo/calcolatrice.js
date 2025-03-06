"use strict"

let calculator = {
    op1 : null,
    op2 : null,
    read() {
        this.op1 = +prompt("Inserisci il primo numero: ", 0)
        this.op2 = +prompt("Inserisci il secondo numero: ", 0)
    },
    sum() {
        return this.op2 + this.op1
    },
    mul() {
        return this.op1 * this.op2
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );