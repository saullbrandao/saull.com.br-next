import { FaGithub, FaGlobe } from 'react-icons/fa'
import Image from 'next/image'
import * as S from './styles'

type ProjectProps = {
  title: string
  images: {
    light: string
    dark: string
  }
  darkImage: string
  url: string
  repo: string
  description: string[]
}

const Project = ({ title, images, url, repo, description }: ProjectProps) => {
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
      <Image src={images.dark} alt="demo" width={1920} height={930} />
      <ul>
        {description.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </S.Container>
  )
}

export default Project
