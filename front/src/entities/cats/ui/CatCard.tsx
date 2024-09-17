import type { ReactNode } from 'react';

interface ICatCardProps {
  imageUrl: string;
  alt?: string;
  button?: ReactNode;
}

export const CatCard = ({ imageUrl, alt, button }: ICatCardProps): JSX.Element => {
  return (
    <div>
      <img src={imageUrl} alt={alt ?? 'Котик.'} />
      <span>{button}</span>
    </div>
  );
};
