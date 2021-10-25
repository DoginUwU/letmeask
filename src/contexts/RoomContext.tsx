import { createContext, useEffect, useState } from 'react';
import { ref, push, get, onValue } from 'firebase/database';
import { database } from '../services/firebase';
import useAuth from '../hooks/useAuth';
import { QuestionProvider } from './QuestionContext';
import { Room } from '../@types/room';

interface RoomState {
  createRoom(roomName: string): Promise<string>;
  joinRoom(roomCode: string): Promise<string>;
  roomCode: string;
  room: Room;
}

const RoomContext = createContext<RoomState>({} as RoomState);

const RoomProvider: React.FC = ({ children }) => {
  const { user } = useAuth();
  const [roomCode, setRoomCode] = useState('');
  const [room, setRoom] = useState<Room>({} as Room);

  const createRoom = async (roomName: string) => {
    if (!roomName.trim().length) throw new Error('Nome da sala é necessário.');

    const roomRef = ref(database, 'rooms');

    const firebaseRoom = await push(roomRef, {
      title: roomName,
      authorID: user.id,
    });

    const code = firebaseRoom.key;

    if (!code) throw new Error('Erro ao criar sala.');

    setRoomCode(code);

    return code;
  };

  const joinRoom = async (code: string) => {
    if (!code.trim().length) throw new Error('Código da sala é necessário.');

    const roomRef = ref(database, `rooms/${code}`);

    const databaseRoom = await get(roomRef);

    if (!databaseRoom.exists()) throw new Error('Sala não existe.');

    setRoomCode(code);

    return code;
  };

  useEffect(() => {
    if (!roomCode) return;

    const roomRef = ref(database, `rooms/${roomCode}`);
    onValue(roomRef, databaseRoom => {
      setRoom(databaseRoom.val());
    });
  }, [roomCode]);

  return (
    <RoomContext.Provider value={{ createRoom, joinRoom, roomCode, room }}>
      <QuestionProvider>{children}</QuestionProvider>
    </RoomContext.Provider>
  );
};

export { RoomContext, RoomProvider };
export type { RoomState };
