import { useContext } from 'react';
import { RoomContext, RoomState } from '../contexts/RoomContext';

const useRoom = (): RoomState => {
  const context = useContext(RoomContext);

  if (!context) throw new Error('useRoom must be used within an RoomProvider');

  return context;
};

export default useRoom;
