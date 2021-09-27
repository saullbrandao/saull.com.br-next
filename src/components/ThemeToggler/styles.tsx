import styled from 'styled-components'

export const Toggle = styled.button`
  min-width: 2rem;
  height: auto;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: var(--small);
  text-decoration: none;
  line-height: var(--medium);
  border: 0;
  padding: 0;
  background: inherit;
  color: ${(props) => props.theme.colors.text_primary};

  &:hover {
    color: ${(props) => props.theme.colors.highlight};
  }

  svg {
    width: 100%;
    height: auto;
  }
`
