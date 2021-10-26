import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import useQuestion from '../../hooks/useQuestion';
import { Container, Content, QuestionList } from './styles';
import useRoom from '../../hooks/useRoom';
import Question from '../../components/Question';

import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';
import EmptyContent from '../../components/EmptyContent';

const AdminRoom: React.FC = () => {
  const { room } = useRoom();
  const {
    removeQuestion,
    checkQuestionAsAnswered,
    highlightQuestion,
    questions,
  } = useQuestion();
  const history = useHistory();

  useEffect(() => {
    if (room.authorID && !room.isOwned) history.push('/');
  }, [history, room]);

  const handleDeleteQuestion = async (questionId: string) => {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      try {
        await removeQuestion(questionId);
      } catch (err) {
        if (err instanceof Error) toast.error(err.message);
      }
    }
  };

  const handleCheckQuestionAsAnswered = async (questionId: string) => {
    try {
      await checkQuestionAsAnswered(questionId);
    } catch (err) {
      if (err instanceof Error) toast.error(err.message);
    }
  };

  const handleHighlightQuestion = async (questionId: string) => {
    try {
      await highlightQuestion(questionId);
    } catch (err) {
      if (err instanceof Error) toast.error(err.message);
    }
  };

  return (
    <Container>
      <Header />
      <Content>
        <div className="room-title">
          <h1>Sala: {room.title ?? 'Carregando...'}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>
        <QuestionList>
          {questions.map(question => (
            <Question key={question.content} question={question}>
              {!question.isHighlighted && (
                <>
                  <button
                    type="button"
                    onClick={() => handleCheckQuestionAsAnswered(question.id)}
                  >
                    <img src={checkImg} alt="Marcar pergunta como respondida" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleHighlightQuestion(question.id)}
                  >
                    <img src={answerImg} alt="Destacar pergunta" />
                  </button>
                </>
              )}
              <button
                type="button"
                onClick={() => handleDeleteQuestion(question.id)}
              >
                <img src={deleteImg} alt="Remover pergunta" />
              </button>
            </Question>
          ))}
          {questions.length === 0 && (
            <EmptyContent
              title="Nenhuma pergunta por aqui..."
              description="Compartilhe seu código para ver a mágica acontecer!"
            />
          )}
        </QuestionList>
      </Content>
    </Container>
  );
};

export default AdminRoom;
