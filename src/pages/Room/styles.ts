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
      color: ${({ theme }) => theme.text};
    }

    span {
      margin-left: 16px;
      background: ${({ theme }) => theme.pink};
      border-radius: 9999px;
      padding: 8px 16px;
      color: ${({ theme }) => theme.text};
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
      background-color: ${({ theme }) => theme.backgroundTertiary};
      color: ${({ theme }) => theme.text};

      &:focus {
        outline: 0;
      }
    }
  }

  @media (max-width: 330px) {
    .room-title {
      span {
        display: none;
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
      color: #06f;
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
    color: ${({ theme }) => theme.text};
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

  color: ${props =>
    props.liked ? props.theme.primary : props.theme.textSecondary};

  svg path {
    stroke: ${props =>
      props.liked
        ? props.theme.backgroundSecondary
        : props.theme.textSecondary};
    fill: ${props => (props.liked ? props.theme.primary : 'transparent')};
  }
`;

export { Container, Content, FormFooter, UserInfo, QuestionList, LikedButton };
