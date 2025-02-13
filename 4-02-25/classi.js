function persona(n, e) {
    return {
        nome: n,
        eta: e,
        compleanno: function() {
            this.eta++
        }
    }
}

let pippo = persona("pippo", 13)
console.log(pippo)
pippo.compleanno()
console.log(pippo)