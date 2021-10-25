import React, { useCallback } from 'react';
import toast from 'react-hot-toast';
import copyImg from '../../assets/images/copy.svg';
import { Button } from './styles';

interface RoomCodeProps {
  code: string;
}

const RoomCode: React.FC<RoomCodeProps> = ({ code }: RoomCodeProps) => {
  const handleCopyCode = useCallback(() => {
    navigator.clipboard.writeText(code);
    toast.success('Código copiado para sua clipboard.');
  }, [code]);

  return (
    <Button type="button" onClick={handleCopyCode}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{code}</span>
    </Button>
  );
};

export default RoomCode;
