let elem = {val: Number, next: Object}

function creaCoda(){
    return {valore: undefined, next: undefined}
}

function enqueue(q, v){
    const newNode = {valore: v, next: undefined}
    let iterator = q
    while (iterator.next !== undefined)
        iterator = iterator.next
    iterator.next = newNode
}

let q = creaCoda(1)

function dequeue(q){
    if (q.next === undefined)
        return undefined
    let rimosso = q.next
    q.next = rimosso.next
    rimosso.next = undefined
    return rimosso
}

function moveToFront(q, v){
    let current = q
    let prev = undefined
    while (current.valore !== v && current.next !== undefined){
        prev = current
        current = current.next
    }

    if (current.next === undefined && current.valore !== v)
        return false

    prev.next = current.next
    current.next = q.next
    q.next = current
    return true
}
