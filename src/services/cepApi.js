import axios from 'axios';

const cepApi = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://viacep.com.br/ws/"
})

export default cepApi;