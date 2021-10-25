import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import useRoom from '../../hooks/useRoom';
import RoomCode from '../RoomCode';
import { Header as HeaderComponent } from './styles';

interface RouteParams {
  id?: string;
}

const Header: React.FC = () => {
  const { roomCode, joinRoom } = useRoom();
  const { id } = useParams<RouteParams>();

  useEffect(() => {
    if (id) joinRoom(id);
  }, [id, joinRoom]);

  return (
    <HeaderComponent>
      <div className="content">
        <img src={logoImg} alt="letmeask" />
        <RoomCode code={roomCode} />
      </div>
    </HeaderComponent>
  );
};

export default Header;
