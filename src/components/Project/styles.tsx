import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--medium);
  width: 100%;
  background: ${(props) => props.theme.colors.bg_secondary};
  padding: var(--medium);
  border-radius: var(--small);
  color: ${(props) => props.theme.colors.text_primary};

  img {
    width: 100%;

    background: #abacae;
    background-image: linear-gradient(
      to right,
      #abacae 0%,
      #7e8087 20%,
      #abacae 40%,
      #abacae 100%
    );
    animation: placeholderShimmer 1s linear infinite forwards;

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
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

  h2 {
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.text_secondary};
  }

  a {
    font-size: 2rem;
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: ${(props) => props.theme.colors.text_secondary};
  }

  a:hover {
    color: ${(props) => props.theme.colors.highlight};
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`
