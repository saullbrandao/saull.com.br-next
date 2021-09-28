import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './styles'

const Custom404Template = () => {
  const { locale } = useRouter()

  const errorMessage =
    locale === 'pt-BR'
      ? 'Página não encontrada.'
      : 'This page could not be found.'
  const homeLinkText = locale === 'pt-BR' ? 'Página Inicial' : 'Home'

  return (
    <S.Container>
      <S.Wrapper>
        <h1>404</h1>
        <h2>{errorMessage}</h2>
      </S.Wrapper>
      <Link href="/">{homeLinkText}</Link>
    </S.Container>
  )
}

export default Custom404Template
