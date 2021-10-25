import styled from 'styled-components';

interface LikedButtonProps {
  liked?: boolean;
}

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
      color: #29292e;
    }

    span {
      margin-left: 16px;
      background: #e559f9;
      border-radius: 9999px;
      padding: 8px 16px;
      color: #fff;
      font-weight: 500;
      font-size: 14px;
    }
  }

  form {
    textarea {
      width: 100%;
      border: 0;
      padding: 16px;
      border-radius: 8px;
      background: #fefefe;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.04);
      resize: vertical;
      min-height: 180px;

      &:focus {
        outline: 0;
      }
    }
  }
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;

  > span {
    font-size: 14px;
    color: #737380;
    font-weight: 500;

    button {
      background: transparent;
      border: 0;
      color: #835afd;
      text-decoration: underline;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span {
    margin-left: 8px;
    color: #29292e;
    font-weight: 500;
    font-size: 14px;
  }
`;

const QuestionList = styled.div`
  margin-top: 32px;
`;

const LikedButton = styled.button<LikedButtonProps>`
  display: flex;
  align-items: flex-end;
  gap: 8px;

  color: ${props => (props.liked ? '#835afd' : '#737380')};

  svg path {
    stroke: ${props => (props.liked ? '#FFF' : '#737380')};
    fill: ${props => (props.liked ? '#835afd' : 'transparent')};
  }
`;

export { Container, Content, FormFooter, UserInfo, QuestionList, LikedButton };
