import React from 'react';

function Register() {
  return (
    <div>
      <h1>Cadastro</h1>
      <input type="text" placeholder="Nome" />
      <input type="email" placeholder="E-mail" />
      <input type="password" placeholder="Senha" />
      <button>Cadastrar</button>
    </div>
  );
}

export default Register;
