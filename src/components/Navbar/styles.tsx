import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  background: var(--black_secondary);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  width: 100%;

  a {
    color: var(--white_secondary);
    text-decoration: none;
  }
`
export const Wrapper = styled.div`
  display: flex;
  gap: var(--small);
`
