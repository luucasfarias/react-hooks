import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

import { Container, Typography } from '@material-ui/core';

function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h3' component='h1' align='center'>Formulario Cadastro</Typography>
      <FormularioCadastro onSubmit={onSubmit} validarCPF={validarCPF}/>
    </Container>
  );
}

function onSubmit(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return {valido: false, texto: 'CPF deve ter 11 digitos'}
  } else {
    return {valido: true, texto: 'CPF valido'}
  }
}

export default App;
