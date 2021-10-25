import React, { FormEvent, useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import Button from '../../components/Button';
import Header from '../../components/Header';
import useAuth from '../../hooks/useAuth';
import useQuestion from '../../hooks/useQuestion';
import { Container, Content, FormFooter, UserInfo } from './styles';
import useRoom from '../../hooks/useRoom';

const Room: React.FC = () => {
  const { user } = useAuth();
  const { room } = useRoom();
  const { createQuestion, questions } = useQuestion();
  const [newQuestion, setNewQuestion] = useState('');

  const handleSendQuestion = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      try {
        await createQuestion(newQuestion);
        setNewQuestion('');
      } catch (err) {
        if (err instanceof Error) toast.error(err.message);
      }
    },
    [createQuestion, newQuestion],
  );

  const changeNewQuestion = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setNewQuestion(event.target.value);
    },
    [],
  );

  return (
    <Container>
      <Header />
      <Content>
        <div className="room-title">
          <h1>Sala: {room.title ?? 'Carregando...'}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={changeNewQuestion}
            value={newQuestion}
          />

          <FormFooter>
            {user ? (
              <UserInfo>
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </UserInfo>
            ) : (
              <span>
                Para enviar uma pergunta,
                <button type="button">faça seu login</button>
              </span>
            )}
            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </FormFooter>
        </form>
      </Content>
    </Container>
  );
};

export default Room;
