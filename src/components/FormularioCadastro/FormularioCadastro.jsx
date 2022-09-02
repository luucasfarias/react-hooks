import React, {useState} from 'react';
import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core';

function FormularioCadastro({onSubmit, validarCPF}) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({cpf: {valido: true, texto: ''}});

  return(
    <section>
      <form onSubmit={(event) => {
        event.preventDefault();
        onSubmit({nome, sobrenome, cpf, promocoes, novidades})
      }}>
        <TextField
          value={nome}
          id='nome'
          label='nome'
          variant='outlined'
          fullWidth margin='normal'
          onChange={(event) => {
            setNome(event.target.value);
          }}
        />

        <TextField
          value={sobrenome}
          id='sobrenome'
          label='Sobrenome'
          variant='outlined'
          fullWidth margin='normal'
          onChange={(event) => {
            setSobrenome(event.target.value);
          }}
        />

        <TextField
          value={cpf}
          id='cpf'
          label='CPF'
          variant='outlined'
          fullWidth
          margin='normal'
          onChange={(event) => {
            setCpf(event.target.value);
          }}
          onBlur={(event) => {
            const isValid = validarCPF(cpf);
            setErros({
              cpf: isValid
            })
          }}
          error={!erros.cpf.valido}
          helperText={erros.cpf.texto}
        />

        <FormControlLabel
          label='Promocoes'
          control={
          <Switch
            checked={promocoes}
            name='Promocoes'
            color='primary'
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
          />}
        />
        
        <FormControlLabel
          label='Novidades'
          control={
          <Switch
            checked={novidades}
            name='Novidades'
            color='primary'
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
          />}
        />

        <Button variant='contained' color='primary' type='submit'>Cadastrar</Button>
      </form>
    </section>
  );
}

export default FormularioCadastro;
