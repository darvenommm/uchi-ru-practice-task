import { styled } from '@linaria/react';

const CARD_SCALE = 1.15;

export const ImageContainer = styled.div`
  position: relative;

  transition: transform 200ms;
  box-shadow: 0 4px 10px #000000;

  &:hover {
    transform: scale(${CARD_SCALE});
  }
`;

export const ButtonContainer = styled.span`
  position: absolute;
  right: 28px;
  bottom: 28px;

  width: 40px;
  height: 40px;
`;

export const Image = styled.img`
  display: block;

  object-fit: cover;

  width: 100%;
  height: 225px;
`;
