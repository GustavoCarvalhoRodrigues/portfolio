function conteudo() {
    var cont = document.querySelector('#projetos')
    var cont2 = document.querySelector('.btp')
    if (projetos.style.display == 'block') {
        projetos.style.display = 'none'
        cont2.innerHTML = 'Leia mais'
    } else {
        projetos.style.display = 'block'
        cont2.innerHTML = 'Leia menos'
    }
}

