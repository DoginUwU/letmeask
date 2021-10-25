import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  width: 100%;
  max-width: 320px;

  > img {
    align-self: center;
  }

  form {
    input {
      height: 50px;
      border-radius: 8px;
      padding: 0 16px;
      background: #fff;
      border: 1px solid #a8a8b3;
    }

    button {
      margin-top: 16px;
    }

    button,
    input {
      width: 100%;
    }
  }

  .separator {
    font-size: 14px;
    color: #a8a8b3;

    margin: 32px 0;
    display: flex;
    align-items: center;

    &:before {
      content: '';
      flex: 1;
      height: 1px;
      background: #a8a8b3;
      margin-right: 16px;
    }

    &:after {
      content: '';
      flex: 1;
      height: 1px;
      background: #a8a8b3;
      margin-left: 16px;
    }
  }

  .create-room {
    background-color: #ea4335;
    margin-top: 64px;
  }
`;

export { Container };
