import { Question } from './question';

interface Room {
  authorID: string;
  title: string;
  questions: Record<string, Question>;
  isOwned?: boolean;
}

export type { Room };
