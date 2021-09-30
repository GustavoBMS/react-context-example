import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core/'

function DadosPessoais({ aoEnviar, validacoes }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf:{valido:true, texto:""} });

  const handleSubmit = (e) => {
    e.preventDefault();
    aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
  }

  const handleNome = (e) => {
    setNome(e.target.value);
  }

  const handleSobrenome = (e) => {
    setSobrenome(e.target.value);
  }

  const handleCpf = (e) => {
    setCpf(e.target.value);
  }

  const validarCampos = (e) => {
    const { name, value } = e.target;
    const novoEstado = {...erros}
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
    console.log(novoEstado)
  }

  const handlePromocoes = (e) => {
    setPromocoes(e.target.checked);
  }

  const handleNovidades = (e) => {
    setNovidades(e.target.checked);
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal" value={nome} onChange={handleNome} />

      <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal" value={sobrenome} onChange={handleSobrenome} />

      <TextField id="cpf" label="CPF" name="cpf" variant="outlined" fullWidth margin="normal" value={cpf} onChange={handleCpf} error={!erros.cpf.valido} helperText={erros.cpf.texto} onBlur={validarCampos} />

      <FormControlLabel label="Promocoes" control={<Switch name="Promocoes" defaultChecked color="primary" />} value={promocoes} onChange={handlePromocoes} />

      <FormControlLabel label="Novidades" control={<Switch name="Novidades" defaultChecked color="primary" />} value={novidades} onChange={handleNovidades} />

      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
  )
}

export default DadosPessoais
