document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        document.getElementById('welcomeMessage').textContent = `Olá ${loggedInUser.username}, como você gostaria de prosseguir?`;
    }
});

document.getElementById('preCadastro').addEventListener('click', () => {
    window.location.href = 'dadosPreCadastro.html';
});
document.getElementById('sair').addEventListener('click', () => {
    window.location.href = '../../signin.html';
});
