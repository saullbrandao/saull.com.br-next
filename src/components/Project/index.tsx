import { FaGithub } from 'react-icons/fa'
import Image from 'next/image'
import { useTheme } from 'hooks/useTheme'
import * as S from './styles'

type ProjectProps = {
  title: string
  images: {
    light: string
    dark: string
  }
  url: string
  repo: string
  description: string[]
}

const Project = ({ title, images, url, repo, description }: ProjectProps) => {
  const { themeMode } = useTheme()

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
      <Image
        src={themeMode === 'light' ? images.light : images.dark}
        alt="demo"
        width={1920}
        height={930}
      />
      <ul>
        {description.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </S.Container>
  )
}

export default Project
