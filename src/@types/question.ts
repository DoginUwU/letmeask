import { User } from './user';

interface Question {
  id: string;
  author: User;
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likes: Record<string, Like>;
  likeCount: number;
  likeId?: string;
}

interface Like {
  authorId: string;
}

export type { Question, Like };
