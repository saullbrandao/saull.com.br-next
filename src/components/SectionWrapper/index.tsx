import { ReactNode } from 'react'
import * as S from './styles'

type SectionWrapperProps = {
  children: ReactNode
  id: string
}

const SectionWrapper = ({ children, id }: SectionWrapperProps) => {
  return <S.Wrapper id={id}>{children}</S.Wrapper>
}

export default SectionWrapper
