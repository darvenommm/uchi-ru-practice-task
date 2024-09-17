import { Container } from '@/shared/ui/styles';
import { useLocation } from '@tanstack/react-router';

import { HeaderContainer, Links, LinkContainer, Link, ActiveLink, LinkText } from './styles';

interface IHeaderProps {
  className?: string;
}

interface ILink {
  text: string;
}

const links: Record<string, ILink> = {
  '/': { text: 'Все котики' },
  '/liked-cats': { text: 'Любимые котики' },
} as const;

export const Header = ({ className }: IHeaderProps): JSX.Element => {
  const location = useLocation();

  return (
    <div className={className}>
      <HeaderContainer>
        <Container>
          <Links>
            {Object.entries(links).map(([path, { text }]): JSX.Element => {
              const HeaderLink = location.pathname === path ? ActiveLink : Link;

              return (
                <LinkContainer key={path}>
                  <HeaderLink to={path}>
                    <LinkText>{text}</LinkText>
                  </HeaderLink>
                </LinkContainer>
              );
            })}
          </Links>
        </Container>
      </HeaderContainer>
    </div>
  );
};
