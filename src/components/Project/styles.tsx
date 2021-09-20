import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 60rem;

  img {
    width: 100%;
  }

  ul {
    list-style: circle inside none;
    font-size: var(--small);
  }
`
