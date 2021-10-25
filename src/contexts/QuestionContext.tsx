import { createContext, useEffect, useState } from 'react';
import { ref, push, remove, update, get } from 'firebase/database';
import useAuth from '../hooks/useAuth';
import { database } from '../services/firebase';
import useRoom from '../hooks/useRoom';
import { Question } from '../@types/question';

interface QuestionState {
  createQuestion(question: string): Promise<void>;
  removeQuestion(questionId: string): Promise<void>;
  addLike(questionId: string): Promise<void>;
  removeLike(questionId: string, likeId: string): Promise<void>;
  checkQuestionAsAnswered(questionId: string): Promise<void>;
  highlightQuestion(questionId: string): Promise<void>;
  questions: Question[];
}

const QuestionContext = createContext<QuestionState>({} as QuestionState);

const QuestionProvider: React.FC = ({ children }) => {
  const { user } = useAuth();
  const { roomCode, room } = useRoom();
  const [questions, setQuestions] = useState<Question[]>([]);

  const createQuestion = async (questionLabel: string) => {
    if (!questionLabel.trim().length) throw new Error('Questão vazia.');
    if (!user.id) throw new Error('Não autenticado.');
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

    const questionRef = ref(database, `rooms/${roomCode}/questions`);
    await push(questionRef, question);
  };

  const removeQuestion = async (questionId: string) => {
    const questionRef = ref(
      database,
      `rooms/${roomCode}/questions/${questionId}`,
    );
    await remove(questionRef);
  };

  const addLike = async (questionId: string) => {
    if (!user.id) throw new Error('Não autenticado.');

    const questionRef = ref(
      database,
      `rooms/${roomCode}/questions/${questionId}/likes`,
    );
    await push(questionRef, {
      authorId: user.id,
    });
  };

  const removeLike = async (questionId: string, likeId: string) => {
    if (!user.id) throw new Error('Não autenticado.');

    const questionRef = ref(
      database,
      `rooms/${roomCode}/questions/${questionId}/likes/${likeId}`,
    );
    await remove(questionRef);
  };

  const checkQuestionAsAnswered = async (questionId: string) => {
    if (!user.id) throw new Error('Não autenticado.');

    const questionRef = ref(
      database,
      `rooms/${roomCode}/questions/${questionId}`,
    );
    const databaseQuestion = await get(questionRef);
    await update(questionRef, {
      isAnswered: !databaseQuestion.val().isAnswered,
    });
  };

  const highlightQuestion = async (questionId: string) => {
    if (!user.id) throw new Error('Não autenticado.');

    const questionRef = ref(
      database,
      `rooms/${roomCode}/questions/${questionId}`,
    );
    const databaseQuestion = await get(questionRef);
    await update(questionRef, {
      isHighlighted: !databaseQuestion.val().isHighlighted,
    });
  };

  useEffect(() => {
    const firebaseQuestions = room.questions ?? {};

    const parsedQuestions = Object.entries(firebaseQuestions).map(
      ([key, value]) => {
        return {
          ...value,
          id: key,
          likeCount: Object.values(value.likes ?? {}).length,
          likeId: Object.entries(value.likes ?? {}).find(
            ([, like]) => like.authorId === user.id,
          )?.[0],
        } as Question;
      },
    );

    setQuestions(parsedQuestions);
  }, [room, user.id]);

  return (
    <QuestionContext.Provider
      value={{
        createQuestion,
        removeQuestion,
        addLike,
        removeLike,
        checkQuestionAsAnswered,
        highlightQuestion,
        questions,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionContext, QuestionProvider };
export type { QuestionState };
