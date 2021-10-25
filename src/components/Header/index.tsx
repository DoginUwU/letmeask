import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useHistory, useParams } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import useRoom from '../../hooks/useRoom';
import Button from '../Button';
import RoomCode from '../RoomCode';
import { Header as HeaderComponent } from './styles';

interface RouteParams {
  id?: string;
}

const Header: React.FC = () => {
  const history = useHistory();
  const { roomCode, joinRoom, deleteRoom, room } = useRoom();
  const { id } = useParams<RouteParams>();

  const handleEndRoom = async () => {
    try {
      await deleteRoom();

      history.push('/');
    } catch (err) {
      if (err instanceof Error) toast.error(err.message);
    }
  };

  useEffect(() => {
    if (id)
      joinRoom(id).catch(err => {
        if (err instanceof Error) toast.error(err.message);
        history.push('/');
      });
  }, [id, joinRoom, history]);

  return (
    <HeaderComponent>
      <div className="content">
        <img src={logoImg} alt="letmeask" />
        <div>
          <RoomCode code={roomCode} />
          {room.isOwned && (
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          )}
        </div>
      </div>
    </HeaderComponent>
  );
};

export default Header;
