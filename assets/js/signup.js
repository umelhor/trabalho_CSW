const btn = document.querySelector('#verSenha');
const btnConfirm = document.querySelector('#verConfirmSenha');

const campos = [
  { input: document.querySelector('#nome'), label: document.querySelector('#labelNome'), minLength: 3, valid: false },
  { input: document.querySelector('#usuario'), label: document.querySelector('#labelUsuario'), minLength: 5, valid: false },
  { input: document.querySelector('#senha'), label: document.querySelector('#labelSenha'), minLength: 6, valid: false },
  { input: document.querySelector('#confirmSenha'), label: document.querySelector('#labelConfirmSenha'), minLength: 6, valid: false }
];

const msgError = document.querySelector('#msgError');
const msgSuccess = document.querySelector('#msgSuccess');

function validateInput(inputObj) {
  inputObj.input.addEventListener('keyup', () => {
    const inputValue = inputObj.input.value.trim();
    inputObj.valid = inputValue.length >= inputObj.minLength;
    inputObj.label.style.color = inputObj.valid ? 'green' : 'red';
    inputObj.label.innerHTML = inputObj.valid ? inputObj.label.innerText.split(' ')[0] : `${inputObj.label.innerText.split(' ')[0]} *Insira no mínimo ${inputObj.minLength} caracteres`;
    inputObj.input.style.borderColor = inputObj.valid ? 'green' : 'red';
  });
}

function togglePasswordVisibility(button, input) {
  button.addEventListener('click', () => {
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', type);
  });
}

campos.forEach(validateInput);
togglePasswordVisibility(btn, campos[2].input);
togglePasswordVisibility(btnConfirm, campos[3].input);

function cadastrar() {
  const isValid = campos.every(campo => campo.valid);
  if (isValid) {
    try {
      const listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
      listaUser.push({
        nomeCad: campos[0].input.value.trim(),
        userCad: campos[1].input.value.trim(),
        senhaCad: campos[2].input.value.trim()
      });
      localStorage.setItem('listaUser', JSON.stringify(listaUser));
      msgSuccess.style.display = 'block';
      msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>';
      msgError.style.display = 'none';
      msgError.innerHTML = '';
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 3000);
    } catch (e) {
      console.error('Erro ao armazenar os dados do usuário:', e);
      msgError.style.display = 'block';
      msgError.innerHTML = '<strong>Erro ao cadastrar usuário. Tente novamente mais tarde.</strong>';
    }
  } else {
    msgError.style.display = 'block';
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>';
    msgSuccess.style.display = 'none';
    msgSuccess.innerHTML = '';
  }
}
