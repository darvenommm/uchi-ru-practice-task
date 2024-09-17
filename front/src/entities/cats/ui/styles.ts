import { styled } from '@linaria/react';

export const ImageContainer = styled.div`
  position: relative;
`;

export const ButtonContainer = styled.span`
  position: absolute;
  right: 28px;
  bottom: 28px;

  width: 40px;
  height: 40px;
`;

export const Image = styled.img`
  object-fit: cover;

  width: 100%;
  height: 225px;
`;
