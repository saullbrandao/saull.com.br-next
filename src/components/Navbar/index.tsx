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
        <ThemeToggler />
      </S.Container>
    </S.Navbar>
  )
}

export default Navbar
