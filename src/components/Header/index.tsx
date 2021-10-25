import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import RoomCode from '../RoomCode';
import { Header as HeaderComponent } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderComponent>
      <div className="content">
        <img src={logoImg} alt="letmeask" />
        <RoomCode />
      </div>
    </HeaderComponent>
  );
};

export default Header;
