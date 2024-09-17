import { styled } from '@linaria/react';

import { mainBgColor, mainTextColor } from '@/shared/ui/styles';

export const GlobalsStyles = styled.div`
  :global() {
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    body {
      color: ${mainTextColor};
      font-size: 150%;

      background-color: ${mainBgColor};

      margin: 0;
    }

    a {
      font-family: inherit;
      font-size: inherit;
      color: inherit;
    }

    button {
      font-family: inherit;
      font-size: inherit;

      cursor: pointer;

      &[disabled] {
        cursor: not-allowed;
      }
    }

    label {
      cursor: pointer;
    }
  }
`;
