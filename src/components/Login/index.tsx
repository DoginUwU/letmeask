import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';
import Button from '../Button';

import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Logo letmeask" />
      <Button className="create-room" icon={googleIconImg}>
        Crie sua sala com o Google
      </Button>
      <div className="separator">ou entre em uma sala</div>
      <form>
        <input type="text" placeholder="Digite o código da sala" />
        <Button type="submit">Entrar na sala</Button>
      </form>
      <div />
    </Container>
  );
};

export default Login;
