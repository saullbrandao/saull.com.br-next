import Footer from 'components/Footer'
import ThemeToggler from 'components/ThemeToggler'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FaFolderOpen, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import * as S from './styles'

const HomeTemplate = () => {
  const { locale } = useRouter()

  const text =
    locale === 'pt-BR' ? 'Desenvolvedor Front End' : 'Front End Developer'

  const togglerTitle = locale === 'pt-BR' ? 'Tema' : 'Theme'

  return (
    <>
      <S.Container>
        <S.Heading>Saull Brandão</S.Heading>
        <S.Text>{text}</S.Text>
        <S.Wrapper>
          <Link href="/portfolio">
            <a>
              Portfolio
              <FaFolderOpen />
            </a>
          </Link>
          <a
            href="https://github.com/saullbrandao"
            target="_blank"
            rel="noreferrer"
          >
            Github
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/saullbrandao/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
            <FaLinkedin />
          </a>

          <a
            href="https://twitter.com/saullbrandao"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
            <FaTwitter />
          </a>

          <ThemeToggler title={togglerTitle} />
        </S.Wrapper>
        <Footer showIcons={false} />
      </S.Container>
    </>
  )
}

export default HomeTemplate
