import { Fragment } from 'react/jsx-runtime';
import { useInfiniteQuery } from '@tanstack/react-query';

import { CatCard, CATS_QUERY_KEY, getCats } from '@/entities/cats';
import { useEffect, useRef } from 'react';
import { ToggleCatLike } from '@/features/ToggleCatLike';

export const Cats = (): JSX.Element => {
  const { data, error, fetchNextPage, status, isFetching } = useInfiniteQuery({
    queryKey: [CATS_QUERY_KEY],
    queryFn: ({ pageParam: page }: { pageParam: number }) => getCats({ page }),
    initialPageParam: 0,
    getNextPageParam: (_, allPages): number => allPages.length,
  });

  const observer = useRef<null | IntersectionObserver>(null);
  const lastElementRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!lastElementRef.current || isFetching) return;

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      });
    });

    observer.current.observe(lastElementRef.current);

    return (): void => {
      if (lastElementRef.current) {
        observer.current?.unobserve(lastElementRef.current);
        observer.current = null;
      }
    };
  }, [isFetching, fetchNextPage]);

  if (status === 'pending') return <p>Загружается...</p>;
  if (status === 'error') return <p>Ошибка: {error.message}</p>;

  return (
    <ul>
      {data.pages.map(
        (cats, catsIndex): JSX.Element => (
          <Fragment key={catsIndex}>
            {cats.map((cat, catIndex): JSX.Element => {
              const isLast = catIndex + 1 === cats.length;

              return (
                <li key={cat.id} ref={isLast ? lastElementRef : undefined}>
                  <CatCard
                    imageUrl={cat.url}
                    button={<ToggleCatLike catId={cat.id} hasLike={cat.isLiked} />}
                  />
                </li>
              );
            })}
          </Fragment>
        ),
      )}
    </ul>
  );
};
