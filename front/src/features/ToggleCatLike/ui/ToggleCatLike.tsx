import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { deleteLike } from '../api/deleteLike';
import { addLike } from '../api/addLike';
import { LIKED_CATS_QUERY_KEY } from '@/entities/cats';

interface IToggleCatLikeProps {
  catId: string;
  hasLike?: boolean;
}

export const ToggleCatLike = ({ catId, hasLike = true }: IToggleCatLikeProps): JSX.Element => {
  const [isLiked, setIsLiked] = useState<boolean>(hasLike);

  const addMutation = useMutation({
    mutationFn: addLike,
    mutationKey: [LIKED_CATS_QUERY_KEY],
    onSuccess: (): void => {
      setIsLiked(true);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteLike,
    mutationKey: [LIKED_CATS_QUERY_KEY],
    onSuccess: (): void => {
      setIsLiked(false);
    },
  });

  const clickButtonHandler = (): void => {
    (isLiked ? deleteMutation : addMutation).mutate(catId);
  };

  return (
    <button onClick={clickButtonHandler} type="button">
      {isLiked ? 'Remove like' : 'Add like'}
    </button>
  );
};
