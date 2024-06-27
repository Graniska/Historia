
//     const prompt = require("prompt-sync")();

//     /*let historia */ prompt("Fale a sua história: ").split (" ").forEach(function(palavra)){
//         console.log(palavra)
//     }

//    // console.log(historia.split(""))
 
//     historia = historia
//     console.log (historia)

const prompt = require("prompt-sync")();

let ocorrencias = {}

let historia = prompt("Fale a sua história: ").split(" ")




console.log(`Existem ${historia.length} palavras nesta historia: `)

    historia.forEach(function(palavra){
        if (ocorrencias[palavra]){
            ocorrencias[palavra]++;
        } else {
            ocorrencias[palavra] = 1
        }
        
    });
        let palavras = Object.entries(ocorrencias)
        
        let maiorocorrencia = palavras[0];
        
        for (let palavra of palavras) 
           if (palavra[1] > maiorocorrencia[1])  
             maiorocorrencia = palavra;

    console.log (`A palavra mais usada foi ${maiorocorrencia[0]} (${maiorocorrencia[1]} vezes)`)
          
           

        
    
