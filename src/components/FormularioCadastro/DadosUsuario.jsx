import { Button, TextField } from '@material-ui/core'
import React from 'react'

function DadosUsuario({ aoEnviar }) {

  function handleForm(e){
    e.preventDefault();
    aoEnviar()
  }

  return (
    <form onSubmit={handleForm}>
      <TextField id="email" label="Email" type="email" variant="outlined" margin="normal" fullWidth required />
      <TextField id="senha" label="Senha" type="password" variant="outlined" margin="normal" fullWidth required />
      <Button type="submit" variant="contained" color="primary" >Cadastrar</Button>
    </form>
  )
}


export default DadosUsuario
