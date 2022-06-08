var personagem = document.getElementById('personagem');
document.addEventListener('click', pulo);

function pulo(){
  if(personagem.classList == 'animar'){return;} 
  personagem.classList.add('animar');
    setTimeout(removerPulo,300);
};

function removerPulo(){
    personagem.classList.remove("animar");
}

var bloqueio = document.getElementById("bloqueio");
function check(){
    let personagemTop = parseInt(window.getComputedStyle(personagem).getPropertyValue("top"));
    let bloqueioLeft = parseInt(window.getComputedStyle(bloqueio).getPropertyValue("left"));
    if(bloqueioLeft<20 && bloqueioLeft>-20 && personagemTop>=130){
        alert("Fim de Jogo");
    }
}

setInterval(check, 10);