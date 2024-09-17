import { useId, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from '@tanstack/react-router';
import { HTTPError } from 'ky';
import { StatusCodes } from 'http-status-codes';

import { fetcher } from '@/shared/api/server';
import { setAuthToken } from '@/shared/model/auth';

import { Form, Field, Button, Input, ErrorMessageForAll, errorMessageClassName } from './styles';

interface IFormInput {
  login: string;
  password: string;
}

export const EntryForm = (): JSX.Element => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<IFormInput>({ mode: 'onBlur' });

  const submitFormHandler: SubmitHandler<IFormInput> = async (data, event): Promise<void> => {
    setErrorMessage(null);

    try {
      const response = await fetcher.post('users', { json: data });
      const { authToken } = await response.json<{ authToken: string }>();

      setAuthToken(authToken);
      navigate({ to: '/' });
    } catch (error) {
      if (error instanceof HTTPError) {
        switch (error.response.status) {
          case StatusCodes.UNAUTHORIZED:
            setErrorMessage('Неправильный пароль');
            break;

          default:
            setErrorMessage('Что-то пошло не так');
            break;
        }
      }
    }

    event?.preventDefault();
  };

  const loginId = useId();
  const passwordId = useId();

  return (
    <Form onSubmit={handleSubmit(submitFormHandler)}>
      {errorMessage && <ErrorMessageForAll>{errorMessage}</ErrorMessageForAll>}
      <div>
        <Field>
          <label htmlFor={loginId}>Логин:</label>
          <Input
            id={loginId}
            type="text"
            {...register('login', {
              minLength: { value: 5, message: 'Логин должен быть минимум 5 символов' },
              maxLength: { value: 32, message: 'Логин должен быть максимум 32 символа' },
            })}
          />
        </Field>
        <ErrorMessage className={errorMessageClassName} errors={errors} name="login" as="p" />
      </div>
      <div>
        <Field>
          <label htmlFor={passwordId}>Пароль:</label>
          <Input
            id={passwordId}
            type="password"
            {...register('password', {
              minLength: { value: 8, message: 'Пароль должен быть минимум 8 символов' },
              maxLength: { value: 32, message: 'Пароль должен быть максимум 32 символа' },
            })}
          />
        </Field>
        <ErrorMessage className={errorMessageClassName} errors={errors} name="password" as="p" />
      </div>
      <Button type="submit" disabled={!isDirty || !isValid}>
        Отправить
      </Button>
    </Form>
  );
};
