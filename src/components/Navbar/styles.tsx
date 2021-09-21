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
    color: var(--white_secondary);
    text-decoration: none;
  }
`

export const NavLink = styled.a`
  font-weight: 700;
  font-size: 2rem;
`

export const Wrapper = styled.div`
  display: flex;
  gap: var(--small);
`
