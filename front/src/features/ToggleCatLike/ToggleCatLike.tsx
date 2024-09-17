import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState, useEffect, useRef } from 'react';

import { deleteLike } from './api/deleteLike';
import { addLike } from './api/addLike';
import { CATS_QUERY_KEY, ILikedCat, LIKED_CATS_QUERY_KEY } from '@/entities/cats';

import { Button } from './styles';
import FullHeart from 'public/full-heart.svg?react';
import EmptyHeart from 'public/empty-heart.svg?react';

interface IToggleCatLikeProps {
  catId: string;
  hasLike?: boolean;
}

export const ToggleCatLike = ({ catId, hasLike = true }: IToggleCatLikeProps): JSX.Element => {
  const [isLiked, setIsLiked] = useState<boolean>(hasLike);

  const [isHover, setIsHover] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!buttonRef.current) return;

    buttonRef.current.onmouseover = (): void => setIsHover(true);
    buttonRef.current.onmouseout = (): void => setIsHover(false);

    return (): void => {
      if (buttonRef.current) {
        buttonRef.current.onmouseover = null;
        buttonRef.current.onmouseout = null;
      }
    };
  }, [buttonRef.current]);

  const queryClient = useQueryClient();
  const addMutation = useMutation({
    mutationFn: async (catId: string): Promise<ILikedCat> => {
      setIsLiked(true);

      return await addLike(catId);
    },
    onSuccess: (likedCat): void => {
      queryClient.removeQueries({ queryKey: [CATS_QUERY_KEY] });
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
      queryClient.removeQueries({ queryKey: [CATS_QUERY_KEY] });
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
    <Button ref={buttonRef} onClick={clickButtonHandler} type="button">
      {isLiked || isHover ?
        <FullHeart />
      : <EmptyHeart />}
    </Button>
  );
};
