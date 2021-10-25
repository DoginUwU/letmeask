import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { Container, Content, FormFooter } from './styles';

const Room: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <div className="room-title">
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </div>

        <form>
          <textarea placeholder="O que você quer perguntar?" />

          <FormFooter>
            <span>
              Para enviar uma pergunta,{' '}
              <button type="button">faça seu login</button>
            </span>
            <Button type="submit">Enviar pergunta</Button>
          </FormFooter>
        </form>
      </Content>
    </Container>
  );
};

export default Room;
