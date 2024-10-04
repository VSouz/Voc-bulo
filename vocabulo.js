let lista = [
    "arroz", "carro", "navio", "prato", "tigre", "cobra", "folha", 
    "gatos", "filme", "livro", "lapis", "piano", "farol", "creme", 
    "cinco", "dupla", "monge", "multa", "plano", "sonho", "ferro", 
    "fruta", "susto", "nuvem", "leite", "ninho", "pedra", "salto", 
    "roupa", "ponto", "bolsa", "festa", "noite", "peixe", "banho", 
    "porta", "trono", "vidro", "horta", "sorve", "salmo", "fardo", 
    "trevo", "poeta", "chave", "areia", "morte", "lugar", "feroz", 
    "quase", "vapor", "prato", "lance", "vento", "suave", "cinto", 
    "tenso", "pacto", "sabor", "vento", "gosto", "aceno", "fenda", 
    "casal", "dente", "carne", "pouco", "fosso", "touro", "criar", 
    "gesso", "rumor", "treta", "primo", "cervo", "vetor", "pasta", 
    "balde", "manga", "dança", "calmo", "luzes", "perda", "lenda", 
    "tecla", "balão", "polvo", "dardo", "larva", "sonar", "bloco", 
    "fosca", "trama", "porto", "fácil", "calor", "nevea", "costa", 
    "minha", "campo", "curso", "papel", "velho", "amplo"
];
let pchave = getItemAleatorio(lista).toUpperCase();
let palavra = [];
let tentativas = 6;
let linha = 1

function mostrarTecla(){
    switch(tentativas){
        case 6:

            let linha = document.querySelector("#linha1"); 

            if (linha) {
                
                linha.querySelector('[data-box="0"]').textContent = palavra[0];
                linha.querySelector('[data-box="1"]').textContent = palavra[1];
                linha.querySelector('[data-box="2"]').textContent = palavra[2];
                linha.querySelector('[data-box="3"]').textContent = palavra[3];
                linha.querySelector('[data-box="4"]').textContent = palavra[4];
            }
            break;
        
        case 5:
            let linha2 = document.querySelector("#linha2"); 

           
            if (linha2) {
                
                linha2.querySelector('[data-box="0"]').textContent = palavra[0];
                linha2.querySelector('[data-box="1"]').textContent = palavra[1];
                linha2.querySelector('[data-box="2"]').textContent = palavra[2];
                linha2.querySelector('[data-box="3"]').textContent = palavra[3];
                linha2.querySelector('[data-box="4"]').textContent = palavra[4];
            }
            break;

        case 4:
            let linha3 = document.querySelector("#linha3"); 

            
            if (linha3) {
                
                linha3.querySelector('[data-box="0"]').textContent = palavra[0];
                linha3.querySelector('[data-box="1"]').textContent = palavra[1];
                linha3.querySelector('[data-box="2"]').textContent = palavra[2];
                linha3.querySelector('[data-box="3"]').textContent = palavra[3];
                linha3.querySelector('[data-box="4"]').textContent = palavra[4];
            }
            break;

        case 3:
            let linha4 = document.querySelector("#linha4"); 

            
            if (linha4) {
                
                linha4.querySelector('[data-box="0"]').textContent = palavra[0];
                linha4.querySelector('[data-box="1"]').textContent = palavra[1];
                linha4.querySelector('[data-box="2"]').textContent = palavra[2];
                linha4.querySelector('[data-box="3"]').textContent = palavra[3];
                linha4.querySelector('[data-box="4"]').textContent = palavra[4];
            }
            break;

        case 2:
            let linha5 = document.querySelector("#linha5"); 

            
            if (linha5) {
                
                linha5.querySelector('[data-box="0"]').textContent = palavra[0];
                linha5.querySelector('[data-box="1"]').textContent = palavra[1];
                linha5.querySelector('[data-box="2"]').textContent = palavra[2];
                linha5.querySelector('[data-box="3"]').textContent = palavra[3];
                linha5.querySelector('[data-box="4"]').textContent = palavra[4];
            }
            break;

        case 1:
            let linha6 = document.querySelector("#linha6"); 

            
            if (linha6) {
               
                linha6.querySelector('[data-box="0"]').textContent = palavra[0];
                linha6.querySelector('[data-box="1"]').textContent = palavra[1];
                linha6.querySelector('[data-box="2"]').textContent = palavra[2];
                linha6.querySelector('[data-box="3"]').textContent = palavra[3];
                linha6.querySelector('[data-box="4"]').textContent = palavra[4];
            }
            break;
    }
    
    
}


function verificar(chute){
    chute = chute.join('');
    console.log(pchave);


    for (const i in chute) {
        console.log("idnex: " + i)
        if (pchave.includes(chute[i])) {
            console.log("Tem")

            if (pchave[i] == chute[i]){
                let fila = document.querySelector(`#linha${linha}`); 
                fila.querySelector(`[data-box="${i}"]`).classList.add("right");
            }else{
                let fila = document.querySelector(`#linha${linha}`); 
                fila.querySelector(`[data-box="${i}"]`).classList.add("place");
            }
            
        }
        else{
            let fila = document.querySelector(`#linha${linha}`); 
                fila.querySelector(`[data-box="${i}"]`).classList.add("wrong");
            //         console.log('cheguei');
            // switch(tentativas){
            //     case 6:
            //         let linha = document.querySelector("#linha1"); 
            //         linha.querySelector(`[data-box="${i}"]`).classList.add("wrong");
            //         console.log('cheguei');
            //         break;
            //     case 5:
            //         let linha2 = document.querySelector("#linha2"); 
            //         linha2.querySelector(`[data-box="${i}"]`).classList.add("wrong");
            //         console.log('cheguei');
            //         break;
            //     case 4:
            //         let linha3 = document.querySelector("#linha3"); 
            //         linha3.querySelector(`[data-box="${i}"]`).classList.add("wrong");
            //         console.log('cheguei');
            //         break;  
            //     case 3:
            //         let linha4 = document.querySelector("#linha4"); 
            //         linha4.querySelector(`[data-box="${i}"]`).classList.add("wrong");
            //         console.log('cheguei');
            //         break;  
            //     case 2:
            //         let linha5 = document.querySelector("#linha5"); 
            //         linha5.querySelector(`[data-box="${i}"]`).classList.add("wrong");
            //         console.log('cheguei');
            //         break;  
            //     case 1:
            //         let linha6 = document.querySelector("#linha6"); 
            //         linha6.querySelector(`[data-box="${i}"]`).classList.add("wrong");
            //         console.log('cheguei');
            //         break;      
            // }
        }
    }
    linha++;
    tentativas = tentativas -1;
    palavra = [];

}

function digitarTeclado(event) {
    
    const keyPressed =event.key.toUpperCase();
    
    //console.log("Tecla pressionada:", keyPressed);
    
    
    
    if(keyPressed == "BACKSPACE"  ){
        palavra.pop();
        console.log('back', palavra);
        mostrarTecla();

    }else{
        if(keyPressed == 'ENTER' & palavra.length < 5 ){
            console.log("falta letra");    
        }

        if(/^[A-Z]$/.test(keyPressed) & palavra.length < 5 ){
            palavra.push(keyPressed);
            console.log(palavra);
            mostrarTecla();
        }

        if(keyPressed == 'ENTER' & palavra.length == 5){
            //console.log("cheguei aqui");
            verificar(palavra)
            mostrarTecla();
        }
        
    }
    
    
}

function getItemAleatorio(lista) {
    let indiceAleatorio = Math.floor(Math.random() * lista.length);
    console.log("INde: " + indiceAleatorio)
    return lista[indiceAleatorio];
}

  // Adicionando um ouvinte de eventos para o evento 'keydown' (tecla pressionada)
  document.addEventListener("keydown", digitarTeclado);


