import { Link } from '@tanstack/react-router';

export const Header = (): JSX.Element => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Все котики</Link>
        </li>
        <li>
          <Link to="/liked-cats">Любимые котики</Link>
        </li>
      </ul>
    </header>
  );
};
