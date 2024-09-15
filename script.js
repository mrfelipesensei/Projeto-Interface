// script.js

// Variável para armazenar a data do último treino registrado
let ultimaDataTreino = null;

// Form validation for Bootstrap
(() => {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                // Evita o envio real do formulário
                event.preventDefault();

                // Captura o nome do usuário
                const nomeUsuario = document.getElementById('nome').value;

                // Exibe a mensagem de boas-vindas
                const mensagemBemVindo = document.getElementById('mensagemBemVindo');
                mensagemBemVindo.textContent = `Bem-vindo, ${nomeUsuario}! Seu cadastro foi realizado com sucesso.`;

                // Mostra o alerta de boas-vindas
                document.getElementById('bemVindo').style.display = 'block';

                // Oculta o formulário de cadastro
                form.style.display = 'none';

                // Habilita os botões "Ver Meu Treino" e "Registrar Treino"
                document.getElementById('verTreino').disabled = false;
                document.getElementById('registrarTreino').disabled = false;
            }
            form.classList.add('was-validated');
        }, false);
    });
})();

// Toggle treino section
document.getElementById('verTreino').addEventListener('click', function() {
    const treino = document.getElementById('meuTreino');
    treino.style.display = treino.style.display === 'none' ? 'block' : 'none';
});

// Registrar treino no histórico
document.getElementById('registrarTreino').addEventListener('click', function() {
    const historico = document.getElementById('treinosRegistrados');
    
    // Captura a data atual
    const hoje = new Date().toLocaleDateString();
    
    // Verifica se já foi registrado um treino hoje
    if (ultimaDataTreino === hoje) {
        alert('Você já registrou um treino hoje. Tente novamente amanhã.');
    } else {
        // Adiciona um novo registro de treino
        const treino = document.createElement('p');
        treino.textContent = `Treino registrado em: ${hoje}`;
        historico.appendChild(treino);

        // Armazena a data do treino registrado
        ultimaDataTreino = hoje;

        // Desabilita o botão de registrar treino até o próximo dia
        document.getElementById('registrarTreino').disabled = true;
    }
});
