import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  background: var(--black_secondary);
  padding: 2rem;
  position: sticky;
  top: 0;
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 70rem;
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
