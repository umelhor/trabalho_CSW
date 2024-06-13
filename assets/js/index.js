let listaUser = JSON.parse(localStorage.getItem('listaUser'));

if (!listaUser) {
  listaUser = [];
}

const btn = document.querySelector('.fa-eye');

btn.addEventListener('click', () => {
  const inputSenha = document.querySelector('#senha');
  
  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text');
  } else {
    inputSenha.setAttribute('type', 'password');
  }
});

function entrar() {
  const usuario = document.querySelector('#usuario');
  const userLabel = document.querySelector('#userLabel');
  const senha = document.querySelector('#senha');
  const senhaLabel = document.querySelector('#senhaLabel');
  const msgError = document.querySelector('#msgError');
  
  if (!usuario.value || !senha.value) {
    userLabel.style.color = 'red';
    usuario.style.borderColor = 'red';
    senhaLabel.style.color = 'red';
    senha.style.borderColor = 'red';
    msgError.style.display = 'block';
    msgError.innerHTML = 'Por favor, preencha todos os campos';
    usuario.focus();
    return;
  }
  
  const userValid = listaUser.find(item => usuario.value === item.userCad && senha.value === item.senhaCad);
  
  if (userValid || usuario.value === 'Administrador' || usuario.value === 'Donatario01') {
    let redirectUrl = '';
    if (usuario.value === 'Administrador') {
      redirectUrl = 'assets/html/adm.html';
    } else if (usuario.value === 'Donatario01') {
      redirectUrl = 'assets/html/donatario.html';
    } else {
      redirectUrl = 'assets/html/donatario.html'; 
    }
    
    localStorage.setItem('loggedInUser', JSON.stringify({ username: usuario.value }));
    
    window.location.href = redirectUrl;
    
    const mathRandom = Math.random().toString(16).substr(2);
    const token = mathRandom + mathRandom;
    
    localStorage.setItem('token', token);
    localStorage.setItem('userLogado', JSON.stringify(userValid));
  } else {
    userLabel.style.color = 'red';
    usuario.style.borderColor = 'red';
    senhaLabel.style.color = 'red';
    senha.style.borderColor = 'red';
    msgError.style.display = 'block';
    msgError.innerHTML = 'Usuário ou senha incorretos';
    usuario.focus();
  }
}
