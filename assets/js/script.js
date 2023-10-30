let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')
let cep = document.querySelector('#cep')
let nomeOk = false
let emailOk = false
let mensagemOk = false
let cepOk = false

function validarNome(){
    let textNome = document.querySelector('#textNome')
    if (nome.value.length < 3){
        textNome.innerHTML = 'Nome inválido'
        textNome.style.color = 'red'
    }
    else {

    textNome.innerHTML = 'Nome válido'
    textNome.style.color = 'green'
    nomeOk = true

    }
}

    function validarEmail(){
        let textEmail = document.querySelector('#textEmail')

        if (email.value.indexOf('@') == -1 || email.value.indexOf('.')== -1) {
            textEmail.innerHTML = 'E-mail inválido'
            textEmail.style.color = 'red'
        }
        else {
            textEmail.innerHTML = 'E-mail válido'
            textEmail.style.color = 'green'
            emailOk = true


        }

    }
    function validarMensagem(){
        let textMensagem = document.querySelector('#textMensagem')

        if(mensagem.value.length >= 100) {
            textMensagem.innerHTML = 'Texto muito extenso. Digite no máximo 100 caracteres'
            textMensagem.style.color = 'red'
            display = 'block'
        }

        else {
            textMensagem.style.display = 'none'
            mensagemOk = true

        }

    }

    function validarCep(){
        let textCep = document.querySelector('#textCep')

        if(cep.value.length < 8 || cep.value.length > 8 ){
            textCep.innerHTML = 'CEP incorreto'
            textCep.style.color = 'red'
        }

        else {
            textCep.innerHTML = 'CEP válido'
            textCep.style.color = 'green'
            cepOk = true
        }

        }

        function enviarForm(){

            if (nomeOk== true && emailOk == true && mensagemOk == true && cepOk == true) {
                
                alert (nome.value + ' seu formulário enviado com sucesso!! ')

            } 
              else {
                alert ('Preencha o formulário corretamente')
            }
        }
        
    
    

    


