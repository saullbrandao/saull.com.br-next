import styled from 'styled-components'

export const FooterSection = styled.footer`
  display: flex;
  justify-content: space-between;
  gap: var(--small);
  margin: 0 auto;
  width: 100%;
  max-width: var(--container);
  padding: var(--small);
  font-size: var(--small);
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;
  gap: var(--medium);

  svg {
    width: 2rem;
    height: 2rem;
  }
`
