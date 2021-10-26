import styled from 'styled-components';

const Button = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background-color: ${({ theme }) => theme.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.primary};
  cursor: pointer;
  display: flex;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    span {
      color: #fff;
    }
  }

  div {
    background: ${({ theme }) => theme.primary};
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
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`;

export { Button };
