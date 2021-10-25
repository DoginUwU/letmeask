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
          border: 1px solid #06f;
          background: transparent;
          color: #06f;
        `
      : css`
          border: 0;
          background: #06f;
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
`;

export { Container };
