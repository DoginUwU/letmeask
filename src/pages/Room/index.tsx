import React, { FormEvent, useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import Button from '../../components/Button';
import Header from '../../components/Header';
import useAuth from '../../hooks/useAuth';
import useQuestion from '../../hooks/useQuestion';
import {
  Container,
  Content,
  FormFooter,
  LikedButton,
  QuestionList,
  UserInfo,
} from './styles';
import useRoom from '../../hooks/useRoom';
import Question from '../../components/Question';
import LikeIcon from '../../components/LikeIcon';

const Room: React.FC = () => {
  const { user } = useAuth();
  const { room } = useRoom();
  const { createQuestion, addLike, removeLike, questions } = useQuestion();
  const [newQuestion, setNewQuestion] = useState('');

  const handleSendQuestion = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      try {
        await createQuestion(newQuestion);
        setNewQuestion('');
        toast.success('Pergunta enviada com sucesso!');
      } catch (err) {
        if (err instanceof Error) toast.error(err.message);
      }
    },
    [createQuestion, newQuestion],
  );

  const handleLikeQuestion = async (questionId: string, likeId?: string) => {
    try {
      if (likeId) {
        await removeLike(questionId, likeId);
      } else {
        await addLike(questionId);
      }
    } catch (err) {
      if (err instanceof Error) toast.error(err.message);
    }
  };

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
            {user.id ? (
              <UserInfo>
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </UserInfo>
            ) : (
              <span>
                Para enviar uma pergunta,&nbsp;
                <button type="button">faça seu login</button>
              </span>
            )}
            <Button type="submit" disabled={!user.id}>
              Enviar pergunta
            </Button>
          </FormFooter>
        </form>

        <QuestionList>
          {questions.map(question => (
            <Question key={question.content} question={question}>
              <LikedButton
                type="button"
                aria-label="Marcar como gostei"
                onClick={() =>
                  handleLikeQuestion(question.id ?? '', question.likeId)
                }
                liked={!!question.likeId}
              >
                {question.likeCount > 0 && <span>{question.likeCount}</span>}
                <LikeIcon />
              </LikedButton>
            </Question>
          ))}
        </QuestionList>
      </Content>
    </Container>
  );
};

export default Room;
