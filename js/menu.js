function menu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

function tamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'flex'
    } else {
        itens.style.display = 'none'
    }
}