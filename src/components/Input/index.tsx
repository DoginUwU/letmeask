import React, { InputHTMLAttributes } from 'react';

import { Input as InputComponent } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = (props: InputProps) => {
  return <InputComponent type="text" {...props} />;
};

export default Input;
