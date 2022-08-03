import { StyledNavLink } from './Navigation.styled';

export default function Navigation() {
  return (
    <nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="movies">Movies</StyledNavLink>
    </nav>
  );
}
