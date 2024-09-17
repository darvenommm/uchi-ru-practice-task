import { styled } from '@linaria/react';

import { mainBgColor, mainTextColor } from '@/shared/ui/styles';

export const GlobalsStyles = styled.div`
  :global() {
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html {
      overflow-y: scroll;
      scroll-behavior: smooth;
    }

    body {
      color: ${mainTextColor};
      font-size: 150%;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-style: normal;

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

    input {
      font-family: inherit;
      font-size: inherit;
    }

    label {
      cursor: pointer;
    }
  }
`;
