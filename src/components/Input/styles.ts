import styled from 'styled-components';

const Input = styled.input`
  height: 50px;
  border-radius: 8px;
  padding: 0 16px;
  background: ${({ theme }) => theme.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.shadow2};
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

export { Input };
