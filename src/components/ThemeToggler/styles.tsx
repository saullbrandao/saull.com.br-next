import styled from 'styled-components'

export const Toggle = styled.a`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  border-radius: 100%;
  border: none;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    width: 100%;
    height: auto;
  }
`
