import React from 'react';
import toast from 'react-hot-toast';
import Header from '../../components/Header';
import useQuestion from '../../hooks/useQuestion';
import { Container, Content, QuestionList } from './styles';
import useRoom from '../../hooks/useRoom';
import Question from '../../components/Question';
import deleteImg from '../../assets/images/delete.svg';

const AdminRoom: React.FC = () => {
  const { room } = useRoom();
  const { removeQuestion, questions } = useQuestion();

  const handleDeleteQuestion = async (questionId: string) => {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      try {
        await removeQuestion(questionId);
      } catch (err) {
        if (err instanceof Error) toast.error(err.message);
      }
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
              <button
                type="button"
                onClick={() => handleDeleteQuestion(question.id ?? '')}
              >
                <img src={deleteImg} alt="Remover pergunta" />
              </button>
            </Question>
          ))}
        </QuestionList>
      </Content>
    </Container>
  );
};

export default AdminRoom;
