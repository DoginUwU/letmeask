import styled, { css } from 'styled-components';

interface ContainerProps {
  isOutlined: boolean;
}

const Container = styled.button<ContainerProps>`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  ${props =>
    props.isOutlined
      ? css`
          border: 1px solid ${({ theme }) => theme.primary};
          background: transparent;
          color: ${({ theme }) => theme.primary};
        `
      : css`
          border: 0;
          background: ${({ theme }) => theme.primary};
          color: #fff;
        `}

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    margin-right: 8px;
  }
`;

export { Container };
