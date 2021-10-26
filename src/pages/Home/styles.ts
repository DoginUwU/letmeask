import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

const MainContainer = styled.main`
  flex: 8;
  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const AsideContainer = styled.aside`
  flex: 7;

  background: #06f;
  color: ${({ theme }) => theme.backgroundSecondary};

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 80px;

  img {
    max-width: 320px;
  }

  strong {
    font: 700 36px 'Poppins', sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 24px;
    line-height: 36px;
    margin-top: 16px;
    color: ${({ theme }) => theme.background};
    font-weight: lighter;
  }

  @media (max-width: 830px) {
    display: none;
  }
`;

export { Container, AsideContainer, MainContainer };
