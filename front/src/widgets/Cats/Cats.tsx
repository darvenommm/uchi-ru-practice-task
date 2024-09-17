import { Fragment } from 'react/jsx-runtime';
import { useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { ToggleCatLike } from '@/features/ToggleCatLike';
import { CatCard, CATS_QUERY_KEY, getCats } from '@/entities/cats';
import { Center } from '@/shared/ui/components/Center';

import { CatsList, CatItem } from './styles';

export const Cats = (): JSX.Element => {
  const { data, error, fetchNextPage, status, isFetching } = useInfiniteQuery({
    queryKey: [CATS_QUERY_KEY],
    queryFn: ({ pageParam: page }: { pageParam: number }) => getCats({ page }),
    initialPageParam: 0,
    getNextPageParam: (_, allPages): number => allPages.length,
    staleTime: Infinity,
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

  if (status === 'pending') return <Center>Загружается...</Center>;
  if (status === 'error') return <Center>Ошибка: {error.message}</Center>;

  return (
    <>
      <CatsList>
        {data.pages.map(
          (cats, catsIndex): JSX.Element => (
            <Fragment key={catsIndex}>
              {cats.map((cat, catIndex): JSX.Element => {
                const isLast = catIndex + 1 === cats.length;

                return (
                  <CatItem key={cat.id} ref={isLast ? lastElementRef : undefined}>
                    <CatCard
                      imageUrl={cat.url}
                      button={<ToggleCatLike catId={cat.id} hasLike={cat.isLiked} />}
                    />
                  </CatItem>
                );
              })}
            </Fragment>
          ),
        )}
      </CatsList>
      {isFetching && <Center>... загружаем еще котиков ...</Center>}
    </>
  );
};
