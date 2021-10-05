import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core';

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  function HandleSubmit(e){
    e.preventDefault();
    aoEnviar({cep, endereco, numero, estado, cidade});
  }

  function handleCep(e){
    setCep(e.target.value);
  }

  function handleEndereco(e){
    setEndereco(e.target.value);
  }

  function handleNumero(e){
    setNumero(e.target.value);
  }

  function handleEstado(e){
    setEstado(e.target.value);
  }

  function handleCidade(e){
    setCidade(e.target.value);
  }

  return (
    <form onSubmit={HandleSubmit}>
      <TextField value={cep} onChange={handleCep} id="cep" label="CEP" type="number" variant="outlined" margin="normal" required />
      <TextField value={endereco} onChange={handleEndereco} id="endereco" label="Endereço" type="text" variant="outlined" margin="normal" fullWidth required />
      <TextField value={numero} onChange={handleNumero} id="numero" label="Número" type="number" variant="outlined" margin="normal" required />
      <TextField value={estado} onChange={handleEstado} id="estado" label="Estado" type="number" variant="outlined" margin="normal" required />
      <TextField value={cidade} onChange={handleCidade} id="cidade" label="Cidade" type="number" variant="outlined" margin="normal" required />

      <Button type="submit" variant="contained" color="primary" fullWidth >Finalizar Cadastro</Button>
    </form>
  )
}

export default DadosEntrega
