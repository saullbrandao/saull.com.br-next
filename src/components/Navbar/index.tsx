import LanguageToggler from 'components/LanguageToggler'
import ThemeToggler from 'components/ThemeToggler'
import Link from 'next/link'
import * as S from './styles'

const Navbar = () => {
  return (
    <S.Navbar>
      <S.Container>
        <Link href="/" passHref>
          <a>Saull Brandão</a>
        </Link>
        <S.Wrapper>
          <ThemeToggler />
          <LanguageToggler />
        </S.Wrapper>
      </S.Container>
    </S.Navbar>
  )
}

export default Navbar
