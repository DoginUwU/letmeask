import styled from 'styled-components';

const Container = styled.div``;

const Content = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;

  .room-title {
    margin: 32px 0 24px;
    display: flex;
    align-items: center;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 24px;
      color: ${({ theme }) => theme.text};
    }

    span {
      margin-left: 16px;
      background: ${({ theme }) => theme.pink};
      border-radius: 9999px;
      padding: 8px 16px;
      color: #fff;
      font-weight: 500;
      font-size: 14px;
    }
  }
`;

const QuestionList = styled.div`
  margin-top: 32px;
`;

export { Container, Content, QuestionList };
