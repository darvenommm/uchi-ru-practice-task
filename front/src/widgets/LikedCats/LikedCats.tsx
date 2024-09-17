import { useQuery } from '@tanstack/react-query';

import { ToggleCatLike } from '@/features/ToggleCatLike';
import { CatCard, getLikedCats, LIKED_CATS_QUERY_KEY } from '@/entities/cats';
import { Center } from '@/shared/ui/components/Center';

import { LikedCatsList, LikedCatItem } from './styles';

export const LikedCats = (): JSX.Element => {
  const {
    data: likedCats,
    error,
    status,
  } = useQuery({ queryKey: [LIKED_CATS_QUERY_KEY], queryFn: getLikedCats });

  if (status === 'pending') return <Center>Загружаем лайкнутых котов</Center>;
  if (status === 'error') return <Center>Ошибка: {error.message}</Center>;
  if (likedCats.length === 0) return <Center>Нет ни одного лайкнутого кота</Center>;

  return (
    <LikedCatsList>
      {likedCats.map(
        (likedCat): JSX.Element => (
          <LikedCatItem key={likedCat.id}>
            <CatCard imageUrl={likedCat.url} button={<ToggleCatLike catId={likedCat.id} />} />
          </LikedCatItem>
        ),
      )}
    </LikedCatsList>
  );
};
