import styled from 'styled-components'

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--medium);
  text-align: justify;
  margin: 0 auto;
  max-width: var(--container);
  padding: var(--small);

  svg {
    width: var(--medium);
    height: var(--medium);
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--medium);

  a {
    display: flex;
    gap: var(--small);
    color: var(--white_secondary);
    text-decoration: none;
  }
`
