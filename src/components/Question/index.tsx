import React, { ReactNode } from 'react';
import { Question as QuestionType } from '../../@types/question';

import { Container, UserInfo } from './styles';

interface QuestionProps {
  question: QuestionType;
  children?: ReactNode;
}

const Question: React.FC<QuestionProps> = ({
  question,
  children,
}: QuestionProps) => {
  const { content, author } = question;

  return (
    <Container>
      <p>{content}</p>
      <footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <div>{children}</div>
      </footer>
    </Container>
  );
};

export default Question;
