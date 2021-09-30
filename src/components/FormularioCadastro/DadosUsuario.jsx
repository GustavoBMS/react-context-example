import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleForm(e){
    e.preventDefault();
    aoEnviar({ email, senha })
  }

  function handleEmail(e){
    setEmail(e.target.value);
  }

  function handleSenha(e){
    setSenha(e.target.value);
  }

  return (
    <form onSubmit={handleForm}>
      <TextField value={email} onChange={handleEmail} id="email" label="Email" type="email" variant="outlined" margin="normal" fullWidth required />
      <TextField value={senha} onChange={handleSenha} id="senha" label="Senha" type="password" variant="outlined" margin="normal" fullWidth required />
      <Button type="submit" variant="contained" color="primary" >Cadastrar</Button>
    </form>
  )
}


export default DadosUsuario
