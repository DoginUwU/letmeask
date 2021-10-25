import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  isOutlined?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  icon,
  children,
  isOutlined = false,
  ...rest
}: ButtonProps) => {
  return (
    <Container type="button" isOutlined={isOutlined} {...rest}>
      {icon && <img src={icon} alt={rest.name} />}
      {children}
    </Container>
  );
};

export default Button;
