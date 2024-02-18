//Crie uma função que receba o valor de uma hora qualquer, e exibe no console uma mensagem 
//de “bom dia”, “boa tarde” ou “boa noite”, de acordo com a hora passada.

function horario (hora){
    if (hora >= 0 && hora <=6){
        console.log(`Boa noite!`)
    } else if (hora >= 7 && hora <= 12){
        console.log(`Bom dia!`)
    } else if (hora >= 13 && hora <= 18) {
        console.log(`Boa tarde!`)
    } else {
        console.log(`Digite um horário válido`)
    }
        
    
}

horario (8); 