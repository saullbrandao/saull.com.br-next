import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--small);
  width: 100%;

  h2 {
    color: var(--white_primary);
    font-size: 2rem;
    margin: 0 auto;
  }

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
`
