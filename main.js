document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.querySelector(".formulario");
    var mensagem = document.getElementById("mensagem");

    formulario.onsubmit = function(event) {
        var numeroA = parseFloat(document.getElementById("campoA").value);
        var numeroB = parseFloat(document.getElementById("campoB").value);

        if (numeroB > numeroA) {
            mensagem.textContent = "Correto! O número B é maior que o número A.";
            mensagem.style.color = "green";
            event.preventDefault(); // Impede o envio imediato do formulário

            setTimeout(function() {
                formulario.submit(); // Submete o formulário após 2 segundos
            }, 2000);
        } else {
            mensagem.textContent = "O número B deve ser maior que o número A!";
            mensagem.style.color = "red";
            event.preventDefault(); // Impede o envio do formulário para que a mensagem fique visível
        }
    };
});
