import React from 'react';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';
import Button from '../Button';

import { Container } from './styles';
import useAuth from '../../hooks/useAuth';
import { PATHS } from '../../routes/paths';

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const history = useHistory();

  const handleCreateRoom = () => {
    signIn()
      .then(() => {
        toast.success('Login realizado com sucesso!');
        history.push(PATHS.rooms.new);
      })
      .catch(err => {
        if (err instanceof Error) toast.error(err.message);
      });
  };

  return (
    <Container>
      <img src={logoImg} alt="Logo letmeask" />
      <Button
        className="create-room"
        icon={googleIconImg}
        onClick={handleCreateRoom}
      >
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
