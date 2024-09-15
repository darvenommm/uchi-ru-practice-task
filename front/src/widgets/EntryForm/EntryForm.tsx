import { useId } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from '@tanstack/react-router';

import { fetcher } from '@/shared/api/server';
import { setAuthToken } from '@/shared/model/auth';

interface IFormInput {
  login: string;
  password: string;
}

export const EntryForm = (): JSX.Element => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<IFormInput>({ mode: 'onBlur' });

  const submitFormHandler: SubmitHandler<IFormInput> = async (data): Promise<void> => {
    try {
      const response = await fetcher.post('users', { json: data });
      const { authToken } = await response.json<{ authToken: string }>();

      setAuthToken(authToken);
      navigate({ to: '/' });
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
      else console.log(error);
    }
  };

  const loginId = useId();
  const passwordId = useId();

  return (
    <form onSubmit={handleSubmit(submitFormHandler)}>
      <div>
        <label htmlFor={loginId}>Логин:</label>
        <input
          id={loginId}
          type="text"
          {...register('login', {
            minLength: { value: 5, message: 'Логин должен быть минимум 5 символов' },
            maxLength: { value: 32, message: 'Логин должен быть максимум 32 символа' },
          })}
        />
        <ErrorMessage errors={errors} name="login" as="p" />
      </div>
      <div>
        <label htmlFor={passwordId}>Пароль:</label>
        <input
          id={passwordId}
          type="password"
          {...register('password', {
            minLength: { value: 8, message: 'Пароль должен быть минимум 8 символов' },
            maxLength: { value: 32, message: 'Пароль должен быть максимум 32 символа' },
          })}
        />
        <ErrorMessage errors={errors} name="password" as="p" />
      </div>
      <button type="submit" disabled={!isDirty || !isValid}>
        Отправить
      </button>
    </form>
  );
};
