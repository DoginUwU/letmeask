import { createContext, useEffect, useState } from 'react';
import { ref, push } from 'firebase/database';
import useAuth from '../hooks/useAuth';
import { database } from '../services/firebase';
import useRoom from '../hooks/useRoom';
import { Question } from '../@types/question';

interface QuestionState {
  createQuestion(question: string): Promise<void>;
  questions: Question[];
}

const QuestionContext = createContext<QuestionState>({} as QuestionState);

const QuestionProvider: React.FC = ({ children }) => {
  const { user } = useAuth();
  const { roomCode, room } = useRoom();
  const [questions, setQuestions] = useState<Question[]>([]);

  const createQuestion = async (questionLabel: string) => {
    if (!questionLabel.trim().length) throw new Error('Questão vazia.');
    if (!user) throw new Error('Não autenticado.');
    if (!roomCode) throw new Error('Não está em uma sala.');

    const question = {
      content: questionLabel,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    } as Question;

    const roomRef = ref(database, `rooms/${roomCode}/questions`);
    await push(roomRef, question);
  };

  useEffect(() => {
    const firebaseQuestions = room.questions ?? {};

    const parsedQuestions = Object.entries(firebaseQuestions).map(
      ([key, value]) => {
        return {
          id: key,
          ...value,
        } as Question;
      },
    );

    setQuestions(parsedQuestions);
  }, [room]);

  return (
    <QuestionContext.Provider value={{ createQuestion, questions }}>
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionContext, QuestionProvider };
export type { QuestionState };
