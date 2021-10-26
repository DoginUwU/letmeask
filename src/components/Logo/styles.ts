import styled from 'styled-components';

const Image = styled.svg`
  margin: 0 auto;

  #text {
    fill: ${({ theme }) => theme.text};
  }
`;

export { Image };
