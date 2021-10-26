import React from 'react';
import EmptyContentImg from '../../assets/images/empty-content.svg';
import { Container } from './styles';

interface EmptyContentProps {
  title: string;
  description: string;
}

const EmptyContent: React.FC<EmptyContentProps> = ({
  title,
  description,
}: EmptyContentProps) => {
  return (
    <Container>
      <img src={EmptyContentImg} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </Container>
  );
};

export default EmptyContent;
