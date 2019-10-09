function experiencia(anos) {
    if((anos >= 0) && (anos < 1)){
       console.log(anos = 'Iniciante') 
    }else{
        if((anos >= 1) && (anos < 3)){
            console.log(anos = 'Intermediário')
        }else{
            if((anos >= 3) && (anos <= 6)){
                console.log(anos = 'Avançado')
            }else{
                if(anos >= 7){
                    console.log(anos = 'Jedi Master')
                }
            }
        }
    }
} 
var anosEstudo = 4
console.log(experiencia(anosEstudo))

// De 0-1 ano: Iniciante 
// De 1-3 anos: Intermediário 
// De 3-6 anos: Avançado 
// De 7 acima: Jedi Master
