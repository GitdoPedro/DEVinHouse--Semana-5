
class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome
        this.email = email
        this.senha = senha
    }

    autenticar(emailInformado, senhaInformada) {
        return (this.email === emailInformado && this.senha === senhaInformada)
    }
}




const usuarioTeste = new Usuario('Pedro','emailpedrolima@gmail.com','12345')
const cUsuario = document.getElementById('campo-usuario')
const cSenha = document.getElementById('campo-senha')
const bAcessar = document.getElementById('botao-acessar')
const pMensagem = document.getElementById('p-mensagem')


bAcessar.addEventListener('click', () => {
    const usuario = cUsuario.value
    const senha = cSenha.value
    if (usuarioTeste.autenticar(usuario, senha)) {
      pMensagem.innerHTML = 'Login realizado!'
    } else {
      pMensagem.innerHTML = 'Credenciais inválidas!'
    }
  })