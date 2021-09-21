import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--small);
  align-items: center;
  width: 100%;

  img {
    width: 100%;
  }

  ul {
    list-style: circle inside none;
    font-size: var(--small);
  }
`
