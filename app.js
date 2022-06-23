

const palavras = ["GATO","CACHORRO","GAIVOTA", "TIGRE", "MOSCA", "AVESTRUZ", "MACACO", "GIRAFA", "VACA", "CENTOPEIA"];
const iniciar = document.getElementById("start");
const letrasUsadasContainer = document.getElementById("letrasUsadas");
var capsula = document.querySelectorAll(".capsula");

var palavra;
var pontuacao;
var verificaSeGanhou;
var letrasUsadas = [];
var verificaVitoria;
iniciar.addEventListener("click", inicia);



function detectarTecla(){
    var teclaCode = event.keyCode;
    var tecla = String.fromCharCode(teclaCode);
    let verifica = false;// verifica se existe a letra digitada é repetida
    verificaVitoria = true;
    
    
    //Armazenam a primeira e a segunda letra(se ela existir) da palavra secreta.
    var l1 = palavra.indexOf(tecla)
    var l2 = palavra.lastIndexOf(tecla)
    
    //Verifica se existe a letra digitada na palavra
    if(l1 == -1){
        alert("não tem essa letra, tente outra")
    }else{
        capsula[l1].innerHTML=tecla;
        capsula[l2].innerHTML=tecla;
        for(i=0; i<palavra.length; i++){      
        }
    }

    //Verifica se a letra digitada já foi digitada
    for(i=0; i < letrasUsadas.length; i++){
        if(tecla==letrasUsadas[i]){
            verifica=true;
        }
    }
    if(verifica==false){
    letrasUsadas.push(tecla)
    letrasUsadasContainer.innerHTML = letrasUsadas;
    }else{
        alert("Já usada")
    }
    
}

//Reseta as variaeis do jogo e escolhe uma nova palavra.
function inicia(){
    
    pontuacao=5;
    verificaSeGanhou = 0;
    var letras = document.getElementById("numLetras")//Aponta para a caixa onde aparece o numero de letras.
    var aleatorio = Math.round(Math.random()*10);
    palavra = palavras[aleatorio];
    addEventListener("keydown", detectarTecla);
    
 
    for(i=0; i<9; i++){
        capsula[i].innerHTML=" ";
        capsula[i].style.display="none";
    }
    for(i=0; i<palavra.length; i++){
        capsula[i].style.display="block";
        capsula[i].style.borderBottom="1px solid black"
    }
    letras.innerHTML = "Número de letras" + "<br>" + palavra.length;

    letrasUsadas.splice(0,9)
    letrasUsadasContainer.innerHTML = letrasUsadas;
}
