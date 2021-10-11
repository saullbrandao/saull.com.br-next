import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'
import { useTheme } from 'hooks/useTheme'
import { useRouter } from 'next/router'
import * as S from './styles'

type ProjectProps = {
  title: string
  images: {
    light: string
    dark: string
  }
  url: string
  repo: string
  description: {
    ptBR: string[]
    enUS: string[]
  }
}

const Project = ({ title, images, url, repo, description }: ProjectProps) => {
  const { themeMode } = useTheme()
  const { locale } = useRouter()

  const language = locale === 'pt-BR' ? 'ptBR' : 'enUS'

  return (
    <S.Container>
      <S.Wrapper>
        <h2>{title}</h2>
        <a href={url} target="_blank" rel="noreferrer">
          <FaExternalLinkAlt />
        </a>
        <a
          href={repo}
          target="_blank"
          rel="noreferrer"
          aria-label={
            locale === 'pt-BR' ? 'Repositório no github' : 'Github Repository'
          }
        >
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
        {description[language].map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </S.Container>
  )
}

export default Project
