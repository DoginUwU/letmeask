import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

interface ContainerProps {
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

const Container = styled.div<ContainerProps>`
  background-color: ${({ theme }) => theme.backgroundTertiary};
  border-radius: 8px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  ${props =>
    props.isAnswered &&
    css`
      background-color: ${transparentize(0.9, props.theme.primary)};
      border: 1px solid ${({ theme }) => theme.primary};
    `};

  ${props =>
    props.isHighlighted &&
    css`
      background-color: ${({ theme }) => theme.shadow1};
      border: 0;
    `};

  & + & {
    margin-top: 8px;
  }

  p {
    color: ${({ theme }) => theme.text};
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    > div {
      display: flex;
      gap: 16px;
    }

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
    color: ${({ theme }) => theme.textSecondary};
    font-size: 14px;
  }
`;

export { Container, UserInfo };
