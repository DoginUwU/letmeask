import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  width: 100%;
  max-width: 320px;

  form {
    button {
      margin-top: 16px;
      width: 100%;
    }
  }

  .separator {
    font-size: 14px;
    color: ${({ theme }) => theme.shadow2};

    margin: 32px 0;
    display: flex;
    align-items: center;

    &:before {
      content: '';
      flex: 1;
      height: 1px;
      background: ${({ theme }) => theme.shadow2};
      margin-right: 16px;
    }

    &:after {
      content: '';
      flex: 1;
      height: 1px;
      background: ${({ theme }) => theme.shadow2};
      margin-left: 16px;
    }
  }

  .create-room {
    background-color: ${({ theme }) => theme.google};
    margin-top: 64px;
  }
`;

export { Container };
