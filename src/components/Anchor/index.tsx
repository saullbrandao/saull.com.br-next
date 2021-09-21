import { ReactNode } from 'react'
import * as S from './styles'

type AnchorProps = {
  children: ReactNode
  id: string
}

const Anchor = ({ children, id }: AnchorProps) => {
  return <S.Anchor id={id}>{children}</S.Anchor>
}

export default Anchor
