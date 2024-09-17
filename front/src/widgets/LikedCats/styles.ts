import { styled } from '@linaria/react';

export const LikedCatsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  gap: 46px;

  margin: 0;
  padding: 0;
  list-style: none;
`;

export const LikedCatItem = styled.li``;
