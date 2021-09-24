import ThemeToggler from 'components/ThemeToggler'
import Link from 'next/link'
import * as S from './styles'

const Navbar = () => {
  return (
    <S.Navbar>
      <S.Container>
        <Link href="/" passHref>
          <S.NavLink>Saull Brandão</S.NavLink>
        </Link>
        <S.Wrapper>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <ThemeToggler />
        </S.Wrapper>
      </S.Container>
    </S.Navbar>
  )
}

export default Navbar
