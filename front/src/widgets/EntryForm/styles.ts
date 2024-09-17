import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { extraBgColor, extraTextColor } from '@/shared/ui/styles';
import { Center } from '@/shared/ui/components/Center';

// Можно вынести Button и Input в shared если будут повторяться

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  border-radius: 15px;

  border: 1px solid #000000;
  padding: 20px;
  max-width: 600px;
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Button = styled.button`
  color: ${extraTextColor};

  background-color: ${extraBgColor};
  border-radius: 10px;
  transition: opacity 200ms;

  border: none;
  padding: 10px 15px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  &[disabled] {
    opacity: 0.4;
  }
`;

export const Input = styled.input`
  padding: 5px 10px;

  border: 1px solid #000000;
  border-radius: 5px;
`;

export const ErrorMessageForAll = styled(Center)`
  color: #ff0000;

  margin: 5px 0;
`;

export const errorMessageClassName = css`
  color: #ff0000;

  margin: 0;
  margin-top: 10px;
`;
