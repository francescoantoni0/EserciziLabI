function valuta(t){
    if (t){
        if (t.figli){
            let s = 0
            for (let f of t.figli){
                s = s.valuta(f)
            }
            return t.val(s);
        }
        return t.val; //è una foglia
    }
}