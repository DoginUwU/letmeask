import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  padding-top: 20px;

  h3,
  p {
    font-family: 'Poppins', sans-serif;
    text-align: center;
  }

  h3 {
    color: ${({ theme }) => theme.text};
  }

  p {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export { Container };
