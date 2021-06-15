const formLogin = document.querySelector('form[name=form-login]')
const btnEnviar = document.querySelector('button[name=btnEnviar]') 
const caixaMensagem = document.querySelector(".mensagem")

let email = "rudson@gmail.com"
let senha = "123456"

btnEnviar.addEventListener('click',validarLogin)

function validarLogin(){

    if(formLogin.email.checkValidity() && formLogin.senha.checkValidity()){
        logar()
    }
        else{
        formLogin.email.reportValidity()
        formLogin.senha.reportValidity()
    } 
}

function logar(){
    if(formLogin.email.value === email && formLogin.senha.value === senha){
        caixaMensagem.style.display="block"
        caixaMensagem.textContent="Logado com Sucesso!"
    }else{
        caixaMensagem.style.display="block"
        caixaMensagem.textContent="Usuário ou senha inválidos"
    }
}