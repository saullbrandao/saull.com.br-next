import * as S from './styles'

const Navbar = () => {
  return (
    <S.Navbar>
      <S.Container>
        <S.NavLink href="#">Saull Brandão</S.NavLink>
        <S.Wrapper>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </S.Wrapper>
      </S.Container>
    </S.Navbar>
  )
}

export default Navbar
