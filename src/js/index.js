const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener ('mouseenter', () => {

if(window.innerWidth < 450){
    window.scrollTo({top: 0, behavior: 'smooth'});
}
        //passo 3 verificar se ja existe um personagem selecionado, se sim, devemos remover a seleçao dele
        removerSelecaoDePersonagem();

        personagem.classList.add('selecionado');
        //passo 1 pegar elemento do personagem grande para adicionar as informaçoes nele
        alterarImagemPersonagemSelecionado(personagem);
        //passo 3  alterar o nome do personagem grande 
        alterarNomePersonagemSelecionado(personagem);
        //passo 4 alterar a descriçao do personagem grande 
        alterarDescricaoPersonagem(personagem);

    })

})


function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
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
