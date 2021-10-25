import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import { PATHS } from '../../routes/paths';
import Button from '../Button';

import { Container } from './styles';

const NewRoom: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Logo letmeask" />
      <h2>Criar uma nova sala</h2>
      <form>
        <input type="text" placeholder="Nome da sala" />
        <Button type="submit">Criar sala</Button>
      </form>
      <p>
        Quer entrar em uma sala existente?{' '}
        <Link to={PATHS.root}>Clique aqui</Link>
      </p>
    </Container>
  );
};

export default NewRoom;
