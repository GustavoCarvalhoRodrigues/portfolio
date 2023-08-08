function conteudo() {
    var cont = document.getElementById('projetos')
    var cont2 = document.querySelector('.btp')
    if (cont.style.display == 'block') {
         cont.style.display = 'none'
        cont2.innerHTML = 'Leia mais'
    } else {
        cont.style.display = 'block'
        cont2.style.display = 'none'
    } 
}


