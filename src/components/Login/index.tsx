import React, { FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';
import Button from '../Button';
import Input from '../Input';
import { Container } from './styles';
import useAuth from '../../hooks/useAuth';
import { PATHS } from '../../routes/paths';
import useRoom from '../../hooks/useRoom';

const Login: React.FC = () => {
  const history = useHistory();
  const { signIn } = useAuth();
  const { joinRoom } = useRoom();
  const [roomCode, setRoomCode] = React.useState('');

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

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const code = await joinRoom(roomCode);
      history.push(PATHS.rooms.root.replace(':id', code));
    } catch (err) {
      if (err instanceof Error) toast.error(err.message);
    }
  };

  const hnadleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomCode(event.target.value);
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
      <form onSubmit={handleJoinRoom}>
        <Input
          placeholder="Digite o código da sala"
          onChange={hnadleCodeChange}
          value={roomCode}
        />
        <Button type="submit">Entrar na sala</Button>
      </form>
      <div />
    </Container>
  );
};

export default Login;
