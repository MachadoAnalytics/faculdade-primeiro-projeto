const botao = document.getElementById("meuBotao");
const areaMensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {
    areaMensagem.textContent = "Você está no caminho certo. Continue com coragem!";
    areaMensagem.style.display = "block";
});
