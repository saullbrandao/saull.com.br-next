import { FaGithub, FaGlobe } from 'react-icons/fa'
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
      <S.Wrapper>
        <h2>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h2>
        <a href={repo} target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </S.Wrapper>
      <img src={image} alt="demo" />
      <ul>
        {description.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </S.Container>
  )
}

export default Project
