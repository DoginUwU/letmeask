/* eslint-disable consistent-return */
import { createContext, useCallback, useEffect, useState } from 'react';
import { ref, push, get, onValue, update } from 'firebase/database';
import { database } from '../services/firebase';
import useAuth from '../hooks/useAuth';
import { QuestionProvider } from './QuestionContext';
import { Room } from '../@types/room';

interface RoomState {
  createRoom(roomName: string): Promise<string>;
  joinRoom(roomCode: string): Promise<string>;
  deleteRoom(): Promise<void>;
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

  const deleteRoom = useCallback(async () => {
    const roomRef = ref(database, `rooms/${roomCode}`);
    try {
      await update(roomRef, {
        endedAt: new Date(),
        deleted: true,
      });
    } catch (error) {
      throw new Error('Erro ao deletar sala.');
    }
  }, [roomCode]);

  const joinRoom = async (code: string) => {
    if (!code.trim().length) throw new Error('Código da sala é necessário.');

    const roomRef = ref(database, `rooms/${code}`);

    const databaseRoom = await get(roomRef);

    if (!databaseRoom.exists()) throw new Error('Sala não existe.');

    if (databaseRoom.val().deleted) throw new Error('Sala foi deletada.');

    setRoomCode(code);

    return code;
  };

  useEffect(() => {
    if (!roomCode) return;

    const roomRef = ref(database, `rooms/${roomCode}`);
    const unsubscribe = onValue(roomRef, databaseRoom => {
      setRoom(databaseRoom.val());
    });

    return () => unsubscribe();
  }, [roomCode]);

  return (
    <RoomContext.Provider
      value={{ createRoom, deleteRoom, joinRoom, roomCode, room }}
    >
      <QuestionProvider>{children}</QuestionProvider>
    </RoomContext.Provider>
  );
};

export { RoomContext, RoomProvider };
export type { RoomState };
