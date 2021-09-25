import styled from 'styled-components'

type FooterSectionProps = {
  showIcons: boolean
}

export const FooterSection = styled.footer<FooterSectionProps>`
  display: flex;
  justify-content: ${(props) => (props.showIcons ? 'space-between' : 'center')};
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
    color: ${(props) => props.theme.colors.text_primary};
  }

  svg:hover {
    color: ${(props) => props.theme.colors.highlight};
  }
`
