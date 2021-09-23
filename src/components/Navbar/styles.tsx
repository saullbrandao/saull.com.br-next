import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  background: var(--black_secondary);
  padding: var(--small);
  position: sticky;
  top: 0;
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 var(--small);
  max-width: var(--container);
  margin: 0 auto;

  a {
    text-decoration: none;
  }
`

export const NavLink = styled.a`
  font-weight: 700;
  font-size: 2rem;
  color: var(--highlight);

  &:hover {
    opacity: 0.7;
  }
`

export const Wrapper = styled.div`
  display: flex;
  gap: var(--small);

  a {
    color: var(--white_secondary);
  }

  a:hover {
    color: var(--highlight);
  }
`
