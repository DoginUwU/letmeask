import styled from 'styled-components';

const Container = styled.div`
  background-color: #fefefe;
  border-radius: 8px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  & + & {
    margin-top: 8px;
  }

  p {
    color: #29292e;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    button {
      border: 0;
      background-color: transparent;
      cursor: pointer;

      &:hover {
        filter: brightness(0.7);
      }
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
    color: #737380;
    font-size: 14px;
  }
`;

export { Container, UserInfo };
