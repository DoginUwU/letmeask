import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';
import Button from '../Button';

import { Container } from './styles';
import { PATHS } from '../../routes/paths';
import { auth } from '../../services/firebase';

const Login: React.FC = () => {
  const history = useHistory();

  const handleCreateRoom = useCallback(() => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider).then(result => {
      console.log(result);

      history.push(PATHS.rooms.new);
    });
  }, [history]);

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
