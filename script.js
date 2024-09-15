document.getElementById('verTreino').addEventListener('click', function() {
    const treino = document.getElementById('meuTreino');
    if (treino.style.display === 'none') {
        treino.style.display = 'block';
    } else {
        treino.style.display = 'none';
    }
});

document.getElementById('registrarTreino').addEventListener('click', function() {
    const historico = document.getElementById('treinosRegistrados');
    const treino = document.createElement('p');
    const data = new Date().toLocaleDateString();
    treino.textContent = `Treino registrado em: ${data}`;
    historico.appendChild(treino);
});
