import React, { FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import { PATHS } from '../../routes/paths';
import Button from '../Button';

import { Container } from './styles';
import useRoom from '../../hooks/useRoom';
import Input from '../Input';
import Logo from '../Logo';

const NewRoom: React.FC = () => {
  const { createRoom, loading } = useRoom();
  const history = useHistory();
  const [newRoom, setNewRoom] = React.useState('');

  const handleCreateRoom = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const firebaseKey = await createRoom(newRoom);
      history.push(PATHS.rooms.rootAdmin.replace(':id', firebaseKey));
    } catch (err) {
      if (err instanceof Error) toast.error(err.message);
    }
  };

  const changeNewRoom = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewRoom(event.target.value);
  };

  return (
    <Container>
      <Logo />
      <h2>Criar uma nova sala</h2>
      <form onSubmit={handleCreateRoom}>
        <Input
          placeholder="Nome da sala"
          onChange={changeNewRoom}
          value={newRoom}
        />
        <Button type="submit" disabled={loading}>
          Criar sala
        </Button>
      </form>
      <p>
        Quer entrar em uma sala existente?{' '}
        <Link to={PATHS.root}>Clique aqui</Link>
      </p>
    </Container>
  );
};

export default NewRoom;
