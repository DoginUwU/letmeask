import styled from 'styled-components';

const Button = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background-color: #fff;
  border: 1px solid #06f;
  cursor: pointer;
  display: flex;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #06f;
    color: #fff;
  }

  div {
    background: #06f;
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 230px;
    font-size: 14px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`;

export { Button };
