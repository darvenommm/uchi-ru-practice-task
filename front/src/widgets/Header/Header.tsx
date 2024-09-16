import { Container } from '@/shared/ui/styles';
import { Link } from '@tanstack/react-router';

import { HeaderContainer } from './styles';

export const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <Container>
        <ul>
          <li>
            <Link to="/">Все котики</Link>
          </li>
          <li>
            <Link to="/liked-cats">Любимые котики</Link>
          </li>
        </ul>
      </Container>
    </HeaderContainer>
  );
};
