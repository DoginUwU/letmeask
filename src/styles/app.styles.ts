import styled from 'styled-components';

const ButtonChangeTheme = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.theme.backgroundSecondary};
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    color: ${props => props.theme.text};
  }

  @media (max-width: 768px) {
    bottom: 20px;
    top: unset;
  }
`;

export { ButtonChangeTheme };
