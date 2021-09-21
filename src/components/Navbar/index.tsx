import * as S from './styles'

const Navbar = () => {
  return (
    <S.Navbar>
      <S.Container>
        <a href="#">Saull Brandão</a>
        <S.Wrapper>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </S.Wrapper>
      </S.Container>
    </S.Navbar>
  )
}

export default Navbar
