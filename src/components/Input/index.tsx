import React, {
  InputHTMLAttributes, useCallback, useRef, useState,
} from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputError?: string;
}

const Input: React.FC<InputProps> = ({ inputError, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, SetIsFilled] = useState(false);

  // quando tiver focus
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  // quando perder focus
  const handleInputBlue = useCallback(() => {
    setIsFocused(false);

    // se tiver algum valor no input
    if (inputRef.current?.value) {
      SetIsFilled(true);
    } else {
      SetIsFilled(false);
    }

    // SetIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container inputError={!!inputError} isFilled={isFilled} isFocused={isFocused}>
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlue}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};

export default Input;
