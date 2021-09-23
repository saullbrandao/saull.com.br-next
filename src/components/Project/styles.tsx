import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--medium);
  width: 100%;
  background: ${(props) => props.theme.colors.bg_secondary};
  padding: var(--medium);
  border-radius: var(--small);
  color: ${(props) => props.theme.colors.text_primary};

  img {
    width: 100%;
  }

  ul {
    list-style: circle inside none;
    font-size: var(--small);
    line-height: var(--medium);
  }
`
export const Wrapper = styled.div`
  display: flex;
  gap: var(--small);
  justify-content: center;
  align-items: center;

  a {
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.colors.text_secondary};
    text-decoration: none;
  }

  a:hover {
    color: ${(props) => props.theme.colors.highlight};
  }

  svg {
    width: var(--medium);
    height: var(--medium);
  }
`
