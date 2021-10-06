import React, { useState, useEffect } from 'react'
import { Button, TextField } from '@material-ui/core';
import cepApi from '../../services/cepApi';
import ClipLoader from "react-spinners/ClipLoader";

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [])

  function HandleSubmit(e){
    e.preventDefault();
    aoEnviar({cep, endereco, bairro, numero, estado, cidade});
  }

  function handleCep(e){
    /*const cepWithoutFormat = e.target.value;
    const formattedCep = cepWithoutFormat.replace(/-/g,"");
    console.log(formattedCep);*/
    setCep(e.target.value);
  }

  function handleEndereco(e){
    setEndereco(e.target.value);
  }

  function handleBairro(e){
    setBairro(e.target.value);
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

  async function handleCepByApi(){
    try {
      setLoading(true);
      const requestCep = await cepApi.get(`${cep}/json`);
      const requestCepData = requestCep.data;
      setEndereco(requestCepData.logradouro);
      setBairro(requestCepData.bairro);
      setCidade(requestCepData.localidade);
      setEstado(requestCepData.uf);
      setLoading(false);
    } catch (err) {
      setEndereco("");
      setBairro("");
      setCidade("");
      setEstado("");
      setLoading(false);
      console.log(err);
    }
  }

  return (
    <>
      {
        loading ?
        <ClipLoader size={150} color={"black"} loading={loading} />
        :
        <form onSubmit={HandleSubmit}>
          <TextField value={cep} onChange={handleCep} onBlur={handleCepByApi} id="cep" label="CEP" type="number" variant="outlined" margin="normal" required />
          <TextField value={endereco} onChange={handleEndereco} id="endereco" label="Endereço" type="text" variant="outlined" margin="normal" fullWidth required />
          <TextField value={bairro} onChange={handleBairro} id="bairro" label="Bairro" type="text" variant="outlined" margin="normal" fullWidth required />
          <TextField value={numero} onChange={handleNumero} id="numero" label="Número" type="number" variant="outlined" margin="normal" required />
          <TextField value={estado} onChange={handleEstado} id="estado" label="Estado" type="text" variant="outlined" margin="normal" required />
          <TextField value={cidade} onChange={handleCidade} id="cidade" label="Cidade" type="text" variant="outlined" margin="normal" required />

          <Button type="submit" variant="contained" color="primary" fullWidth >Finalizar Cadastro</Button>
        </form>
      }
    </>

  )
}

export default DadosEntrega
