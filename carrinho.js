// Função para carregar e exibir os itens do carrinho na página do carrinho
function renderCart() {
    // Obtém os itens do carrinho do localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalAmount = 0;

    // Seleciona o elemento do carrinho
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = ''; // Limpa o carrinho atual

    // Adiciona cada item ao carrinho visual
    cartItems.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            ${item.name} - R$${item.price.toFixed(2)}
            <button onclick="removeFromCart(${index})">Remover</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
        totalAmount += item.price;
    });

    // Atualiza o total do carrinho
    document.getElementById('total').textContent = `Total: R$${totalAmount.toFixed(2)}`;
}

// Função para remover item do carrinho
function removeFromCart(index) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.splice(index, 1); // Remove o item do array
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Atualiza o localStorage
    renderCart(); // Atualiza a exibição do carrinho
}

// Carrega o carrinho ao abrir a página do carrinho
window.onload = renderCart;


// Função para adicionar item ao carrinho e armazenar no localStorage
function addToCart(name, price) {
    // Obtém os itens do carrinho salvos no localStorage ou cria um array vazio
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Adiciona o novo item ao array
    cartItems.push({ name, price });

    // Salva o novo estado do carrinho no localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Redireciona o usuário para a página do carrinho
    window.location.href = 'carrinho.html';
}