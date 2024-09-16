import { styled } from '@linaria/react';

import {
  desktopBreakpoint,
  desktopPadding,
  tabletBreakpoint,
  tabletPadding,
  mobilePadding,
} from '../variables/width';

export const Container = styled.div`
  max-width: ${desktopBreakpoint}px;
  padding-left: ${desktopPadding}px;
  padding-right: ${desktopPadding}px;
  margin: 0 auto;

  @media (max-width: ${desktopBreakpoint - 1}px) {
    max-width: none;
    padding-left: ${tabletPadding}px;
    padding-right: ${tabletPadding}px;
  }

  @media (max-width: ${tabletBreakpoint - 1}px) {
    max-width: none;
    padding-left: ${mobilePadding}px;
    padding-right: ${mobilePadding}px;
  }
`;
