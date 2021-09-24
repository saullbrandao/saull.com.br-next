import Link from 'next/link'
import * as S from './styles'

// TODO: homepage
const HomeTemplate = () => {
  return (
    <S.Wrapper>
      <h1>Home</h1>
      <Link href="/portfolio">Portfolio</Link>
    </S.Wrapper>
  )
}

export default HomeTemplate
