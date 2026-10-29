import { useState } from 'react'

function Safras() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [setor, setSetor] = useState('')

  const [erros, setErros] = useState({})
  const [mensagem, setMensagem] = useState('')
//Acima: Constantes
//Abaixo: Função de erro e cadastro de sucesso
  function salvar(event) {
    event.preventDefault()

    const novosErros = {}

    if (nome.trim() === '') {
      novosErros.nome = 'Informe o nome'
    }

    if (email.trim() === '') {
      novosErros.email = 'Informe o primeiro dia da safra'
    }

    if (telefone.trim() === '') {
      novosErros.telefone = 'Informe o último dia da safra'
    }
//remova o if do setor
    if (setor === '') {
      novosErros.setor = 'Selecione o setor'
    }
//remova o if do setor
    setErros(novosErros)

    if (Object.keys(novosErros).length > 0) {
      setMensagem('')
      return
    }

    setMensagem('Safra cadastrada com sucesso!')
  }
//Acima: Função de erro e cadastro bem sucedido
//Abaixo: "Html"
  return (null)
}

export default Safras