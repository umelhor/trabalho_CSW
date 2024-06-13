function salvarDados(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const areas = document.getElementById('areas').value;

    const dados = {
        nome,
        areas
    };

    let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
    cadastros.push(dados);
    localStorage.setItem('cadastros', JSON.stringify(cadastros));

    window.location.href = 'status.html';
}
