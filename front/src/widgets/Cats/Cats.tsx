import { Fragment } from 'react/jsx-runtime';
import { useInfiniteQuery } from '@tanstack/react-query';

import { CATS_QUERY_KEY, getCats } from '@/entities/cats';
import { useEffect, useRef } from 'react';

export const Cats = (): JSX.Element => {
  const { data, error, fetchNextPage, status } = useInfiniteQuery({
    queryKey: [CATS_QUERY_KEY],
    queryFn: ({ pageParam: page }: { pageParam: number }) => getCats({ page }),
    initialPageParam: 0,
    getNextPageParam: (_, allPages): number => allPages.length + 1,
  });

  const observer = useRef<null | IntersectionObserver>(null);
  const lastElementRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!data || !lastElementRef.current) return;

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      });
    });

    observer.current.observe(lastElementRef.current);
  }, [data, fetchNextPage]);

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
                  {cat.url}
                </li>
              );
            })}
          </Fragment>
        ),
      )}
    </ul>
  );
};
