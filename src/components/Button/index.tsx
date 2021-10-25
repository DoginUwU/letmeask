import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({
  icon,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <Container type="button" {...rest}>
      {icon && <img src={icon} alt={rest.name} />}
      {children}
    </Container>
  );
};

export default Button;
