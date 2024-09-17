import { useQuery } from '@tanstack/react-query';

import { CatCard, getLikedCats, LIKED_CATS_QUERY_KEY } from '@/entities/cats';
import { ToggleCatLike } from '@/features/ToggleCatLike';

export const LikedCats = (): JSX.Element => {
  const {
    data: likedCats,
    error,
    status,
  } = useQuery({ queryKey: [LIKED_CATS_QUERY_KEY], queryFn: getLikedCats });

  if (status === 'pending') return <p>Loading</p>;
  if (status === 'error') return <p>Error: {error.message}</p>;
  if (likedCats.length === 0) return <p>Нет ни одного лайкнутого кота</p>;

  return (
    <ul>
      {likedCats.map(
        (likedCat): JSX.Element => (
          <li key={likedCat.id}>
            <CatCard imageUrl={likedCat.url} button={<ToggleCatLike catId={likedCat.id} />} />
          </li>
        ),
      )}
    </ul>
  );
};
