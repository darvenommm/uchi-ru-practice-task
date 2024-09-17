import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import { deleteLike } from './api/deleteLike';
import { addLike } from './api/addLike';
import { ILikedCat, LIKED_CATS_QUERY_KEY } from '@/entities/cats';

import { Button } from './styles';
import FullHeart from 'public/full-heart.svg?react';
import EmptyHeart from 'public/empty-heart.svg?react';

interface IToggleCatLikeProps {
  catId: string;
  hasLike?: boolean;
}

export const ToggleCatLike = ({ catId, hasLike = true }: IToggleCatLikeProps): JSX.Element => {
  const [isLiked, setIsLiked] = useState<boolean>(hasLike);

  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: async (catId: string): Promise<ILikedCat> => {
      setIsLiked(true);

      return await addLike(catId);
    },
    onSuccess: (likedCat): void => {
      queryClient.setQueryData([LIKED_CATS_QUERY_KEY], (old: ILikedCat[]): ILikedCat[] => [
        ...old,
        likedCat,
      ]);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (catId: string): Promise<void> => {
      setIsLiked(false);
      await deleteLike(catId);
    },
    onSuccess: (): void => {
      queryClient.setQueryData([LIKED_CATS_QUERY_KEY], (old: ILikedCat[]): ILikedCat[] =>
        old.filter((cat): boolean => catId !== cat.id),
      );
    },
  });

  const clickButtonHandler = (): void => {
    if (hasLike) deleteMutation.mutate(catId);
    else addMutation.mutate(catId);
  };

  return (
    <Button onClick={clickButtonHandler} type="button">
      {isLiked ?
        <FullHeart />
      : <EmptyHeart />}
    </Button>
  );
};
