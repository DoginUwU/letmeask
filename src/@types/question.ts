import { User } from './user';

interface Question {
  author: User;
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}

export type { Question };
