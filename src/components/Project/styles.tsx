import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--medium);
  width: 100%;
  background-color: var(--black_secondary);
  padding: var(--medium);
  border-radius: var(--small);
  color: var(--white_primary);

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
    color: var(--white_primary);
    text-decoration: none;
  }

  a:hover {
    color: var(--highlight);
  }

  svg {
    width: var(--medium);
    height: var(--medium);
  }
`
