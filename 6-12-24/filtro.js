function replace_filter_f(f, g){
    function fun(A){
        let B = []
        for (let a of A){
            b.push(f(A))
        }
        let C = []
        for (let k of B){
            if (!g(k)){
                C.push(k)
            }
        }
        return C
    }
    return fun
}