function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imagens/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imagens/close_white_36dp.svg";
    }
}
function pesquisar() {
    // Obtém o valor da pesquisa
    var termoPesquisa = document.getElementById('pesquisa').value.toLowerCase();
    
    // Obtém todos os cartões de produto
    var produtos = document.querySelectorAll('.card');

    // Loop para verificar se o produto corresponde à pesquisa
    produtos.forEach(function(produto) {
        var nomeProduto = produto.querySelector('h3').textContent.toLowerCase();
        var descricaoProduto = produto.querySelector('p').textContent.toLowerCase();

        // Se o nome ou descrição contiver o termo da pesquisa, mostra o produto; senão, oculta
        if (nomeProduto.includes(termoPesquisa) || descricaoProduto.includes(termoPesquisa)) {
            produto.style.display = 'block'; // Mostra o produto
        } else {
            produto.style.display = 'none'; // Oculta o produto
        }
    });
}