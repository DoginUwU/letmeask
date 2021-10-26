import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  width: 100%;
  max-width: 320px;

  h2 {
    font-size: 24px;
    margin: 64px 0 24px;
    font-family: 'Poppins', sans-serif;
  }

  form {
    button {
      width: 100%;
      margin-top: 16px;
    }
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.textSecondary};
    margin-top: 16px;

    a {
      color: ${({ theme }) => theme.pink};
    }
  }
`;

export { Container };
