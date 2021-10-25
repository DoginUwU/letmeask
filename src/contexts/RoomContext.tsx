import { createContext } from 'react';
import { ref, push, get } from 'firebase/database';
import { database } from '../services/firebase';
import useAuth from '../hooks/useAuth';

interface RoomState {
  createRoom(roomName: string): Promise<string>;
  joinRoom(roomCode: string): Promise<string>;
}

const RoomContext = createContext<RoomState>({} as RoomState);

const RoomProvider: React.FC = ({ children }) => {
  const { user } = useAuth();

  const createRoom = async (roomName: string) => {
    if (!roomName.trim().length) throw new Error('Nome da sala é necessário.');

    const roomRef = ref(database, 'rooms');

    const firebaseRoom = await push(roomRef, {
      title: roomName,
      authorID: user.id,
    });

    if (!firebaseRoom.key) throw new Error('Erro ao criar sala.');

    return firebaseRoom.key;
  };

  const joinRoom = async (roomCode: string) => {
    if (!roomCode.trim().length)
      throw new Error('Código da sala é necessário.');

    const roomRef = ref(database, `rooms/${roomCode}`);

    const room = await get(roomRef);

    if (!room.exists()) throw new Error('Sala não existe.');

    return roomCode;
  };

  return (
    <RoomContext.Provider value={{ createRoom, joinRoom }}>
      {children}
    </RoomContext.Provider>
  );
};

export { RoomContext, RoomProvider };
export type { RoomState };
