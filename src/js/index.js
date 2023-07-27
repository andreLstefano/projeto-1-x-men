const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener ('mouseenter', () => {

if(window.innerWidth < 450){
    window.scrollTo({top:0, behavior: 'smooth'});
}

// removerSelecaoDoPersonagem();

        //objetuvo 2

        // const personagemSelecionado = document.querySelector('.selecionado');
        // personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');
        
        // removerSelecaoDoPersonagem(personagemSelecionado);
        //passo 1
        alterarImagemPersonagemSelecionado(personagem);

        //passo 3
        alterarNomePersonagemSelecionado(personagem);
    //passo 4
        alterarDescricaoPersonagem(personagem);

    })

})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-decription');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = '.src/imagens/card-${idPersonagem}.png';
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}