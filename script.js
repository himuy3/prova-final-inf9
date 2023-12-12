function enviarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    if (nome && email && mensagem) {
        alert("Sua resposta foi registrada!");
    } else {
        alert("Resposta inválida. Preencha todos os campos.");
    }
}
