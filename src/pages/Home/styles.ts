import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

const AsideContainer = styled.aside`
  flex: 7;

  background: #835afd;
  color: #fff;

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
    color: #f8f8f8;
    font-weight: lighter;
  }
`;

const MainContainer = styled.main`
  flex: 8;
  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Container, AsideContainer, MainContainer };
