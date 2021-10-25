import React, { useCallback } from 'react';
import toast from 'react-hot-toast';
import copyImg from '../../assets/images/copy.svg';
import { Button } from './styles';

const RoomCode: React.FC = () => {
  const handleCopyCode = useCallback(() => {
    navigator.clipboard.writeText('123456');
    toast.success('Código copiado para sua clipboard.');
  }, []);

  return (
    <Button type="button" onClick={handleCopyCode}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #dasdasd</span>
    </Button>
  );
};

export default RoomCode;
