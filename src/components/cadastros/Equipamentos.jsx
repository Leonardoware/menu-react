import { useState } from 'react'

function Equipamentos() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [setor, setSetor] = useState('')

  const [erros, setErros] = useState({})
  const [mensagem, setMensagem] = useState('')

  function salvar(event) {
    event.preventDefault()

    const novosErros = {}

    if (nome.trim() === '') {
      novosErros.nome = 'Informe o nome'
    }

    if (email.trim() === '') {
      novosErros.email = 'Informe o e-mail'
    }

    if (telefone.trim() === '') {
      novosErros.telefone = 'Informe o telefone'
    }

    if (setor === '') {
      novosErros.setor = 'Selecione o setor'
    }

    setErros(novosErros)

    if (Object.keys(novosErros).length > 0) {
      setMensagem('')
      return
    }

    setMensagem('Equipamento cadastrado com sucesso!')
  }

  return (null)
}

export default Equipamentos