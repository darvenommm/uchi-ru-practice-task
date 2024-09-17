import { ImageContainer, ButtonContainer, Image } from './styles';

import type { ReactNode } from 'react';

interface ICatCardProps {
  imageUrl: string;
  alt?: string;
  button?: ReactNode;
}

export const CatCard = ({ imageUrl, alt, button }: ICatCardProps): JSX.Element => {
  return (
    <ImageContainer>
      <Image src={imageUrl} alt={alt ?? 'Котик.'} />
      <ButtonContainer>{button}</ButtonContainer>
    </ImageContainer>
  );
};
