'use strict'

function calc1(a) {
    let result, operatore, operandi
    try {
        let [operatore, ...operandi] = a
    } catch (errore){
        return 0
    }

    switch (operatore) {
        case "+":
            result = 0
            for (let i of operandi)
                result += i
            break
        case "-":
            result = 0
            for (let i of operandi)
                result -= i
            break
        case "*":
            result = 0
            for (let i of operandi)
                result *= i
            break
        case "/":
            result = operandi[0]
            for (let i of operandi)
                result /= i
            break
        default:
            throw {message: "L'operatore non è supportato😭!", type: "OperatoreNonSupportato"}
    }
    return result
}

console.log(calc1(["+", 4, 5, 2]))
console.log(calc1(["&", 4, 5, 2]))

