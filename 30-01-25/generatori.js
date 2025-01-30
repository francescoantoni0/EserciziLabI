function* range(a, b) {
    let i = a
    while (i < b)
        yield i++
}

let x = range(4, 8)

console.log(range)
console.log(x)

console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())

let y = range(4, 8)
console.log(y.next())

for (let j of range(6, 8))
    console.log(j)

let A = [3, 5, 2, 6]
for (let k of A)
    console.log(k)

console.log(...range(4, 9))

function* generaPari(){
    let i = 0
    while (true) {
        yield i
        i += 2
    }
}

var p = generaPari()
console.log(p.next())
console.log(p.next())
console.log(p.next())
console.log(p.next())
console.log(p.next())

function primiPari(n){
    var g = generaPari()
    for (let i = 0; i < n; i++){
        console.log(g.next().value)
    }
}

primiPari(9)