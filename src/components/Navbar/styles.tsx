import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.colors.bg_secondary};
  padding: var(--small);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
  max-width: var(--container);
  margin: 0 auto;

  a {
    text-decoration: none;
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.text_secondary};
  }

  a:hover {
    color: ${(props) => props.theme.colors.highlight};
  }
`
