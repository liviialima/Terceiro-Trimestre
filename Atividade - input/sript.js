let  listaDeAfazeres  = ["Comprar pão", "Estudar JavaScript", "Lavar louça"];

console.log("Lista inicial de afazeres:", listaDeAfazeres);

console.log("Primeiro afazer:", listaDeAfazeres[0]);

console.log("Total de afazeres:", listaDeAfazeres.length);

listaDeAfazeres.push("Fazer exercícios");

listaDeAfazeres.unshift("Agendar médico");

console.log("\nLista após adições:", listaDeAfazeres);

let afazerRemovidoFinal = listaDeAfazeres.pop();
console.log("\nAfazer removido do final:", afazerRemovidoFinal);


let afazerRemovidoInicio = listaDeAfazeres.shift();
console.log("Afazer removido do início:", afazerRemovidoInicio);

console.log("Lista após remoções:", listaDeAfazeres);

let listaOrganizada = [...listaDeAfazeres];

listaOrganizada.sort();
console.log("\nLista organizada (ordem alfabética):", listaOrganizada);

listaOrganizada.reverse();
console.log("Lista organizada invertida:", listaOrganizada);

console.log("\nLista original (não alterada):", listaDeAfazeres);