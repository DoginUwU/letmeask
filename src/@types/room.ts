import { Question } from './question';

interface Room {
  authorID: string;
  title: string;
  questions: Record<string, Question>;
}

export type { Room };
