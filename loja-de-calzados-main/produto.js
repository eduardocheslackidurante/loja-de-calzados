// Abrir e fechar o modal
const modal = document.getElementById("personalizar-modal");
const btn = document.getElementById("personalizar-btn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "flex";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Lidar com o botão de confirmação
const confirmButton = document.getElementById("confirm-custom");
confirmButton.onclick = function () {
    const customText = document.getElementById("custom-text").value;
    alert("Texto personalizado: " + customText);
    modal.style.display = "none";
}

