import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--medium);
  width: 100%;
  background-color: var(--black_secondary);
  padding: var(--medium);
  border-radius: var(--small);

  img {
    width: 100%;
  }

  ul {
    list-style: circle inside none;
    font-size: var(--small);
  }
`
export const Wrapper = styled.div`
  display: flex;
  gap: var(--small);
  justify-content: center;
  align-items: center;

  h2 {
    color: var(--white_primary);
    font-size: 2rem;
  }

  a {
    display: flex;
    justify-content: center;
    color: var(--white_primary);
  }

  svg {
    width: var(--medium);
    height: var(--medium);
  }
`
