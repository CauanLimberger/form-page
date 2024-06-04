const formulario = document.querySelector('#form');
const inputUsername = document.querySelector('#username');
const inputCpf = document.querySelector('#cpf');
const inputTelefone = document.querySelector('#telefone');
const userError = document.querySelector('#usererror');
const userError1 = document.querySelector('#usererror1');
const userError2 = document.querySelector('#usererror2');
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    checkUsername();
    checkCpf();
    checkTelefone();

    if (inputUsername.value != '' && inputCpf.value != '' && inputTelefone.value != '') {
        alert('cadastrado com sucesso')
    }


})


inputUsername.addEventListener('blur', () => {
    checkUsername();
})

inputCpf.addEventListener('blur', function () {
    checkCpf();
})

inputTelefone.addEventListener('blur', function () {
    checkTelefone();
})

let checkUsername = () => {
    const username = inputUsername.value

    if (username === '') {
        userError.innerHTML = 'Digite o seu usuario'
        userError.Style.color = 'red'
        inputUsername.style.border = '2px solid red'

    } else {
        userError.innerHTML = ''
        inputUsername.style.border = '2px solid blue'
    }
}

let checkCpf = () => {
    const cpf = inputCpf.value

    if (cpf === '') {
        userError1.innerHTML = 'Digite o seu Cpf'
        userError1.style.color = 'red'
        inputCpf.style.border = '2px solid red'
    } else {
        userError1.innerHTML = ''
        inputCpf.style.border = '2px solid blue'

    }
}

let checkTelefone = () => {
    const telefone = inputTelefone.value

    if (telefone === '') {
        userError2.innerHTML = 'Digite o seu telefone'
        userError2.style.color = 'red'
        inputTelefone.style.border = '2px solid red'
    } else {
        userError2.innerHTML = ''
        inputTelefone.style.border = '2px solid blue'
    }
}