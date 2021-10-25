import { useContext } from 'react';
import { QuestionContext, QuestionState } from '../contexts/QuestionContext';

const useQuestion = (): QuestionState => {
  const context = useContext(QuestionContext);

  if (!context)
    throw new Error('useQuestion must be used within an RoomProvider');

  return context;
};

export default useQuestion;
