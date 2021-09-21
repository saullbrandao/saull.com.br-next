import Link from 'next/link'
import * as S from './styles'

type ProjectProps = {
  title: string
  image: string
  url: string
  repo: string
  description: string[]
}

const Project = ({ title, image, url, repo, description }: ProjectProps) => {
  return (
    <S.Container>
      <h2>{title}</h2>
      <img src={image} alt="demo" />
      <S.Wrapper>
        <Link href={repo}>Source</Link>
        <Link href={url}>Visit</Link>
      </S.Wrapper>
      <ul>
        {description.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </S.Container>
  )
}

export default Project
