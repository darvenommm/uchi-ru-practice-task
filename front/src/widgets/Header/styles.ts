import { styled } from '@linaria/react';
import { Link as TanstackLink } from '@tanstack/react-router';

import { extraBgColor, extraTextColor } from '@/shared/ui/styles';

export const HeaderContainer = styled.header`
  color: ${extraTextColor};

  background-color: ${extraBgColor};
`;

export const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin: 0;
  padding: 0;
  list-style: none;
`;

export const LinkContainer = styled.li`
  display: flex;
`;

export const LinkText = styled.span`
  color: ${extraTextColor};
`;

export const Link = styled(TanstackLink)`
  text-decoration: none;

  padding: 23px 15px;

  ${LinkText} {
    opacity: 0.7;
  }

  &:hover,
  &:active {
    background-color: #1e88e5;

    ${LinkText} {
      opacity: 1;
    }
  }

  &:active {
    opacity: 0.5;
  }
`;

export const ActiveLink = styled(Link)`
  background-color: #1e88e5;

  ${LinkText} {
    opacity: 1;
  }
`;
