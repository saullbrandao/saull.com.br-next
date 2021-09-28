import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--large);
  min-height: 100vh;
  width: fit-content;
  max-width: var(--container);
  margin: 0 auto;
`

export const Heading = styled.h1`
  text-align: center;
  font-size: 7rem;
`

export const Text = styled.span`
  text-align: center;
  font-size: var(--medium);
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: var(--medium);
  border-radius: var(--small);
  width: 100%;
  gap: var(--medium);
  flex-wrap: wrap;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${(props) => props.theme.colors.text_primary};
    font-size: var(--small);
    text-decoration: none;
  }
  a:hover {
    color: ${(props) => props.theme.colors.highlight};
  }

  svg {
    width: var(--large) !important;
    height: auto;
  }
`
