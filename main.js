function tocaSom(seletorAudio){
  const elemento =  document.querySelector(seletorAudio);
    
    if(elemento && elemento.localName === 'audio'){
            elemento.play();
    }
    else{
        console.log('elemento não encontrado ou seletor inválido');
    }
}
    const ListaDeTeclas = document.querySelectorAll('.tecla');

    // while = enquanto for verdadeiro execute a função/ let contador é declarada fora da função
    // substituída pelo for que melhora a sintaxe do código

    for(let contador = 0; contador < ListaDeTeclas.length; contador ++){
        
        const tecla = ListaDeTeclas[contador];
        const instrumento = tecla.classList[1];
        const idAudio = `#som_${instrumento}`; // template string
        // console.log('idAudio')

        tecla.onclick = function(){
            tocaSom(idAudio);
        }
        // console.log(contador)

        tecla.onkeydown = function(evento){  //quando apertar a tecla (onkeydown)
            console.log(evento)
            if(evento.code ==='Space' || evento.code === 'Enter'){
                tecla.classList.add('ativa','active');
            }
        }  
        
        tecla.onkeyup = function(){  //quando soltar a tecla (onkeyup)
            tecla.classList.remove('ativa','active');
        }

        //volta para o estilo normal quando o foco saiu do botão
        tecla.onblur = function (evento) {
            tecla.classList.remove('ativa','active');
        }

    }

