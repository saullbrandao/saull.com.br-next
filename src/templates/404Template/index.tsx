import Link from 'next/link'
import * as S from './styles'

const Custom404Template = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <h1>404</h1>
        <h2>This page could not be found.</h2>
      </S.Wrapper>
      <Link href="/">Home</Link>
    </S.Container>
  )
}

export default Custom404Template
